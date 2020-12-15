<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UserMiddleware
{
   
    public function handle(Request $request, Closure $next)
    {
        if(auth()->user()->role == 'user'){
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
