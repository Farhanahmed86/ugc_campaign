<?php

namespace App\Http\Controllers;

use App\Models\Chart_of_account;
use Illuminate\Http\Request;
use App\Models\Voucher;
use App\Models\Voucher1;

use App\Models\Voucher_type;
use App\Models\Voucher_item;
use App\Imports\ImportExcel;
// use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Facades\Excel;
// use Maatwebsite\Excel\Excel;
use App\Excels;

use function Symfony\Component\String\b;

class VoucherController extends Controller
{

    public function search()
    {
        $results = Voucher_type::orderBy('title')
        ->when(request('q'), function($query) {
            $query->where('title', 'like', '%'.request('q').'%');
                
        })
        ->limit(6)
        ->get();

    return response()
        ->json(['results' => $results]);
    }
   // public function index(Request $request)
    // {
    //     // dd( request('fromdate'));
    //     $results = Invoice::with(['customer'])
    //         ->when(request('q'), function ($q) {
    //             $q->Where('customer_id', 'like', '%' . request('q') . '%')
    //                 ->orWhere('firstname', 'like', '%' . request('q') . '%')
    //                 ->orWhere('lastname', 'like', '%' . request('q') . '%')
    //                 ->orWhere('date', 'like', '%' . request('q') . '%');
    //         })
    //         ->when(request('customer_id'), function ($q) {
    //             $q->where('customer_id', 'LIKE', request('customer_id'));
    //         })
    //         ->when(request('todate') || request('fromdate'), function ($q) {
    //             if (request('todate') !== null && request('fromdate') === null) {
    //                 $q->where('date', '>=', request('todate'));
    //             } else {
    //                 $q->whereBetween('date', [request('todate'), request('fromdate')]);
    //             }
    //         })
    //         ->orderBy('created_at', 'desc')
    //         ->paginate(15);
    //     // dd($results);
    //     return response()
    //         ->json(['results' => $results]);
    // }
    public function index(Request $request)
    {
        // dd($request->all(), 'abvfd');
       
        $results = Voucher::with('chart' , 'items')
       
                   
                    ->when(request('todate') || request('fromdate'), function ($q) {
                        if (request('todate') !== null && request('fromdate') === null) {
                            $q->where('date', '>=', request('todate'));
                        } else {
                            $q->whereBetween('voucher_date', [request('todate'), request('fromdate')]);
                        }
                    })
                    ->when(request('voucher'), function ($q) {
  
                        $q->Where('voucher_no', 'like', request('voucher') );
                          
                           
                    })

                    ->when(request('account_id'), function ($q) {
  
                        $q->Where('credit_account_id', 'like', request('account_id') );
                          
                           
                    })
            ->orderBy('created_at')
            ->paginate(15);

        return response()
            ->json(['results' => $results]);
    }

    public function create()
    {
       

        $form = [
            // 'number' => $counter->prefix . $counter->value,
            'customer_id' => null,
            'customer_name' => null,
            // 'item' => null,
            'discount' => 0,
            'sale'=> null,
           
            'items' => [
                [
                    'inventory_id' => null,
                    'item' => null,
                    'unit_price' => 0,
                    'qty' => 1
                ]
            ]
        ];

        return response()
            ->json(['form' => $form]);
    }

    public function store(Request $request)
    {
        // dd($request->items);
        // dd($request['customer']['text']);
    //     $request->validate([ $request,
    //     'customer_name' => 'required|max:50',
    //     'item' => 'required|',
    //     'sale' => 'required|',
        
    // ]);
    // $id = [];
    // foreach($request->items as $item){
    //     // dd($item['accounts_id']);
    //     $id[] = $item['accounts_id'];
    // };
    // // dd($id);
    // $c = Chart_of_account::where('id' , $id)->value('account_type');

    // $a = Voucher::whereIn('credit_account_id' , $id)->pluck('total_debit')->sum();
    // $b = Chart_of_account::where('id' , $id)->value('amounts');
    // dd($a);


    // $n = Voucher::where('credit_account_id' , $request->account_id)->pluck('total_debit')->sum();
    // $t = Chart_of_account::where('id' , $request->account_id)->value('amounts');
    // $final = $t - $n;
    // $ab = $a - $b;
    // dd($a - $b);


    // if($final < $request->total){
            
    //     return response()->json(["alert"]); 
       
    // }
//   else{
    // $id = [];
    // foreach($request->items  as $item3){
    //     // dd($item3['accounts_id']);
    //     $id[] = $item3['accounts_id'];

    // }
    // dd($id);


    $account = Voucher::count();
        $voucher = new Voucher();
        // $no = $voucher
        $voucher->voucher_name = $request->reference;
        $voucher->voucher_date = $request->date;
        $voucher->voucher_type = $request['vouchertype']['title'];
        $voucher->credit_account_id = $request->account_id;
        if(isset($request->number)){

     $voucher->voucher_no = $request->number;
        }
        else{

            $voucher->voucher_no = 'VU-'.$account;
        }

        $voucher->cheque_no = $request->cheque;
        $voucher->total_debit = $request->sub_total;
        $voucher->total_credit = $request->total;


        $voucher->description = $request->terms_and_conditions;

          

        // $sales->fill($request->all());
        

        
        
        $voucher->save();
        // $id = [];
        // foreach($request->items as $item){
        //     // dd($item['accounts_id']);
        //     $id[] = $item['accounts_id'];
        // };
        // $nazar = Voucher::where('credit_account_id' , $request->account_id)->pluck('total_debit')->sum();
        // $talha = Chart_of_account::where('id' , $request->account_id)->value('amounts');
       
      
        // $less = Chart_of_account::where('id' , $request->account_id)->first();
        // $less->balance = $talha - $nazar;
        // $less->save();
        foreach($request->items  as $item2){
            $check = Chart_of_account::where('id' , $item2['accounts_id'])->value('account_type');
            if(isset($item2['credit'])){
                if($check == 'Debit'){
                    $bb = Chart_of_account::where('id' , $item2['accounts_id'])->value('balance');
          
                    if($bb < $item2['credit']){
                        return response()->json(["alert"]);
        
                    }
                }
                // dd($item2['credit']);
           


            }
           if(isset($item2['debit'] )){
            if($check == 'Credit'){
                $bb = Chart_of_account::where('id' , $item2['accounts_id'])->value('balance');
                if($bb < $item2['debit']){
                    return response()->json(["alert"]);
    
                }
            }
                // dd($item2['credit']);
          
           


            }


         
            // dd($item2['credit']);
            if(isset($item2['credit'])){
                $nazar = Voucher_item::where('account_type_id' , $item2['accounts_id'])->pluck('credit')->sum();
                $talha = Chart_of_account::where('id' , $item2['accounts_id'])->value('balance');
                $new =  $item2['credit'];
                // dd($new);
                $less = Chart_of_account::where('id' , $item2['accounts_id'])->first();
                // dd($less->account_type);
              if($less->account_type == 'Credit'){

                  $less->balance = $talha + $new;
                  $less->save();
              }
              if($less->account_type == 'Debit'){
                $less->balance = $talha - $new;
                  $less->save();
              }

            }

            if(isset($item2['debit'])){
                $nazar = Voucher_item::where('account_type_id' , $item2['accounts_id'])->pluck('debit')->sum();
                $talha = Chart_of_account::where('id' , $item2['accounts_id'])->value('balance');
                $new =  $item2['debit'];
                // dd($new);
                $less = Chart_of_account::where('id' , $item2['accounts_id'])->first();
                // dd($less->account_type);
              if($less->account_type == 'Debit'){

                  $less->balance = $talha + $new;
                  $less->save();
              }
              if($less->account_type == 'Credit'){
                $less->balance = $talha - $new;
                  $less->save();
              }

            }
           
           
           
            $vouchers = new Voucher_item();
               $vouchers->account_code = $item2['accounts_title'];
               $vouchers->account_type = $item2['accounts_type'];
               $vouchers->account = $item2['accounts_chart'];
               $vouchers->account_type_id = $item2['accounts_id'];
               if(isset($item2['debit'])){
               if($less->account_type == 'Debit'){

                $vouchers->account_balance = $talha + $new;
              
            }
            if($less->account_type == 'Credit'){
              $vouchers->account_balance = $talha - $new;
              
            }
        }

        if(isset($item2['credit'])){
            if($less->account_type == 'Debit'){

                $vouchers->account_balance = $talha - $new;
              
            }
            if($less->account_type == 'Credit'){
              $vouchers->account_balance = $talha + $new;
              
            }

        }

      
               
            //    $vouchers->chart_of_account_id = $item2['accounts_id'];


            //    $vouchers->ref_code = $item2['ref_code'];
            //    $vouchers->ref_no = $item2['ref_no'];
               $vouchers->voucher_id = $voucher->id;
               $vouchers->voucher_no = $voucher->voucher_no;
               $vouchers->voucher_date = $voucher->voucher_date;


               if(isset($item2['ref_code'])){
                $vouchers->ref_code = $item2['ref_code'];
              }
               if(isset($item2['ref_no'])){
                $vouchers->ref_no = $item2['ref_no'];
              }

              if(isset($item2['credit'])){
                $vouchers->credit = $item2['credit'];
              }

              if(isset($item2['debit'])){
                $vouchers->debit = $item2['debit'];
              }
            
              
              $vouchers->save();
            // }

        }
        return response()
    ->json(['saved' => true, 'id' => $voucher->id]);
     
}
        // $dd= $request->all();
        // dd($request->all());
        // $test=[];


        // $item =[];
        // foreach($item as $key => $dd['items'])
        // {
        //     dd($item);
        //     $test = Inventory::where('id',$item['inventory_id'])->get();
        //     dd($test);
        // }
        // $total = ($request->inventory) ; 
        // dd($request->all());
        // $request->validate([
        //     // 'customer_id' => 'required|integer|exists:customers,id',
        //     'customer_name' => 'required',
            
        //     'discount' => 'required|numeric|min:0',
        //     // 'sale'=> 'required|numeric',
        //     'items' => 'required|array|min:1',
        //     // // 'items.*.inventory_id' => 'required|integer|exists:products,id',
        //     // 'items.*.item' => 'required',
        //     // 'items.*.unit_price' => 'required|numeric|min:0',
        //     // 'items.*.qty' => 'required|integer|min:1'
        // ]);
        // $inventory = collect($request->items)->sum(function($item) {
        //     return $item['inventory_id'] ;
            
        // });
        // $qty = collect($request->items)->sum(function($item) {
        //     return $item['qty'] ;
            
        // });
// dd(request()->all());





// dd(request()->all());
    //     foreach($request->items  as $item){
    //         $qty = $item['qty'];
    //         // dd($qty);
    //         $test = Inventory::where('id',$item['inventory_id'])->value('quantity');
    //         $save = DB::table('inventories')->where('id', $item['inventory_id'])->value('quantity');
    //         $sale = DB::table('sale_items')->where('inventory_id', $item['inventory_id'])->sum('qty');
    //         $stock = $save - $sale;     
    //         // dd($stock);
    //     }
    // //         // dd($item);
    // $inventry = Inventory::where('id',)
           
    //         $test = $item['qty'];
    //         // dd($test);
    //         // $profit = DB::table('inventories')->where('id', $item['inventory_id'])->value('unit_price');
    //         // dd($profit);
        
    //     // dd($sale);
       

//         if($stock < $qty){
            
//             return response()->json(["alert"]); 
           
//         }
//         else{
//             $data = new Voucher();
// $data->customer_id = $request->customer_id;
// $data->customer_name = $request->customer_name;
// $data->discount = $request->discount;
// $data->date = $request->date;
// foreach($request->items as $item){
//     $total = collect($request->items)->sum(function($item) {
//         return $item['qty'] * $item['unit_price'];
       
//     });
//     // dd($total);
//     // $data->sale = $item['qty'] * $item['unit_price'];
//     // dd($data->sale);
//     $data->sale = $total;
// }
// $data->save();


        // $invoice = new Voucher;
        // $invoice->fill($request->except('items'));
        // $model = ($request->discount) ;
       
    

        
       
    //     // $profit = DB::table('inventories')->where('id', $item['inventory_id'])->value('unit_price');
    //     // dd($profit);
     
    //    $invoice->sale = $total - $model;
      
    //    $invoice->save();
    // }
       

//         $model = DB::table('transactions')->where('vendor_id', $request->vendor_id)->sum('payment');

//         $invoice = DB::transaction(function() use ($data, $request) {
//             foreach($request->items  as $item1){
//                 $totalprofit = collect($request->items)->sum(function($item1) {
//                     return $item1['qty'] * $item1['unit_price'];
//                 });
//                 $model = DB::table('inventories')->where('id', $item1['inventory_id'])->sum('unit_price');
//             // dd( $model);
//             $profit= $item1['inventory']['unit_price'];
//             $tp = SaleItem::where('inventory_id', $item1['inventory_id'])->value('unit_price');
//            $pp = $item1['unit_price'];
//         //    $data->profit=  $totalprofit -  $model;
//         //    dd($data->profit);
//             // $data = SaleItem::where('inventory_id', $item1['inventory_id'])->first();
//             // $data->profit = $pp - $profit;
//         //   dd($profit);
//             // $profit= 1;
//             // $net= $profit['unit_price'];
//             // dd($net);
// // dd( $request->items);       
// }    
//             $data->storeHasMany([
//                 'items' => $request->items,
//                 // 'items' => $item1,
                
                
                
//             ]);
//             // $data->save();
            
//             foreach($request->items  as $item2){
           
//             // dd($item2);
//             $data = SaleItem::where('inventory_id', $item2['inventory_id'])->first();
//             // $item= $request->items[0]['item'];
    
//             $data->profit = $pp - $profit;
//         }
//             $data->save();

//             // return $invoice;
           
           
//         });
        
        
    
// }
// foreach($request->items  as $item2){
//     $tprofit = DB::table('sale_items')->where('inventory_id',  $item2['inventory_id'])->sum('qty');
//     $pp = DB::table('sale_items')->where('inventory_id',  $item2['inventory_id'])->value('profit');
// $final = $tprofit * $pp;
// $ft = SaleItem::where('inventory_id', $item2['inventory_id'])->first();
// $ft->total_profit = $final;

//     // dd($final);
// }  
// $ft->save();
//         return response()
//             ->json(['saved' => true, 'id' => $data->id]);
   

// }

    public function show($id){
    
        $model = Voucher::with('chart' , 'items')->findorfail($id);
        return response()->json(['model' =>$model]);
    }

    public function edit($id){
    
        $form = Voucher::findorfail($id);
        return response()->json(['form' =>$form]);
    }

    // public function update($id, Request $request)
    // {
    //     $invoice = Voucher::findOrFail($id);

    //     $request->validate([
    //         'customer_id' => 'required|integer|exists:customers,id',
    //         'date' => 'required|date_format:Y-m-d',
    //         'due_date' => 'required|date_format:Y-m-d',
    //         'reference' => 'nullable|max:100',
    //         'discount' => 'required|numeric|min:0',
    //         'terms_and_conditions' => 'required|max:2000',
    //         'items' => 'required|array|min:1',
    //         'items.*.id' => 'sometimes|required|integer|exists:invoice_items,id,invoice_id,'.$invoice->id,
    //         'items.*.product_id' => 'required|integer|exists:products,id',
    //         'items.*.unit_price' => 'required|numeric|min:0',
    //         'items.*.qty' => 'required|integer|min:1'
    //     ]);

    //     // $invoice->fill($request->except('items'));

    //     // $invoice->sub_total = collect($request->items)->sum(function($item) {
    //     //     return $item['qty'] * $item['unit_price'];
    //     // });

    //     // $invoice = DB::transaction(function() use ($invoice, $request) {
    //     //     // custom method from app/Helper/HasManyRelation
    //     //     $invoice->updateHasMany([
    //     //         'items' => $request->items
    //     //     ]);

    //     //     return $invoice;
    //     // });

    //     return response()
    //         ->json(['saved' => true, 'id' => $invoice->id]);
    // }

    public function destroy($id)
    {
        $invoice = Voucher::findOrFail($id);

        $invoice->items()->delete();

        $invoice->delete();

        return response()
            ->json(['deleted' => true]);
    }

    public function pl(Request $request)
    {
        // dd($request->all());
        $date = [$request->todate,
        $request->fromdate
       
    ];
    // dd($date);
        $results = Voucher_item::where('account' , 'Revenue')

                   
                    ->when(request('todate') || request('fromdate'), function ($q) {
                        if (request('todate') !== null && request('fromdate') === null) {
                            $q->where('created_at', '>=', request('todate'));
                        } else {
                            $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
                        }
                    })
                   
     ->orderBy('created_at')
            ->paginate(15);

            $credit = Voucher_item::where('account' , 'Revenue')

                   
            ->when(request('todate') || request('fromdate'), function ($q) {
                if (request('todate') !== null && request('fromdate') === null) {
                    $q->where('created_at', '>=', request('todate'));
                } else {
                    $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
                }
            })
           

->paginate(15)->sum('credit');


            $result = Voucher_item::where('account' , 'Expenses')

                   
            ->when(request('todate') || request('fromdate'), function ($q) {
                if (request('todate') !== null && request('fromdate') === null) {
                    $q->where('created_at', '>=', request('todate'));
                } else {
                    $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
                }
            })
           
    ->orderBy('created_at')
    ->paginate(15);

    $debit = Voucher_item::where('account' , 'Expenses')

                   
    ->when(request('todate') || request('fromdate'), function ($q) {
        if (request('todate') !== null && request('fromdate') === null) {
            $q->where('created_at', '>=', request('todate'));
        } else {
            $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
        }
    })
   

->paginate(15)->sum('debit');
            // dd($results);

        return response()
            ->json(['results' => $results , 'date' => $date , 'result' => $result ,'credit' => $credit , 'debit'=> $debit]);
    }



    public function balance(Request $request)
    {
     
        // dd($request->all());
        $date = [$request->todate,
        $request->fromdate
       
    ];
    // dd($date);
        $results = Voucher_item::where('account' , 'Revenue')

                   
                    ->when(request('todate') || request('fromdate'), function ($q) {
                        if (request('todate') !== null && request('fromdate') === null) {
                            $q->where('created_at', '>=', request('todate'));
                        } else {
                            $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
                        }
                    })
                   
     ->orderBy('created_at')
            ->paginate(15);

            $credit = Voucher_item::where('account' , 'Revenue')

                   
            ->when(request('todate') || request('fromdate'), function ($q) {
                if (request('todate') !== null && request('fromdate') === null) {
                    $q->where('created_at', '>=', request('todate'));
                } else {
                    $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
                }
            })
           

->paginate(15)->sum('credit');


            $result = Voucher_item::where('account' , 'Expenses')

                   
            ->when(request('todate') || request('fromdate'), function ($q) {
                if (request('todate') !== null && request('fromdate') === null) {
                    $q->where('created_at', '>=', request('todate'));
                } else {
                    $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
                }
            })
           
    ->orderBy('created_at')
    ->paginate(15);

    $debit = Voucher_item::where('account' , 'Expenses')

                   
    ->when(request('todate') || request('fromdate'), function ($q) {
        if (request('todate') !== null && request('fromdate') === null) {
            $q->where('created_at', '>=', request('todate'));
        } else {
            $q->whereBetween('created_at', [request('todate'), request('fromdate')]);
        }
    })
   

->paginate(15)->sum('debit');
            // dd($results);

        return response()
            ->json(['results' => $results , 'date' => $date , 'result' => $result ,'credit' => $credit , 'debit'=> $debit]);
    }


    public function importView(Request $request)
    {

        Excel::import(new ImportExcel, $request->file('file'));
        return response()->json(['saved' => true, 'msg' => 'Record Inserted Successfully']);

    }

}
