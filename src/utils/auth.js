
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

const TOKEN_KEY = "auth_token";

/**
 * Save JWT token
 * @param {string} token - JWT access token
 * @param {boolean} remember - if true, stores in localStorage; otherwise sessionStorage
 */
export const setToken = (token, remember = true) => {
  if (remember) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
  }
};

/**
 * Get stored JWT token
 * Checks localStorage first, then sessionStorage
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
};

/**
 * Remove JWT token from both storages
 */
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
};

/**
 * Check if user is logged in
 */
export const isAuthenticated = () => {
  return !!getToken();
};
