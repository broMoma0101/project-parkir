<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TypeKendaraan;
use Illuminate\Http\Request;

class TypeKendaraanController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => TypeKendaraan::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:type_kendaraans,name'
        ]);

        $type = TypeKendaraan::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Type created',
            'data' => $type
        ], 201);
    }

    public function show($id)
    {
        return response()->json([
            'success' => true,
            'data' => TypeKendaraan::findOrFail($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        $type = TypeKendaraan::findOrFail($id);
        $type->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Type updated',
            'data' => $type
        ]);
    }

    public function destroy($id)
    {
        TypeKendaraan::destroy($id);

        return response()->json([
            'success' => true,
            'message' => 'Type deleted'
        ]);
    }
}