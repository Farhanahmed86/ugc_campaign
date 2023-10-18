<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vendor;
use App\Models\Inventory;

class VendorController extends Controller
{
    public function search()
    {
        $results = Vendor::orderBy('name')
        ->when(request('q'), function($query) {
            $query->where('id', 'like', '%'.request('q').'%')
                ->orWhere('name', 'like', '%'.request('q').'%');
        })
        ->limit(6)
        ->get();

    return response()
        ->json(['results' => $results]);
    }
 

    public function index()
    {
        $results = Vendor::with('transaction','paymentmethod', 'inventory')->orderBy('created_at')
            ->paginate(15);

        return response()
            ->json(['results' => $results]);


    }

    public function create()
    {
        $vendor = new Vendor();
        
        $form = [
            'name' => null,
            'email' => null,
            
            
           
            
        ];
        return response()
        ->json(['form' => $form]);
    }
    public function store(Request $request)
    {
        $request->validate([ $request,
            'name' => 'required|max:50',
            'email' => 'required|',
           
            
        ]);
        // $Inventory = Inventory::where( $request->id,'vendor_id' )->first();
        
            $vendor = new vendor();
            
            $vendor->fill($request->all());
            // $vendor->total_purchase = $Inventory->total_payment;
    
            $vendor->save();
            
    
            return response()
                ->json(['saved' => true, 'id' => $vendor->id]);
         
    }
    public function show($id){
    
        $model = Vendor::with('transaction','paymentmethod', 'inventory')->findorfail($id);
        return response()->json(['model' =>$model]);
    }
    public function edit($id){
    
        $form = Vendor::findorfail($id);
        return response()->json(['form' =>$form]);
    }
    public function update( $id ,Request $request)
    {
        $request->validate([ $request,
        'firstname' => 'required|max:50',
        'lastname' => 'required|',
        'email' => 'required|',
        ]);
            $vendor = Vendor::findorfail($id);;
            $vendor->fill($request->all());
    
            $vendor->save();
    
            return response()
                ->json(['saved' => true, 'id' => $vendor->id]);
         
    }
    public function destroy($id)
    {
        $delete = Vendor::findOrFail($id);
        $delete->delete();

        return response()
            ->json(['deleted' => true]);
    }
}

   

