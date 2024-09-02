import Navbar from '@/components/navbar/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import api from '@/api';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '@/constants';
import { useEffect, useState } from 'react';
import Footer from '@/components/footer/Footer';
import ItineraryCard from '@/components/itinerary/ItineraryCard';
import { DESTINATION_URL } from '@/url';


const ProtectedRoute = () => {
  const [isAuthorized, setIsAuthorized] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth().catch(() => setIsAuthorized(true));
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      fetchDestinations();
    }
  }, [isAuthorized]);

  const fetchDestinations = async () => {
    try {
      const response = await api.get(`${DESTINATION_URL}recommended-destinations`);
      setDestinations(response.data);
      setLoading(true);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      setLoading(true);
    }
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post('/api/v1/login/refresh/', { refresh: refreshToken });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
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
        {/* Aquí se muestra la lista de destinos recomendados */}
        {loading ? (
          <div>Loading destinations...</div>
        ) : (
          <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold text-center mb-8">Recommended Destinations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinations.map((destination) => (
                <ItineraryCard
                  key={destination.id}
                  image={destination.image}  // Asegúrate de que el campo `image` exista en tu modelo
                  description={destination.description}
                  options={[destination.tourism_type, destination.cost_level]} // Puedes ajustar esto según los datos que necesites mostrar
                />
              ))}
            </div>
          </div>
        )}
        <Outlet />
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;


