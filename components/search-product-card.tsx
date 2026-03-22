'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  vendor: {
    name: string;
    avatar: string;
  };
  badge?: string;
}

export function SearchProductCard({
  name,
  price,
  rating,
  reviews,
  image,
  vendor,
  badge
}: SearchProductCardProps) {
  return (
    <div className="group cursor-pointer flex flex-col">
      {/* Image Wrapper */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F5F5F7] mb-5">
        {badge && (
          <div className="absolute top-4 left-4 z-10 px-2.5 py-1.5 bg-[#1A1A1A] text-white rounded-md">
            <span className="text-[10px] font-black uppercase tracking-widest">{badge}</span>
          </div>
        )}
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      </div>

      {/* Info Section */}
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-[17px] font-bold text-[#1A1A1A] leading-snug line-clamp-2">
            {name}
          </h3>
          <span className="text-[17px] font-bold text-[#1A1A1A] whitespace-nowrap">
            ${price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-[#1A1A1A] text-[#1A1A1A]" />
            <span className="text-[12px] font-black text-[#1A1A1A]">{rating.toFixed(1)}</span>
          </div>
          <span className="text-[12px] font-bold text-[#999999] uppercase tracking-wider">
            ({reviews} Reviews)
          </span>
        </div>

        {/* Vendor Info */}
        <div className="flex items-center gap-2 pt-1">
          <div className="h-5 w-5 rounded-full bg-[#E5E5E5] overflow-hidden relative">
             <Image src={vendor.avatar} alt={vendor.name} fill className="object-cover" />
          </div>
          <p className="text-[11px] font-medium text-[#999999]">
            Sold by <span className="font-bold text-[#1A1A1A]">{vendor.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
