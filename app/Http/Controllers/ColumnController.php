<?php

namespace App\Http\Controllers;

use App\Column;
use App\Project;
use Illuminate\Http\Request;

class ColumnController extends Controller
{
    public function get(Request $request, Project $project)
    {
        return $project->columns->toJson();
    }

    public function create(Request $request)
    {
        Column::create([
            'name' => $request->name,
            'description' => $request->description,
            'project_id' => $request->project_id
        ]);

        return response()->json(["message" => "Column created successfully!"]);
    }
}
