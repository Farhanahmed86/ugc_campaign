<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;


class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {
        // dd($request);
        // dd(Auth::attempt($request->only('email', 'password')));
        try {
            if (Auth::attempt($request->only('email', 'password'))) {
                
                /** @var User $user */
                $user = Auth::user();
                // dd($user);
                $token = $user->createToken('API Token')->accessToken;
                // $token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTViYjYzMDlmMDBhMjNjZjA5NzNiN2U5MTExYTM5YmYwNDQzMTAzNjQ3MTlkZDFlMmUxNThkNjIyZDliNzJmNDc0NjY3ZjM0MDJhMDQxYWYiLCJpYXQiOjE2OTgwNzE5MjcsIm5iZiI6MTY5ODA3MTkyNywiZXhwIjoxNzI5Njk0MzI3LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.A2Vjk0gelJdRfPYGXqyk1GfLnyIFobif1Z0cX6MFs1jKviUMovb4CRoG0xPTcccmVmJEOYDisXopFBxTVyWGVdwA-o1ybisgQMl6udot0ExaiqmYKiSeXF9cWZvvgM-GeKm1gOuMvfQgNm6zCUNNvqhwkNSS7ltwKCIVw7B3HS0NWxD1otgZJjMa-cPI_IFdwwCVYpp4kkDYrCgU6dNaqT9FXOsESbbSQMZZmJsKRYQF6IChuIusl05qcipkLS1dGx4ayHQc27CUIUxtXNOwac-Q4Gr-yqPAxP2A0wQa8atPB2ZIqUIyWvhkEl4CPvr6hqrsgqj5Om9gHRmONEHVKfHpK59MbUJGANfZkvzo-eWsXa0K-tNUMpI6_8YgpynN1jfmGez18HE7e18mR0e3mWNQQ4lP68tx4-MB10VinbO8nXXPa4mS2He90fK1hwW9x4EeuUP-IIkHugLI6qGmlCoxzcCF3Z_SFj7G9M_2qi8B9KKBRN35J7j-8zOCn3f_0J67n0UrBhyCNqo2wrChZmVmZqJ0jYP0xhxZp-iDjnn3UJTHpEpiq7lNMHfqWQDO_v4XmQKUX41zBjbG-I6EhivilxPrDinoEFSO1T7t6c10PywJykwIX7apWxI7hqi2gq99HpQ27zsVyBOCzsZBGSfkX-yJ4baSEdYXzSfGzhE";
                // $token = "abcd";
                if (config('auth.must_verify_email') && !$user->hasVerifiedEmail()) {
                    return response([
                        'message' => 'Email must be verified.'
                    ], 401);
                }

                return response([
                    'message' => 'success',
                    'token' => $token,
                    'user' => $user
                ]);
            }
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' //$e->getMessage()
            ], 400);
        }

        return response([
            'message' => 'Invalid Email or password.'
        ], 401);
    }

    public function user()
    {
        return response()->json(Auth::user());
    }


    public function users_data(){

        $users = User::where('id' , Auth::user()->id)->first();
        return response()->json(['data' => $users]);

    }
}
