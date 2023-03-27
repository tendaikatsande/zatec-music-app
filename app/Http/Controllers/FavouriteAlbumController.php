<?php

namespace App\Http\Controllers;

use App\Models\FavouriteAlbum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class FavouriteAlbumController extends Controller
{

    protected $favouriteAlbum;
    public function __construct(FavouriteAlbum $favouriteAlbum)
    {
        $this->favouriteAlbum = $favouriteAlbum;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $favourites = $this->favouriteAlbum::paginate(8);
        // dd($favourites);
        return Inertia::render('Layout/components/favouriteAlbums', ['user' => Auth::user(), 'favourites' => $favourites]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $user = Auth::user();
        //


        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
                'artist' => 'required',
                'mbid' => ''
            ]
        );


        if ($validator->fails()) {
            return back()->with(["error" => "Incomplete Data"]);
        }



        //check if the album is favourited before
        $exist = $this->favouriteAlbum::where('name', $request->input('name'))->where('artist', $request->input('artist'))->orWhere('mbid', $request->input('mbid'))->first();


        if ($exist) {
            return back()->with(["error" => "Album already in your favourites"]);
        }


        $favourite = new FavouriteAlbum();

        $favourite->fill($request->all());

        $favourite->user()->associate($user);
        $favourite->save();

        return back()->with(["success" => "Album favourated"]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $this->favouriteAlbum->destroy($id);
        return back()->with(["success" => "Album unfavourated"]);
    }
}
