<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function get()
    {
        return \auth()->user()->projects->toArray();
    }

    public function create(Request $request)
    {
        Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => auth()->user()->id
        ]);
        return response()->json(["message" => "Project Created Successfully!"]);
    }
}
