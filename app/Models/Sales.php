<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Helper\HasManyRelation;

class Sales extends Model
{
    use HasManyRelation;

    protected $fillable = [
        'customer_id', 'customer_name', 'item','sale','unit_price','quantity','discount','date','profit',
        
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    
    }
    public function inventory()
    {
        return $this->hasMany(Inventory::class);
    
    }
    public function items()
    {
        return $this->hasMany(SaleItem::class);
    }
}
