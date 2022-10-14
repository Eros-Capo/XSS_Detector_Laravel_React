<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormXss extends Model
{
    protected $table = 'xss';
    public $timestamps = false;

    protected $fillable = ['url',
        'sources',
        'sinks',
        'sourcesNumber',
        'sinksNumber',
        'pdf',
        'pdfPreview',
        'attack_data'
    ];

    use HasFactory;
}

