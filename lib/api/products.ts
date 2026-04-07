import client from './client';
import { Product, ProductQuery, ProductPayload, UpdateProductPayload } from '@/types/product';

export async function fetchProducts(params: ProductQuery) {
  const { data } = await client.get<{ products: Product[], total: number }>('/products', { params });
  return data;
}

export async function getProductById(id: string) {
  const { data } = await client.get<Product>(`/products/${id}`);
  return data;
}

export async function getProductBySlug(slug: string) {
  const { data } = await client.get<Product>(`/products/slug/${slug}`);
  return data;
}

export async function getCategories() {
  const { data } = await client.get<string[]>('/categories');
  return data;
}

export async function createProduct(payload: ProductPayload) {
  const { data } = await client.post<Product>('/products', payload);
  return data;
}

export async function updateProduct(id: string, payload: UpdateProductPayload) {
  const { data } = await client.patch<Product>(`/products/${id}`, payload);
  return data;
}

export async function deleteProduct(id: string) {
  const { data } = await client.delete(`/products/${id}`);
  return data;
}
