<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chart_of_account extends Model
{
    use HasFactory;

    // protected $table = [
    //    'chart_of_accounts'
    // ];
    protected $fillable = [
        'chart_type', 'chart_id', 'account_name' ,'amounts', 'account_type', 'chart_id', 'balance'
    ];
    public function voucher()
    {
        return $this->hasMany(Voucher_item::class  , 'account_type_id' , 'id');
    
    }
    protected $appends =[
        'text'
    ];
    public function getTextAttribute()
    {
        return $this->attributes['account_name'];
    }
}
