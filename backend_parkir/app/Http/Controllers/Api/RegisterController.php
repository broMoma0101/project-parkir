<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Register;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Register::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string',
            'email' => 'required|email|unique:registers,email',
            'telp' => 'required',
            'tanggal_lahir' => 'required|date',
            'jenis_kelamin' => 'required|in:L,P',
            'alamat' => 'required',
            'status' => 'required|in:employee,member'
        ]);

        $register = Register::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Register created successfully',
            'data' => $register
        ], 201);
    }

    public function show($id)
    {
        $register = Register::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $register
        ]);
    }

    public function update(Request $request, $id)
    {
        $register = Register::findOrFail($id);

        $request->validate([
            'nama' => 'required|string',
            'email' => 'required|email|unique:registers,email,' . $id,
            'telp' => 'required',
            'tanggal_lahir' => 'required|date',
            'jenis_kelamin' => 'required|in:L,P',
            'alamat' => 'required',
            'status' => 'required|in:employee,member'
        ]);

        $register->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Register updated successfully',
            'data' => $register
        ]);
    }

    public function destroy($id)
    {
        Register::destroy($id);

        return response()->json([
            'success' => true,
            'message' => 'Register deleted successfully'
        ]);
    }
}