<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Register extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'email',
        'telp',
        'tanggal_lahir',
        'jenis_kelamin',
        'alamat',
        'status'
    ];

    public function parkings()
    {
        return $this->hasMany(Parking::class);
    }
}