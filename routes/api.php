<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;
use App\Http\Controllers\DashboardControler;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\VoucherController;
use App\Http\Controllers\chartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\LedgerController;
use App\Http\Controllers\BalanceController;
use App\Http\Controllers\CountriesController;







/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [Api\AuthController::class, 'login']);
Route::get('/api/dashboard', [DashboardControler::class,'index']);
Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('registered', [Api\RegisterController::class, 'registered']);

Route::post('company_register', [Api\RegisterController::class, 'company']);
Route::post('company_types', [Api\RegisterController::class, 'company_type']);
Route::post('company_category', [Api\RegisterController::class, 'category']);
Route::post('company_recommandation', [Api\RegisterController::class, 'recommandation']);




Route::post('forgot', [Api\ForgotController::class, 'forgot']);
Route::post('reset', [Api\ForgotController::class, 'reset']);
Route::get('email/resend/{user}', [Api\VerifyController::class, 'resend'])->name('verification.resend');
Route::get('email/verify/{id}', [Api\VerifyController::class, 'verify'])->name('verification.verify');; // Make sure to keep this as your route name

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/api/admin', [DashboardControler::class,'index']);

    Route::resource('/api/transactions', TransactionController::class);
Route::resource('/api/vendors', VendorController::class);
Route::resource('/api/customers', CustomerController::class);
Route::resource('/api/sales', SalesController::class);
Route::resource('/api/inventory', InventoryController::class);
Route::resource('/api/invoices', InvoiceController::class);
Route::resource('/api/vouchers', VoucherController::class);
Route::resource('/api/accounts', AccountController::class);






Route::get('/api/customers', [CustomerController::class,'create']);


Route::get('/api/ledgers', [LedgerController::class,'index']);
Route::get('/api/accounts_ledger/{accountTypeId}', [LedgerController::class,'accounts_ledger']);

Route::get('/api/trails', [LedgerController::class,'trails']);
Route::get('/api/pl', [VoucherController::class,'pl']);
Route::get('/api/balance', [VoucherController::class,'balance']);
Route::get('/api/sheet', [BalanceController::class,'index']);
Route::post('api/import', [VoucherController::class, 'importView']);
// Route::post('api/register_company', [VoucherController::class, 'company']);
Route::post('api/register_company', [Api\RegisterController::class, 'company']);











Route::get('/api/customers', [CustomerController::class,'search']);
Route::get('/api/search/accounts', [chartController::class,'dropdown']);
Route::get('/api/search/assets', [chartController::class,'filter']);
Route::get('/api/search/countries', [CountriesController::class,'search']);
Route::get('/api/search/about', [CountriesController::class,'about']);


Route::get('/api/search/liablities', [chartController::class,'typeahead']);
Route::get('/api/search/account_type', [chartController::class,'accounts']);



Route::get('/api/search/account', [chartcontroller::class,'abcd']);
Route::get('/api/search/voucher', [LedgerController::class,'search']);

Route::get('/api/search/account_code', [AccountController::class,'search']);




Route::get('/api/search/products', [ProductController::class,'search']);


Route::get('/api/customers', [CustomerController::class,'index']);
Route::get('/api/transactions', [TransactionController::class,'index']);


Route::get('/api/search/vendors', [VendorController::class,'search']);
Route::get('/api/search/vouchertype', [VoucherController::class,'search']);

Route::get('/api/search/customers', [CustomerController::class,'search']);
Route::get('/api/search/inventory', [InventoryController::class,'search']);
Route::get('/api/get/inventory', [InventoryController::class,'get']);
Route::get('/api/inventory/stock', [InventoryController::class,'stock']);
Route::get('/api/chart/search', [chartController::class,'search']);
// Route::get('/api/auth_users', [chartController::class,'search']);
Route::get('/api/auth_users', [Api\AuthController::class,'users_data']);






});
