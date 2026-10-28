<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'username' => 'admin',
            'password' => Hash::make('admin1234')
        ]);

        User::create([
            'username' => 'user1',
            'password' => Hash::make('user1_test')
        ]);

        User::create([
            'username' => 'user2',
            'password' => Hash::make('user2_test')
        ]);
    }
}