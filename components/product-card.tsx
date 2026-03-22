'use client';

import Image from 'next/image';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';

export interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
  vendor?: string;
  description?: string;
}

export function ProductCard({ 
  id, 
  name, 
  category, 
  price, 
  rating, 
  image, 
  badge,
  vendor,
  description
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ 
      id, 
      name, 
      price, 
      image, 
      category, 
      quantity: 1, 
      description: description || '' 
    });
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-[#F5F5F7] rounded-2xl overflow-hidden mb-4">
        {badge && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-full shadow-sm border border-black/5">
            <div className={cn(
                "h-1.5 w-1.5 rounded-full",
                badge === 'BEST PRICE' ? "bg-orange-500" : "bg-blue-500"
            )} />
            <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-wider">{badge}</span>
          </div>
        )}
        
        <button className="absolute top-4 right-4 z-10 p-2.5 bg-white rounded-full shadow-sm text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all transform hover:scale-110">
          <Heart className="h-4 w-4" />
        </button>

        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out p-4"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-1">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <span className="text-[10px] font-black text-[#999999] uppercase tracking-widest block mb-1">
                {category}
            </span>
            <h3 className="text-[15px] font-bold text-[#1A1A1A] leading-tight line-clamp-2">
                {name}
            </h3>
            {vendor && (
                <span className="text-[10px] font-medium text-[#999999] block mt-1">
                    {vendor}
                </span>
            )}
          </div>
          <div className="text-right pl-2">
            <span className="text-[15px] font-bold text-[#1A1A1A] tabular-nums">
                ${price.toLocaleString()}
            </span>
            <div className="flex items-center justify-end gap-1 mt-1">
                <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
                <span className="text-[11px] font-bold text-[#1A1A1A]">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={handleAddToCart}
          className="w-full h-11 rounded-xl bg-[#1A1A1A] hover:bg-[#333333] text-white text-[11px] font-black uppercase tracking-wider gap-2.5 mt-auto transition-all active:scale-[0.98]"
        >
          <ShoppingBag className="h-4 w-4" />
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
