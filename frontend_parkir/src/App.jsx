import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Layout
import AppLayout from './layouts/AppLayout';

// Import Pages
import Home from './pages/Home'; 
import Login from './pages/Login';
import Employee from './pages/Employee';
import Member from './pages/Member';
import TypeKendaraan from './pages/Typekendaraan';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          
          <Route path="/employee" element={<Employee />} />
          <Route path="/member" element={<Member />} />
          <Route path="/type-kendaraan" element={<TypeKendaraan />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;