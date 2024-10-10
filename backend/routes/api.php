<?php

use App\Http\Controllers\PostController;
use App\Http\Middleware\Cors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');

Route::get('/posts', [PostController::class,'index']);

Route::post('/posts', [PostController::class, 'store'])->middleware(Cors::class);

Route::get('/posts/{post}', [PostController::class, 'show']);

Route::delete('/posts/{post}', [PostController::class, 'destroy']);

Route::patch('/posts/{post}', [PostController::class, 'update'])->middleware(Cors::class);

