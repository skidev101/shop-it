'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  Heart, 
  MapPin, 
  User, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
  { href: '/account', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/account/orders', label: 'Order History', icon: Package },
  { href: '/account/wishlist', label: 'My Wishlist', icon: Heart },
  { href: '/account/addresses', label: 'Shipping Addresses', icon: MapPin },
  { href: '/account/profile', label: 'Profile Settings', icon: User },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="space-y-8 sticky top-24">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-[#1A1A1A] mb-1">My Account</h1>
                <p className="text-[10px] font-bold text-[#999999] uppercase tracking-widest">Customer ID: #8829-AT</p>
              </div>

              <nav className="flex flex-col gap-1">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={cn(
                        "group flex items-center justify-between p-3 rounded-xl transition-all",
                        isActive 
                          ? "bg-[#F5F5F7] text-[#1A1A1A]" 
                          : "text-[#666666] hover:bg-[#F5F5F7]/50 hover:text-[#1A1A1A]"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <link.icon className={cn("h-4 w-4", isActive ? "text-[#1A1A1A]" : "text-[#999999]")} />
                        <span className="text-[13px] font-bold">{link.label}</span>
                      </div>
                      <ChevronRight className={cn("h-3 w-3 transition-transform", isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} />
                    </Link>
                  );
                })}
                
                <button className="flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-all mt-4">
                  <LogOut className="h-4 w-4" />
                  <span className="text-[13px] font-bold">Sign Out</span>
                </button>
              </nav>

              <div className="p-6 bg-[#1A1A1A] rounded-2xl text-white space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest">Atlas Elite</h4>
                <p className="text-[10px] text-white/60 leading-relaxed">You are 2 orders away from unlocking Premium Shipping.</p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[60%]" />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
