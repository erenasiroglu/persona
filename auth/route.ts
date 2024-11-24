// persona/src/app/api/auth.ts
const API_URL = 'http://localhost:3001/api';

export const signup = async (userData: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return response.json();
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  return response.json();
};