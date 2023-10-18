<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher1 extends Model
{
    use HasFactory;

    protected $table="vouchers";

    protected $appends =[
   'text'
     ];
     public function getTextAttribute()
     {
         return $this->attributes['voucher_no'];
     }
}

