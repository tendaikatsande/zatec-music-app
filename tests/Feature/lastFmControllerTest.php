<?php

namespace Tests\Feature;

use Tests\TestCase;

class lastFmControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    public function test_getAlbums(): void
    {
        $response = $this->call('GET', '/search/albums', ['q' => 'hello']);
        $response->assertSee('albums');
    }

    public function test_getAlbumsWithoutParams(): void
    {
        $response = $this->call('GET', '/search/albums', []);
        $response->assertOk();
    }


    public function test_getAlbumInfo(): void
    {
        $response = $this->call('GET', '/albums/hello/adele');
        $response->assertSee('artist');
    }

    public function test_getArtists(): void
    {
        $response =  $this->call('GET', '/search/artists', ['q' => 'drake']);
        $response->assertSee('artists');
    }

    public function test_getArtistsWithoutParams(): void
    {
        $response =  $this->call('GET', '/search/artists');
        $response->assertOk();
    }

    public function test_getArtistInfo(): void
    {
        $response = $this->call('GET', '/artists/drake');
        $response->assertSee('drake');
    }
}
