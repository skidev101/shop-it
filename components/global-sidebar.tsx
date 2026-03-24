'use client';

import { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Star, 
  Truck, 
  Filter,
  X,
  LayoutGrid,
  Music,
  Camera,
  Monitor,
  Wrench,
  Package,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { SidebarVendorCard } from './sidebar-vendor-card';
import { ShieldCheck, ShieldCheckIcon } from '@phosphor-icons/react';

const CATEGORIES = [
  { name: 'All Products', icon: LayoutGrid, count: 1240 },
  { 
    name: 'Audio & Sound', 
    icon: Music, 
    count: 450,
    subcategories: ['Headphones', 'Speakers', 'Microphones', 'Audio Interfaces']
  },
  { 
    name: 'Photography', 
    icon: Camera, 
    count: 320,
    subcategories: ['Cameras', 'Lenses', 'Lighting', 'Tripods']
  },
  { 
    name: 'Desk Setup', 
    icon: Monitor, 
    count: 280,
    subcategories: ['Keyboards', 'Mice', 'Monitor Arms', 'Desk Mats']
  },
  { 
    name: 'Tools & EDC', 
    icon: Wrench, 
    count: 190,
    subcategories: ['Multi-tools', 'Flashlights', 'Pens', 'Notebooks']
  },
  { 
    name: 'Accessories', 
    icon: Package, 
    count: 640,
    subcategories: ['Cases', 'Cables', 'Stands', 'Cleaning']
  },
];

const RECOMMENDED_VENDORS = [
  {
    name: "Vector Forge Lab",
    category: "Electronics",
    location: "Berlin, DE",
    image: "https://i.pravatar.cc/150?u=v"
  },
  {
    name: "Lignum Guild",
    category: "Textiles",
    location: "Cusco, PE",
    image: "https://i.pravatar.cc/150?u=l"
  }
];

interface GlobalSidebarProps {
  className?: string;
}

export function GlobalSidebar({ className }: GlobalSidebarProps) {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Audio & Sound']);

  const toggleExpand = (name: string) => {
    setExpandedCategories(prev => 
      prev.includes(name) 
        ? prev.filter(c => c !== name) 
        : [...prev, name]
    );
  };

  return (
    <aside className={cn("w-full space-y-12", className)}>
      {/* Search Input */}
      {/* <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999] group-focus-within:text-[#1A1A1A] transition-colors" />
        <Input 
          placeholder="Search products..." 
          className="h-14 pl-12 pr-4 bg-[#F5F5F7] border-none rounded-2xl text-[13px] font-bold focus-visible:ring-1 focus-visible:ring-[#1A1A1A] transition-all"
        />
      </div> */}

      {/* Categories */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Categories</h3>
          <span className="text-[10px] font-black text-[#E5E5E5] uppercase tracking-[0.2em]">{CATEGORIES.length.toString().padStart(2, '0')}</span>
        </div>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => {
            const isExpanded = expandedCategories.includes(cat.name);
            const isActive = activeCategory === cat.name;
            const hasSub = cat.subcategories && cat.subcategories.length > 0;

            return (
              <div key={cat.name} className="space-y-1">
                <button
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setActiveSubCategory(null);
                    if (hasSub) toggleExpand(cat.name);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group",
                    isActive 
                      ? "bg-[#1A1A1A] text-white shadow-xl shadow-black/5" 
                      : "text-[#666666] hover:bg-[#F5F5F7] hover:text-[#1A1A1A]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <cat.icon className={cn(
                      "h-4 w-4",
                      isActive ? "text-white" : "text-[#999999] group-hover:text-[#1A1A1A]"
                    )} />
                    <span className="text-[11px] font-black uppercase tracking-widest">{cat.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {hasSub ? (
                      <ChevronDown className={cn(
                        "h-3 w-3 transition-transform duration-300",
                        isExpanded ? "rotate-180" : "rotate-0",
                        isActive ? "text-white/40" : "text-[#E5E5E5]"
                      )} />
                    ) : (
                      <span className={cn(
                        "text-[9px] font-black uppercase tracking-widest",
                        isActive ? "text-white/40" : "text-[#E5E5E5]"
                      )}>
                        {cat.count}
                      </span>
                    )}
                  </div>
                </button>

                {hasSub && isExpanded && (
                  <div className="pl-11 pr-2 py-3 space-y-1 border-l-2 border-[#F5F5F7] ml-6 mt-1">
                    {cat.subcategories!.map(sub => {
                      const isSubActive = activeSubCategory === sub;
                      return (
                        <button 
                          key={sub}
                          onClick={() => setActiveSubCategory(sub)}
                          className={cn(
                            "w-full text-left py-2 px-3 rounded-lg text-[11px] font-bold transition-all flex items-center justify-between group",
                            isSubActive 
                              ? "text-[#1A1A1A] bg-[#F5F5F7]" 
                              : "text-[#999999] hover:text-[#1A1A1A] hover:bg-[#F5F5F7]/50"
                          )}
                        >
                          {sub}
                          <span className={cn(
                            "text-[9px] font-black tracking-widest transition-opacity",
                            isSubActive ? "opacity-100" : "opacity-40"
                          )}>
                            {Math.floor(Math.random() * 100) + 10}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Advanced Filters</h3>
          <Button variant="ghost" className="h-auto p-0 text-[9px] font-black uppercase tracking-widest text-[#0047FF] hover:bg-transparent hover:text-[#0037CC]">Reset</Button>
        </div>

        {/* Price Range */}
        <div className="space-y-4">
          <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Price Range</Label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[12px] font-bold text-[#999999]">$</span>
              <Input placeholder="0" className="pl-6 h-11 bg-[#F5F5F7] border-none rounded-xl text-[12px] font-bold" />
            </div>
            <div className="w-2 h-[2px] bg-[#E5E5E5]" />
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[12px] font-bold text-[#999999]">$</span>
              <Input placeholder="500+" className="pl-7 h-11 bg-[#F5F5F7] border-none rounded-xl text-[12px] font-bold" />
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="space-y-4">
          <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Vendor Rating</Label>
          <div className="space-y-2.5">
            {[4.5, 4.0, 3.5].map((rating) => (
              <div key={rating} className="flex items-center space-x-3">
                <Checkbox id={`rating-${rating}`} className="h-5 w-5 rounded-md border-[#E5E5E5] data-[state=checked]:bg-[#1A1A1A]" />
                <label htmlFor={`rating-${rating}`} className="text-[12px] font-bold text-[#1A1A1A] flex items-center gap-1.5 cursor-pointer">
                  {rating} & Above <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping */}
        <div className="space-y-4">
          <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Shipping Speed</Label>
          <RadioGroup defaultValue="standard" className="space-y-2.5">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="same-day" id="same-day" className="h-5 w-5 border-[#E5E5E5] text-[#1A1A1A]" />
              <Label htmlFor="same-day" className="text-[12px] font-bold text-[#1A1A1A] cursor-pointer">Same Day Dispatch</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="standard" id="standard" className="h-5 w-5 border-[#E5E5E5] text-[#1A1A1A]" />
              <Label htmlFor="standard" className="text-[12px] font-bold text-[#1A1A1A] cursor-pointer">Standard (3-5 days)</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Featured Vendors */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Artisan Curators</h3>
          <Button variant="ghost" className="h-auto p-0 text-[9px] font-black uppercase tracking-widest text-[#999999] hover:bg-transparent hover:text-[#1A1A1A]">View All</Button>
        </div>
        <div className="space-y-6">
          {RECOMMENDED_VENDORS.map((vendor) => (
            <SidebarVendorCard key={vendor.name} {...vendor} />
          ))}
        </div>
      </div>

      {/* Sidebar Promo */}
      <div className="relative rounded-3xl bg-[#0047FF] p-8 overflow-hidden group cursor-pointer active:scale-[0.98] transition-all">
        <div className="relative z-10">
          <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em] block mb-2">Member Exclusive</span>
          <h4 className="text-xl font-bold text-white mb-4 leading-tight">Join the Atlas Registry for 15% Off</h4>
          <Button className="h-10 px-6 bg-white text-[#0047FF] hover:bg-white/90 rounded-xl text-[10px] font-black uppercase tracking-widest border-none">
            Register Now
          </Button>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700">
           <ShieldCheckIcon size={120} weight="fill" className="text-white" />
        </div>
      </div>
    </aside>
  );
}
