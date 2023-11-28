<?php

namespace App\Http\Controllers;

use App\Http\Requests\AlbumRequest;
use App\Models\Album;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AlbumController extends Controller
{
    public function userAlbumPage()
    {
        return Inertia::render('Album', [
            'pages' => PageGeneratorController::getPage('Album', 'Album', 'album'),
            'album' => Album::latest()->paginate(12),
        ]);
    }

    public function index()
    {
        return Inertia::render('Admin/Album/Album', [
            'pages' => PageGeneratorController::getPage('Dashboard Album', 'Album', 'dashboard.album'),
            'album' => Album::latest()->paginate(8),
            'allAlbum' => Album::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Album/Tambah', [
            'pages' => PageGeneratorController::getPage('Tambah Album', 'Album', 'dashboard.album.create'),

        ]);
    }

    public function store(AlbumRequest $request)
    {
        // Validasi data input berdasarkan aturan yang telah didefinisikan dalam kelas BeritaRequest
        $validatedData = $request->validated();

        // Ambil data gambar dari data yang telah divalidasi
        $gambar = $validatedData['gambar'];

        // Buat nama unik untuk gambar berdasarkan waktu, nama file asli, dan ekstensi file
        $namaGambar = time() . '_' . Str::slug(pathinfo($gambar->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $gambar->getClientOriginalExtension();

        // Coba menyimpan gambar ke lokasi 'img/beritas/'. Jika gagal, kembalikan ke halaman sebelumnya dengan pesan kesalahan.
        if (!$gambar->storeAs('img/albums/', $namaGambar)) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload foto.');
        }

        // Buat instance baru dari model Berita dan simpan ke dalam database dengan data yang telah divalidasi dan nama gambar yang telah dihasilkan
        Album::create(array_merge($validatedData, ['gambar' => $namaGambar]));

        // Jika penyimpanan berhasil, arahkan pengguna ke rute 'dashboard.berita' dengan pesan sukses.
        return redirect()->route('dashboard.album')->with('message', 'Data album berhasil ditambahkan.');
    }

    public function destroy(Album $album, Request $request)
    {
        $album = Album::find($request->id);

        //cek apakah di storage ada foto
        if (Storage::exists('img/albums' . $album->gambar)) {
            Storage::delete('img/albums' . $album->gambar);
        }

        $album->delete();

        return redirect()->route('dashboard.album')->with('message', 'Data album berhasil dihapus!');
    }
}
