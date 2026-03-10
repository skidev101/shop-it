import client from './client';
import { User } from '@/types/user';
import { AuthResponse, OtpResponse, OtpVerificationData } from '@/types/auth';

export async function login(loginData: any) {
  const { data } = await client.post<AuthResponse>('/auth/login', loginData);
  return data;
}

export async function register(registerData: any) {
  const { data } = await client.post<AuthResponse>('/auth/register', registerData);
  return data;
}

export async function verifyOtp(otpData: OtpVerificationData) {
  const { data } = await client.post<OtpResponse>('/auth/verify-otp', otpData);
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
