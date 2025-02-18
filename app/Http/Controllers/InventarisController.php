<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;
use App\Models\BarangMasuk;
use App\Models\BarangKeluar;
use Inertia\Inertia;
use App\Http\Requests\BarangMasukRequest;
use App\Http\Requests\BarangKeluarRequest;

class InventarisController extends Controller
{
    private function getBarang()
    {
        return Barang::latest()->get();
    }

    private function getBarangMasuk()
    {
        return BarangMasuk::latest()->with('barang')->get();
    }

    private function getBarangMasukPerPage($perPage)
    {
        return BarangMasuk::latest()->with('barang')->paginate($perPage);
    }

    private function getBarangKeluar()
    {
        return BarangKeluar::latest()->with('barang')->get();
    }

    private function getBarangKeluarPerPage($perPage)
    {
        return BarangKeluar::latest()->with('barang')->paginate($perPage);
    }

    public function index() {
        return Inertia::render("Admin/Inventaris/Inventaris", [
            'pages' => PageGeneratorController::getPage('Dashboard Inventaris', 'Inventaris', 'dashboard.inventaris'),
            'barangMasuk' => $this->getBarangMasukPerPage(8),
            'allBarangMasuk' => $this->getBarangMasuk(),
            'barangKeluar' => $this->getBarangKeluarPerPage(8),
            'allBarangKeluar' => $this->getBarangKeluar(),
        ]);
    }

    public function createBarangMasuk()
    {
        return Inertia::render('Admin/Inventaris/TambahBarangMasuk', [
            'pages' => PageGeneratorController::getPage('Tambah Barang Masuk', 'Barang Masuk', 'dashboard.inventaris.create.barang.masuk'),
            'allBarang' => $this->getBarang(),
        ]);
    }

    public function storeBarangMasuk(BarangMasukRequest $request)
    {
        BarangMasuk::create($request->validated());

        return redirect()->route('dashboard.inventaris')->with('message', 'Data barang masuk berhasil ditambahkan.');
    }

    public function destroyBarangMasuk(BarangMasuk $barangMasuk, Request $request)
    {
        $barangMasuk = BarangMasuk::find($request->id);

        $barangMasuk->delete();

        return redirect()->route('dashboard.inventaris')->with('message', 'Data barang masuk berhasil dihapus!');
    }

    public function createBarangKeluar()
    {
        return Inertia::render('Admin/Inventaris/TambahBarangKeluar', [
            'pages' => PageGeneratorController::getPage('Tambah Barang Keluar', 'Barang Keluar', 'dashboard.inventaris.create.barang.keluar'),
            'allBarang' => $this->getBarang(),
        ]);
    }

    public function storeBarangKeluar(BarangKeluarRequest $request)
    {
        BarangKeluar::create($request->validated());

        return redirect()->route('dashboard.inventaris')->with('message', 'Data barang keluar berhasil ditambahkan.');
    }

    public function destroyBarangKeluar(BarangKeluar $barangKeluar, Request $request)
    {
        $barangKeluar = BarangKeluar::find($request->id);

        $barangKeluar->delete();

        return redirect()->route('dashboard.inventaris')->with('message', 'Data barang keluar berhasil dihapus!');
    }
}
