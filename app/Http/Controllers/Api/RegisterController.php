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
        // dd($request->all());
        try {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'company' => $request->input('company'),
                'location' => $request->input('location'),
                'website' => $request->input('website'),
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
