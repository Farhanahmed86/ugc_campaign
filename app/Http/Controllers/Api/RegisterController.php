<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;


class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // dd($request->all())
        try {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                // 'company' => $request->input('company'),
                // 'location' => $request->input('location'),
                // 'website' => $request->input('website'),
                'password' => Hash::make($request->input('password')),





            ]);

            if (config('auth.must_verify_email')) {
                event(new Registered($user));
            }

            return response()->json($user);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }
    }


    public function registered(Request $request){
        // dd($request->all());
        $user = User::where('id' , $request->id)->first();
        if($request->auth_type == 'brand'){
            $user->company = $request->company;
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->location = $request->location;
            $user->website = $request->website;
            $user->phone = $request->phone;
            $user->auth_type = $request->auth_type;
            $user->save();
        }
        else{
            $filename = $request->file('image')->getClientOriginalName();
            // $imagePaths =  $request->file('image')->move(public_path('influencer_images'), $filename);
            $imagePath =  $request->file('image')->move(public_path('influencer'), $filename);

            // dd('sbca');
            // dd($request->countries['name']);
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->phone = $request->phone;
            $user->auth_type = $request->auth_type;
            $user->pay_email = $request->pay_email;
            $user->gender = $request->gender;
            $user->country = $request->countries;
            $user->city = $request->city;
            $user->state = $request->states;
            $user->postal_code = $request->postal;
            $user->address = $request->address;
            $user->date_of_birth = $request->age;
            $user->influencer_image = $filename;


            $user->save();






            // dd('abcd');
        }
     

       
        return response()->json(['saved' => true]);
    }

    public function company(Request $request){
        // dd($request->id);
        $user = User::where('id' , $request->id)->first();
        $user->company_type = $request->company;
       




        $user->save();
        return response()->json(['saved' => true]);
    }


    public function company_type(Request $request){
        // dd($request->id);
        $user = User::where('id' , $request->id)->first();
        $user->company_data = $request->company;
        $user->save();
        return response()->json(['saved' => true]);
    }


    public function category(Request $request){

        $user = User::where('id' , $request->id)->first();
        $user->company_category = $request->company;
        $user->save();
        return response()->json(['saved' => true]);
    }



    public function recommandation(Request $request){

        $user = User::where('id' , $request->id)->first();
        $user->company_recommandation = $request->company;
        $user->save();
        return response()->json(['saved' => true]);
    }

}
