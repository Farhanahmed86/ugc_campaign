<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Ugccampaign;
use App\Models\Ugcproduct;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class AdminController extends Controller
{
     public function get_user(){
        // $data = User::get()->groupBy('company_data');

        $data = DB::select(" SELECT company_data, COUNT(*) as user_count
        FROM users
        GROUP BY company_data; ");


        $recom = DB::select(" SELECT company_recommandation, COUNT(*) as recommand
        FROM users
        GROUP BY company_recommandation; ");

        $type = DB::select("SELECT company_type, COUNT(*) as type
        FROM users
        GROUP BY company_type;");


            $category = DB::select("SELECT company_category, COUNT(*) as category
            FROM users
            GROUP BY company_category");

       

        return response()->json(['data' =>$data , 'rec' => $recom , 'type' => $type , 'category' => $category]);

        
     }


     public function camp(){
        $data = Ugccampaign::with('user')->get();
        return response()->json(['camp' =>$data ]);
     }


     public function users(){
       
      $data = User::whereNotIn('auth_type', ['admin'])->get();


        // $data = User::where(function ($query) {
        //     $query->where('auth_type', '!=', 'admin')->orWhereNull('auth_type');
        // })->get();
       
        return response()->json(['user' =>$data ]);
     }



     public function campaign(){

      $currentDate = Carbon::now();

   
     
    $previousMonthDate = $currentDate->subMonths(1);
    $formattedDate = $previousMonthDate->toDateString();
   //  dd($formattedDate);
       
        $data = Ugccampaign::where('campaign' , 'Influencer Campaign')->get()->count();
      //   $data = Ugcproduct::get()->count();

        $datas = Ugccampaign::where('campaign' , 'UGC Campaign')->get()->count();
        $data2 = Ugcproduct::get()->count();
        $data3 = Ugccampaign::where('gender' , 'Women')->get()->count();
        $data4 = Ugccampaign::pluck('hire_budget')->sum();
      //   $data5 = Ugccampaign::where('gender' , 'Other')->get()->count();
        $data5= User::where('created_at' ,'>', $formattedDate)->get()->count();






        
    
       
        return response()->json(['influencer_campaign' =>$data , 'ugc_campaign' =>$datas , 'community_management' => $data2
    ,'gender1' =>$data3
    ,'gender2'=>$data4,
    'gender3'=>$data5   ]);
     }



     public function details(){
        // dd(request()->id);

        $data = Ugcproduct::with('ugc.user')->where('campaign_id' ,request()->id)->get();

        return response()->json(['product' => $data]);
     }


     public function userdetails(){
      //   dd('acbd');

        $data = User::with('campaign')->where('id' ,request()->id)->first();
        $campaign = Ugccampaign::with('objective.market')->where('auth_id' ,request()->id)->get();

        return response()->json(['product' => $data , 'campaign' => $campaign]);
     }
}
