<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Vue SPA fallback
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

// Auth routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Protected route
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});