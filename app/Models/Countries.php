<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Countries extends Model
{
    use HasFactory;
    protected $table="countries";

    protected $fillable = [
        'name'

    ];

    protected $appends =[
        'text'
    ];
    public function getTextAttribute()
    {
        return $this->attributes['name'];
    }
}
