<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SearchPageTest extends TestCase
{
    /**
     * Test Search Album.
     */
    public function test_searchAlbum(): void
    {
        $response = $this->get('/search/albums');

        $response->assertStatus(200);
    }
       /**
     * Test Search Artist.
     */
    public function test_searchArtist(): void
    {
        $response = $this->get('/search/artists');

        $response->assertStatus(200);
    }
}
