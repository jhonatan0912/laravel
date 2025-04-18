<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';

    protected $fillable = ['name', 'description', 'completed', 'priority', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getCompletedAttribute($completed)
    {
        return (bool) $completed;
    }
}
