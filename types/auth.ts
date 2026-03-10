import { User } from "./user";

export interface AuthResponse {
  user: User;
}

export interface OtpResponse {
  success: boolean;
  message: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface OtpVerificationData {
  email: string;
  otp: string;
}
