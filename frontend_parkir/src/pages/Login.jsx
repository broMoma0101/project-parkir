import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth';

const Login = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
        console.log(err);
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-400 p-4">
      <div className="bg-white border-4 border-black p-8 max-w-sm w-full shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-3xl font-black italic mb-6 tracking-tighter uppercase">Parking Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="text" 
            placeholder="USERNAME" 
            className="w-full border-2 border-black p-3 font-bold outline-none focus:bg-yellow-50" 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="PASSWORD" 
            className="w-full border-2 border-black p-3 font-bold outline-none focus:bg-yellow-50" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="w-full bg-black text-white p-3 font-black hover:bg-blue-700 transition-all uppercase">
            Masuk Ke Sistem
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;