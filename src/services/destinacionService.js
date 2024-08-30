import api from '@/api';
import { DESTINATIONS_URL } from '@/url';


export const getRecommendedDestinations = (preferences) => {
    return api.get(DESTINATIONS_URL, { preferences })
        .then(response => response.data);
};