<?php

namespace App\Models;

use App\Helper\HasManyRelation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleItem extends Model
{
    use HasManyRelation;

    protected $fillable = [
        'inventory_id', 'unit_price', 'qty','item','profit','total_profit'
    ];

    public function inventory()
    {
        return $this->hasMany(Inventory::class);
    }
    // public function items()
    // {
    //     return $this->belongsTo(Inventory::class);
    // }
}
