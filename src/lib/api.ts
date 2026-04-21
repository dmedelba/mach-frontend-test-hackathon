import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const ping = async () => {
  try {
    const response = await api.get('/api/ping');
    return response.data;
  } catch (error) {
    throw error;
  }
};