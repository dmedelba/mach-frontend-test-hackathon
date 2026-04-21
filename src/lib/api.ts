import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

const getStatus = async () => {
  const response = await api.get('/status');
  return response.data;
};

export { getStatus };