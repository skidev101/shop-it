'use client';

import { useState } from 'react';
import { ChevronDown, Search as SearchIcon } from 'lucide-react';
import { SearchFilters } from '@/components/search-filters';
import { SearchProductCard } from '@/components/search-product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const searchResults = [
  {
    id: '1',
    name: 'Vanguard Open-Back Reference Headphones',
    price: 299.00,
    rating: 4.9,
    reviews: 124,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    vendor: { name: 'AudioGraphy Labs', avatar: 'https://i.pravatar.cc/150?u=a1' }
  },
  {
    id: '2',
    name: 'Oakwood Heritage Series Acoustic Set',
    price: 450.00,
    rating: 5.0,
    reviews: 82,
    badge: 'ARTISAN CHOICE',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80',
    vendor: { name: 'The Sound Curators', avatar: 'https://i.pravatar.cc/150?u=a2' }
  },
  {
    id: '3',
    name: 'EchoPure Wireless Studio Monitors',
    price: 185.00,
    rating: 4.7,
    reviews: 241,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80',
    vendor: { name: 'Modern Audio', avatar: 'https://i.pravatar.cc/150?u=a3' }
  },
  {
    id: '4',
    name: 'Nimbus 4-Core Balanced Headphones',
    price: 312.00,
    rating: 4.8,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
    vendor: { name: 'SkyLine High Fidelity', avatar: 'https://i.pravatar.cc/150?u=a4' }
  },
  {
    id: '5',
    name: 'DeepFreq Bass-Optimized Acoustic Set',
    price: 128.00,
    rating: 4.4,
    reviews: 192,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80',
    vendor: { name: 'AudioGraphy Labs', avatar: 'https://i.pravatar.cc/150?u=a1' }
  },
  {
    id: '6',
    name: 'PhaseShift Modular Studio Headphones',
    price: 575.00,
    rating: 4.9,
    reviews: 37,
    image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&q=80',
    vendor: { name: 'Custom Gear Collective', avatar: 'https://i.pravatar.cc/150?u=a5' }
  }
];

export default function SearchPage() {
  const [view, setView] = useState<'product' | 'vendor'>('product');
  const [query, setQuery] = useState('Acoustic Headphones');

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="mx-auto px-4 lg:px-12 pt-12">
        {/* Breadcrumb & Title */}
        <div className="mb-12">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999] mb-6">
            <span className="cursor-pointer hover:text-[#1A1A1A]">Search</span>
            <span className="text-[#E5E5E5] text-[12px]">/</span>
            <span className="text-[#1A1A1A]">Acoustic Headphones</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-5xl font-black tracking-tight text-[#1A1A1A] mb-4 leading-tight">
                Results for &quot;{query}&quot;
              </h1>
              <p className="text-[15px] font-medium text-[#666666]">
                Did you mean: <span className="italic font-bold text-[#1A1A1A] cursor-pointer hover:text-[#0047FF]">Studio Monitor Headphones?</span>
              </p>
            </div>

            {/* View & Sort Controls */}
            <div className="flex items-center gap-4 self-end md:self-auto">
              <div className="flex bg-[#F5F5F7] p-1 rounded-xl">
                <button 
                  onClick={() => setView('product')}
                  className={cn(
                    "px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all",
                    view === 'product' ? "bg-white text-[#1A1A1A] shadow-sm" : "text-[#999999] hover:text-[#1A1A1A]"
                  )}
                >
                  Product
                </button>
                <button 
                  onClick={() => setView('vendor')}
                  className={cn(
                    "px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all",
                    view === 'vendor' ? "bg-white text-[#1A1A1A] shadow-sm" : "text-[#999999] hover:text-[#1A1A1A]"
                  )}
                >
                  Vendor
                </button>
              </div>

              <div className="flex items-center justify-between px-5 h-12 bg-[#F5F5F7] rounded-xl text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] cursor-pointer hover:bg-[#E5E5E7] transition-all min-w-[200px]">
                Sort By: Recommended
                <ChevronDown className="h-4 w-4 ml-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3">
             <SearchFilters />
          </aside>

          {/* Results Grid */}
          <main className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
              {searchResults.map((product) => (
                <SearchProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-24 text-center">
              <Button 
                variant="outline" 
                className="h-14 px-12 rounded-xl bg-[#F5F5F7] border-none text-[11px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95"
              >
                Load More Results
              </Button>
              <p className="mt-6 text-[10px] font-black text-[#999999] uppercase tracking-[0.2em]">
                Showing 6 of 42 results
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
