<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateXssTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('xss', function (Blueprint $table) {
            $table->increments('id');
            $table->string('url');
            $table->longText('sources');
            $table->longText('sinks');
            $table->string('sourcesNumber');
            $table->string('sinksNumber');
            $table->string('pdf');
            $table->longText('pdfPreview');
            $table->string('attack_data');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('xss');
    }
}
