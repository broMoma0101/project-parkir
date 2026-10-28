import React from 'react';

const EmployeeModal = ({ isOpen, onClose, onSubmit, formData, setFormData, isEdit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white border-4 border-black w-full max-w-md p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-black uppercase mb-4 border-b-4 border-black pb-2">
          {isEdit ? 'Update Karyawan' : 'Tambah Karyawan'}
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block font-black text-xs uppercase">Nama Lengkap</label>
            <input type="text" className="w-full border-2 border-black p-2 font-bold outline-none" 
              value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} required />
          </div>
          <div>
            <label className="block font-black text-xs uppercase">Jabatan (Position)</label>
            <input type="text" className="w-full border-2 border-black p-2 font-bold outline-none" 
              value={formData.position || ''} onChange={e => setFormData({...formData, position: e.target.value})} required />
          </div>
          <div>
            <label className="block font-black text-xs uppercase">Nomor Telepon</label>
            <input type="text" className="w-full border-2 border-black p-2 font-bold outline-none" 
              value={formData.phone || ''} onChange={e => setFormData({...formData, phone: e.target.value})} required />
          </div>
          <div className="flex gap-2 pt-4">
            <button type="submit" className="flex-1 bg-green-400 border-2 border-black p-2 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">SIMPAN</button>
            <button type="button" onClick={onClose} className="flex-1 bg-gray-200 border-2 border-black p-2 font-black uppercase">BATAL</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;