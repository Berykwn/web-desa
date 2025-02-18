<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;
use Inertia\Inertia;
use App\Http\Requests\BarangRequest;

class BarangController extends Controller
{
    private function getBarang()
    {
        return Barang::latest()->get();
    }

    private function getBarangPerPage($perPage)
    {
        return Barang::latest()->paginate($perPage);
    }

    public function index()
    {
        return Inertia::render("Admin/Barang/Barang", [
            'pages' => PageGeneratorController::getPage('Dashboard Barang', 'Barang', 'dashboard.barang'),
            'barang' => $this->getBarangPerPage(8),
            'allBarang' => $this->getBarang(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Barang/Tambah', [
            'pages' => PageGeneratorController::getPage('Tambah Barang', 'Barang', 'dashboard.Barang.create'),
        ]);
    }

    public function store(BarangRequest $request)
    {
        Barang::create($request->validated());

        return redirect()->route('dashboard.barang')->with('message', 'Data barang berhasil ditambahkan.');
    }

    public function show(Barang $barang, Request $request)
    {
        $barangDetail = $barang->find($request->id);

        return Inertia::render('Admin/Barang/Detail', [
            'barang' => $barangDetail,
            'pages' => PageGeneratorController::getPage('Detail Barang', 'Barang', 'dashboard.barang.show'),
        ]);
    }

    public function edit(Barang $barang, Request $request)
    {
        $barang = $barang->find($request->id);

        return Inertia::render('Admin/Barang/Edit', [
            'barang' => $barang,
            'pages' => PageGeneratorController::getPage('Edit Barang', 'Barang', 'dashboard.barang.edit'),
        ]);
    }

    public function update(BarangRequest $request, $id)
    {
        $barang = Barang::findOrFail($id); // cari data berdasarkan id

        $barang->update($request->validated()); // update data yang lolos validasi

        return redirect()->route('dashboard.barang')->with('message', 'Data barang berhasil diupdate.');
    }

    public function destroy(Barang $barang, Request $request)
    {
        $barang = Barang::find($request->id);

        $barang->delete();

        return redirect()->route('dashboard.barang')->with('message', 'Data barang berhasil dihapus!');
    }
}
