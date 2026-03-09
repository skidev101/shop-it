export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  stock: string;
  price: number;
  comparePrice: number;
  category: string;
  images: [string];
  variants: string;
  specifications: string;
  isActive: boolean;
  isFeatured: boolean;
  tags: [string];
  createdAt: Date;
}

export interface ProductQuery {
  page?: number;
  limit?: number;
  category?: string;
  sort?: string;
  search?: string;
}
