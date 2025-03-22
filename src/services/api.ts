
import axios from 'axios';

const API_URL = 'http://localhost:8081/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add JWT token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const register = async (name: string, email: string, password: string) => {
  return api.post('/auth/register', { name, email, password });
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getFlashcardSets = async (category?: string, difficulty?: string) => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (difficulty) params.append('difficulty', difficulty);
  
  const response = await api.get(`/flashcard-sets?${params.toString()}`);
  return response.data;
};

export const getFlashcardSet = async (id: number) => {
  const response = await api.get(`/flashcard-sets/${id}`);
  return response.data;
};

export const createFlashcardSet = async (flashcardSet: {
  title: string;
  description: string;
  category: string;
  difficulty: string;
}) => {
  const response = await api.post('/flashcard-sets', flashcardSet);
  return response.data;
};

export default api;
