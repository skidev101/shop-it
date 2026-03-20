'use client';

import Link from 'next/link';
import { 
  ShoppingCart, 
  Menu, 
  User, 
  Search, 
  Heart, 
  MoreHorizontal, 
  ShoppingBag,
  ChevronDown,
  X
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/use-cart';
import { useAuthStore } from '@/stores/auth-store';
import { cn } from '@/lib/utils';

export function Header() {
  const { cartCount } = useCart();
  const { user } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const searchInputRef = useState<HTMLInputElement | null>(null)[0]; // Just to avoid error, will use ref properly

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector<HTMLInputElement>('input[type="search"]')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full sticky top-0 z-50 transition-all duration-300">
      {/* Announcement Banner - Professional & Non-intrusive */}
      {showBanner && (
        <div className="w-full bg-[#0047FF] text-white py-2 px-4 flex items-center justify-center text-xs sm:text-sm font-medium relative overflow-hidden">
          <div className="flex items-center gap-2 animate-in fade-in slide-in-from-top-1 duration-500">
            <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <p className="text-center tracking-wide">
              Our grace period drops from 40 to 29 days | Expired auctions start 3/23. 
              <Link href="/about" className="underline ml-2 hover:text-white/80 transition-opacity font-bold">
                Read the announcement &rarr;
              </Link>
            </p>
          </div>
          <button 
            onClick={() => setShowBanner(false)}
            className="absolute right-4 hover:bg-white/20 p-1 rounded-full transition-colors z-10"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <header className={cn(
        "w-full transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2" 
          : "bg-background py-4"
      )}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-12 items-center justify-between gap-4">
            {/* Logo - Matches "Unstoppable Domains" vibe */}
            <div className="flex items-center gap-8 shrink-0">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0047FF] text-white transition-all group-hover:shadow-[0_0_15px_rgba(0,71,255,0.4)]">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <span className="text-2xl font-black tracking-tight text-[#0047FF]">
                  ShopIt
                </span>
              </Link>

              {/* Desktop Main Navigation - Replicating the inline nav items from the image */}
              <nav className="hidden lg:flex items-center gap-6">
                <Link href="/products" className="text-sm font-semibold transition-colors hover:text-[#0047FF]">
                  Products
                </Link>
                <Link href="/products?category=electronics" className="text-sm font-semibold transition-colors hover:text-[#0047FF]">
                  Electronics
                </Link>
                <Link href="/products?category=fashion" className="text-sm font-semibold transition-colors hover:text-[#0047FF]">
                  Fashion
                </Link>
                <Link href="/products?category=home" className="text-sm font-semibold transition-colors hover:text-[#0047FF]">
                  Home
                </Link>
                <Button variant="ghost" size="icon-sm" className="rounded-full h-8 w-8 hover:bg-muted">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </nav>
            </div>

            {/* Search Bar - Exactly like the image */}
            <div className="hidden md:flex flex-1 max-w-xl relative group px-4">
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-[#0047FF] transition-colors" />
                <Input 
                  type="search" 
                  placeholder="Search products..." 
                  className="w-full bg-muted/30 pl-10 pr-16 h-11 rounded-xl border-transparent focus-visible:border-[#0047FF]/20 focus-visible:ring-4 focus-visible:ring-[#0047FF]/5 transition-all focus-visible:bg-background"
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-md border bg-background px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground/60 shadow-sm pointer-events-none">
                  <span className="text-[11px]">Ctrl</span>K
                </div>
              </div>
            </div>

            {/* Action Buttons - Matches the image layout */}
            <div className="flex items-center gap-1.5 sm:gap-4">
              <div className="flex items-center gap-1.5">
                {user ? (
                  <Button variant="outline" size="lg" className="h-11 rounded-xl gap-2 font-bold hidden sm:flex border-muted-foreground/10 hover:border-[#0047FF]/20 hover:bg-[#0047FF]/5 hover:text-[#0047FF]">
                    <User className="h-5 w-5" />
                    <span>{user.name.split(' ')[0]}</span>
                  </Button>
                ) : (
                  <Link href="/auth/login">
                    <Button variant="outline" size="lg" className="h-11 rounded-xl gap-2 font-bold hidden sm:flex border-muted-foreground/10 hover:border-[#0047FF]/20 hover:bg-[#0047FF]/5 hover:text-[#0047FF]">
                      <User className="h-5 w-5" />
                      <span>Login</span>
                    </Button>
                  </Link>
                )}
              </div>

              <Button variant="ghost" size="icon" className="hidden sm:flex h-11 w-11 rounded-xl hover:bg-[#0047FF]/5 hover:text-[#0047FF] transition-all">
                <Heart className="h-5 w-5" />
              </Button>

              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative h-11 w-11 rounded-xl hover:bg-[#0047FF]/5 hover:text-[#0047FF] transition-all group">
                  <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {cartCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0047FF] text-[10px] font-black text-white shadow-md ring-2 ring-background animate-in zoom-in">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden h-11 w-11 rounded-xl hover:bg-muted"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Modern Full-width dropdown */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-background border-b shadow-2xl transition-all duration-300 ease-in-out z-50 overflow-hidden",
        isMenuOpen ? "max-h-[80vh] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="container mx-auto px-6 space-y-6">
          <div className="relative md:hidden">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search products..." 
              className="w-full bg-muted/30 pl-10 h-12 rounded-xl border-transparent"
            />
          </div>
          <nav className="grid gap-2">
            <Link href="/products" className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-muted text-lg font-bold" onClick={() => setIsMenuOpen(false)}>
              Products <ChevronDown className="h-5 w-5 -rotate-90 opacity-40" />
            </Link>
            <Link href="/products?category=electronics" className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-muted text-lg font-bold" onClick={() => setIsMenuOpen(false)}>
              Electronics <ChevronDown className="h-5 w-5 -rotate-90 opacity-40" />
            </Link>
            <Link href="/products?category=fashion" className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-muted text-lg font-bold" onClick={() => setIsMenuOpen(false)}>
              Fashion <ChevronDown className="h-5 w-5 -rotate-90 opacity-40" />
            </Link>
            <div className="pt-4 mt-2 border-t flex flex-col gap-3">
              {!user && (
                <>
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full rounded-xl h-12 text-lg font-bold" variant="outline">Login</Button>
                  </Link>
                  <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full rounded-xl h-12 text-lg font-bold bg-[#0047FF] hover:bg-[#0047FF]/90">Sign Up Free</Button>
                  </Link>
                </>
              )}
              {user && (
                <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full rounded-xl h-12 text-lg font-bold" variant="outline">My Account</Button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 lg:hidden" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}
