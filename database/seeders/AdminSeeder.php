<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create(['name' => 'admin',
        'email' => 'admin@mail.com',
        'email_verified_at' => now(),
        'password' => 'admin123',
        'remember_token' => Str::random(10),])->assignRole('admin');
    }
}
