<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function lanes()
    {
        return $this->hasMany(Lane::class);
    }
}
