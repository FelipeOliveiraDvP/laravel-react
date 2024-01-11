<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProcessesController;
use App\Http\Controllers\SchedulesController;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
  Route::prefix('dashboard')->group(function () {
    Route::get('events', [DashboardController::class, 'events']);
    Route::get('tasks', [DashboardController::class, 'tasks']);
    Route::get('processes', [DashboardController::class, 'processes']);
  });

  Route::prefix('customers')->group(function () {
    Route::get('/', [CustomersController::class, 'index']);
    Route::post('/', [CustomersController::class, 'store']);
    Route::put('/{id}', [CustomersController::class, 'update']);
    Route::delete('/{id}', [CustomersController::class, 'delete']);
  });

  Route::prefix('schedules')->group(function () {
    Route::get('/', [SchedulesController::class, 'index']);
    Route::post('/', [SchedulesController::class, 'store']);
    Route::put('/{id}', [SchedulesController::class, 'update']);
    Route::delete('/{id}', [SchedulesController::class, 'delete']);
  });

  Route::prefix('tasks')->group(function () {
    Route::get('/', [TasksController::class, 'index']);
    Route::post('/', [TasksController::class, 'store']);
    Route::put('/{id}', [TasksController::class, 'update']);
    Route::delete('/{id}', [TasksController::class, 'delete']);
    Route::patch('/{id}/reorder', [TasksController::class, 'reorder']);
  });

  Route::prefix('processes')->group(function () {
    Route::get('/', [ProcessesController::class, 'index']);
    Route::post('/', [ProcessesController::class, 'store']);
    Route::put('/{id}', [ProcessesController::class, 'update']);
    Route::delete('/{id}', [ProcessesController::class, 'delete']);
  });

  Route::prefix('users')->group(function () {
    Route::get('/', [UsersController::class, 'index']);
    Route::post('/', [UsersController::class, 'store']);
    Route::put('/{id}', [UsersController::class, 'update']);
    Route::delete('/{id}', [UsersController::class, 'delete']);
    Route::get('me', fn (Request $request) => $request->user());
  });
});
