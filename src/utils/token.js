
export const getToken = () => {
  return sessionStorage.getItem('pfa_token');
};

export const setToken = (token) => {
  sessionStorage.setItem('pfa_token', token);
};

export const removeToken = () => {
  sessionStorage.removeItem('pfa_token');
};

export const getUsernameFromToken = () => {
  const token = getToken();
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.sub || null;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};