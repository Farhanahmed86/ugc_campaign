<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Account_codes;

class AccountController extends Controller
{
    public function search()
    {
        $results = Account_codes::orderBy('title')
        ->when(request('q'), function($query) {
            $query->where('id', 'like', '%'.request('q').'%')
                ->orWhere('title', 'like', '%'.request('q').'%');
        })
        ->limit(6)
        ->get();

    return response()
        ->json(['results' => $results]);
    }
    public function index()
    {
        $results = Account_codes::orderBy('created_at')
            ->paginate(15);

        return response()
            ->json(['results' => $results]);


    }

    public function create()
    {
        $Account_codes = new Account_codes();
        
        $form = [
            'title' => null,
            'date' => null,
            
            
           
            
        ];
        return response()
        ->json(['form' => $form]);
    }
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([ $request,
            'account_code_name' => 'required|max:50',
            'date' => 'required|',
        ]);
        // $Inventory = Inventory::where( $request->id,'Account_codes_id' )->first();
            $account = Account_codes::count();
            // dd($account);
            $Account_codes = new Account_codes();
            $Account_codes->title = $request->account_code_name;
            $Account_codes->date = $request->date;

            $Account_codes->account_code = 'ACC-'.$account;

            // $Account_codes->fill($request->all());
            // $Account_codes->total_purchase = $Inventory->total_payment;
    
            $Account_codes->save();
            
    
            return response()
                ->json(['saved' => true, 'id' => $Account_codes->id]);
         
    }
    public function show($id){
    
        $model = Account_codes::with('transaction','paymentmethod', 'inventory')->findorfail($id);
        return response()->json(['model' =>$model]);
    }
    public function edit($id){
    
        $form = Account_codes::findorfail($id);
        return response()->json(['form' =>$form]);
    }
    public function update( $id ,Request $request)
    {
        $request->validate([ $request,
        'firstname' => 'required|max:50',
        'lastname' => 'required|',
        'email' => 'required|',
        ]);
            $Account_codes = Account_codes::findorfail($id);;
            $Account_codes->fill($request->all());
    
            $Account_codes->save();
    
            return response()
                ->json(['saved' => true, 'id' => $Account_codes->id]);
         
    }
    public function destroy($id)
    {
        $delete = Account_codes::findOrFail($id);
        $delete->delete();

        return response()
            ->json(['deleted' => true]);
    }
}
