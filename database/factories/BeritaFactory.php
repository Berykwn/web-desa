<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Berita>
 */
class BeritaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'judul' => $this->faker->sentence(6),
            'deskripsi' => $this->faker->sentence(6),
            'isi' => $this->faker->paragraph(10),
            'gambar' => 'default.png',
            'author' => $this->faker->name(),
        ];
    }
}
