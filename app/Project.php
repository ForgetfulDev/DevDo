<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function lanes()
    {
        return $this->hasMany(Lane::class);
    }
}
