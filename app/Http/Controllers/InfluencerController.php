<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Influencer;
use App\Models\Ugcproduct;
use App\Models\Ugccampaign;
use App\Models\Favoritelist;
use App\Models\Influencerdetail;
use App\Models\Influencercategory;
use App\Models\Influencerprofile;
use App\Models\User;

use Illuminate\Support\Facades\DB;

class InfluencerController extends Controller
{
    public function index(){
      
        // dd(request()->all());   
        // dd(request('secondfollowers'));
        
        $data= Influencer::when(request('plateform'), function ($q) {
  
            $q->Where('plateform', 'like', request('plateform') );
              
               
        })

        ->when(request('agerange'), function ($q) {
            // Extract the minimum and maximum values from the requested range
            list($minAge, $maxAge) = explode('-', request('agerange'));
        
            // Check for overlap in the age range
            $q->where(function ($query) use ($minAge, $maxAge) {
                $query->whereRaw("SUBSTRING_INDEX(age_of_audience, '-', 1) >= $minAge")
                      ->whereRaw("SUBSTRING_INDEX(age_of_audience, '-', -1) <= $maxAge");
            });
        })
        ->when(request('firstfollowers') && request('secondfollowers'), function ($q) {
            $firstFollowers = (int) request('firstfollowers');
            $secondFollowers = (int) request('secondfollowers');
            $q->whereBetween('followers', [$firstFollowers, $secondFollowers]);
        //    dd(request('firstfollowers'));
            // $q->whereBetween('followers', [request('firstfollowers'), request('secondfollowers')]);
        })
       
        
        ->when(request('bios'), function ($q) {
                
            $q->Where('bio', 'like', '%'.request('bios').'%' )
            ->orWhere('username', 'like', '%'.request('bios').'%')
            ->orWhere('name', 'like', '%'.request('bios').'%');
              
               
        })

        ->when(request('countries_name'), function ($q) {
                
            $q->Where('influencer_location', 'like', '%'.request('countries_name').'%' );
              
               
        })

        ->when(request('audience_countries_name'), function ($q) {
                
            $q->Where('country_audience', 'like', '%'.request('audience_countries_name').'%' );
              
               
        })
        ->when(request('tags'), function ($q) {
                
            $q->Where('influencer_gender', request('tags') );
              
               
        })
        ->when(request('real'), function ($q) {
            // Extract the percentage value from the request
            $percentage = rtrim(request('real'), '%');
        
            // Compare the real_account column with the percentage value
            $q->whereRaw('CAST(real_account AS DECIMAL(5,2)) > ?', [$percentage]);
        })
        ->when(request('engagement'), function ($q) {
            // Extract the percentage value from the request
            $percentage = rtrim(request('real'), '%');
        
            // Compare the real_account column with the percentage value
            $q->whereRaw('CAST(avg_engagement AS DECIMAL(5,2)) > ?', [$percentage]);
        })
        ->when(request('hashtags'), function($query) {
            $query->where('bio', 'like', '%'.request('hash').'%')
                ->orWhere('influencer_location', 'like', '%'.request('hash').'%')
                ->orWhere('username', 'like', '%'.request('hash').'%')

                ->orWhere('influencer_gender', 'like', '%'.request('hash').'%')
                ->orWhere('country_audience', 'like', '%'.request('hash').'%')
                ->orWhere('city_of_audience', 'like', '%'.request('hash').'%');


        })
       
        ->when(request('decs'), function($query) {
           
            $query->where('influencer_location', 'like', '%'.request('decs').'%')
                ->orWhere('bio', 'like', '%'.request('decs').'%')
                ->orWhere('influencer_gender', 'like', '%'.request('decs').'%')
                ->orWhere('city_of_audience', 'like', '%'.request('decs').'%')
                ->orWhere('number_of_post', 'like', '%'.request('decs').'%')
                ->orWhere('followers','>=' ,request('decs'))


                ->orWhere('age_of_audience', 'like', '%'.request('decs').'%');


        }) 
        // ->when(request('decss'), function($query) {
        //     //    dd(request('decss'));
        //         $query->where('influencer_gender', request('decss'));
            
    
        //     })
            

        
        
        
        ->paginate(30);
    // }

        


        $fav = Favoritelist::where('user_id' , auth()->user()->id)->get();
        // dd($fav);
       $ids =[];
       foreach($fav as $datas){
        $ids[] = $datas['influencer_id'];
       }
    //    dd($ids);
        $aaaa = Influencer::whereIn('id', $ids)->get();

        // dd(count($aaaa));
        return response()->json(['data' => $data , 'fav' => count($aaaa) > 0 ? $aaaa : null] );
    }



    private function convertFollowersToNumeric($follower)
{
    // dd($follower);
    $multiplier = 1;
    foreach($follower  as $followers){
        if (str_ends_with($followers, 'k')) {
            // dd('ac');
            $multiplier = 1000;
            $followers = rtrim($followers, 'k');
        } elseif (str_ends_with($followers, 'M')) {
            $multiplier = 1000000;
            $followers = rtrim($followers, 'M');
        }
    
    }
    return (float) $followers * $multiplier;
  
}



    public function influencer(){

        $data = Influencer::where('id' , request('id'))->first();
        return response()->json(['data' => $data]);
    }


    public function email(){
        // dd(request()->all());

        $data = Influencer::where('id' , request('id'))->first();
        $brand = Ugcproduct::where('id' , request('brand'))->first();
        $brand->influencer_id = request('id');
        $brand->save();
        return response()->json(['data' => 'Email Post']);
    }



    public function get_influencer(){

        $data = Ugcproduct::where('id' , request('id'))->first();

        $ugc = Ugccampaign::where('id' , $data->campaign_id)->first();
        // dd($ugc->suggest_influencer);
        $abc = $ugc->suggest_influencer;

        $abcArray = explode(',', $abc);

        $influencer = Influencer::whereIn('id' , $abcArray)->paginate(15);

        return response()->json(['data' => $influencer]);
    }



    public function favorite(){
        // dd(request('id'));
        $data = new Favoritelist;
        $data->influencer_id = request('id');
        $data->user_id = auth()->user()->id;
        $data->save();
        return response()->json(['saved' =>true]);
    }


    public function details(Request $request){


        // dd($request->all());

        $influencer = new Influencerdetail;
        $influencer->instagram_profile = $request->instagram;
        $influencer->tiktok_profile = $request->tiktok;
        $influencer->youtube_channel = $request->youtube;
        $influencer->website = $request->website;
        $influencer->influencer_id = $request->id;
        $influencer->save();

      
         foreach( $request->selectedLabelsss as $items ){
            // dd($items);
            $category = new Influencercategory;
            $category->labels = $items;
            $category->influencer_id = $influencer->id;
            $category->save();

         }
        

        return response()->json(['saved' =>true]);




    }


    public function profile(Request $request){
        // dd(auth()->user()->id);
        // dd($request->id);
        $firstIteration = true;
        foreach($request->all() as $index => $images){
            $abc = new Influencerprofile;
            // dd($images);
            if ($firstIteration) {
                $firstIteration = false;
                continue;
            }

            $filename = $images->getClientOriginalName();
            // dd($filename);
            $imagePath =  $images->move(public_path('influencers_profile'), $filename);

            $abc->image_url = $filename;
            $abc->influencer_id = $request->id;
            $abc->save();
            

        }

        $abc = User::where('id' , $request->id)->first();
        // dd($abc);
        $ddd = new Influencer;
        $ddd->name = $abc->first_name;
        $ddd->username = $abc->first_name;
        $ddd->username = $abc->first_name;
        $ddd->email = $abc->email;
        $ddd->email = $abc->email;
        $ddd->phone_number = $abc->phone;
        $ddd->influencer_gender = $abc->gender;
        $ddd->influencer_location = $abc->country;
        $ddd->influncer_profile_image = $abc->influencer_image;
        $ddd->save();
        $abc->influencer_id = $ddd->id;
        $abc->save();








        
        return response()->json(['saved' =>true]);
        // $abc->influencer_id = $request->id;
    }


    public function invited(){
        $data = Ugcproduct::where('influencer_id' , '!=' , null)->get();

        return response()->json(['data' => $data]);
    }

}
