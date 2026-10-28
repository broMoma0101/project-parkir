import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function HomePage() {
  const [stats, setStats] = useState({
    total_user: 0,
    total_employee: 0,
    total_calon_member: 0
  });

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const res = await api.get('/dashboard');
        if (res.data.success) {
          setStats(res.data.data);
        }
      } catch (err) {
        console.error("Gagal memuat statistik dashboard:", err);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-black uppercase italic mb-10 border-b-8 border-black pb-4">
        Statistik Sistem Parkir
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card User */}
        <div className="bg-blue-400 border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-black uppercase text-sm tracking-widest text-black">Total User</h2>
          <p className="text-7xl font-black mt-2">{stats.total_user}</p>
        </div>

        {/* Card Employee */}
        <div className="bg-green-400 border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-black uppercase text-sm tracking-widest text-black">Total Employee</h2>
          <p className="text-7xl font-black mt-2">{stats.total_employee}</p>
        </div>

        {/* Card Calon Member (Register) */}
        <div className="bg-red-400 border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-black uppercase text-sm tracking-widest text-black">Calon Membership</h2>
          <p className="text-7xl font-black mt-2">{stats.total_calon_member}</p>
        </div>
      </div>
    </div>
  );
}