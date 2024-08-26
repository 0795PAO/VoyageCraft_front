import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
        return (
          <>
          {/* Logo */}
          <Outlet/>
          </>
        )
}

export default PublicRoute
