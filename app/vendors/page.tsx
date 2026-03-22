'use client';

import { useState } from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DirectoryVendorCard } from '@/components/directory-vendor-card';
import { cn } from '@/lib/utils';

const specialties = ['All', 'Stoneware', 'Textiles', 'Leather', 'Woodwork', 'Paper'];

const vendors = [
  {
    id: '1',
    name: 'Lumina Ceramics',
    specialty: 'Handcrafted Stoneware',
    location: 'Portland, Oregon',
    rating: 4.9,
    estDate: 2014,
    sales: 142,
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=200&q=80',
      'https://images.unsplash.com/photo-1578749556935-ef88814b29c3?w=200&q=80',
      'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=200&q=80'
    ]
  },
  {
    id: '2',
    name: 'Apex Textiles',
    specialty: 'Industrial Linen',
    location: 'Milan, Italy',
    rating: 4.8,
    estDate: 2008,
    sales: 2400,
    logo: 'https://images.unsplash.com/photo-1481437642641-2f0ae875f836?w=100&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&q=80',
      'https://images.unsplash.com/photo-1520031559992-1c29410d8979?w=200&q=80',
      'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=200&q=80'
    ]
  },
  {
    id: '3',
    name: 'Forge & Fine',
    specialty: 'Bespoke Metalwork',
    location: 'London, UK',
    rating: 5.0,
    estDate: 2019,
    sales: 310,
    logo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1542382257-80dedb725088?w=200&q=80',
      'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=200&q=80',
      'https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?w=200&q=80'
    ]
  },
  {
    id: '4',
    name: 'Grain & Grove',
    specialty: 'Artisan Woodwork',
    location: 'Vermont, USA',
    rating: 4.7,
    estDate: 2012,
    sales: 890,
    logo: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=100&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1549488344-c70595d9d4f1?w=200&q=80',
      'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=200&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445840?w=200&q=80'
    ]
  },
  {
    id: '5',
    name: 'Ox & Hide',
    specialty: 'Full Grain Leather',
    location: 'León, Mexico',
    rating: 4.9,
    estDate: 2017,
    sales: 560,
    logo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1551048632-26e4429783f6?w=200&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&q=80'
    ]
  },
  {
    id: '6',
    name: 'Studio Vellum',
    specialty: 'Fine Art Paper',
    location: 'Tokyo, Japan',
    rating: 4.6,
    estDate: 2021,
    sales: 180,
    logo: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=100&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=200&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=200&q=80'
    ]
  }
];

export default function VendorsPage() {
  const [activeSpecialty, setActiveSpecialty] = useState('All');

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-20">
      
      {/* Search Header */}
      <div className="bg-white border-b border-[#E5E5E5] pt-12 pb-16">
        <div className="mx-auto px-4 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
             <h1 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight mb-4">
                Find a Vendor
             </h1>
             <p className="text-[#666666] text-lg font-medium">
                Navigate our curated directory of master craftspeople and premium suppliers.
             </p>
          </div>

          <div className="max-w-2xl mx-auto flex gap-3">
             <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#999999]" />
                <Input 
                    placeholder="Search by name or keyword..." 
                    className="h-14 pl-12 rounded-xl border-[#E5E5E5] bg-[#F8F9FA] text-[15px] font-medium shadow-sm focus:bg-white transition-all"
                />
             </div>
             <Button className="h-14 px-8 rounded-xl bg-[#1A1A1A] hover:bg-[#333333] text-white font-bold text-[15px]">
                Search Directory
             </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 lg:px-12 py-10">
        
        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
                <span className="text-[10px] font-black text-[#999999] uppercase tracking-[0.2em] whitespace-nowrap">Specialty</span>
                <div className="flex gap-2">
                    {specialties.map((spec) => (
                        <button
                            key={spec}
                            onClick={() => setActiveSpecialty(spec)}
                            className={cn(
                                "h-9 px-4 rounded-full text-[12px] font-bold transition-all whitespace-nowrap",
                                activeSpecialty === spec 
                                    ? "bg-[#1A1A1A] text-white shadow-md" 
                                    : "bg-white border border-[#E5E5E5] text-[#666666] hover:bg-[#F0F0F0]"
                            )}
                        >
                            {spec}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-[#999999] uppercase tracking-[0.2em]">Region</span>
                    <Button variant="outline" className="h-9 rounded-lg border-[#E5E5E5] bg-white text-[12px] font-bold text-[#1A1A1A] gap-2">
                        Global Distribution
                        <ChevronDown className="h-3.5 w-3.5 text-[#999999]" />
                    </Button>
                </div>
                <span className="text-[12px] font-bold text-[#1A1A1A] bg-[#E5E5E5] px-2 py-1 rounded-md">
                    124 <span className="text-[#666666] font-medium">Vendors Found</span>
                </span>
            </div>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {vendors.map((vendor) => (
                <DirectoryVendorCard key={vendor.id} {...vendor} />
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-lg border-none bg-[#E5E5E5] text-[#999999] hover:bg-[#D4D4D4]">
                <ChevronDown className="h-4 w-4 rotate-90" />
            </Button>
            <Button className="h-10 w-10 rounded-lg bg-[#1A1A1A] text-white font-bold">1</Button>
            <Button variant="outline" className="h-10 w-10 rounded-lg border-none bg-[#E5E5E5] text-[#666666] font-bold hover:bg-[#D4D4D4]">2</Button>
            <Button variant="outline" className="h-10 w-10 rounded-lg border-none bg-[#E5E5E5] text-[#666666] font-bold hover:bg-[#D4D4D4]">3</Button>
            <span className="h-10 flex items-center justify-center px-2 text-[#999999]">...</span>
            <Button variant="outline" className="h-10 w-10 rounded-lg border-none bg-[#E5E5E5] text-[#666666] font-bold hover:bg-[#D4D4D4]">12</Button>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-lg border-none bg-[#E5E5E5] text-[#1A1A1A] hover:bg-[#D4D4D4]">
                <ChevronDown className="h-4 w-4 -rotate-90" />
            </Button>
        </div>

      </div>
    </div>
  );
}
