<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    public function column()
    {
        return $this->belongsTo(Column::class);
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
