<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FavouriteAlbumPageTest extends TestCase
{
      /**
     * Test my album page
     */
    public function test_MyArtistsWithoutProps(): void
    {
        $response = $this->get('/favourite/album');
        $response->assertStatus(500);
    }
}
