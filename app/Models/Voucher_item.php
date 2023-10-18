<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher_item extends Model
{
    use HasFactory;

    public function voucher()
    {
        return $this->belongsTo(Voucher::class ,'voucher_id', 'id');
    
    }

    public function accounts()
    {
        return $this->belongsTo(Chart_of_account::class ,'account_type_id', 'id');
    
    }
    public function items()
    {
        return $this->belongsTo(Voucher_item::class ,'id', 'id');
    
    }
  
    // public function getDebitAttribute()
    // {
    //     return $this->hasMany(Voucher_item::class  ,'voucher_id' , 'id')->sum('debit');
    
    // }

    // protected $appends =[
    //     'text'
    // ];
    // public function getTextAttribute()
    // {
    //     return $this->attributes['account_code'];
    // }
}
