'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/hooks/use-cart';

export interface StorefrontProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  comparePrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export function StorefrontProductCard({
  id,
  name,
  category,
  price,
  comparePrice,
  image,
  isNew,
  isSale
}: StorefrontProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-[#F5F5F7] overflow-hidden">
        {isNew && (
            <span className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md z-10">
                New Arrival
            </span>
        )}
        {isSale && (
            <span className="absolute top-3 left-3 bg-[#EB5757] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md z-10">
                Sale
            </span>
        )}
        
        <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
            <span className="text-[10px] font-black text-[#999999] uppercase tracking-widest">{category}</span>
        </div>
        
        <h3 className="text-[15px] font-bold text-[#1A1A1A] mb-3 leading-snug line-clamp-2 min-h-[42px]">
            {name}
        </h3>

        <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-lg font-bold text-[#1A1A1A]">${price.toFixed(2)}</span>
                {comparePrice && (
                    <span className="text-xs font-medium text-[#999999] line-through">${comparePrice.toFixed(2)}</span>
                )}
            </div>
            
            <Button 
                onClick={() => addToCart({ id, name, price, image, category, quantity: 1, description: '' })}
                className="h-8 w-8 rounded-full bg-[#1A1A1A] hover:bg-[#0047FF] text-white p-0 transition-colors"
            >
                <Plus className="h-4 w-4" />
            </Button>
        </div>
      </div>
    </div>
  );
}
