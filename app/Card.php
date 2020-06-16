<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    public function lane()
    {
        return $this->belongsTo(Lane::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
    
    public function files()
    {
        return $this->hasMany(File::class);
    }
}
