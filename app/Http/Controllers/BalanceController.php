<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Voucher;
use App\Models\Voucher_item;
use App\Models\Voucher_type;
use App\Models\Chart_of_account;
use Illuminate\Support\Facades\DB;




class BalanceController extends Controller
{
   


    public function index()
    
    {
    //    $result = DB::select("SELECT credit_account_id, SUM(total_debit) as total_debit
    //    FROM vouchers
    //    WHERE EXISTS (
    //        SELECT 1
    //        FROM charts
    //        WHERE vouchers.credit_account_id = chart_of_accounts.id
    //        AND chart_of_accounts.chart = 'Asset'
    //    )
    //    AND (
    //        (
    //            request('todate') IS NOT NULL
    //            AND request('fromdate') IS NULL
    //            AND vouchers.created_at >= request('todate')
    //        )
    //        OR (
    //            request('todate') IS NOT NULL
    //            AND request('fromdate') IS NOT NULL
    //            AND vouchers.created_at BETWEEN request('todate') AND request('fromdate')
    //        )
    //    )
    //    GROUP BY credit_account_id");

        // $assets = Voucher::with('chart')
        // ->when(request('todate') || request('fromdate'), function ($q) {
        //     if (request('todate') !== null && request('fromdate') === null) {
        //         $q->where('created_at', '>=', request('todate'));
        //     } else {
        //         $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
        //     }
        // })
        // ->whereHas('chart', function ($q) {
        //     $q->where('chart', 'Asset');
        // })
        // ->selectRaw('credit_account_id,   SUM(total_debit) as total_debit')
        // ->groupBy('credit_account_id')
    
        // ->get();

    //     $new_assets = Voucher_item::with('voucher')
    //     ->when(request('todate') || request('fromdate'), function ($q) {
    //         if (request('todate') !== null && request('fromdate') === null) {
    //             $q->where('voucher_date', '>=', request('todate'));
    //         } else {
    //             $q->whereBetween('voucher_date', [request('todate'), request('fromdate')]);
    //         }
    //     })
    //     ->where('account', 'Asset')
    //     ->groupBy('account_type_id')
    //     ->select('account_type_id', DB::raw('MAX(account_balance) as last_account_balance'))
    //     ->get();
    
    // // Accessing the grouped data and last account balance
    // foreach ($new_assets as $asset) {
    //     $accountTypeId = $asset->account_type_id;
    //     $lastAccountBalance = $asset->last_account_balance;
    
    //     // Retrieve additional data from the voucher_item table based on account_type_id
    //     $voucherItems = Voucher_item::with('voucher')
    //         ->where('account_type_id', $accountTypeId)
    //         ->get();
   
    // }

        $new_asset = Voucher_item::with('accounts', 'voucher' ,'items' )
        ->when(request('todate') || request('fromdate'), function ($q) {
            if (request('todate') !== null && request('fromdate') === null) {
                $q->where('voucher_date', '>=', request('todate'));
            } else {
                $q->whereBetween('voucher_date', [request('todate'), request('fromdate')]);
            }
        })->where('account' , 'Asset') ->groupBy('account_type_id')
        ->select('account_type_id'  ,  DB::raw('MAX(id) as id') , DB::raw('MAX(voucher_id) as voucher'))
        ->get();

        $new_liabilities = Voucher_item::with('accounts', 'voucher' ,'items' )
        ->when(request('todate') || request('fromdate'), function ($q) {
            if (request('todate') !== null && request('fromdate') === null) {
                $q->where('voucher_date', '>=', request('todate'));
            } else {
                $q->whereBetween('voucher_date', [request('todate'), request('fromdate')]);
            }
        })->where('account' , 'Liablities') ->groupBy('account_type_id')
        ->select('account_type_id'  ,  DB::raw('MAX(id) as id') , DB::raw('MAX(voucher_id) as voucher'))
        ->get();

                $find=[];
            foreach( $new_liabilities as $new_laib){
                // dd($new_laib->items->account_balance);
                $find[] = $new_laib->items->account_balance;

            };
            $total = array_sum($find);
           

            $finds=[];
            foreach( $new_asset as $new_as){
                // dd($new_laib->items->account_balance);
                $finds[] = $new_as->items->account_balance;

            };
            $totals = array_sum($finds);
            

     
       
       
     
        

    //     $assets = Voucher::with('chart')
    // ->when(request('todate') || request('fromdate'), function ($q) {
    //     if (request('todate') !== null && request('fromdate') === null) {
    //         $q->where('vouchers.created_at', '>=', request('todate'));
    //     } else {
    //         $q->whereBetween('vouchers.created_at', [request('todate'), request('fromdate')]);
    //     }
    // })
    // ->whereHas('chart', function ($q) {
    //     $q->where('chart', 'Asset');
    // })
    // ->selectRaw('credit_account_id, charts.balance + SUM(total_debit) as total_debit , SUM(total_debit) as sum_debit')
    // ->leftJoin('chart_of_accounts as charts', 'charts.id', '=', 'vouchers.credit_account_id')
    // ->where('charts.chart', 'Asset')
    // ->groupBy('credit_account_id')
    // ->get();

    // $assets_total = Voucher::with('chart')
    // ->when(request('todate') || request('fromdate'), function ($q) {
    //     if (request('todate') !== null && request('fromdate') === null) {
    //         $q->where('vouchers.created_at', '>=', request('todate'));
    //     } else {
    //         $q->whereBetween('vouchers.created_at', [request('todate'), request('fromdate')]);
    //     }
    // })
    // ->whereHas('chart', function ($q) {
    //     $q->where('chart', 'Asset');
    // })  ->selectRaw('credit_account_id, charts.balance + SUM(total_debit) as total_debit , SUM(total_debit) as sum_debit')
    // ->leftJoin('chart_of_accounts as charts', 'charts.id', '=', 'vouchers.credit_account_id')
    // ->where('charts.chart', 'Asset')
    // ->groupBy('credit_account_id')
    // ->get()->sum('total_debit');

  

    // $liability = Voucher::with('chart')
    // ->when(request('todate') || request('fromdate'), function ($q) {
    //     if (request('todate') !== null && request('fromdate') === null) {
    //         $q->where('vouchers.created_at', '>=', request('todate'));
    //     } else {
    //         $q->whereBetween('vouchers.created_at', [request('todate'), request('fromdate')]);
    //     }
    // })
    // ->whereHas('chart', function ($q) {
    //     $q->where('chart', 'Liablities');
    // })
    // ->selectRaw('credit_account_id, charts.balance + SUM(total_debit) as total_debit , SUM(total_debit) as sum_debit')
    // ->leftJoin('chart_of_accounts as charts', 'charts.id', '=', 'vouchers.credit_account_id')
    // ->where('charts.chart', 'Liablities')
    // ->groupBy('credit_account_id')
    // ->get();

    // $liability_total = Voucher::with('chart')
    // ->when(request('todate') || request('fromdate'), function ($q) {
    //     if (request('todate') !== null && request('fromdate') === null) {
    //         $q->where('vouchers.created_at', '>=', request('todate'));
    //     } else {
    //         $q->whereBetween('vouchers.created_at', [request('todate'), request('fromdate')]);
    //     }
    // })
    // ->whereHas('chart', function ($q) {
    //     $q->where('chart', 'Liablities');
    // })
    // ->selectRaw('credit_account_id, charts.balance + SUM(total_debit) as total_debit , SUM(total_debit) as sum_debit')
    // ->leftJoin('chart_of_accounts as charts', 'charts.id', '=', 'vouchers.credit_account_id')
    // ->where('charts.chart', 'Liablities')
    // ->groupBy('credit_account_id')
    // ->get()->sum('total_debit');

        
        // $liability = Voucher::with('chart')
        // ->when(request('todate') || request('fromdate'), function ($q) {
        //     if (request('todate') !== null && request('fromdate') === null) {
        //         $q->where('created_at', '>=', request('todate'));
        //     } else {
        //         $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
        //     }
        // })
        // ->whereHas('chart', function ($q) {
        //     $q->where('chart', 'Liablities');
        // })
        // ->selectRaw('credit_account_id,   SUM(total_debit) as total_debit')
        // ->groupBy('credit_account_id')
    
        // ->get();
// dd($assets[0]->total_debit);
// dd($assets[0]->credit_account_id);


    return response()
        ->json([  'liability' =>$new_liabilities , 
        'new'=> $new_asset , 
        'total_liabilities' => $total,
        'total_assets' =>$totals
    ]);
    }
}
