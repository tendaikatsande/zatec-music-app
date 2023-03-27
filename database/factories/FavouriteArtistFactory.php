<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FavouriteArtist>
 */
class FavouriteArtistFactory extends Factory
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
            'mbid' => fake()->uuid(),
            'user_id' => $user->id
        ];
    }
}
