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
        $token = $user->createToken('api_token');
        return response(['user' => $user, 'api_token' => $token->plainTextToken]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        $user = $request->user();
        $tokenResult = $user->createToken('api_token');
        return response('Successfully logged in!', 200, ['Authorization', 'Bearer ' . $tokenResult->plainTextToken]);
    }

    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        return response()->json(['message' => 'You have been successfully logged out!']);
    }

    public function user(Request $request)
    {
        return $request->user();
    }
}
