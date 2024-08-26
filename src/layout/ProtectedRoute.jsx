import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const isAuthenticated = true
    if (isAuthenticated){
      return (
        <div>
          {/*Navbar*/}
          <Outlet/>
          {/* Footer */}
        </div>
      )
    } else {
      return <Navigate to = "/login"></Navigate>
    }
}

export default ProtectedRoute