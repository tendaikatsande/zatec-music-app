<?php

namespace App\Http\Controllers;

use App\Models\FavouriteArtist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FavouriteArtistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $favourites = FavouriteArtist::paginate(8);
        return Inertia::render('Layout/components/favouriteArtists', ['user' => Auth::user(), 'favourites' => $favourites]);
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

        $user = Auth::user();
        //
        $validated =  $request->validate([
            'name' => ['required'],
            'mbid' => [],
        ]);

        //check if the album is favourited before
        $exist = FavouriteArtist::where('name', $request->input('name'))->orWhere('mbid', $request->input('mbid'))->first();

        if ($exist) {
            return back()->with(["error" => "Artist already in your favourites"]);
        }

        $favourite = new FavouriteArtist();
        $favourite->fill($request->all());
        $favourite->user()->associate($user);
        $favourite->save();
        return back()->with(["success" => "Artist favourited"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(FavouriteArtist $favouriteArtist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FavouriteArtist $favouriteArtist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FavouriteArtist $favouriteArtist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FavouriteArtist $favouriteArtist, $id)
    {
        //
        $favouriteArtist->destroy($id);
        return back()->with(["success" => "Artist unfavourited"]);
    }
}
