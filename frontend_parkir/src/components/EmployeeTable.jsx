import React from 'react';

const EmployeeTable = ({ data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <table className="w-full border-collapse">
        <thead className="bg-yellow-400 border-b-4 border-black">
          <tr>
            <th className="p-3 border-r-2 border-black font-black uppercase text-left">Nama</th>
            <th className="p-3 border-r-2 border-black font-black uppercase text-left">Jabatan</th>
            <th className="p-3 border-r-2 border-black font-black uppercase text-left">Telepon</th>
            <th className="p-3 font-black uppercase text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((emp) => (
              <tr key={emp.id} className="border-b-2 border-black hover:bg-gray-50">
                <td className="p-3 border-r-2 border-black font-bold">{emp.name}</td>
                <td className="p-3 border-r-2 border-black">{emp.position}</td>
                <td className="p-3 border-r-2 border-black font-mono">{emp.phone}</td>
                <td className="p-3 flex justify-center gap-2">
                  <button onClick={() => onEdit(emp)} className="bg-blue-400 border-2 border-black px-3 py-1 font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none">EDIT</button>
                  <button onClick={() => onDelete(emp.id)} className="bg-red-500 text-white border-2 border-black px-3 py-1 font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none">HAPUS</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="4" className="p-4 text-center font-bold">Data tidak ditemukan</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;