<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vendor;
use App\Models\Inventory;

use App\Models\Transaction;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    public function index()
   
    {
         
        $results = Transaction::with('vendor', 'inventory')->orderBy('created_at')
            ->paginate(15);
           
        return response()
            ->json(['results' => $results]);
               
    }
   
    public function create()
    {
        $Transaction = new Transaction();
        
        $form = [
            'vendor_id' => null,
            'inventory_id' => null,
            'item' => null,
            'unit_price' => null,
            'quantity' => null,
            'payment' => null,
            'due_payment' => null,
            'total_payment' => null,
            
           
            
        ];
        return response()
        ->json(['form' => $form]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([ $request,
        'vendor_id' => 'required',
       
                'inventory_id' => 'required|',
                'unit_price' => 'required',
                'quantity' => 'required|',
                'payment' => 'required|',
                'due_payment' => 'required|',
                'total_payment' => 'required|',
            
        ]);
            $Transaction = new Transaction();
            $Transaction->fill($request->except('due_payment'));
            
                       $balance= $request->due_payment - $request->payment ;
    
                        // dd($balance);
           $Transaction->due_payment= $balance;
           
            $Transaction->save();
            
            $model = DB::table('transactions')->where('vendor_id', $request->vendor_id)->sum('payment');
            $payment = DB::table('inventories')->where('vendor_id', $request->vendor_id)->sum('total_payment');
            $due_payment = DB::table('transactions')->where('inventory_id', $request->inventory_id)->sum('payment');
            $total_payment = DB::table('transactions')->where('inventory_id', $request->inventory_id)->value('total_payment');
            // dd($total_payment-$due_payment);
            $due = $total_payment-$due_payment;
            // dd($due);
            // $Transaction->due_payment = $due;
            $data = Vendor::where('id', $request->vendor_id)->first();
            // // dd($request->vendor_id);
            $data->total_paid = $model;
            $data->due_payment = $payment-$model;
            $data->total_purchase = $payment;
            // dd($request->total_payment);
            // // $data->id= $request->vendor_id;
            $data->save();
            
            
          
            return response()
                ->json(['saved' => true, 'id' => $Transaction->id,'due_payment'=> $due]);
         
    }
    // public function store(Request $request)
    // {
    //     $request->validate([ $request,
    //     'vendor_id' => 'required',
    //         'item' => 'required|',
    //         'payment' => 'required|',
    //         'due_payment' => 'required|',
    //         'total_payment' => 'required|',
            
    //     ]);
    //         $Transaction = new Transaction();
    //         $Transaction->fill($request->all());

    //         $Transaction = DB::transaction(function() use ($Transaction, $request) {
    //             $Inventory = Inventory::where('id', 'Transaction')->first();
    //              // $Transaction->number = $Inventory->prefix . $Inventory->value;
    //             $Transaction_id = $request->Transaction_id;
    //                            $Inventory_id = $request->product_id;
                              
                
                
    //                            $newItems = [];
                
    //                        foreach($request->items as $item) {
                
    //                            $item = new Inventory();
    //                            $item->Transaction_id = $request->Transaction_id;
    //                            $item->Inventory_id = $request->product_id;
                              
    //                        }
             
    //             // $Transaction->storeHasMany([
    //             //     'items' => $request->items
    //             // ]);
    
    //             $Inventory->increment('value');
    
    //             return $Transaction;
    //         });
    
    //         $Transaction->save();
    
    //         return response()
    //             ->json(['saved' => true, 'id' => $Transaction->id]);
         
    // }
    public function show($id){
    
        $model = Transaction::findorfail($id);
        return response()->json(['model' =>$model]);
    }
    public function edit($id){
    
        $form = Transaction::findorfail($id);
        return response()->json(['form' =>$form]);
    }
    public function update( $id ,Request $request)
    {
        $request->validate([ $request,
        'vendor_id' => 'required',
        'item' => 'required|',
        'payment' => 'required|',
        'due_payment' => 'required|',
        'total_payment' => 'required|',
        ]);
            $Transaction = Transaction::findorfail($id);;
            $Transaction->fill($request->all());
    
            $Transaction->save();
    
            return response()
                ->json(['saved' => true, 'id' => $Transaction->id]);
         
    }
    public function destroy($id)
    {
        $delete = Transaction::findOrFail($id);
        $delete->delete();

        return response()
            ->json(['deleted' => true]);
    }
}


