import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoGreen from '@/components/logo/Logo'
import LogoWhite from '@/components/logo/Logow';
import Navbar from '@/components/navbar/Navbar';

const PublicRoute = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Navbar/>
      <div className="w-full max-w-md mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicRoute
