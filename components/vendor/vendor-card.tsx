'use client';

import Image from 'next/image';
import { Star, Heart, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';

export interface VendorCardProps {
  id: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  isVerified?: boolean;
  thumbnails: string[];
  viewMode?: 'minimal' | 'full';
}

export function VendorCard({ 
  name, 
  role, 
  rating, 
  avatar, 
  isVerified, 
  thumbnails,
  viewMode = 'full' 
}: VendorCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white border border-[#F5F5F7] rounded-3xl transition-all duration-300 hover:shadow-xl hover:border-transparent group">
      {/* Avatar */}
      <div className="h-20 w-20 rounded-full bg-[#F5F5F7] mb-6 overflow-hidden relative group-hover:scale-110 transition-transform duration-500">
        <Image src={avatar} alt={name} fill className="object-cover" />
        {isVerified && (
          <div className="absolute bottom-1 right-1 bg-white rounded-full p-0.5 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-[#0047FF] fill-[#0047FF] text-white" />
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star 
            key={s} 
            className={rating >= s ? "h-3.5 w-3.5 fill-orange-400 text-orange-400" : "h-3.5 w-3.5 text-[#E5E5E5]"} 
          />
        ))}
        <span className="text-[11px] font-black ml-1 text-[#1A1A1A]">{rating.toFixed(1)}</span>
      </div>

      {/* Info */}
      <h3 className="text-lg font-bold text-[#1A1A1A] mb-1 group-hover:text-[#0047FF] transition-colors line-clamp-1">{name}</h3>
      <p className="text-[10px] text-[#999999] font-black uppercase tracking-[0.15em] mb-8">{role}</p>
      
      {/* Product Thumbnails */}
      <div className="grid grid-cols-3 gap-2.5 w-full mb-8">
        {thumbnails.map((thumb, i) => (
          <div key={i} className="aspect-square bg-[#F5F5F7] rounded-xl overflow-hidden relative group-hover:bg-[#E5E5E7] transition-colors">
            {thumb && (
                <Image src={thumb} alt="Preview" fill className="object-cover p-2 mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            )}
          </div>
        ))}
      </div>
      
      {/* Actions */}
      {viewMode === 'minimal' ? (
           <Button 
            variant="outline" 
            className="w-full h-11 rounded-xl bg-[#F5F5F7] border-none text-[11px] font-black uppercase tracking-widest text-[#999999] hover:bg-[#1A1A1A] hover:text-white transition-all"
           >
                View All Products
           </Button>
      ) : (
          <div className="flex gap-2.5 w-full">
              <Button className="flex-1 h-11 rounded-xl bg-[#1A1A1A] hover:bg-[#333333] text-[11px] font-black uppercase tracking-[0.1em] shadow-lg shadow-black/5 active:scale-95 transition-all">
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl bg-[#F5F5F7] border-none hover:bg-orange-50 hover:text-orange-500 transition-colors">
                  <Heart className="h-4 w-4" />
              </Button>
          </div>
      )}
    </div>
  );
}
