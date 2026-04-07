export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  stock: number;
  basePrice: number;
  comparePrice?: number;
  category: string;
  images: string[];
  variants?: Array<{ name: string; options: string[]; stock: number }>;
  specifications: Record<string, string>;
  isActive: boolean;
  isFeatured?: boolean;
  tags: string[];
  vendorId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductPayload {
  name: string;
  description: string;
  stock: number;
  basePrice: number;
  comparePrice?: number;
  category: string;
  images: string[];
  variants?: Array<{ name: string; options: string[]; stock: number }>;
  specifications: Record<string, string>;
  isActive: boolean;
  tags: string[];
}

export interface UpdateProductPayload {
  name?: string;
  description?: string;
  basePrice?: number;
  comparePrice?: number | null; // null = explicitly remove comparePrice
  category?: string;
  variants?: any[];
  specifications?: Record<string, string>;
  tags?: string[];
  stock?: number;
  removeImageIds?: string[]; // Cloudinary public_ids the client wants removed
}

export interface ProductQuery {
  page?: number;
  limit?: number;
  category?: string;
  sort?: string;
  search?: string;
  vendorId?: string;
}
