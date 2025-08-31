
// // Token management utilities
// export const getToken = () => {
//   return sessionStorage.getItem('pfa_token');
// };

// export const setToken = (token) => {
//   sessionStorage.setItem('pfa_token', token);
// };

// export const removeToken = () => {
//   sessionStorage.removeItem('pfa_token');
// };

// export const getUsernameFromToken = () => {
//   const token = getToken();
//   if (!token) return null;
  
//   try {
//     const payload = JSON.parse(atob(token.split('.')[1]));
//     return payload.sub || null;
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// };

import axios from "axios";
import { API_BASE } from '../config'; // Import from config instead of hardcoding

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE}/auth/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    const response = await axios.post(`${API_BASE}/auth/login`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};