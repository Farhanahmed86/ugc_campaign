<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Inventory;
use App\Models\Sales;
use App\Models\Transaction;
use App\Models\Vendor;
use Illuminate\Support\Facades\DB;

class DashboardControler extends Controller
{
    public function index()
    {
       
        $cards =[ 
           
            
             DB::table('sales')->sum('sale'),
           
            
             DB::table('transactions')->sum('total_payment'),
            
            
                
             Inventory::count(),
           
           
                
                 Customer::count(),
            
            
                Vendor::count(),
               $p= DB::table('sale_items')->sum('total_profit'),
               $t= DB::table('sales')->sum('discount'),
                $profit = $p - $t,
            
        ];
        

        return response()
        ->json(['results' => $cards]);

        
    }
}
