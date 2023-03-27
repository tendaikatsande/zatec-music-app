<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FavouriteArtistPageTest extends TestCase
{
       /**
     * Test my artist page
     */
    public function test_MyArtistsWithoutProps(): void
    {
        $response = $this->get('/favourite/artist');

        $response->assertStatus(500);
    }
}
