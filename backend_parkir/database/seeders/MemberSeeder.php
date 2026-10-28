<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Membership;

class MemberSeeder extends Seeder
{
    public function run(): void
    {
        Membership::create([
            'name' => 'Gold'
        ]);

        Membership::create([
            'name' => 'Silver'
        ]);

        Membership::create([
            'name' => 'Bronze'
        ]);
    }
}