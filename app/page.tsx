'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Hero } from "@/components/hero";
import { CategoryBar } from "@/components/category-bar";
import { ChevronRight, Star, Heart, Plus } from "lucide-react";
import Image from "next/image";

const categories = [
  { name: "All Products", iconName: "LayoutGrid", active: true },
  { name: "Audio", iconName: "Music" },
  { name: "Photography", iconName: "Camera" },
  { name: "Desk", iconName: "Monitor" },
  { name: "Tools", iconName: "Wrench" },
  { name: "Accessories", iconName: "Package" },
];

const trendingProducts = [
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
];

export default function Home() {

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto px-4 lg:px-6 py-8">
        <Hero />

        {/* Filter Bar */}
        <CategoryBar 
            categories={categories} 
            productCount={24506} 
        />

        {/* Trending Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">Trending Now</h2>
              <p className="text-sm text-[#666666] mt-1">The most coveted items in the Atlas this hour.</p>
            </div>
            <Link href="/products" className="flex items-center gap-1 text-xs font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity uppercase tracking-widest">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Curated Artisans Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-4">Curated Artisans</h2>
          <p className="text-sm text-[#666666] leading-relaxed">
            We hand-vet every vendor in the Atlas to ensure uncompromising quality and ethical manufacturing standards.
          </p>
        </div>

        {/* Artisan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
                { name: "Vector Forge Lab", role: "Established 2017 • 1.2k Followers", rating: 4.9, avatar: "https://i.pravatar.cc/150?u=v" },
                { name: "Lignum Guild", role: "Established 2014 • 856 Followers", rating: 4.2, avatar: "https://i.pravatar.cc/150?u=l" },
                { name: "Obscura Ceramics", role: "Established 2010 • 2.4k Followers", rating: 5.0, avatar: "https://i.pravatar.cc/150?u=o" },
            ].map((artisan, idx) => (
                <div key={artisan.name} className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl group hover:shadow-xl transition-all">
                    <div className="h-20 w-20 rounded-full bg-gray-100 mb-6 overflow-hidden relative group-hover:scale-110 transition-transform duration-500">
                        <Image src={artisan.avatar} alt={artisan.name} fill className="object-cover" />
                    </div>
                    <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className={artisan.rating >= s ? "h-3.5 w-3.5 fill-orange-400 text-orange-400" : "h-3.5 w-3.5 text-gray-200"} />
                        ))}
                        <span className="text-[10px] font-bold ml-1">{artisan.rating}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-[#0047FF] transition-colors">{artisan.name}</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-8">{artisan.role}</p>
                    
                    <div className="grid grid-cols-3 gap-2 w-full mb-8">
                        {[1, 2, 3].map((p) => (
                            <div key={p} className="aspect-square bg-[#F5F5F7] rounded-lg relative overflow-hidden group-hover:bg-[#E5E5E7] transition-colors" />
                        ))}
                    </div>
                    
                    {idx === 2 ? (
                         <Button variant="outline" className="w-full h-11 rounded-xl bg-gray-50 border-none text-[11px] font-black uppercase tracking-widest text-gray-400 hover:bg-[#1A1A1A] hover:text-white transition-all">View All Products</Button>
                    ) : (
                        <div className="flex gap-2 w-full">
                            <Button className="flex-1 h-11 rounded-xl bg-[#1A1A1A] text-[11px] font-black uppercase tracking-widest">Add to Cart</Button>
                            <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl bg-gray-50 border-none hover:bg-orange-50 hover:text-orange-500 transition-colors">
                                <Heart className="h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>

        {/* Editor's Picks */}
        <section className="mb-20">
            <div className="flex items-baseline justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">Editor's Picks</h2>
                <div className="flex items-center gap-1 text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest cursor-pointer group">
                    Highlighting <ChevronRight className="h-3 w-3 -rotate-90 group-hover:bg-[#1A1A1A] group-hover:text-white rounded-full transition-all" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden group">
                    <Image src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80" alt="Analog Renaissance" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                        <h3 className="text-2xl font-bold text-white mb-2">The Analog Renaissance</h3>
                        <p className="text-sm text-white/70 mb-6">Why physical tools are making a comeback in a digital world and how to curate them.</p>
                        <Button variant="outline" className="w-max h-10 px-6 rounded-lg bg-white/10 border-white/20 text-white text-xs font-bold hover:bg-white hover:text-[#1A1A1A] transition-all">READ JOURNAL</Button>
                    </div>
                </div>
                <div className="md:col-span-5 relative aspect-[5/5] md:aspect-auto rounded-2xl overflow-hidden group">
                    <Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Brutalist Interiors" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                        <h3 className="text-2xl font-bold text-white mb-2">Brutalist Interiors</h3>
                        <p className="text-sm text-white/70 mb-6">12 vendors redefining the heavy aesthetic for light spaces in modern architecture.</p>
                        <Button variant="outline" className="w-max h-10 px-6 rounded-lg bg-white/10 border-white/20 text-white text-xs font-bold hover:bg-white hover:text-[#1A1A1A] transition-all">READ JOURNAL</Button>
                    </div>
                </div>
                
                {/* New to Atlas Sidebar */}
                <div className="md:col-span-3 space-y-8">
                    <h3 className="text-xl font-bold">New to Atlas</h3>
                    <div className="space-y-6">
                        {[
                            { name: "Kinetik Robotics", cat: "Electronics", city: "Berlin, DE" },
                            { name: "Loom & Latitude", cat: "Textiles", city: "Cusco, PE" },
                            { name: "Ironclad Culinary", cat: "Kitchen", city: "Sheffield, UK" },
                        ].map((vendor) => (
                            <div key={vendor.name} className="flex gap-4 group cursor-pointer items-center">
                                <div className="h-14 w-14 bg-gray-100 rounded-xl overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110">
                                    <Image src={`https://picsum.photos/seed/${vendor.name}/100`} alt={vendor.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold group-hover:text-[#0047FF] transition-colors">{vendor.name}</h4>
                                    <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-tight">Certified from {vendor.city}</p>
                                    <span className="text-[10px] font-black text-gray-200 group-hover:text-[#0047FF]/20 uppercase tracking-widest block mt-1 transition-colors">{vendor.cat}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="/vendors" className="block mt-4 group">
                        <div className="h-12 w-full bg-gray-50 rounded-xl flex items-center justify-center relative overflow-hidden transition-all group-hover:bg-[#1A1A1A]">
                            <span className="relative z-10 text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">View All Vendors</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
