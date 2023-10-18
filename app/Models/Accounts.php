<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accounts extends Model
{
    use HasFactory;

    protected $fillable = [
        'chart_type', 'chart_id', 'account_name' ,'amounts'
    ];

    protected $appends =[
        'text'
    ];
    public function getTextAttribute()
    {
        return $this->attributes['account_name'];
    }
}
