'use client';

import Image from 'next/image';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
  vendor?: string;
}

export function ProductCard({ 
  id, 
  name, 
  category, 
  price, 
  rating, 
  image, 
  badge,
  vendor
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-[#F5F5F7] rounded-2xl overflow-hidden">
        {badge && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-2 py-1 bg-white rounded-full shadow-sm">
            <div className={cn(
                "h-1.5 w-1.5 rounded-full",
                badge === 'BEST PRICE' ? "bg-orange-500" : "bg-blue-500"
            )} />
            <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-wider">{badge}</span>
          </div>
        )}
        
        <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-sm text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all">
          <Heart className="h-4 w-4" />
        </button>

        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="pt-4 pb-2">
        <div className="flex justify-between items-start mb-1">
          <div>
            <span className="text-[10px] font-black text-[#999999] uppercase tracking-widest block mb-1">
                {category}
            </span>
            <h3 className="text-[15px] font-bold text-[#1A1A1A] line-clamp-1">
                {name}
            </h3>
            {vendor && (
                <span className="text-[10px] font-medium text-[#999999] block mt-0.5">
                    {vendor}
                </span>
            )}
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-[#1A1A1A]">
                ${price}
            </span>
            <div className="flex items-center gap-1 mt-0.5">
                <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
                <span className="text-[10px] font-bold text-[#1A1A1A]">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button 
        onClick={() => addToCart({ id, name, price, image, category, quantity: 1, description: '' })}
        className="w-full h-10 rounded-xl bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs font-bold gap-2 mt-2"
      >
        <ShoppingCart className="h-3.5 w-3.5" />
        ADD TO CART
      </Button>
    </div>
  );
}
