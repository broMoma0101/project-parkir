import React, { useState, useEffect } from 'react';
import { getEmployees, storeEmployee, updateEmployee, deleteEmployee } from '../services/Employee';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeModal from '../components/EmployeeModal';

export default function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  
  const [formData, setFormData] = useState({ name: '', position: '', phone: '' });

  async function loadData() {
    try {
      const res = await getEmployees();
      setEmployees(res.data); 
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Gagal menyimpan data"));
    }
  }

  useEffect(() => {
  let isMounted = true;
  
  const fetchData = async () => {
    if (isMounted) {
      await loadData();
    }
  };

  fetchData();

  return () => {
    isMounted = false
  };
}, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isEdit) {
        await updateEmployee(currentId, formData);
      } else {
        await storeEmployee(formData);
      }
      setModalOpen(false);
      loadData();
      setFormData({ name: '', position: '', phone: '' });
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Gagal menyimpan data"));
    }
  }

  function handleEdit(emp) {
    setFormData({ name: emp.name, position: emp.position, phone: emp.phone });
    setCurrentId(emp.id);
    setIsEdit(true);
    setModalOpen(true);
  }

  async function handleDelete(id) {
    if (window.confirm("Hapus data karyawan ini?")) {
      try {
        await deleteEmployee(id);
        loadData();
      } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Gagal menyimpan data"));
    }
    }
  }

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter">Employee Management</h1>
        <button 
          onClick={() => { 
            setIsEdit(false); 
            setFormData({ name: '', position: '', phone: '' }); 
            setModalOpen(true); 
          }} 
          className="bg-green-400 border-4 border-black p-4 font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all"
        >
          + ADD NEW EMPLOYEE
        </button>
      </div>

      <EmployeeTable data={employees} onEdit={handleEdit} onDelete={handleDelete} />
      
      <EmployeeModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        isEdit={isEdit}
      />
    </div>
  );
}