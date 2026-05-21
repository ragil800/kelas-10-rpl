<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProfileController; 
use App\Models\Visitor;
use Illuminate\Http\Request;

// 1. Route untuk ambil profil kamu
Route::get('/profile', [ProfileController::class, 'index']);

// 2. Route untuk simpan visitor (dari form React)
Route::post('/visitors', function(Request $request) {
    Visitor::create($request->all());
    return response()->json(['message' => 'Data direkap!']);
});

// 3. TAMBAHKAN INI: Route untuk melihat hasil rekap di browser
Route::get('/rekap', function() {
    return Visitor::all();
});