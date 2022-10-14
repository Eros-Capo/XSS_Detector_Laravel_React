<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BackendController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{path?}', 'app');
Route::post('/formrequest',[BackendController::class, 'ReceiveFormData']);
Route::post('/formxss', [BackendController::class, 'ReceiveFormXss'])->middleware('getdom');
//Route::post('/doc', [BackendController::class, 'RestDoc']);

//Route::middleware('getdom')->group( function () {
//    Route::
//});
