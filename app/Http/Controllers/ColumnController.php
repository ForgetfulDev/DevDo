<?php

namespace App\Http\Controllers;

use App\Column;
use App\Project;
use Illuminate\Http\Request;

class ColumnController extends Controller
{
    public function get(Request $request, Project $project)
    {
        return $project->columns;
    }

    public function create(Request $request)
    {
        Column::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return response()->json(["message" => "Column created successfully!"]);
    }
}
