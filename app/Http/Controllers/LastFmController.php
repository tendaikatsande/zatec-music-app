<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class LastFmController extends Controller
{
    private $lastFmApi;
    private $lastFmApiKey;
    public function __construct()
    {
        $this->lastFmApi =  Config('app.last_fm_api');
        $this->lastFmApiKey = env('LAST_FM_API_KEY');
    }

    public function index(Request $request)
    {
        $albums = [];
        $term = $request->input('q');
        $page = $request->input('page') ?? 1;
        if ($term) {
            $response = Http::get("$this->lastFmApi?method=album.search&album=$term&api_key=$this->lastFmApiKey&format=json&page=$page&limit=10");
            $albums = $response->json();
            $albums = isset($albums['results']['albummatches']['album']) ? $albums['results']['albummatches']['album'] : [];
            // dd($albums);
        }
        return Inertia::render('Layout/components/search', ['albums' => $albums, 'term' => $term, 'page' => $page, 'user'=>Auth::user()]);
    }

    public function show(Request $request, $album, $artist)
    {
        if ($album && $artist) {

            $response = Http::get("$this->lastFmApi?method=album.getInfo&api_key=$this->lastFmApiKey&album=$album&artist=$artist&format=json");
            $albumData = $response->json();
            dd($albumData);
        }
        return Inertia::render('Layout/components/viewAlbum', [ 'user'=>Auth::user()]);
    }

    public function getAlbumInfo(Request $request, $album, $artist)
    {
        $albumData= null;
        if ($album && $artist) {

            $response = Http::get("$this->lastFmApi?method=album.getInfo&api_key=$this->lastFmApiKey&album=$album&artist=$artist&format=json");
            $albumData = $response->json();
            // dd($albumData['album']);
            $albumData = $albumData['album'];
        }
        return Inertia::render('Layout/components/viewAlbum', ['album'=>$albumData, 'user'=>Auth::user()]);
    }
}
