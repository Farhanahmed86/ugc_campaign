<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name', 
    ];

    public function transaction()
    {
        return $this->hasMany(Transaction::class);
    
    }

    public function paymentmethod()
    {
        return $this->hasMany(PaymentMethod::class);
    
    }
    public function inventory()
    {
        return $this->hasMany(Inventory::class);
    
    }
    protected $appends =[
        'text'
    ];
    public function getTextAttribute()
    {
        return $this->attributes['name'];
    }
   
}
