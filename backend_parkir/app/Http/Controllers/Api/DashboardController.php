<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Employee;
use App\Models\Register;

class DashboardController extends Controller
{
    public function index()
    {
        try {
            $totalUser = User::count();

            $totalEmployee = Employee::count();

            $totalCalonMember = Register::count();

            return response()->json([
                'success' => true,
                'data' => [
                    'total_user'         => $totalUser,
                    'total_employee'     => $totalEmployee,
                    'total_calon_member' => $totalCalonMember,
                ]
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data: ' . $e->getMessage()
            ], 500); 
        }
    }
}