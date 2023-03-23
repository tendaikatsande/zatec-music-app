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
        $this->lastFmApiKey = Config('app.last_fm_api_key');
    }

    public function getAlbums(Request $request)
    {
        $albums = [];
        $totalResults = 0;
        $totalResults = 0;
        $pageSize = 10;
        $term = $request->input('q');
        $page = $request->input('page') ?? 1;
        if ($term) {
            $response = Http::get("$this->lastFmApi?method=album.search&album=$term&api_key=$this->lastFmApiKey&format=json&page=$page&limit=$pageSize");
            $albums = $response->json();
            $totalResults = $albums['results']['opensearch:totalResults'];
            $pageSize = $albums['results']['opensearch:itemsPerPage'];
            $albums = isset($albums['results']['albummatches']['album']) ? $albums['results']['albummatches']['album'] : [];
        }

        return Inertia::render('Layout/components/search', ['albums' => $albums, 'term' => $term, 'page' => $page, 'totalResults' => $totalResults, 'user' => Auth::user(),'tab'=>1]);
    }



    public function getAlbumInfo(Request $request, $album, $artist)
    {
        $albumData = null;
        if ($album && $artist) {

            $response = Http::get("$this->lastFmApi?method=album.getInfo&api_key=$this->lastFmApiKey&album=$album&artist=$artist&format=json");
            $albumData = $response->json();
            $albumData = $albumData['album'];
        }
        return Inertia::render('Layout/components/viewAlbum', ['album' => $albumData, 'user' => Auth::user()]);
    }

    public function getArtists(Request $request)
    {
        $artists = [];
        $totalResults = 0;
        $totalResults = 0;
        $pageSize = 10;
        $term = $request->input('q');
        $page = $request->input('page') ?? 1;
        if ($term) {
            $response = Http::get("$this->lastFmApi?method=artist.search&artist=$term&api_key=$this->lastFmApiKey&format=json&page=$page&limit=$pageSize");
            $artists = $response->json();
            $totalResults = $artists['results']['opensearch:totalResults'];
            $pageSize = $artists['results']['opensearch:itemsPerPage'];
            $artists = isset($artists['results']['artistmatches']['artist']) ? $artists['results']['artistmatches']['artist'] : [];
      
      
        }

        return Inertia::render('Layout/components/search', ['artists' => $artists, 'term' => $term, 'page' => $page, 'totalResults' => $totalResults, 'user' => Auth::user(), 'tab' => 2]);
    }
    public function getArtistInfo(Request $request, $artist)
    {
        $artistData = null;
        if ( $artist) {

            $response = Http::get("$this->lastFmApi?method=artist.getInfo&api_key=$this->lastFmApiKey&artist=$artist&format=json");
            $artistData = $response->json();
            $artistData = $artistData['artist'];
        }
        return Inertia::render('Layout/components/viewArtist', ['artist' => $artistData, 'user' => Auth::user(), 'tab' => 1]);
    }
}
