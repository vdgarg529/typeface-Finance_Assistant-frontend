
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


// utils/auth.js
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "auth_token";

export const setToken = (token, remember = true) => {
  try {
    if (remember) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      sessionStorage.setItem(TOKEN_KEY, token);
    }
  } catch (err) {
    console.error("Error saving token:", err);
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
  } catch (err) {
    console.error("Error reading token:", err);
    return null;
  }
};

export const removeToken = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
  } catch (err) {
    console.error("Error removing token:", err);
  }
};

export const isAuthenticated = () => {
  return !!getToken();
};

// ✅ Extract username from JWT token ("sub" is usually the username/ID)
export const getUsernameFromToken = () => {
  try {
    const token = getToken();
    if (!token) return null;

    const decoded = jwtDecode(token);
    return decoded?.sub || null;
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }
};
