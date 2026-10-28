<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TypeKendaraan extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function registers()
    {
        return $this->hasMany(Register::class);
    }

    public function rates()
    {
        return $this->hasMany(Rate::class);
    }
}