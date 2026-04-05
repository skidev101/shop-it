'use client';

import { useState } from 'react';
import { 
  ChevronDown, 
  LayoutGrid, 
  List, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { GlobalSidebar } from '@/components/global-sidebar';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ALL_PRODUCTS = [
  {
    id: "1",
    name: "Studio Reference X2",
    category: "Acoustics",
    price: 349,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    badge: "BEST PRICE",
    vendor: "@TECHNOCO"
  },
  {
    id: "2",
    name: "35mm Prime Artisan",
    category: "Optics",
    price: 890,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    badge: "TOP SELLER",
    vendor: "@PHOTOMASTER"
  },
  {
    id: "3",
    name: "Linear Core TKL",
    category: "Computing",
    price: 149,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
    badge: "BEST PRICE",
    vendor: "@FABRIC8"
  },
  {
    id: "4",
    name: "Chrono Terra Blue",
    category: "Horology",
    price: 620,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
    vendor: "@TICKER"
  },
  {
    id: "5",
    name: "Weekender Satchel",
    category: "Leather",
    price: 430,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
    vendor: "@TAMERWARE"
  },
  {
    id: "6",
    name: "Modular Studio Pro",
    category: "Acoustics",
    price: 575,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&q=80",
    vendor: "@CUSTOMGEAR"
  },
  {
    id: "7",
    name: "Vanguard Reference",
    category: "Audio",
    price: 299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    vendor: "@AUDIOLAB"
  },
  {
    id: "8",
    name: "Oakwood Heritage",
    category: "Audio",
    price: 450,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
    vendor: "@SOUNDCURATOR"
  },
  {
    id: "9",
    name: "EchoPure Wireless",
    category: "Audio",
    price: 185,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
    vendor: "@MODERNAUDIO"
  }
];

export default function ProductsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto px-4 lg:px-12 py-12">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="h-8 w-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-[#1A1A1A]" />
            </div> */}
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                <Link href="/" className="hover:text-[#1A1A1A]">Shop</Link>
                <span className="text-[#E5E5E5] text-[12px]">/</span>
                <span className="text-[#1A1A1A]">Browse Products</span>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-black tracking-tighter text-[#1A1A1A] mb-6 leading-[0.9]">
                Discover the <br /> Atlas Collection
              </h1>
              <p className="text-[15px] font-medium text-[#666666] leading-relaxed">
                Explore our meticulously curated selection of products from the world&apos;s most skilled artisans and designers. Everything here is verified for quality and ethical production.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex bg-[#F5F5F7] p-1.5 rounded-2xl">
                <button 
                  onClick={() => setView('grid')}
                  className={cn(
                    "p-2.5 rounded-xl transition-all",
                    view === 'grid' ? "bg-white text-[#1A1A1A] shadow-lg shadow-black/5" : "text-[#999999] hover:text-[#1A1A1A]"
                  )}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setView('list')}
                  className={cn(
                    "p-2.5 rounded-xl transition-all",
                    view === 'list' ? "bg-white text-[#1A1A1A] shadow-lg shadow-black/5" : "text-[#999999] hover:text-[#1A1A1A]"
                  )}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center justify-between px-6 h-14 bg-[#F5F5F7] rounded-2xl text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] cursor-pointer hover:bg-[#E5E5E7] transition-all min-w-[200px]">
                Sort By: Newest
                <ChevronDown className="h-4 w-4 ml-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <GlobalSidebar />
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-9">
            <div className={cn(
              "grid gap-x-8 gap-y-12",
              view === 'grid' ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
            )}>
              {ALL_PRODUCTS.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-24 pt-12 border-t border-[#F5F5F7]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[10px] font-black text-[#999999] uppercase tracking-[0.2em]">
                        Showing 9 of 24,506 curated products
                    </p>
                    
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, '...', 12].map((page, i) => (
                            <button 
                                key={i}
                                className={cn(
                                    "h-10 w-10 rounded-xl text-[11px] font-black transition-all",
                                    page === 1 
                                        ? "bg-[#1A1A1A] text-white shadow-xl shadow-black/10" 
                                        : "text-[#666666] hover:bg-[#F5F5F7] hover:text-[#1A1A1A]"
                                )}
                            >
                                {page}
                            </button>
                        ))}
                        <Button variant="outline" className="h-10 px-6 rounded-xl bg-gray-50 border-none text-[10px] font-black uppercase tracking-widest gap-2 ml-4">
                            Next Page <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Featured Section Bottom */}
            <div className="mt-32 relative rounded-[40px] bg-[#1A1A1A] p-16 overflow-hidden">
                <div className="relative z-10 max-w-lg">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] block mb-6">Vendor Spotlight</span>
                    <h3 className="text-4xl font-black text-white mb-8 leading-tight tracking-tight">
                        Meet the artisans behind the <span className="text-[#0047FF]">Precision Series</span>.
                    </h3>
                    <p className="text-white/60 text-sm mb-10 leading-relaxed">
                        Learn about our rigorous certification process and why we chose Vector Forge Lab as our premier electronics partner.
                    </p>
                    <Button className="h-14 px-10 bg-white text-[#1A1A1A] hover:bg-white/90 rounded-2xl text-[11px] font-black uppercase tracking-widest border-none">
                        Read Their Story
                    </Button>
                </div>
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[80%] aspect-square rounded-full bg-gradient-to-br from-[#0047FF] to-transparent blur-[120px]" />
                </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
