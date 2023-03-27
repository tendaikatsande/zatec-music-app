<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FavouriteArtistControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_storeFavouriteArtistWithoutData(): void
    {
        $response = $this->post('/favourite/artist', []);
        $response->assertSee("Incomplete Data");
    }
    public function test_storeFavouriteArtistWithOneValue(): void
    {
        $response = $this->post('/favourite/artist', ['mbid' => fake()->uuid()]);
        $response->assertSee("Incomplete Data");
    }

    public function test_storeFavouriteArtistWithManyValues(): void
    {
        $response = $this->post('/favourite/artist', ['mbid' => fake()->uuid(), 'name' => 'Hello']);
        $response->assertSee("artist favourated");
    }

    public function test_getAllFavouritedArtist(): void
    {
        $response = $this->get('/favourite/artist');
        $response->assertSee('favourites');
    }

    public function test_unFavouriteArtist(): void
    {
        $response = $this->delete('/favourite/artist', ['id' => 1]);
        $response->assertSee('artist unfavourated');
    }
}
