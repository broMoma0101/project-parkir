import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AppLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  if (!token) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto p-4">
        <div className="bg-white border-2 border-black min-h-[80vh] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <Outlet />
        </div>
      </main>
      
      <footer className="text-center py-4 text-sm text-gray-500">
        © 2026 PT. Warung Woenak Sejahtera 
      </footer>
    </div>
  );
};

export default AppLayout;