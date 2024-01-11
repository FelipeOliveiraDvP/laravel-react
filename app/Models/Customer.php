<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
  use SoftDeletes;

  /**
   * The table name.
   *
   * @var array<int, string>
   */
  protected $table = "customers";

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'email',
    'document',
    'phone',
    'birth_date',
    'address_id',
    'indication_id',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'birth_date' => 'date',
  ];

  /**
   * Get the customer address.
   */
  public function address(): HasOne
  {
    return $this->hasOne(Address::class);
  }

  /**
   * Get the customer indication.
   */
  public function indication(): HasOne
  {
    return $this->hasOne(Indication::class);
  }
}
