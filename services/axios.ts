import axios from 'axios';
import { getToken } from '../storage/token';
import { handleAxiosError } from '../utils/error';

export const api = axios.create({
  baseURL: '',
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    await handleAxiosError(error);
    return Promise.reject(error);
  }
);
