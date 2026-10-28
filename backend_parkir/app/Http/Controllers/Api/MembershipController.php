<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Membership;
use Illuminate\Http\Request;

class MembershipController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Membership::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:memberships,name',
        ]);

        $membership = Membership::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Member created',
            'data' => $membership
        ], 201);
    }

    public function show($id)
    {
        return response()->json([
            'success' => true,
            'data' => Membership::findOrFail($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        $membership = Membership::findOrFail($id);

        $membership->update($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Member updated',
            'data' => $membership
        ]);
    }

    public function destroy($id)
    {
        Membership::destroy($id);

        return response()->json([
            'success' => true,
            'message' => 'Member deleted'
        ]);
    }
}