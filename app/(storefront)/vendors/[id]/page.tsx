'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Mail, ChevronDown, Share2 } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { cn } from '@/lib/utils';

// Mock Data for the specific vendor (Terra & Timber Co.)
const vendorData = {
  id: 'v1',
  name: 'Terra & Timber Co.',
  description: 'Handcrafted sustainable homeware from the heart of the Pacific Northwest.',
  logo: 'https://images.unsplash.com/photo-1616489953149-864c29759685?w=200&q=80',
  cover: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1600&q=80',
  rating: 4.9,
  reviews: 1200,
  joined: 'Oct 2018',
  response: 'Under 2 hours',
  location: 'Portland, OR',
  badges: ['VERIFIED GOLD TIER'],
  tags: ['Ceramics', 'Reclaimed Wood', 'Eco-Dyes'],
  about: "Founded by Elena Vance in 2018, Terra & Timber Co. began in a small backyard shed. Today, we're a team of five artisans dedicated to creating functional art that respects the earth. Every piece of ceramic and wood is sourced locally and processed using carbon-neutral methods."
};

const products = [
  {
    id: 'p1',
    name: 'Cedar Pour-Over Base',
    category: 'Kitchenware',
    price: 58.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544031608-27b687f89bca?w=600&q=80',
    badge: 'NEW ARRIVAL'
  },
  {
    id: 'p2',
    name: 'Indigo Linen Runner',
    category: 'Textiles',
    price: 42.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80'
  },
  {
    id: 'p3',
    name: 'Sandstone Morning Mug',
    category: 'Ceramics',
    price: 32.00,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
    badge: 'ON SALE'
  },
  {
    id: 'p4',
    name: 'Oak Floating Shelf',
    category: 'Furniture',
    price: 85.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1594222093582-7201e5445214?w=600&q=80'
  }
];

export default function VendorStorefrontPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('All Items');

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-[#1A1A1A]">
        <Image 
          src={vendorData.cover} 
          alt="Cover" 
          fill 
          className="object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12">
           <div className="container mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
              <div className="flex items-end gap-6">
                 <div className="h-32 w-32 rounded-2xl bg-white p-2 shadow-2xl rotate-3 transform border-4 border-white/10 backdrop-blur-sm">
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                        <Image src={vendorData.logo} alt="Logo" fill className="object-cover" />
                    </div>
                 </div>
                 <div className="mb-2">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border border-white/10">
                            {vendorData.badges[0]}
                        </span>
                        <div className="flex items-center gap-1 text-white/80 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                            <Star className="h-3 w-3 fill-white text-white" />
                            <span className="text-[11px] font-bold">{vendorData.rating} ({vendorData.reviews} reviews)</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                        {vendorData.name}
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl font-medium leading-relaxed">
                        {vendorData.description}
                    </p>
                 </div>
              </div>

              <div className="flex gap-3 mb-2">
                 <Button className="h-11 px-6 bg-white text-[#1A1A1A] hover:bg-white/90 font-bold text-[12px] uppercase tracking-wider rounded-xl">
                    Follow Shop
                 </Button>
                 <Button size="icon" className="h-11 w-11 bg-white/10 text-white hover:bg-white/20 rounded-xl backdrop-blur-md border border-white/10">
                    <Share2 className="h-4 w-4" />
                 </Button>
              </div>
           </div>
        </div>
      </div>

      <div className=" mx-auto px-4 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Sidebar */}
            <aside className="lg:col-span-3 space-y-8">
                {/* About Card */}
                <div className="bg-white p-6 rounded-2xl border border-[#E5E5E5]">
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">About the Maker</h3>
                    <p className="text-[13px] text-[#666666] leading-relaxed mb-6">
                        {vendorData.about}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 border-t border-[#F5F5F7] pt-4">
                        <div>
                            <span className="text-[9px] font-black text-[#999999] uppercase tracking-widest block mb-1">Average Response</span>
                            <span className="text-[13px] font-bold text-[#1A1A1A]">{vendorData.response}</span>
                        </div>
                        <div>
                            <span className="text-[9px] font-black text-[#999999] uppercase tracking-widest block mb-1">Joined</span>
                            <span className="text-[13px] font-bold text-[#1A1A1A]">{vendorData.joined}</span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-6">
                        <span className="text-[9px] font-black text-[#999999] uppercase tracking-widest block">Expertise</span>
                        <div className="flex flex-wrap gap-2">
                            {vendorData.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-[#F5F5F7] text-[#666666] text-[10px] font-bold uppercase tracking-wider rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Button variant="outline" className="w-full h-11 bg-[#F5F5F7] border-none text-[#1A1A1A] font-bold text-[12px] uppercase tracking-wider hover:bg-[#E5E5E5] gap-2">
                        <Mail className="h-3.5 w-3.5" />
                        Contact Vendor
                    </Button>
                </div>

                {/* Map Widget (Placeholder) */}
                <div className="h-48 w-full bg-[#E5E5E5] rounded-2xl overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                    <Image 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80" 
                        alt="Map" 
                        fill 
                        className="object-cover" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-[11px] font-bold text-[#1A1A1A]">
                            <MapPin className="h-3 w-3 text-[#0047FF]" />
                            {vendorData.location}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
                {/* Tabs & Sort */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-2 rounded-xl border border-[#E5E5E5]">
                    <div className="flex gap-1 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                        {['All Items (42)', 'New Arrivals', 'On Sale'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-[12px] font-bold transition-all whitespace-nowrap",
                                    activeTab === tab 
                                        ? "bg-[#1A1A1A] text-white shadow-sm" 
                                        : "text-[#666666] hover:bg-[#F5F5F7] hover:text-[#1A1A1A]"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F7] rounded-lg cursor-pointer">
                        <span className="text-[10px] font-black text-[#999999] uppercase tracking-widest">Sort By:</span>
                        <span className="text-[12px] font-bold text-[#1A1A1A]">Most Popular</span>
                        <ChevronDown className="h-3.5 w-3.5 text-[#999999]" />
                    </div>
                </div>

                {/* Featured Hero Product */}
                <div className="relative h-[400px] w-full bg-[#1A1A1A] rounded-3xl overflow-hidden mb-10 group cursor-pointer">
                    <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg z-10 border border-white/10">
                        Limited Edition
                    </span>
                    <Image 
                        src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80" 
                        alt="Featured" 
                        fill 
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 flex items-end justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Volcanic Ash Nesting Set</h2>
                            <p className="text-white/70 text-sm mb-4">Set of 3 handcrafted stoneware bowls.</p>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-white">$145.00</span>
                                <span className="text-sm font-medium text-white/50 line-through">$180.00</span>
                            </div>
                        </div>
                        <Button className="h-12 w-12 rounded-full bg-white text-[#1A1A1A] hover:bg-[#0047FF] hover:text-white transition-colors p-0">
                            <Share2 className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                     <Button variant="outline" className="h-12 px-8 rounded-xl bg-white border-[#E5E5E5] text-[#1A1A1A] font-bold text-[12px] uppercase tracking-wider hover:bg-[#F5F5F7]">
                        View All Products (42)
                     </Button>
                </div>
            </main>
        </div>
      </div>
    </div>
  );
}
