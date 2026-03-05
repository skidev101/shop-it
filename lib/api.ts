import { Product } from '@/types';

const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Immerse yourself in pure sound with our top-tier noise-canceling headphones. Featuring 30-hour battery life and plush ear cushions for all-day comfort.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Minimalist Leather Watch',
    description: 'A timeless classic. Genuine leather strap with a clean, minimalist dial. Water-resistant and perfect for any occasion.',
    price: 129.50,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    category: 'Accessories',
    rating: 4.5,
  },
  {
    id: '3',
    name: 'Smart Fitness Tracker',
    description: 'Track your health and fitness goals with precision. Monitors heart rate, sleep, steps, and more. syncing seamlessly with your smartphone.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
    category: 'Electronics',
    rating: 4.2,
  },
  {
    id: '4',
    name: 'Premium Cotton T-Shirt',
    description: 'Experience ultimate comfort with our 100% organic cotton t-shirt. Breathable, durable, and available in a range of modern colors.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    category: 'Clothing',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Ergonomic Office Chair',
    description: 'Work in comfort with our fully adjustable ergonomic chair. Lumbar support, breathable mesh back, and smooth-rolling casters.',
    price: 249.00,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80',
    category: 'Furniture',
    rating: 4.7,
  },
  {
    id: '6',
    name: 'Portable Bluetooth Speaker',
    description: 'Big sound in a small package. Waterproof, durable, and with 12 hours of playtime. Perfect for outdoor adventures.',
    price: 59.95,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    category: 'Electronics',
    rating: 4.4,
  },
];

export const getProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products;
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return products.filter((p) => p.category === category);
}
