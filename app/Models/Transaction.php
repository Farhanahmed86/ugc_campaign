<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Helper\HasManyRelation;

class Transaction extends Model
{
    use HasManyRelation;
    
    protected $fillable = [
        'inventory_id', 'vendor_id', 'payment','due_payment','total_payment',

    ];
    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    
    }
    public function Inventory()
    {
        return $this->belongsTo(Inventory::class);
    
    }
    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    
    }
   
    public function setSubTotalAttribute($value)
    {
        $this->attributes['payment'] = $value;
        $due = $this->attributes['due_paymet'];
        $this->attributes['total_payment'] = $value + $due;
    }

    protected $appends =[
        'text'
    ];
    public function getTextAttribute()
    {
      
        return $this->attributes['payment'] +  $this->attributes['due_payment'];
       
    }

    // public function getPaidAttribute()
    // {
    //     return $this->transaction()->('due_payment');
       
    // }

}
