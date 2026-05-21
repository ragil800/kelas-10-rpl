<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Visitor; // Tambahkan ini agar bisa panggil data pengunjung
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index()
    {
        return response()->json([
            'nama' => 'Muhamad Ragil Dzikrillah',
            'kelas' => 'X-RPL',
            'absen' => '22',
            'sekolah' => 'SMKN 2 Buduran',               
            'bio' => 'Halo, saya Ragil, seorang pengembang perangkat lunak...',
            'hobi' => ['Main Game', 'Memelihara Ikan']
        ]);
    }

    // TAMBAHKAN FUNGSI INI UNTUK REKAP
    public function rekap()
    {
        return response()->json(Visitor::all());
    }
}