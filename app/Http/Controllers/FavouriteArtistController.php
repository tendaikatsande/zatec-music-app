<?php

namespace App\Http\Controllers;

use App\Models\FavouriteArtist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class FavouriteArtistController extends Controller
{


    protected $favouriteArtist;
    public function __construct(FavouriteArtist $favouriteArtist)
    {
        $this->favouriteArtist = $favouriteArtist;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $favourites = $this->favouriteArtist::paginate(8);
        return Inertia::render('Layout/components/favouriteArtists', ['user' => Auth::user(), 'favourites' => $favourites]);
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
                'mbid' => ''
            ]
        );


        if ($validator->fails()) {
            return back()->with(["error" => "Incomplete Data"]);
        }

        //check if the album is favourited before
        $exist = $this->favouriteArtist::where('name', $request->input('name'))->orWhere('mbid', $request->input('mbid'))->first();

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
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $this->favouriteArtist->destroy($id);
        return back()->with(["success" => "Artist unfavourited"]);
    }
}
