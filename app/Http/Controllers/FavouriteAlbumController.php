<?php

namespace App\Http\Controllers;

use App\Models\FavouriteAlbum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FavouriteAlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $favourites = FavouriteAlbum::paginate(10);
        dd($favourites);
        return Inertia::render('Layout/components/favouriteAlbums', ['user' => Auth::user(), 'favourites' => $favourites]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)



    {

        $user = Auth::user();
        //
        $validated =  $request->validate([
            'name' => ['required'],
            'artist' => ['required'],
            'mbid' => [],
        ]);

        $favourite = new FavouriteAlbum();
        $favourite->fill($request->all());
        $favourite->user()->associate($user);
        $favourite->save();
        return to_route('/favourite/albums');
    }

    /**
     * Display the specified resource.
     */
    public function show(FavouriteAlbum $favouriteAlbum)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FavouriteAlbum $favouriteAlbum)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FavouriteAlbum $favouriteAlbum)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FavouriteAlbum $favouriteAlbum)
    {
        //
    }
}
