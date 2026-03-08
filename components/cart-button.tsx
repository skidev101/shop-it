'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/hooks/use-cart';
import { CartItem } from '@/contexts/cart-context';

export function AddToCartButton({ product }: { product: CartItem }) {
  const {addToCart} = useCart();

  return (
    <Button size="lg" className="w-full sm:w-auto" onClick={() => addToCart(product)}>
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  );
}
