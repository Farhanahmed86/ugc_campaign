<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Objective extends Model
{
    use HasFactory;

    public function market()
    {
        return $this->belongsTo(Marketingobjective::class ,'objective_id', 'id');
    
    }
}
