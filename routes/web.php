<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\VendorController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\DashboardControler;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/Route::resource('/api/transactions', TransactionController::class);
Route::resource('/api/vendors', VendorController::class);
Route::resource('/api/customers', CustomerController::class);
Route::resource('/api/sales', SalesController::class);
Route::resource('/api/inventory', InventoryController::class);
Route::resource('/api/invoices', InvoiceController::class);



Route::get('/api/customers', [CustomerController::class,'search']);
Route::get('/api/customers', [CustomerController::class,'index']);
Route::get('/api/transactions', [TransactionController::class,'index']);


Route::get('/api/search/vendors', [VendorController::class,'search']);
Route::get('/api/search/customers', [CustomerController::class,'search']);
Route::get('/api/search/inventory', [InventoryController::class,'search']);
Route::get('/api/get/inventory', [InventoryController::class,'get']);
Route::get('/api/inventory/stock', [InventoryController::class,'stock']);
Route::get('/api/dashboard', [DashboardControler::class,'index']);


Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
