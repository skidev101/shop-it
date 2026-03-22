import Link from "next/link";
import { ChevronRight, LayoutGrid, Music, Camera, Monitor, Wrench, Package, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { VendorCard } from "@/components/vendor-card";
import { CategoryBar } from "@/components/category-bar";
import { EditorialCard } from "@/components/editorial-card";
import { SidebarVendorCard } from "@/components/sidebar-vendor-card";

const categories = [
  { name: "All Products", icon: LayoutGrid, active: true },
  { name: "Audio", icon: Music },
  { name: "Photography", icon: Camera },
  { name: "Desk", icon: Monitor },
  { name: "Tools", icon: Wrench },
  { name: "Accessories", icon: Package },
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

const artisans = [
    { 
        id: "v1",
        name: "Vector Forge Lab", 
        role: "Established 2017 • 1.2k Followers", 
        rating: 4.9, 
        avatar: "https://i.pravatar.cc/150?u=v",
        isVerified: true,
        thumbnails: [
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=200&q=80",
            "https://images.unsplash.com/photo-1526170315870-ef68bc6b3be3?w=200&q=80",
            "https://images.unsplash.com/photo-1627123424574-724758594e93?w=200&q=80"
        ]
    },
    { 
        id: "v2",
        name: "Lignum Guild", 
        role: "Established 2014 • 856 Followers", 
        rating: 4.2, 
        avatar: "https://i.pravatar.cc/150?u=l",
        isVerified: false,
        thumbnails: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
        ]
    },
    { 
        id: "v3",
        name: "Obscura Ceramics", 
        role: "Established 2010 • 2.4k Followers", 
        rating: 5.0, 
        avatar: "https://i.pravatar.cc/150?u=o",
        isVerified: true,
        thumbnails: [
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=200&q=80",
            "https://images.unsplash.com/photo-1520116468816-95b69f847357?w=200&q=80",
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&q=80"
        ]
    },
];

const newVendors = [
    { name: "Kinetik Robotics", category: "ELECTRONICS", location: "Berlin, DE", image: "https://picsum.photos/seed/k1/100" },
    { name: "Loom & Latitude", category: "TEXTILES", location: "Cusco, PE", image: "https://picsum.photos/seed/l1/100" },
    { name: "Ironclad Culinary", category: "KITCHEN", location: "Sheffield, UK", image: "https://picsum.photos/seed/i1/100" },
    { name: "Velvet & Vine", category: "INTERIORS", location: "Lyon, FR", image: "https://picsum.photos/seed/v1/100" },
];

export default async function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-12 py-10">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Categorical Filter Bar */}
        <CategoryBar 
            categories={categories} 
            productCount={24506} 
        />

        {/* 3. Trending Now Section */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-2">Trending Now</h2>
              <p className="text-[#999999] text-[15px] font-medium leading-relaxed">The most coveted items in the Atlas this hour.</p>
            </div>
            <Link href="/products" className="group flex items-center gap-2 text-[11px] font-black text-[#1A1A1A] hover:text-[#0047FF] transition-all uppercase tracking-widest">
              View All <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* 4. Curated Artisans Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tighter text-[#1A1A1A] mb-4">Curated Artisans</h2>
          <p className="text-[15px] text-[#666666] leading-relaxed font-medium">
            We hand-vet every vendor in the Atlas to ensure uncompromising quality and ethical manufacturing standards.
          </p>
        </div>

        {/* 5. Artisan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
            {artisans.map((artisan, idx) => (
                <VendorCard 
                    key={artisan.id} 
                    {...artisan} 
                    viewMode={idx === 2 ? 'minimal' : 'full'}
                />
            ))}
        </div>

        {/* 6. Editor's Picks & Journal Section */}
        <section className="mb-24">
            <div className="flex items-baseline justify-between mb-12 border-b border-[#F5F5F7] pb-8">
                <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tighter">Editor's Picks</h2>
                <div className="flex items-center gap-2 text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em] cursor-pointer group">
                    Highlighting <ChevronRight className="h-4 w-4 -rotate-90 group-hover:bg-[#1A1A1A] group-hover:text-white rounded-full transition-all" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Big Editorial Cards */}
                <div className="lg:col-span-4">
                    <EditorialCard 
                        title="The Analog Renaissance"
                        description="Why physical tools are making a comeback in a digital world and how to curate them."
                        image="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
                        aspectRatio="portrait"
                    />
                </div>
                <div className="lg:col-span-5">
                    <EditorialCard 
                        title="Brutalist Interiors"
                        description="12 vendors redefining the heavy aesthetic for light spaces in modern architecture."
                        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                        aspectRatio="square"
                        className="h-full"
                    />
                </div>
                
                {/* New to Atlas Sidebar */}
                <div className="lg:col-span-3">
                    <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-10">New to Atlas</h3>
                    <div className="space-y-10">
                        {newVendors.map((vendor) => (
                            <SidebarVendorCard key={vendor.name} {...vendor} />
                        ))}
                    </div>
                    
                    <Link href="/vendors" className="block mt-12 group">
                        <div className="h-14 w-full bg-[#F5F5F7] rounded-2xl flex items-center justify-center relative overflow-hidden transition-all group-hover:bg-[#1A1A1A]">
                            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999] group-hover:text-white transition-colors">
                                View All Vendors
                            </span>
                            <div className="absolute right-6 transform group-hover:translate-x-2 transition-transform text-[#999999] group-hover:text-white">
                                <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
