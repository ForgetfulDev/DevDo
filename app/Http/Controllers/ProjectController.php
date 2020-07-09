<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function create(Request $request)
    {
        Project::create([
            'owner_id' => $request->user()->id,
            'name' => $request->name,
            'description' => $request->description,
        ]);
        return response()->json([
            'message' => 'Project has been created!'
        ]);
    }
}
