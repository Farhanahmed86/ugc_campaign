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
use App\Http\Controllers\UgcControllere;
use App\Http\Controllers\UgcproductController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\InfluencerController;












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
Route::resource('/api/influencers', InfluencerController::class);

Route::resource('/api/accounts', AccountController::class);






Route::get('/api/customers', [CustomerController::class,'create']);


Route::get('/api/ledgers', [LedgerController::class,'index']);
Route::get('/api/accounts_ledger/{accountTypeId}', [LedgerController::class,'accounts_ledger']);

Route::get('/api/trails', [LedgerController::class,'trails']);
Route::get('/api/pl', [VoucherController::class,'pl']);
Route::get('/api/balance', [VoucherController::class,'balance']);
Route::get('/api/sheet', [BalanceController::class,'index']);
Route::post('api/import', [VoucherController::class, 'importView']);
Route::post('api/objective', [UgcControllere::class, 'objective']);
Route::post('api/flages', [UgcControllere::class, 'flages']);
Route::post('api/platefrom', [UgcControllere::class, 'platefrom']);
Route::post('api/action_type', [UgcControllere::class, 'action_type']);
Route::post('api/hire', [UgcControllere::class, 'hire']);

Route::post('api/campaigns', [UgcControllere::class, 'campaigns']);
Route::post('api/ugc_product', [UgcproductController::class, 'ugcproduct']);
Route::post('api/ugc_product_delivery', [UgcproductController::class, 'ugcproductdelivery']);
Route::post('api/ugc_product_media', [UgcproductController::class, 'ugcproductmedia']);
Route::post('api/ugc_product_action', [UgcproductController::class, 'ugcproductaction']);
Route::post('api/brief', [UgcproductController::class, 'brief']);
Route::get('api/brand', [UgcproductController::class, 'brand']);
Route::get('api/brand_details', [UgcproductController::class, 'brand_details']);

Route::get('api/query', [AdminController::class, 'get_user']);
Route::get('api/camp', [AdminController::class, 'camp']);
Route::get('api/use', [AdminController::class, 'users']);
Route::get('api/campaignss', [AdminController::class, 'campaign']);
Route::get('api/details', [AdminController::class, 'details']);
Route::get('api/user_details', [AdminController::class, 'userdetails']);
Route::get('api/solo_inf', [InfluencerController::class, 'influencer']);
Route::get('api/influencer_email', [InfluencerController::class, 'email']);
Route::get('api/get_influencer', [InfluencerController::class, 'get_influencer']);
Route::get('api/favorite', [InfluencerController::class, 'favorite']);



Route::post('api/contract', [UgcproductController::class, 'contract']);
Route::post('api/post_influencers', [UgcControllere::class, 'post_influencer']);














Route::get('api/get_campaigns', [UgcControllere::class, 'getcampaign']);






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
