<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Parking;
use App\Models\Rate;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ParkingController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Parking::with('register.member')->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'register_id' => 'required|exists:registers,id',
            'entry_time' => 'required|date'
        ]);

        $parking = Parking::create([
            'register_id' => $request->register_id,
            'entry_time' => $request->entry_time
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Parking started',
            'data' => $parking
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $parking = Parking::findOrFail($id);

        if ($request->exit_time) {

            $register = $parking->register;
            $member = $register->member;

            $rate = Rate::where('type_kendaraan_id', $register->type_kendaraan_id)->first();

            $entry = Carbon::parse($parking->entry_time);
            $exit = Carbon::parse($request->exit_time);

            $hours = $entry->diffInHours($exit);
            if ($hours == 0) $hours = 1;

            $total = $hours * $rate->price_per_hour;
            $discount = ($total * $member->discount) / 100;
            $final = $total - $discount;

            $parking->update([
                'exit_time' => $request->exit_time,
                'total_price' => $final
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Parking finished',
            'data' => $parking
        ]);
    }
}