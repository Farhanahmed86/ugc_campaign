<?php

namespace App\Http\Controllers;
use App\Models\Inventory;
use App\Models\Counter;
use App\Models\Transaction;
use App\Models\Vendor;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class InventoryController extends Controller
{
    public function search()
    {
        $results = Inventory::with('vendor', 'transaction', 'saleitem')->orderBy('item')
            ->when(request('q'), function($query) {
                $query->where('item_code', 'like', '%'.request('q').'%')
                    ->orWhere('unit_price', 'like', '%'.request('q').'%');
              
            })
            ->limit(6)
            ->get();
            $results["1"] = DB::table('transactions')->where('inventory_id', $results[0]['id'])->sum('payment');

        

        return response()
            ->json(['results' => $results]);
            
    } 
    public function get()
    {
        $results = Inventory::orderBy('item_code')
            ->when(request('q'), function($query) {
                $query->where('item', 'like', '%'.request('q').'%')
                ->orWhere('item_code', 'like', '%'.request('q').'%');
         
                    
            })
           
            ->limit(6)
            ->get();
        
        return response()
            ->json(['results' => $results]);
            
    } 
    public function index()
    {
        // dd('abc');
        $results = Inventory::with('vendor', 'transaction','saleitem')->orderBy('created_at')
            ->paginate(15);

        return response()
            ->json(['results' => $results]);


    }

    public function stock()
    
    {
       
        $results = Inventory::with('vendor', 'transaction','saleitem')->orderBy('created_at')
            ->paginate(15);
           
        return response()
            ->json(['results' => $results]);


    }

    public function create()
    {
        $counter = Counter::where('key', 'inventories')->first();
        $Inventory = new Inventory();
        
        $form = [
            'vendor_id' => null,
            'item' => null,
            'unit_price' => null,
            'quantity' => null,
            'total_payment' => null,
            'item_code' => $counter->prefix . $counter->value,
           
            
            
           
            
        ];
        return response()
        ->json(['form' => $form]);
    }
    public function store(Request $request)
    {
        $request->validate([ $request,
          
            'vendor_id' => 'required|',
            'item' => 'required|',
            'unit_price' => 'required|',
            'quantity' => 'required|',
            // 'total_payment' => 'required|',
            'item_code' => 'required',
           
            
        ]);
        
      
            $Inventory = new Inventory();
            $Inventory->fill($request->all());
            
            $Inventory = DB::transaction(function() use ($Inventory, $request) {
                $counter = Counter::where('key', 'Inventories')->first();
                $Inventory->item_code = $counter->prefix . $counter->value;
    
                $counter->increment('value');
               
                // $Inventory->fill($request->all());
                
                return $Inventory;
                
                
                
            });
            
            $total = $request->unit_price * $request->quantity;
            // dd($total);
            $Inventory->total_payment = $total;
            $Inventory->save();
           
            $model = DB::table('inventories')->where('vendor_id', $request->vendor_id)->sum('total_payment');
            // dd($model);
            // $model = Vendor::where('id','=',$request->vendor_id);
            // $model->total_purchase= $model;
            // $model->save();
            $data = Vendor::where('id', $request->vendor_id)->first();
            // dd($request->vendor_id);
            $data->total_purchase = $model;
           
            // $data->id= $request->vendor_id;
            $data->save();
            
//             $model = DB::transaction(function () use($request){
                       
//                 $model = new Vendor();
  
              
//             $model->total_purchase = $request->total_payment;
            
            
           
            

//             $model->save();
           
//    });
            // dd($Inventory);
            // $vendor = vendor::where('id', '1')->first();
            
            return response()
                ->json(['saved' => true, 'id' => $Inventory->id]);
                
         
    }
    public function show($id){
    
        $model = Inventory::findorfail($id);
        return response()->json(['model' =>$model]);
    }
    public function edit($id){
    
        $form = Inventory::findorfail($id);
        return response()->json(['form' =>$form]);
    }
    public function update( $id ,Request $request)
    {
        $request->validate([ $request,
        'vendor_id' => 'required|',
            'item' => 'required|',
            'unit_price' => 'required|',
            'quantity' => 'required|',
            'total_payment' => 'required|',
            'item_code' => 'required',
        ]);
            $Inventory = Inventory::findorfail($id);;
            $Inventory->fill($request->all());
    
            $Inventory->save();
    
            return response()
                ->json(['saved' => true, 'id' => $Inventory->id]);
         
    }
    public function destroy($id)
    {
        $delete = Inventory::findOrFail($id);
        $delete->delete();

        return response()
            ->json(['deleted' => true]);
    }
}

