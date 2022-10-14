<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormModel extends Model
{
    protected $table = 'contacts';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'surname',
        'phone',
        'email',
        'message',
    ];

    use HasFactory;
}
