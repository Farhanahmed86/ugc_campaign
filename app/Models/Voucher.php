<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;
    protected $fillable = [
        'voucher_type', 'voucher_name', 'voucher_date', 'cheque_no' ,'voucher_no' , 'voucher_num'
    ];

    public function chart()
    {
        return $this->belongsTo(Chart_of_account::class ,'credit_account_id', 'id');
    
    }

    public function items()
    {
        return $this->hasMany(Voucher_item::class  ,'voucher_id' , 'id');
    
    }

   

    public function getDebitAttribute()
    {
        return $this->hasMany(Voucher_item::class  ,'voucher_id' , 'id')->sum('debit');
    
    }

    public function getCreditAttribute()
    {
        return $this->hasMany(Voucher_item::class  ,'voucher_id' , 'id')->sum('credit');
    
    }

    protected $appends =[
        'debit' ,'credit'
     ];
    //  public function getTextAttribute()
    //  {
    //      return $this->attributes['voucher_no'];
    //  }
}
