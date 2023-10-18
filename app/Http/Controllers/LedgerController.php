<?php

namespace App\Http\Controllers;

use App\Models\Chart_of_account;
use App\Models\Voucher;
use App\Models\Voucher1;

use App\Models\Voucher_item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LedgerController extends Controller
{


    public function search()
    {
        
        $results = Voucher1::orderBy('voucher_no')
        ->when(request('q'), function($query) {
            $query->where('voucher_no', 'like', '%'.request('q').'%');
                
        })
        ->limit(10)
        ->get();

    return response()
        ->json(['results' => $results]);
    }
//    public function index(Request $request){
//     // dd($request->all());
//     $model= $request->account_id;
//     $ledger = Voucher::with('chart' , 'items')
    

//     // ->when(request('account_id'), function ($q) {
  
//     //     $q->Where('credit_account_id', 'like', request('account_id') );
          
           
//     // })
    
//     // ->when(request('todate'), function ($q) {
//     //     $q->where('voucher_date', 'LIKE', request('todate'));
//     // }) 
   
//     // ->groupBy('account_code')
//     ->paginate(15);

    // if (request('voucher')) {
    //     $ledger->whereHas('items', function ($q) {

    //         $q->whereIn('voucher_id', request('voucher'))
    //             ->groupBy(['account_code']);
    //     });
    // }
// $id = request('voucher');
//     $data = DB::select(" select (Vi.account_code) 
//     FROM vouchers V
//             left join voucher_items Vi on V.id = voucher_id
//                  WHERE Vi.voucher_id = $id
//                 GROUP BY Vi.account_code");

//                 dd($data);
// dd($model);
    // \DB::statement("SET SQL_MODE=''");
   
    // $data = DB::select(" select  sum(Vi.debit) debit ,sum(Vi.credit) credit
    // FROM vouchers V
    //         left join voucher_items Vi on V.id = voucher_id
    //              WHERE Vi.credit_account_id = $model
    //             GROUP BY Vi.account_code ");

    //             dd($data);
    // foreach($ledger as $ledgers){
    //     dd($ledgers->credit);
       
    

    // }
 
//     return response()
//     ->json(['data' => $ledger ]);
//    }


public function index(Request $request){

    // dd($request->todate);
    // dd('ac');

    $ledger = Voucher_item::with('voucher' )
    

    ->when(request('voucher'), function ($q) {
  
        $q->Where('voucher_no', 'like', request('voucher') );
          
           
    })
    ->when(request('todate') || request('fromdate'), function ($q) {
        if (request('todate') !== null && request('fromdate') === null) {
            
            $q->where('voucher_date', '=', request('todate'));
        } else {
            $q->whereBetween('voucher_date', [request('todate'), request('fromdate')]);
        }
    })

    
    
    ->when(request('account_id'), function ($q) {
  
        $q->Where('account_type_id', 'like', request('account_id') );
          
           
    })
   
    
    ->get();
    // dd($ledger);
    // dd(count($ledger));
    $ids = [];
    foreach($ledger as $item){
        $ids[] = $item->id;
    
    }
    // dd($ids);
    // $voucher = $ledger[0]->id;
    // dd($voucher);
    $data = Voucher_item::with('voucher', 'accounts')->whereIn('id' , $ids)->get();

    if($request->todate || $request->fromdate){
        $datas = Voucher_item::with('voucher', 'accounts')
        ->when(request('todate') || request('fromdate'), function ($q) {
            if (request('todate') !== null && request('fromdate') === null) {
                $q->where('created_at', '>=', request('todate'));
            } else {
                $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
            }
        })->get();
        // dd($datas);
    }
 
    // dd($data);

// $model = request('voucher');
// DB::statement("SET SQL_MODE=''");




//     $data = DB::select(" select Vi.account_code , Vi.debit , Vi.credit
//     FROM vouchers V
//             left join voucher_items Vi on V.id = voucher_id
//                  WHERE V.voucher_no = '$model'
//                 GROUP BY Vi.account_code ");

//                 dd($data);
    // dd($ledger);
    // $ids = $ledger->id;
    // if (request('voucher')) {
    //     $ledger->whereHas('items', function ($q) use ($ids) {
    //         $q->whereIn('voucher_id', $ids);
    //     });
    // }
    // dd($ledger);
    // if (request('contractor_departs')) {
    //     $model->whereHas('contractor_departments', function ($q) {
    //         $q->whereIn('department_id', request('contractor_departs'));
    //     });
    // }

    
    // return response()->json(['data' => $model->search()->withQueryString()]);
    return response()
    ->json(['data' => $data , 'ledger' => $ledger]);
   }

   public function trails(Request $request){

    
    $trail = Chart_of_account::with('voucher')
    ->when(request('todate') || request('fromdate'), function ($q) {
        if (request('todate') !== null && request('fromdate') === null) {
            $q->where('created_at', '>=', request('todate'));
        } else {
            $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
        }
    })->get();
    
    $non = Voucher_item::with('accounts') ->when(request('todate') || request('fromdate'), function ($q) {
        if (request('todate') !== null && request('fromdate') === null) {
            $q->where('created_at', '>=', request('todate'));
        } else {
            $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
        }
    })->get();
    

    
    $ids =[];
    foreach($non as $id){
   
        $ids[] = $id->account_type_id;

}
$uniqueIds = array_unique($ids);
// dd($uniqueIds);

$nons = Chart_of_account::with('voucher')
    ->when(request('todate') || request('fromdate'), function ($query) {
        $query->whereNotBetween('created_at', [request('fromdate'), request('todate')]);
    })->whereIn('id' , $uniqueIds)
    ->get();

    // dd($nons);


//     $ledger = Voucher::with('chart' , 'items')
    

//     ->when(request('account_id'), function ($q) {
  
//         $q->Where('credit_account_id', 'like', request('account_id') );
          
           
//     })
    
   
   
    
//     ->get();

//     $ids =[];
//     foreach($ledger as $id){
   
//         $ids[] = $id->id;
       
    



// }

// $data = Voucher_item::whereIn('voucher_id' ,$ids)->get();
// $trail = Voucher_item::whereIn('voucher_id' ,$ids)->selectRaw('account_code, count(id) as total_id, sum(credit) as total_credit, sum(debit) as total_debit')
// ->groupBy('account_code')
// ->get();
$responseData = array_merge($trail->toArray(), $nons->toArray());
$id =[];
    foreach($responseData as $ids){
   
        $id[] = $ids['id'];
   }
   $opening = Voucher_item::with('accounts')
    ->when(request('todate') || request('fromdate'), function ($query) {
        $query->whereNotBetween('created_at', [request('fromdate'), request('todate')]);
    })->whereIn('account_type_id' , $id)
    ->get()->groupBy('account_code');

    $accountBalances = [];
foreach ($opening as $accountCode => $groupedData) {
    $lastItem = $groupedData->last();
    $accountBalance = $lastItem->account_balance;
    $accountBalances[$accountCode] = $accountBalance;
}

// dd($id);

    return response()
    ->json([
    'trail' =>$trail , 
    'between' =>$nons , 
    'merge' => $responseData,
    'new' => $opening,
    'group' => $accountBalances
]);


   }


    public function accounts_ledger (Request $request , $accountTypeId){

        // dd($accountTypeId);
        $amount = Chart_of_account::where('id' , $accountTypeId)->value('amounts');
        // dd($amount);
        if($request->todate || $request->fromdate != null){

            $ledger = Voucher_item::with('voucher')
            ->when(request('todate') || request('fromdate'), function ($q) {
                if (request('todate') !== null && request('fromdate') === null) {
                    
                    $q->where('voucher_date', '=', request('todate'));
                } else {
                    $q->whereBetween('voucher_date', [request('todate'), request('fromdate')]);
                }
            })->where('account_type_id', $accountTypeId)->get();

            $balance = Voucher_item::where('voucher_date' ,'<',$request->todate )->where('account_type_id', $accountTypeId)->get();
           $count = count($balance);
        //    dd($balance[0]);
           $last = $balance[$count - 1]->account_balance;
        //    dd($last);
        //     $totalCredit = 0;
        //     foreach ($ledger as $entry) {
        //         $totalCredit += $entry->credit;
        //     }

        //     $totalDebit = 0;
        //     foreach ($ledger as $entry) {
        //         $totalDebit += $entry->debit;
        //     }
        //   if($totalCredit > $totalDebit){
        //     $total = $totalCredit - $totalDebit;
        //   }

        //   if($totalDebit > $totalCredit){
        //     $total = $totalDebit - $totalCredit;
        //   }

        //   dd($total);
            
        }
        else{
            // dd('next');
            $ledger = Voucher_item::where('account_type_id' , $accountTypeId)->get();
        }
        // dd($amount);
        
    return response()
    ->json(['data' => $ledger , 'balance' => $last , 'amount' => $amount]);
    }
   
   
  

}

