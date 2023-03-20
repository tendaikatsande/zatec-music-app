<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class FavouriteAlbum extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'artist',
        'mbid',
        'user_id'
    ];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('userid', function (Builder $builder) {
            $builder->where('user_id', Auth::user()->id);
        });
    }


    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
