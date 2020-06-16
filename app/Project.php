<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function boards()
    {
        return $this->hasMany(Board::class);
    }
}
