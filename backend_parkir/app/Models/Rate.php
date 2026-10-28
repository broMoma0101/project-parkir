<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    use HasFactory;

    protected $fillable = [
        'membership_id', 
        'type_kendaraan_id', 
        'price_per_hour'
    ];

    public function typeKendaraan()
    {
        return $this->belongsTo(TypeKendaraan::class, 'type_kendaraan_id');
    }
}