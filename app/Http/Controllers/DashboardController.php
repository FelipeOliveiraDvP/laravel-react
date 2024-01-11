<?php

namespace App\Http\Controllers;

class DashboardController extends Controller
{
  public function events()
  {
    return response()->json(['message' => 'Ok'], 200);
  }

  public function tasks()
  {
    return response()->json(['message' => 'Ok'], 200);
  }

  public function processes()
  {
    return response()->json(['message' => 'Ok'], 200);
  }
}
