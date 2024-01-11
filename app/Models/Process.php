<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Process extends Model
{
  use SoftDeletes;

  /**
   * The table name.
   *
   * @var array<int, string>
   */
  protected $table = "events";

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'process_number',
    'situation',
    'expertise',
    'tribunal',
    'amount',
    'customer_id',
    'user_id',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'amount' => 'double',
  ];

  /**
   * Get the user associated with this process.
   */
  public function user(): HasOne
  {
    return $this->hasOne(User::class);
  }

  /**
   * Get the customer associated with this process.
   */
  public function customer(): HasOne
  {
    return $this->hasOne(Customer::class);
  }
}
