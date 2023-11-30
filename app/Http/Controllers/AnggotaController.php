<?php

namespace App\Http\Controllers;

use App\Models\Anggota;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnggotaController extends Controller
{
    private function getAnggota()
    {
        return Anggota::latest()->get();
    }

    private function getAnggotaPerPage($perPage)
    {
        return Anggota::latest()->paginate($perPage);
    }

    public function index()
    {
        return Inertia::render("Admin/Anggota/Anggota", [
            'pages' => PageGeneratorController::getPage('Dashboard Anggota', 'Anggota', 'dashboard.anggota'),
            'anggota' => $this->getAnggotaPerPage(8),
            'allAnggota' => $this->getAnggota(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Anggota $anggota)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Anggota $anggota)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Anggota $anggota)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Anggota $anggota)
    {
        //
    }
}
