'use client';

import { usePathname } from 'next/navigation';
import { 
  Search, 
  ShoppingCart, 
  User,
  ShoppingBag,
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Header() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAccountPage = pathname.startsWith("/account")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home', active: true },
    { href: '/shop', label: 'Shop' },
    { href: '/vendors', label: 'Vendors' },
    { href: '/deals', label: 'Deals' },
    { href: '/help', label: 'Help' },
  ];

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-white",
        isScrolled ? "shadow-sm py-2" : "py-4"
      )}>
        <div className="mx-auto px-4 lg:px-6">
          <div className="flex h-12 items-center justify-between gap-4 md:gap-8">
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden h-10 w-10 -ml-2 text-[#1A1A1A] hover:bg-transparent"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                Merchant Atlas
              </span>
            </Link>

            {/* Desktop Main Navigation */}
            {!isAccountPage && (
              <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-[15px] font-medium transition-colors relative h-full flex items-center",
                      isActive
                        ? "text-[#1A1A1A] after:absolute after:bottom-[-22px] after:left-0 after:w-full after:h-[2px] after:bg-[#1A1A1A]"
                        : "text-[#666666] hover:text-[#1A1A1A]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            )}


            {/* Search and Actions */}
            <div className="flex flex-1 items-center justify-end gap-2 sm:gap-6 max-w-md">
              <div className="relative w-full hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999999]" />
                <Input 
                  type="search" 
                  placeholder="Search the Atlas..." 
                  className="w-full bg-[#F5F5F7] pl-10 h-10 border-none rounded-full focus-visible:ring-1 focus-visible:ring-[#1A1A1A]/10"
                />
              </div>
              
              <div className="flex items-center gap-1 sm:gap-2">
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-transparent text-[#1A1A1A]">
                  <Search className="h-[22px] w-[22px]" />
                </Button>
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
                <div className="h-8 w-8 rounded-full font-bold bg-[#E5E5E5] overflow-hidden hidden sm:flex sm:justify-center sm:items-center">
                  {/* User Avatar Placeholder */}M
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-white transition-all duration-500 ease-in-out transform lg:hidden",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
              Merchant Atlas
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-10 w-10 text-[#1A1A1A]"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Search in Menu */}
          <div className="p-6 md:hidden">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999999]" />
              <Input 
                type="search" 
                placeholder="Search the Atlas..." 
                className="w-full bg-[#F5F5F7] pl-10 h-12 border-none rounded-2xl"
              />
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-bold py-4 transition-colors",
                  link.active ? "text-[#1A1A1A]" : "text-[#999999] hover:text-[#1A1A1A]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="mt-auto p-6 border-t space-y-4">
             <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)} className="block">
                <Button className="w-full h-14 rounded-2xl bg-[#1A1A1A] text-white font-bold text-lg">
                    Sign In
                </Button>
             </Link>
             <p className="text-center text-xs text-[#999999] font-medium uppercase tracking-widest">
                The Cartographic Authority in Commerce.
             </p>
          </div>
        </div>
      </div>
    </>
  );
}
