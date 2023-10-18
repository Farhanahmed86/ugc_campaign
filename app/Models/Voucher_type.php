<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher_type extends Model
{
    use HasFactory;
    protected $fillable = [
        'title'
        
    ];

    protected $appends =[
        'text'
    ];
    public function getTextAttribute()
    {
        return $this->attributes['title'];
    }

}
