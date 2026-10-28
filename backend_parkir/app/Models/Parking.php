<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Parking extends Model
{
    use HasFactory;

    protected $fillable = [
        'register_id',
        'rate_id',
        'entry_time',
        'exit_time',
        'total_price'
    ];

    public function register()
    {
        return $this->belongsTo(Register::class);
    }

    public function rate()
    {
        return $this->belongsTo(Rate::class);
    }
}