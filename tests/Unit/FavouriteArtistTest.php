<?php

namespace Tests\Unit;

use App\Models\FavouriteArtist;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class FavouriteArtistTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * Test wether a favourite artist is created
     */

    public function test_createsFavouriteArtist(): void
    {
        $favArtist = FavouriteArtist::factory()->create();
        $this->assertModelExists($favArtist);
    }
    public function test_UpdatesFavouriteArtist(){
        $favArtist = FavouriteArtist::factory()->create();
        $newName = 'Test';
        $favArtist->name =$newName;
        $favArtist->save();
        $this->assertSame($newName,$favArtist->name);
    }
    public function test_deletesFavouriteArtist()
    {
        $favArtist = FavouriteArtist::factory()->create();
        $favArtist->delete();
        $this->assertModelMissing($favArtist);
    }
}
