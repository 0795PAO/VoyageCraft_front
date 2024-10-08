import Navbar from '@/components/navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import api from '@/api'
import { REFRESH_TOKEN, ACCESS_TOKEN } from '@/constants'
import { useEffect, useState } from 'react'
import Footer from '@/components/footer/Footer'




const ProtectedRoute = () => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false))
  }, [])

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/api/v1/login/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access)
        setIsAuthorized(true)
      } else {
        setIsAuthorized(false)
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  if (isAuthorized) {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  } else {
    return <Navigate to="/login" />;
  };
}

export default ProtectedRoute
