import axios from 'axios';

const API_URL = 'https://cyberforge-portfolio.onrender.com';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (username, password) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    const response = await api.post('/token', formData);
    return response.data;
  },
  register: async (email, password) => {
    const response = await api.post('/users/', { email, password });
    return response.data;
  },
  getMe: async () => {
    const response = await api.get('/users/me/');
    return response.data;
  },
};

export const billingService = {
  createCheckoutSession: async () => {
    const response = await api.post('/create-checkout-session');
    return response.data;
  },
};

export const resumeService = {
  analyze: async (text, domain) => {
    const response = await api.post('/resume/analyze', { text, domain });
    return response.data;
  },
};

export default api;
