<?php

use App\Http\Controllers\AgendaController;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PerangkatDesaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TentangDesaController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\InventarisController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/agenda', [AgendaController::class, 'userAgenda'])->name('agenda');
Route::get('/agenda/detail', [AgendaController::class, 'userShowAgenda'])->name('agenda.show');
Route::get('/berita', [BeritaController::class, 'userBerita'])->name('berita');
Route::get('/berita/detail', [BeritaController::class, 'userShowBerita'])->name('berita.show');
Route::get('/album', [AlbumController::class, 'userAlbumPage'])->name('album');
Route::get('/tentangdesa', [TentangDesaController::class, 'index'])->name('tentang.desa');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard', [
            'pages' => [
                'title' => ' Dashboard',
                'name' => 'Dashboard',
                'url' => 'dashboard'
            ],
        ]);
    })->name('dashboard');

    Route::prefix('dashboard')->group(function () {
        Route::prefix('berita')->group(function () {
            Route::get('/', [BeritaController::class, 'index'])->name('dashboard.berita');
            Route::get('/tambah', [BeritaController::class, 'create'])->name('dashboard.berita.create');
            Route::get('/detail', [BeritaController::class, 'show'])->name('dashboard.berita.show');
            Route::get('/edit', [BeritaController::class, 'edit'])->name('dashboard.berita.edit');
            Route::post('/store', [BeritaController::class, 'store'])->name('dashboard.berita.store');
            Route::post('/update/{id}', [BeritaController::class, 'update'])->name('dashboard.berita.update');
            Route::post('/delete/{id}', [BeritaController::class, 'destroy'])->name('dashboard.berita.destroy');
        });

        Route::prefix('agenda')->group(function () {
            Route::get('/', [AgendaController::class, 'index'])->name('dashboard.agenda');
            Route::get('/tambah', [AgendaController::class, 'create'])->name('dashboard.agenda.create');
            Route::get('/detail', [AgendaController::class, 'show'])->name('dashboard.agenda.show');
            Route::get('/edit', [AgendaController::class, 'edit'])->name('dashboard.agenda.edit');
            Route::post('/store', [AgendaController::class, 'store'])->name('dashboard.agenda.store');
            Route::post('/update/{id}', [AgendaController::class, 'update'])->name('dashboard.agenda.update');
            Route::post('/delete/{id}', [AgendaController::class, 'destroy'])->name('dashboard.agenda.destroy');
        });

        Route::prefix('anggota')->group(function () {
            Route::get('/', [AnggotaController::class, 'index'])->name('dashboard.anggota');
        });

        Route::prefix('album')->group(function () {
            Route::get('/', [AlbumController::class, 'index'])->name('dashboard.album');
            Route::get('/tambah', [AlbumController::class, 'create'])->name('dashboard.album.create');
            Route::post('/store', [AlbumController::class, 'store'])->name('dashboard.album.store');
            Route::post('/delete/{id}', [AlbumController::class, 'destroy'])->name('dashboard.album.destroy');
        });

        Route::prefix('barang')->group(function () {
            Route::get('/', [BarangController::class, 'index'])->name('dashboard.barang');
            Route::get('/detail', [BarangController::class, 'show'])->name('dashboard.barang.show');
            Route::get('/tambah', [BarangController::class, 'create'])->name('dashboard.barang.create');
            Route::post('/store', [BarangController::class, 'store'])->name('dashboard.barang.store');
            Route::get('/edit', [BarangController::class, 'edit'])->name('dashboard.barang.edit');
            Route::post('/update/{id}', [BarangController::class, 'update'])->name('dashboard.barang.update');
            Route::post('/delete/{id}', [BarangController::class, 'destroy'])->name('dashboard.barang.destroy');
        });

        Route::prefix('inventaris')->group(function () {
            Route::get('/', [InventarisController::class, 'index'])->name('dashboard.inventaris');

            Route::get('/tambah/barangMasuk', [InventarisController::class, 'createBarangMasuk'])->name('dashboard.inventaris.create.barang.masuk');
            Route::post('/store/barangMasuk', [InventarisController::class, 'storeBarangMasuk'])->name('dashboard.inventaris.store.barang.masuk');
            Route::post('/delete/barangMasuk/{id}', [InventarisController::class, 'destroyBarangMasuk'])->name('dashboard.inventaris.destroy.barang.masuk');
            
            Route::get('/tambah/barangKeluar', [InventarisController::class, 'createBarangKeluar'])->name('dashboard.inventaris.create.barang.keluar');
            Route::post('/store/barangKeluar', [InventarisController::class, 'storeBarangKeluar'])->name('dashboard.inventaris.store.barang.keluar');
            Route::post('/delete/barangKeluar/{id}', [InventarisController::class, 'destroyBarangKeluar'])->name('dashboard.inventaris.destroy.barang.keluar');

        });
    });

    Route::prefix('profile')->group(function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});

require __DIR__ . '/auth.php';
