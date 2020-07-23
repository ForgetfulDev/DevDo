<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Column extends Model
{

    protected $guarded = [];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function cards()
    {
        return $this->hasMany(Card::class);
    }
}
