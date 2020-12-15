<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
{
   
    public function handle(Request $request, Closure $next)
    {
        if(auth()->user()->role == 'admin'){
            return $next($request);
        }else{
            return response("You don't have permission", 403);
        }
    }

    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }
}
