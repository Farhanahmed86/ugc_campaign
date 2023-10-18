<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Countries;

use App\Models\About;


class CountriesController extends Controller
{

    public function search() {
        $results = Countries::orderBy('title')
        ->when(request('q'), function($query) {
            $query->where('title', 'like', '%'.request('q').'%');

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
}
