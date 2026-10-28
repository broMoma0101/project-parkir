<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rate;
use Illuminate\Http\Request;

class RateController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Rate::with('typeKendaraan')->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'type_kendaraan_id' => 'required|exists:type_kendaraans,id|unique:rates,type_kendaraan_id',
            'membership_id' => 'required|exists:memberships,id|unique:rates,membership_id',
            'price_per_hour' => 'required|numeric'
        ]);

        $rate = Rate::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Rate created',
            'data' => $rate
        ], 201);
    }

    public function show($id)
    {
        return response()->json([
            'success' => true,
            'data' => Rate::with('typeKendaraan')->findOrFail($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        $rate = Rate::findOrFail($id);
        $rate->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Rate updated',
            'data' => $rate
        ]);
    }

    public function destroy($id)
    {
        Rate::destroy($id);

        return response()->json([
            'success' => true,
            'message' => 'Rate deleted'
        ]);
    }
}