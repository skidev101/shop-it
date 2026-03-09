import axios from 'axios';
import { refresh } from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});



client.interceptors.response.use(
  (res) => res,
  async (error: any) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refresh();

        return client(originalRequest);
      } catch (refreshError) {
        window.location.href = "/auth/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
)

export default client;
