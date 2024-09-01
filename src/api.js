import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json";
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
<<<<<<< HEAD
            config.headers.Authorization = `Bearer ${token}`; 
=======
            config.headers.Authorization = `Bearer ${token}`
>>>>>>> bf7e987326a3b85c79e45cbc9492295fcb1e6b9d
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
