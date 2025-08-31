import axios from "axios";
import { API_BASE } from '../config';
import { setToken } from './token'; // Import setToken

export const register = async (username, password) => {
  try {
    console.log("Registering user:", username, "to:", API_BASE);
    const response = await axios.post(`${API_BASE}/auth/register`, {
      username,
      password,
    });
    console.log("Registration response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    console.log("Logging in user:", username, "to:", API_BASE);
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    const response = await axios.post(`${API_BASE}/auth/login`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    
    console.log("Login response:", response.data);
    
    
    if (response.data.access_token) {
      setToken(response.data.access_token);
      console.log("Token set successfully");
    }
    
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};