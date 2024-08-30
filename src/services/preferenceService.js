import api from '@/api';
import { PREFERENCES_URL } from '@/url';


export const savePreferences = (preferences) => {
    return api.post(PREFERENCES_URL, { preferences })
        .then(response => response.data);
};