export interface User {
  email: string;
  firstName: string;
  lastName: string;
  role: "customer" | "admin" | "vendor";
  phoneNumber?: string;
  isVerified: boolean;
  timezone: string;
  addresses?: {
    street: string;
    city: string;
    country: string;
    zipCode: string;
    isDefault: boolean;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

