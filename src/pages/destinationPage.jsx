import DestinationsContainer from "@/components/destinationsContainer/destinationsContainer"
import { useState, useEffect } from "react";
import { getRecommendedDestinations } from "@/services/destinacionService";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import '../index.css'

const DestinationPage = () => {
    const [destinations, setDestinations] = useState([]);
    const [message, setMessage] = useState(null);  // Aggiunto per gestire il messaggio
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const data = await getRecommendedDestinations();
                console.log(data);


                if (Array.isArray(data)) {
                    setDestinations(data);
                } else if (data.message) {

                    setMessage(data.message);
                    setDestinations(data.recommendations || []);

                } 
            }catch (error) {
                    console.error("Error fetching destinations:", error);
                    setError("An error occurred while fetching recommendations.");
                }
            };

            fetchDestinations();
        }, []);

    return (
        <main className="min-h-screen flex flex-col items-center gap-5 p-8">
            <h2 className="text-4xl text-primary font-bold text-center">TravelCraft Alert: Your Next Adventure Awaits!</h2>
            <p className="text-center">
                Discover a selection of destinations crafted just for you! Based on your unique travel preferences and past choices, this list highlights exciting spots to explore—ranging from vibrant cityscapes to tranquil retreats and everything in between. Dive into the details, see what piques your interest, and start planning your next adventure with ease.
            </p>

            {error && <p className="text-red-500">{error}</p>}

            {message && <p className="text-yellow-500">{message}</p>}

            <DestinationsContainer destinations={destinations} />

            <div className="flex items-center gap-4 justify-center w-[70vw]">
                
                <p className="text-primary font-semibold">Don`&apos;`t see what you`&apos;`re looking for?</p>
                <Button variant="secondary" asChild>
                    <Link to="/home">Change preferences</Link>
                </Button>
            </div>

        </main>
    )
}

export default DestinationPage;