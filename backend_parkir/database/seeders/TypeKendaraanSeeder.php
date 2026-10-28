<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TypeKendaraan;

class TypeKendaraanSeeder extends Seeder
{
    public function run(): void
    {
        TypeKendaraan::create([
            'name' => 'Mobil'
        ]);

        TypeKendaraan::create([
            'name' => 'Motor'
        ]);

        TypeKendaraan::create([
            'name' => 'Ojol'
        ]);
    }
}