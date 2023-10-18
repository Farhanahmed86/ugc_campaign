<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sales;

class SalesController extends Controller
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
        $sales = new sales();
        
        $form = [
            'customer_name' => null,
            'item' => null,
            'sale' => null,
            
            
           
            
        ];
        return response()
        ->json(['form' => $form]);
    }
    public function store(Request $request)
    {
        $request->validate([ $request,
            'customer_name' => 'required|max:50',
            'item' => 'required|',
            'sale' => 'required|',
            
        ]);
            $sales = new sales();
            $sales->fill($request->all());
    
            $sales->save();
    
            return response()
                ->json(['saved' => true, 'id' => $sales->id]);
         
    }
    public function show($id){
    
        $model = sales::findorfail($id);
        return response()->json(['model' =>$model]);
    }
    public function edit($id){
    
        $form = sales::findorfail($id);
        return response()->json(['form' =>$form]);
    }
    public function update( $id ,Request $request)
    {
        $request->validate([ $request,
        'customer_name' => 'required|max:50',
            'item' => 'required|',
            'sale' => 'required|',
        ]);
            $sales = sales::findorfail($id);;
            $sales->fill($request->all());
    
            $sales->save();
    
            return response()
                ->json(['saved' => true, 'id' => $sales->id]);
         
    }
    public function destroy($id)
    {
        $delete = sales::findOrFail($id);
        $delete->delete();

        return response()
            ->json(['deleted' => true]);
    }
}


