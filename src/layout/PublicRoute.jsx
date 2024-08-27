import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoGreen from '@/components/logo/Logo'

const PublicRoute = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <LogoGreen/>
      <div className="w-full max-w-md mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicRoute
