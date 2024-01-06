<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Countries;
use App\Models\City;
use App\Models\State;



use App\Models\About;


class CountriesController extends Controller
{

    public function search() {
        $results = Countries::orderBy('name')
        ->when(request('q'), function($query) {
            $query->where('name', 'like', '%'.request('q').'%');

        })
        ->limit(6)
        ->get();

    return response()
        ->json(['results' => $results]);
    }


    public function about() {
        $results = About::orderBy('title')
        ->when(request('q'), function($query) {
            $query->where('title', 'like', '%'.request('q').'%');

        })
        ->limit(6)
        ->get();

    return response()
        ->json(['results' => $results]);
    }


    
    public function city() {
        // dd(request('id'));
        $results = City::orderBy('name')->where('country_id' , request('id'))
        ->when(request('q'), function($query) {
            $query->where('name', 'like', '%'.request('q').'%')
            ;

        })
        ->limit(6)
        ->get();

    return response()
        ->json(['results' => $results]);
    }


    public function states() {
        // dd(request('id'));
        $results = State::orderBy('name')->where('country_id' , request('id'))
        ->when(request('q'), function($query) {
            $query->where('name', 'like', '%'.request('q').'%')
            ;

        })
        ->limit(6)
        ->get();

    return response()
        ->json(['results' => $results]);
    }


    
}
