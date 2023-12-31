<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Users/UserIndex', [
            'users' => UserResource::collection(\App\Models\User::all()), //ini passing prop users ke inertia render
        ]);
    }
}
