<?php

use App\Http\Controllers\FavouriteAlbumController;
use App\Http\Controllers\FavouriteArtistController;
use App\Http\Controllers\LastFmController;
use App\Http\Controllers\LoginController;
use App\Models\FavouriteAlbum;
use App\Models\FavouriteArtist;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


//Auth Routes
Route::get('/', [LastFmController::class, 'getAlbums']);
Route::get('signout', [LoginController::class, 'signOut']);
Route::get('auth/google', [LoginController::class, 'redirectToGoogle']);
Route::get('auth/google/callback', [LoginController::class, 'handleGoogleCallback']);

//Last Fm Routes
Route::get('/search/albums', [LastFmController::class, 'getAlbums']);
Route::get('/search/artists', [LastFmController::class, 'getArtists']);


Route::get('albums/{album}/{artist}', [LastFmController::class, 'getAlbumInfo']);
Route::get('artists/{artist}', [LastFmController::class, 'getArtistInfo']);


Route::prefix('favourite')->middleware(['auth'])->group(function () {
    Route::resource('/album', FavouriteAlbumController::class);
    Route::resource('/artist', FavouriteArtistController::class);
});
