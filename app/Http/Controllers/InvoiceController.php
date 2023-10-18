<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\Counter;
use App\Models\Inventory;
use App\Models\SaleItem;
use App\Models\Sales;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{
    public function index()
    {
        $results = Sales::with('customer')
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
        $request->validate([
            // 'customer_id' => 'required|integer|exists:customers,id',
            'customer_name' => 'required',
            
            'discount' => 'required|numeric|min:0',
            // 'sale'=> 'required|numeric',
            'items' => 'required|array|min:1',
            // // 'items.*.inventory_id' => 'required|integer|exists:products,id',
            // 'items.*.item' => 'required',
            // 'items.*.unit_price' => 'required|numeric|min:0',
            // 'items.*.qty' => 'required|integer|min:1'
        ]);
        // $inventory = collect($request->items)->sum(function($item) {
        //     return $item['inventory_id'] ;
            
        // });
        // $qty = collect($request->items)->sum(function($item) {
        //     return $item['qty'] ;
            
        // });
// dd(request()->all());





// dd(request()->all());
        foreach($request->items  as $item){
            $qty = $item['qty'];
            // dd($qty);
            $test = Inventory::where('id',$item['inventory_id'])->value('quantity');
            $save = DB::table('inventories')->where('id', $item['inventory_id'])->value('quantity');
            $sale = DB::table('sale_items')->where('inventory_id', $item['inventory_id'])->sum('qty');
            $stock = $save - $sale;     
            // dd($stock);
        }
    //         // dd($item);
    // $inventry = Inventory::where('id',)
           
    //         $test = $item['qty'];
    //         // dd($test);
    //         // $profit = DB::table('inventories')->where('id', $item['inventory_id'])->value('unit_price');
    //         // dd($profit);
        
    //     // dd($sale);
       

        if($stock < $qty){
            
            return response()->json(["alert"]); 
           
        }
        else{
            $data = new Sales();
$data->customer_id = $request->customer_id;
$data->customer_name = $request->customer_name;
$data->discount = $request->discount;
$data->date = $request->date;
foreach($request->items as $item){
    $total = collect($request->items)->sum(function($item) {
        return $item['qty'] * $item['unit_price'];
       
    });
    // dd($total);
    // $data->sale = $item['qty'] * $item['unit_price'];
    // dd($data->sale);
    $data->sale = $total;
}
$data->save();


        // $invoice = new Sales;
        // $invoice->fill($request->except('items'));
        // $model = ($request->discount) ;
       
    

        
       
    //     // $profit = DB::table('inventories')->where('id', $item['inventory_id'])->value('unit_price');
    //     // dd($profit);
     
    //    $invoice->sale = $total - $model;
      
    //    $invoice->save();
    // }
       

        $model = DB::table('transactions')->where('vendor_id', $request->vendor_id)->sum('payment');

        $invoice = DB::transaction(function() use ($data, $request) {
            foreach($request->items  as $item1){
                $totalprofit = collect($request->items)->sum(function($item1) {
                    return $item1['qty'] * $item1['unit_price'];
                });
                $model = DB::table('inventories')->where('id', $item1['inventory_id'])->sum('unit_price');
            // dd( $model);
            $profit= $item1['inventory']['unit_price'];
            $tp = SaleItem::where('inventory_id', $item1['inventory_id'])->value('unit_price');
           $pp = $item1['unit_price'];
        //    $data->profit=  $totalprofit -  $model;
        //    dd($data->profit);
            // $data = SaleItem::where('inventory_id', $item1['inventory_id'])->first();
            // $data->profit = $pp - $profit;
        //   dd($profit);
            // $profit= 1;
            // $net= $profit['unit_price'];
            // dd($net);
// dd( $request->items);       
}    
            $data->storeHasMany([
                'items' => $request->items,
                // 'items' => $item1,
                
                
                
            ]);
            // $data->save();
            
            foreach($request->items  as $item2){
           
            // dd($item2);
            $data = SaleItem::where('inventory_id', $item2['inventory_id'])->first();
            // $item= $request->items[0]['item'];
    
            $data->profit = $pp - $profit;
        }
            $data->save();

            // return $invoice;
           
           
        });
        
        
    
}
foreach($request->items  as $item2){
    $tprofit = DB::table('sale_items')->where('inventory_id',  $item2['inventory_id'])->sum('qty');
    $pp = DB::table('sale_items')->where('inventory_id',  $item2['inventory_id'])->value('profit');
$final = $tprofit * $pp;
$ft = SaleItem::where('inventory_id', $item2['inventory_id'])->first();
$ft->total_profit = $final;

    // dd($final);
}  
$ft->save();
        return response()
            ->json(['saved' => true, 'id' => $data->id]);
   

}

    public function show($id){
    
        $model = sales::findorfail($id);
        return response()->json(['model' =>$model]);
    }

    public function edit($id){
    
        $form = sales::findorfail($id);
        return response()->json(['form' =>$form]);
    }

    // public function update($id, Request $request)
    // {
    //     $invoice = Sales::findOrFail($id);

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
        $invoice = Sales::findOrFail($id);

        $invoice->items()->delete();

        $invoice->delete();

        return response()
            ->json(['deleted' => true]);
    }
}
