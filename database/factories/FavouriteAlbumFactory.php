<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FavouriteAlbum>
 */
class FavouriteAlbumFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user= User::factory()->create();
        return [
            'name' => fake()->name(),
            'artist' => fake()->name(),
            'mbid' => fake()->uuid(),
            'user_id' => $user->id
        ];
    }
}
