<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lane extends Model
{
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function cards()
    {
        return $this->hasMany(Card::class);
    }
}
