<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TentangDesaController extends Controller
{
    public function index()
    {
        return Inertia::render("TentangDesa", [
            'pages' => PageGeneratorController::getPage('Tentang Desa', 'Tentang Desa', 'tentang.desa')
        ]);
    }
}
