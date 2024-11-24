const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function login(credentials: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    throw new Error("Login failed");
  }
  
  return response.json();
}

export async function signup(userData: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    throw new Error("Signup failed");
  }
  
  return response.json();
}