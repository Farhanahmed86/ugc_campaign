<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ugcproduct;

class UgcproductController extends Controller
{
     public function ugcproduct(Request $request){
        // dd($request->all());


        $request->validate([
            'product_name' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the file types and size as needed
        ]);
    
        // Store the uploaded image in the storage folder
        // $imagePath = $request->file('image')->store('your-storage-folder');
        $imagePath = $request->file('image')->store('images', 'local');
    
        // Create a new database record to save form data
        $product = new Ugcproduct();
        $product->product_name = $request->input('product_name');
        $product->product_description = $request->input('product_description');
        $product->start_of_application = $request->input('start_of_application');
        $product->end_of_application = $request->input('end_of_application');
        $product->number_of_product = $request->input('number_of_product');
        $product->campaign_id = $request->input('id');
        $product->auth_id = auth()->user()->id;






        $product->product_image = $imagePath; // Save the image path in the database
        $product->save();
    
        return response()->json(['saved' => true , 'id' =>$request->input('id')]);
     }


     public function ugcproductdelivery(Request $request){
        $product = Ugcproduct::where('campaign_id' , $request->id)->first();
        $product->delivery_product_receive = $request->product_receive;
        $product->delivery_description = $request->delivery_description;
        $product->delivery_product_url = $request->delivery_product_url;
        $product->save();

        return response()->json(['saved' => true , 'id' =>$request->id]);


     }
     public function ugcproductmedia(Request $request){
        // dd($request->all());
        $product = Ugcproduct::where('campaign_id' , $request->id)->first();
        $product->media_type = $request->media_type;
        $product->media_type_socail = $request->media_type_socail;
        $product->media_type_videolenght = $request->media_type_videolenght;
        $product->media_type_raw = $request->media_type_raw;

        $product->save();

        return response()->json(['saved' => true , 'id' =>$request->id]);


     }


     public function ugcproductaction(Request $request){
        // dd($request->all());
        $product = Ugcproduct::where('campaign_id' , $request->id)->first();
        $product->action_type_whitelist = $request->action_type_whitelist;
        $product->action_type_video = $request->action_type_video;
        $product->action_type_instruction = $request->action_type_instruction;
        $product->action_type_plateform = $request->action_type_plateform;
        $product->action_type_hiring = $request->action_type_hiring;


        $product->save();

        return response()->json(['saved' => true , 'id' =>$request->id]);


     }

     
}
