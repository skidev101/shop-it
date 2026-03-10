import client from './client';
import { AuthResponse, User } from '@/types/user';

export async function login(credentials: any) {
  const { data } = await client.post<AuthResponse>('/auth/login', credentials);
  return data;
}

export async function register(userData: any) {
  const { data } = await client.post<AuthResponse>('/auth/register', userData);
  return data;
}

export async function verifyOtp(pin: string, email: string) {
  const { data } = await client.post<AuthResponse>('/auth/verify-otp', { otp: pin, email });
  return data;
}

export async function refresh() {
  const { data } = await client.post<AuthResponse>('/auth/refresh');
  return data;
}

export async function getMe() {
  const { data } = await client.get<User>('/users/me');
  return data;
}
