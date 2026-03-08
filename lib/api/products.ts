import client from './client';
import { Product, ProductQuery, ProductsResponse } from '@/types';

export async function fetchProducts(params: ProductQuery) {
  const { data } = await client.get<ProductsResponse>('/products', { params });
  return data;
}

export async function getProductBySlug(slug: string) {
  const { data } = await client.get<Product>(`/products/${slug}`);
  return data;
}

export async function getCategories() {
  const { data } = await client.get<string[]>('/categories');
  return data;
}
