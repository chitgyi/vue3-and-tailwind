<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoodsController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth', 'middleware' => ['auth:api', 'user']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/profile', [AuthController::class, 'userProfile']);


    Route::get('/goods', [GoodsController::class, 'index']);
});

Route::group(['middleware' => ['auth:api', 'user']], function () {
    Route::get('/goods', [GoodsController::class, 'index']);
});


Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});
