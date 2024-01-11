<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
  /**
   * The table name.
   *
   * @var array<int, string>
   */
  protected $table = "addresses";

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'zip',
    'street',
    'number',
    'city',
    'state',
    'complement',
  ];
}
