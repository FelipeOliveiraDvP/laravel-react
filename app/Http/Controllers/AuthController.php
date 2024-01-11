<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
  public function login(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'email' => 'required|string|email',
      'password' => 'required|string',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $credentials = $request->only('email', 'password');
    $token = Auth::guard('api')->attempt($credentials);

    if (!$token) {
      return response()->json([
        'message' => 'Usuário ou senha inválidos'
      ], 400);
    }

    return response()->json([
      'token' => $token
    ]);
  }

  public function logout()
  {
    Auth::guard('api')->logout();

    return response()->json([
      'message' => "Você saiu do sistema"
    ]);
  }

  public function refresh()
  {
    return response()->json([
      'token' => Auth::guard('api')->refresh()
    ]);
  }

  public function me()
  {
    return Auth::guard('api')->user();
  }
}
