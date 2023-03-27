<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class UserTest extends TestCase
{
    use DatabaseMigrations;
    /**
     * Test wether a user can be  created
     */

    public function test_createsUser(): void
    {
        $user = User::factory()->create();
        $this->assertModelExists($user);
    }

    public function test_UpdatesUser(){
        $user = User::factory()->create();
        $newName = 'Test';
        $user->name =$newName;
        $user->save();
        $this->assertSame($newName,$user->name);
    }

    public function test_deletesUser()
    {
        $user = User::factory()->create();
        $user->delete();
        $this->assertModelMissing($user);
    }
}
