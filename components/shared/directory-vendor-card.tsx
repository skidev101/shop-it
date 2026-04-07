"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export interface DirectoryVendorCardProps {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  estDate: number;
  sales: number;
  logo: string;
  thumbnails: string[];
}

export function DirectoryVendorCard({
  id,
  name,
  specialty,
  location,
  rating,
  estDate,
  sales,
  logo,
  thumbnails,
}: DirectoryVendorCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#F5F5F7] p-6 hover:shadow-xl hover:border-transparent transition-all duration-300 group flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-4">
          <div className="h-16 w-16 rounded-xl bg-[#F5F5F7] flex items-center justify-center overflow-hidden border border-[#E5E5E5]">
            <Image
              src={logo}
              alt={name}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-1 group-hover:text-[#0047FF] transition-colors">
              {name}
            </h3>
            <span className="inline-block px-2 py-0.5 bg-[#F0F4FF] text-[#0047FF] text-[10px] font-black uppercase tracking-widest rounded-md mb-2">
              {specialty}
            </span>
            <div className="flex items-center gap-1 text-[12px] font-medium text-[#999999]">
              <MapPin className="h-3 w-3" />
              {location}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-[#F5F5F7] px-2 py-1 rounded-lg">
          <Star className="h-3.5 w-3.5 fill-[#1A1A1A] text-[#1A1A1A]" />
          <span className="text-[12px] font-black text-[#1A1A1A]">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-6">
        <p className="text-[10px] font-black text-[#999999] uppercase tracking-widest mb-3">
          Featured Products
        </p>
        <div className="grid grid-cols-3 gap-3">
          {thumbnails.map((thumb, idx) => (
            <div
              key={idx}
              className="aspect-square bg-[#F5F5F7] rounded-lg overflow-hidden relative group/thumb"
            >
              <Image
                src={thumb}
                alt={`Product ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-[#F5F5F7] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-medium text-[#999999]">
            Est. {estDate} • {sales} Sales
          </span>
        </div>
        <Link href={`/vendors/${id}`}>
          <div className="flex items-center gap-1 text-[11px] font-black text-[#1A1A1A] group-hover:text-[#0047FF] transition-colors uppercase tracking-widest cursor-pointer">
            View Profile <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
