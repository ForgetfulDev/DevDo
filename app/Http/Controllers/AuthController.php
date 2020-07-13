<?php

namespace App\Http\Controllers;

use App\Company;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required|confirmed'
        ]);

        // TODO: Change how the company is selected
        $validatedData["company_id"] = 1;
        $validatedData['password'] = Hash::make($request->password);
        $validatedData['remember_token'] = Str::random(10);

        $user = User::create($validatedData);
        $token = $user->createToken('auth-token');

        return response('User successfully created!', 200, ['Authorization' => 'Bearer '.$token->plainTextToken]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        $user = $request->user();
        $token = $user->createToken('auth-token');
        
        return response('Successfully logged in', 200, ['Authorization' => 'Bearer ' . $token->plainTextToken]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'You have been successfully logged out!']);
    }

    public function user(Request $request)
    {
        return $request->user();
    }
}
