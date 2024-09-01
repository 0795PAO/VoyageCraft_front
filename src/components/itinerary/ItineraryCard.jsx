import React, { useEffect, useState } from 'react';
import api from "@/api";

import { DESTINATION_URL } from "@/url"; 

const ItineraryList = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await api.get(`${DESTINATION_URL}recommended-destinations/`); // Usa la URL completa aquí
        setDestinations(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recommended Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map(destination => (
          <ItineraryCard
            key={destination.id}
            image={destination.landscape} // Asume que 'landscape' es la URL de la imagen
            description={destination.description}
            options={destination.tourism_type ? [destination.tourism_type] : []}
          />
        ))}
      </div>
    </div>
  );
};

export default ItineraryList;
