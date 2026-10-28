import React, { useEffect, useState } from 'react';
import { getTypeKendaraans } from '../services/TypeKendaraan';

const TypeKendaraan = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypeKendaraans().then(res => setTypes(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-black uppercase mb-6">Tipe Kendaraan Parkir</h2>
      <div className="max-w-md">
        {types.map((t, i) => (
          <div key={i} className="flex justify-between items-center border-2 border-black p-4 mb-3 bg-white font-bold">
            <span>{t.name}</span>
            <span className="bg-green-400 px-3 py-1 border border-black text-xs uppercase">Aktif</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeKendaraan;