<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Employee::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'position' => 'required',
            'phone' => 'required'
        ]);

        $employee = Employee::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Employee created',
            'data' => $employee
        ], 201);
    }

    public function show($id)
    {
        $employee = Employee::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $employee
        ]);
    }

    public function update(Request $request, $id)
    {
        $employee = Employee::findOrFail($id);
        $employee->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Employee updated',
            'data' => $employee
        ]);
    }

    public function destroy($id)
    {
        Employee::destroy($id);

        return response()->json([
            'success' => true,
            'message' => 'Employee deleted'
        ]);
    }
}