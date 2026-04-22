import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getPing = async () => {
  try {
    const response = await api.get('/ping');
    return response.data;
  } catch (error) {
    throw error;
  }
};