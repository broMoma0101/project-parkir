import React, { useState, useEffect } from 'react';
import { getMemberships } from '../services/Member';

export default function MembershipPage() {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getMemberships();
        if (res && res.data) {
          setMemberships(res.data);
        }
      } catch (err) {
        console.error("Gagal mengambil data member:", err);
      }
    };

    loadData();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-black uppercase italic mb-8 border-b-8 border-black pb-2">
        Daftar Member (Tingkatan)
      </h1>
      
      <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <table className="w-full border-collapse">
          <thead className="bg-red-400 border-b-4 border-black">
            <tr>
              <th className="p-4 border-r-2 border-black font-black uppercase text-left">Nama Tingkatan</th>
              <th className="p-4 font-black uppercase text-left">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {memberships && memberships.length > 0 ? (
              memberships.map((m) => (
                <tr key={m.id} className="border-b-2 border-black hover:bg-gray-50">
                  <td className="p-4 border-r-2 border-black font-bold uppercase">{m.name}</td>
                  <td className="p-4">{m.description || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="p-4 text-center font-bold italic">
                  Memuat data atau database kosong...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}