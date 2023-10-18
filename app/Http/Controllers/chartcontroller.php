<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chart;
use App\Models\Chart_of_account;

use App\Models\Accounts;
use App\Models\Accounttype;

use App\Models\Assetstype;
use App\Models\liablitiestype;




class chartcontroller extends Controller
{
    public function search() {
        $results = Chart::orderBy('title')
        ->when(request('q'), function($query) {
            $query->where('title', 'like', '%'.request('q').'%');
            
        })
        ->limit(6)
        ->get();

    return response()
        ->json(['results' => $results]);
} 

public function filter() {
    $results = Assetstype::orderBy('title')
    ->when(request('q'), function($query) {
        $query->where('title', 'like', '%'.request('q').'%');
        
    })
    ->limit(6)
    ->get();

return response()
    ->json(['results' => $results]);
} 

public function typeahead() {
    $results = liablitiestype::orderBy('title')
    ->when(request('q'), function($query) {
        $query->where('title', 'like', '%'.request('q').'%');
        
    })
    ->limit(6)
    ->get();

return response()
    ->json(['results' => $results]);
} 


public function dropdown()
 {
    $results = Chart_of_account::orderBy('account_name')
    ->when(request('q'), function($query) {
        $query->where('account_name', 'like', '%'.request('q').'%');
        
    })
    ->limit(6)
    ->get();

return response()
    ->json(['results' => $results]);
} 

public function abcd()
 {
    $results = Accounts::orderBy('account_name')
    ->when(request('q'), function($query) {
        $query->where('account_name', 'like', '%'.request('q').'%');
        
    })
    ->limit(6)
    ->get();

return response()
    ->json(['results' => $results]);
} 

public function accounts() {
    $results = Accounttype::orderBy('title')
    ->when(request('q'), function($query) {
        $query->where('title', 'like', '%'.request('q').'%');
        
    })
    ->limit(6)
    ->get();

return response()
    ->json(['results' => $results]);
} 
 
    }

