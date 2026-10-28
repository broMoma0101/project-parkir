<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\Api\MembershipController;
use App\Http\Controllers\Api\TypeKendaraanController;
use App\Http\Controllers\Api\RateController;
use App\Http\Controllers\Api\ParkingController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/registers', [RegisterController::class, 'store']); 

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logoutPost']);

    Route::get('/registers', [RegisterController::class, 'index']);    
    Route::get('/registers/{id}', [RegisterController::class, 'show']);  
    Route::put('/registers/{id}', [RegisterController::class, 'update']);
    Route::delete('/registers/{id}', [RegisterController::class, 'destroy']); 

    Route::get('/employees', [EmployeeController::class, 'index']);
    Route::post('/employees', [EmployeeController::class, 'store']);
    Route::get('/employees/{id}', [EmployeeController::class, 'show']);
    Route::put('/employees/{id}', [EmployeeController::class, 'update']);
    Route::delete('/employees/{id}', [EmployeeController::class, 'destroy']);

    Route::get('/memberships', [MembershipController::class, 'index']);
    Route::post('/memberships', [MembershipController::class, 'store']);
    Route::get('/memberships/{id}', [MembershipController::class, 'show']);
    Route::put('/memberships/{id}', [MembershipController::class, 'update']);
    Route::delete('/memberships/{id}', [MembershipController::class, 'destroy']);

    Route::get('/type-kendaraans', [TypeKendaraanController::class, 'index']);
    Route::post('/type-kendaraans', [TypeKendaraanController::class, 'store']);
    Route::get('/type-kendaraans/{id}', [TypeKendaraanController::class, 'show']);
    Route::put('/type-kendaraans/{id}', [TypeKendaraanController::class, 'update']);
    Route::delete('/type-kendaraans/{id}', [TypeKendaraanController::class, 'destroy']);

    Route::get('/rates', [RateController::class, 'index']);
    Route::post('/rates', [RateController::class, 'store']);
    Route::get('/rates/{id}', [RateController::class, 'show']);
    Route::put('/rates/{id}', [RateController::class, 'update']);
    Route::delete('/rates/{id}', [RateController::class, 'destroy']);

    Route::get('/parkings', [ParkingController::class, 'index']);
    Route::post('/parkings', [ParkingController::class, 'store']);
    Route::get('/parkings/{id}', [ParkingController::class, 'show']);
    Route::put('/parkings/{id}', [ParkingController::class, 'update']);
    Route::delete('/parkings/{id}', [ParkingController::class, 'destroy']);

});