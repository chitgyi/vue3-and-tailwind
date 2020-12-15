<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGoodsTable extends Migration
{
  
    public function up()
    {
        Schema::create('goods', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->integer('quantity')->default(0);
            $table->integer('price')->default(0);
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('goods');
    }
}
