<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('processes', function (Blueprint $table) {
      $table->id();
      $table->string('process_number')->unique();
      $table->enum('situation', ['pending', 'approve', 'cancelled'])->default('pending');
      $table->enum('expertise', ['criminal', 'family']);
      $table->string('tribunal');
      $table->double('amount');
      $table->foreignId('customer_id');
      $table->foreignId('user_id');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('processes');
  }
};
