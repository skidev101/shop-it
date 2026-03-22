'use client';

import Link from 'next/link';
import { 
  Search, 
  ShoppingCart, 
  User,
  ShoppingBag
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';

export function Header() {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"
    )}>
      <div className="mx-auto px-4 lg:px-6">
        <div className="flex h-12 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
              Merchant Atlas
            </span>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-[15px] font-medium text-[#1A1A1A] relative after:absolute after:bottom-[-22px] after:left-0 after:w-full after:h-[2px] after:bg-[#1A1A1A]">
              Marketplace
            </Link>
            <Link href="/vendors" className="text-[15px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors">
              Vendors
            </Link>
            <Link href="/categories" className="text-[15px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors">
              Categories
            </Link>
            <Link href="/editorial" className="text-[15px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors">
              Editorial
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex flex-1 items-center justify-end gap-6 max-w-md">
            <div className="relative w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999999]" />
              <Input 
                type="search" 
                placeholder="Search the Atlas..." 
                className="w-full bg-[#F5F5F7] pl-10 h-10 border-none rounded-full focus-visible:ring-1 focus-visible:ring-[#1A1A1A]/10"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative hover:bg-transparent">
                  <ShoppingBag className="h-[22px] w-[22px] text-[#1A1A1A]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#1A1A1A] text-[9px] font-bold text-white">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
              <div className="h-8 w-8 rounded-full bg-[#E5E5E5] overflow-hidden">
                {/* User Avatar Placeholder */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
