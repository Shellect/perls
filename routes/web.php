<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/about', function () {
    return Inertia::render('About');
})->middleware(['auth', 'verified'])->name('about');

Route::get('/history', function () {
    return Inertia::render('History');
})->middleware(['auth', 'verified'])->name('history');

Route::get('/type', function () {
    return Inertia::render('Type');
})->middleware(['auth', 'verified'])->name('type');

Route::get('/inshop', function () {
    return Inertia::render('Inshop');
})->middleware(['auth', 'verified'])->name('inshop');

Route::get('/catalog', function() {
    return Inertia::render('Shop/Catalog');
})->middleware(['auth', 'verified'])->name('catalog');



require __DIR__.'/auth.php';
