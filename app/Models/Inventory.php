<?php

namespace App\Models;
use App\Models\Transaction;
use App\Helper\HasManyRelation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;
    protected $fillable = [
        'item', 'vendor_id', 'unit_price', 'quantity','total_payment','item_code',

    ];
    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    
    }
    public function saleitem()
    {
        return $this->hasMany(SaleItem::class,'inventory_id','id');
    
    }
    public function transaction()
    {
        return $this->hasMany(Transaction::class,'inventory_id','id');
    
    }
    protected $appends =[
        'text','paid','stock'
    ];
    public function getTextAttribute()
    {
        return $this->attributes['item_code']. '-' . $this->attributes['item'];
    }

    public function getPaidAttribute()
    {
        return $this->transaction()->sum('payment');
    }

    public function getStockAttribute()
    {
        return $this->saleitem()->sum('qty');
    }
}
