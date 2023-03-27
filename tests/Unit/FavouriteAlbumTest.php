<?php

namespace Tests\Unit;

use App\Models\FavouriteAlbum;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class FavouriteAlbumTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * Test wether a favourite album is created
     */

    public function test_createsFavouriteAlbum(): void
    {
        $favAlbum = FavouriteAlbum::factory()->create();
        $this->assertModelExists($favAlbum);
    }

    public function test_UpdatesFavouriteAlbum(){
        $favAlbum = FavouriteAlbum::factory()->create();
        $newName = 'Test';
        $favAlbum->name =$newName;
        $favAlbum->save();
        $this->assertSame($newName,$favAlbum->name);
    }

    public function test_deletesFavouriteAlbum()
    {
        $favAlbum = FavouriteAlbum::factory()->create();
        $favAlbum->delete();
        $this->assertModelMissing($favAlbum);
    }
}
