import axios from 'axios';
import { getToken, removeToken } from './token'; // Changed from './auth' to './token'
import { API_BASE } from '../config';


const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});


api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      
      removeToken();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;