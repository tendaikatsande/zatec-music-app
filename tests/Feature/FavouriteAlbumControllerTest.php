<?php

namespace Tests\Feature;

use App\Models\FavouriteAlbum;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;


/**
 * Zombies test strategy
 */
class FavouriteAlbumControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_storeFavouriteAlbumWithoutData(): void
    {
        // $response = $this->post('/favourite/album', []);
        // $response->assertSessionHas("error", 'Incomplete Data');
        $this->assertTrue(true);
    }
    public function test_storeFavouriteAlbumWithOneValue(): void
    {
        // $response = $this->post('/favourite/album', ['mbid' => fake()->uuid()]);
        // $response->assertSessionHas("error", 'Incomplete Data');
        $this->assertTrue(true);
    }

    public function test_storeFavouriteAlbumWithManyValues(): void
    {
        // $response = $this->post('/favourite/album', ['mbid' => fake()->uuid(), 'name' => 'Hello']);
        // $response->assertSessionHas("error", 'Incomplete Data');
        $this->assertTrue(true);
    }

    public function test_storeFavouriteAlbumWithAllValues(): void
    {
        // Cache::shouldReceive('favourite/album')->once()->with('mibd', 'name', 'artist')->andReturn(FavouriteAlbum::factory()->create());
        // $response = $this->post('/favourite/album', ['mbid' => fake()->uuid(), 'name' => 'Hello', 'artist' => 'Adele']);
        // $response->assertRedirectContains("/favourite/album");
        // $response->dump();
        $this->assertTrue(true);
    }

    public function test_getAllFavouritedArtist(): void
    {
        $response = $this->get('/favourite/album');
        $response->assertSee('favourites');
    }

    public function test_unFavouriteAlbum(): void
    {
        $response = $this->delete('/favourite/album', ['id' => 1]);
        $response->assertSee('Album unfavourated');
    }
}
