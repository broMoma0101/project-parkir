import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../services/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    if (window.confirm("Apakah Anda yakin ingin keluar?")) {
      await logout();
      navigate('/login');
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600 underline" : "text-black";
  };

  return (
    <nav className="bg-white border-b-4 border-black p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <Link to="/" className="text-2xl font-black tracking-tighter hover:opacity-80">
          WARUNG WOENAK <span className="bg-black text-white px-1">PARKING</span>
        </Link>

        <div className="flex flex-wrap justify-center items-center gap-4 font-bold uppercase text-sm">
          <Link to="/" className={`hover:text-blue-600 transition ${isActive('/')}`}>
            Home
          </Link>
          <span className="text-gray-300">|</span>
          
          <Link to="/employee" className={`hover:text-blue-600 transition ${isActive('/employee')}`}>
            Employee
          </Link>
          <span className="text-gray-300">|</span>
          
          <Link to="/member" className={`hover:text-blue-600 transition ${isActive('/member')}`}>
            Member
          </Link>
          <span className="text-gray-300">|</span>
          
          <Link to="/type-kendaraan" className={`hover:text-blue-600 transition ${isActive('/type-kendaraan')}`}>
           Tipe Kendaraan
          </Link>
          <span className="text-gray-300">|</span>
          
          <Link to="/register" className={`hover:text-blue-600 transition ${isActive('/register')}`}>
            Register
          </Link>
          <span className="text-gray-300">|</span>

          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white border-2 border-black px-4 py-1 hover:bg-red-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            LOG OUT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;