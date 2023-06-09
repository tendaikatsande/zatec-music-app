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
        // Add ggogle_id
        Schema::table('users',function($table){
            $table->string('google_id');
            $table->string('avatar');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('users',function($table){
            $table->dropColumn('google_id');
            $table->dropColumn('avatar');
        });
    }
};
