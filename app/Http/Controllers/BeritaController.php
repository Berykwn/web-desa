<?php

namespace App\Http\Controllers;

use App\Http\Requests\BeritaRequest;
use App\Models\Berita;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{

    private function getAgenda()
    {
        return Berita::latest()->get();
    }

    private function getAgendaPerPage($perPage)
    {
        return Berita::latest()->paginate($perPage);
    }

    public function userBerita()
    {
        return Inertia::render("Berita", [
            'pages' => PageGeneratorController::getPage('Berita', 'Berita', 'berita'),
            'berita' => $this->getAgendaPerPage(8),
            'allBerita' => $this->getAgenda(),
        ]);
    }

    public function userShowBerita(Berita $berita, Request $request)
    {
        $beritaDetail = $berita->find($request->id);

        return Inertia::render('DetailBerita', [
            'berita' => $beritaDetail,
            'pages' => PageGeneratorController::getPage('Detail Berita', 'Berita', 'berita.show'),
        ]);
    }

    public function index()
    {
        return Inertia::render('Admin/Berita/Berita', [
            'pages' => PageGeneratorController::getPage('Dashboard Berita', 'Berita', 'dashboard.berita'),
            'berita' => $this->getAgendaPerPage(8),
            'allBerita' => $this->getAgenda(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Berita/Tambah', [
            'pages' => PageGeneratorController::getPage('Tambah Berita', 'Berita', 'dashboard.berita.create'),
        ]);
    }

    public function store(BeritaRequest $request)
    {
        // Validasi data input berdasarkan aturan yang telah didefinisikan dalam kelas BeritaRequest
        $validatedData = $request->validated();

        // Ambil data gambar dari data yang telah divalidasi
        $gambar = $validatedData['gambar'];

        // Buat nama unik untuk gambar berdasarkan waktu, nama file asli, dan ekstensi file
        $namaGambar = time() . '_' . Str::slug(pathinfo($gambar->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $gambar->getClientOriginalExtension();

        // Coba menyimpan gambar ke lokasi 'img/beritas/'. Jika gagal, kembalikan ke halaman sebelumnya dengan pesan kesalahan.
        if (!$gambar->storeAs('img/beritas/', $namaGambar)) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload foto.');
        }

        // Buat instance baru dari model Berita dan simpan ke dalam database dengan data yang telah divalidasi dan nama gambar yang telah dihasilkan
        Berita::create(array_merge($validatedData, ['gambar' => $namaGambar]));

        // Jika penyimpanan berhasil, arahkan pengguna ke rute 'dashboard.berita' dengan pesan sukses.
        return redirect()->route('dashboard.berita')->with('message', 'Data berita berhasil ditambahkan.');
    }


    public function show(Berita $berita, Request $request)
    {
        $beritaDetail = $berita->find($request->id);

        return Inertia::render('Admin/Berita/Detail', [
            'berita' => $beritaDetail,
            'pages' => PageGeneratorController::getPage('Detail Berita', 'Berita', 'dashboard.berita.show'),
        ]);
    }

    public function edit(Berita $berita, Request $request)
    {
        $berita = $berita->find($request->id);

        return Inertia::render('Admin/Berita/Edit', [
            'berita' => $berita,
            'pages' => PageGeneratorController::getPage('Edit Berita', 'Berita', 'dashboard.berita.edit'),

        ]);
    }

    public function update(BeritaRequest $request, Berita $berita, $id)
    {
        $existingBerita = Berita::findOrFail($id);

        $validatedData = $request->validated();

        $gambarName = $existingBerita->gambar;

        // Periksa apakah ada file gambar baru
        if ($request->hasFile('gambar')) {
            $gambar = $validatedData['gambar'];

            // membuat unique file name
            $gambarName = time() . '_' . Str::slug(pathinfo($gambar->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $gambar->getClientOriginalExtension();

            // masukan gambar baru ke database
            if (!$gambar->storeAs('img/beritas/', $gambarName)) {
                return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload foto.');
            }
        }

        // Gabungkan data terupdate dan update berita yang ada
        $existingBerita->update(array_merge($validatedData, ['gambar' => $gambarName]));

        // redirect ke dashboard.berita dengan pesan success
        return redirect()->route('dashboard.berita')->with('message', 'Data berita berhasil diupdate.');
    }

    public function destroy(Berita $berita, Request $request)
    {
        $berita = Berita::find($request->id);

        //cek apakah di storage ada foto
        if (Storage::exists('img/beritas' . $berita->gambar)) {
            Storage::delete('img/beritas' . $berita->gambar);
        }

        $berita->delete();

        return redirect()->route('dashboard.berita')->with('message', 'Data berita berhasil dihapus!');
    }
}
