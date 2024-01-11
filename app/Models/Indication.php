<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Indication extends Model
{
  /**
   * The table name.
   *
   * @var array<int, string>
   */
  protected $table = "indications";

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'email',
    'phone',
  ];
}
