<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ugccampaign extends Model
{
    use HasFactory;


    public function user()
    {
        return $this->belongsTo(User::class ,'auth_id', 'id');
    
    }
     public function objective()
    {
        return $this->hasMany(Objective::class,'campaign_id','id');
    
    }
}
