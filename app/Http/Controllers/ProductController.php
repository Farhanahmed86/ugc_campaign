<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function search()
    {
        $results = Product::orderBy('item_code')
            ->when(request('q'), function($query) {
                $query->where('item_code', 'like', '%'.request('q').'%')
                ->orWhere('description', 'like', '%'.request('q').'%')
                ->orWhere('unit_price', 'like', '%'.request('q').'%');
            })
            ->limit(6)
            ->get();

        return response()
            ->json(['results' => $results]);
    }
    public function index()
    {
        $results = Product::orderBy('created_at', 'desc')
            ->paginate(15);

        return response()
            ->json(['results' => $results]);
    }
}
