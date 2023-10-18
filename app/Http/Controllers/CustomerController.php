<?php

namespace App\Http\Controllers;
use App\Models\Customer;
use App\Models\Chart_of_account;

use Illuminate\Http\Request;
use DB;

class CustomerController extends Controller
{
    public function search()
    {
        $results = Customer::orderBy('firstname')
            ->when(request('q'), function($query) {
                $query->where('firstname', 'like', '%'.request('q').'%')
                    ->orWhere('lastname', 'like', '%'.request('q').'%')
                    ->orWhere('email', 'like', '%'.request('q').'%');
            })
            ->limit(6)
            ->get();

        return response()
            ->json(['results' => $results]);
    } 
    // public function index()
    // {
    //     $results = Customer::with('inventory')
    //         ->orderBy('created_at')
    //         ->paginate(15);

    //     return response()
    //         ->json(['results' => $results]);
    // }


    public function index()
    {
        $results = Chart_of_account::
            orderBy('created_at')
            ->paginate(15);

        return response()
            ->json(['results' => $results]);
    }

    public function create()
    {
        $customer = new Customer();
        
        $form = [
            'customer_id' => null,
            'firstname' => null,
            'lastname' => null,
            'email' => null,
           
            
        ];
        return response()
        ->json(['form' => $form]);
    }
    public function store(Request $request)
    {
        // dd($request->account_title);

        $account = Chart_of_account::where('chart_type' , $request->title)->count();
        // dd($account);
        $value = $request->chart['keys'] .'-'.  '0'. $request->key .'-'. $account;
        // dd($value);
        $request->validate([ $request,
            'chart_title' => 'required|max:50',
            'account_name' => 'required|',
           
            
        ]);
            $chart = new Chart_of_account();
            // $chart->fill($request->all());
            $chart->chart = $request->chart_title;
            $chart->chart_id = $request->chart_id;
            $chart->account_name = $request->account_name;
            $chart->amounts = $request->amount;
            $chart->chart_type = $request->title;
            $chart->chart_type_id = $request->id;
            $chart->value = $value;
            $chart->account_type = $request->account_title;
            $chart->balance = $request->amount;





            
            
            
            
            $chart->save();
            // dd($request->all());
    
            return response()
                ->json(['saved' => true, 'id' => $chart->id]);
         
    }
    public function show($id){
    
        $model = Chart_of_account::findorfail($id);
        return response()->json(['model' =>$model]);
    }
    public function edit($id){
    
        $form = Customer::findorfail($id);
        return response()->json(['form' =>$form]);
    }
    public function update( $id ,Request $request)
    {
        $request->validate([ $request,
        'firstname' => 'required|max:50',
        'lastname' => 'required|',
        'email' => 'required|',
        ]);
            $customer = Customer::findorfail($id);;
            $customer->fill($request->all());
    
            $customer->save();
    
            return response()
                ->json(['saved' => true, 'id' => $customer->id]);
         
    }
    public function destroy($id)
    {
        $delete = Customer::findOrFail($id);
        $delete->delete();

        return response()
            ->json(['deleted' => true]);
    }
}
