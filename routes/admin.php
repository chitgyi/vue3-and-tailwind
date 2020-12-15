<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoodsController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'auth', 'middleware' => ['auth:api','admin']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/profile', [AuthController::class, 'userProfile']);
});

Route::group(['middleware' => ['auth:api', 'admin']], function () {
    Route::post('/goods', [GoodsController::class, 'create']);
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AuthController::class, 'adminlogin']);
    Route::post('/register', [AuthController::class, 'adminregister']);
});