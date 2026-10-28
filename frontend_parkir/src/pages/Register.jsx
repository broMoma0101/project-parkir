import React, { useState } from 'react';
import { postRegister } from '../services/register';

const Register = () => {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    telp: '',
    tanggal_lahir: '',
    jenis_kelamin: 'L',
    alamat: '',
    status: 'member'
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postRegister(form);
      alert("Pendaftaran Berhasil Disimpan!");
      setForm({
        nama: '', email: '', telp: '', tanggal_lahir: '',
        jenis_kelamin: 'L', alamat: '', status: 'member'
      });
    } catch (err) {
      console.error("Detail Error:", err.response?.data);
      alert("Gagal: " + (err.response?.data?.message || "Terjadi kesalahan server"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-3xl font-black uppercase mb-8 italic border-b-4 border-black pb-2">
        Registrasi Member PT. Warung Woenak
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-black uppercase text-sm mb-1">Nama Lengkap</label>
            <input type="text" className="w-full border-2 border-black p-3 font-bold outline-none focus:bg-yellow-50"
              value={form.nama} onChange={(e) => setForm({...form, nama: e.target.value})} required />
          </div>
          <div>
            <label className="block font-black uppercase text-sm mb-1">Email</label>
            <input type="email" className="w-full border-2 border-black p-3 font-bold outline-none focus:bg-yellow-50"
              value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-black uppercase text-sm mb-1">Nomor Telepon</label>
            <input type="text" className="w-full border-2 border-black p-3 font-bold outline-none focus:bg-yellow-50"
              value={form.telp} onChange={(e) => setForm({...form, telp: e.target.value})} required />
          </div>
          <div>
            <label className="block font-black uppercase text-sm mb-1">Tanggal Lahir</label>
            <input type="date" className="w-full border-2 border-black p-3 font-bold outline-none focus:bg-yellow-50"
              value={form.tanggal_lahir} onChange={(e) => setForm({...form, tanggal_lahir: e.target.value})} required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-black uppercase text-sm mb-1">Jenis Kelamin</label>
            <div className="flex gap-2">
              {['L', 'P'].map((jk) => (
                <button key={jk} type="button" onClick={() => setForm({...form, jenis_kelamin: jk})}
                  className={`flex-1 p-3 border-2 border-black font-black transition-all ${form.jenis_kelamin === jk ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  {jk === 'L' ? 'L (Laki-laki)' : 'P (Perempuan)'}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-black uppercase text-sm mb-1">Status Pendaftar</label>
            <select className="w-full border-2 border-black p-3 font-bold outline-none bg-white cursor-pointer"
              value={form.status} onChange={(e) => setForm({...form, status: e.target.value})}>
              <option value="member">member</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-black uppercase text-sm mb-1">Alamat Domisili</label>
          <textarea className="w-full border-2 border-black p-3 font-bold outline-none focus:bg-yellow-50 min-h-[100px]"
            value={form.alamat} onChange={(e) => setForm({...form, alamat: e.target.value})} required />
        </div>

        <button type="submit" disabled={loading}
          className="w-full bg-green-400 p-4 font-black uppercase text-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-green-500 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
          {loading ? 'MENYIMPAN...' : 'DAFTAR SEKARANG'}
        </button>
      </form>
    </div>
  );
};

export default Register;