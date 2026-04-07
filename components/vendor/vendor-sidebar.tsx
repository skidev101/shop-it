"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Store,
  Users,
} from "lucide-react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MENU_ITEMS = [
  { label: "Dashboard", href: "/vendor/dashboard", icon: LayoutDashboard },
  { label: "My Products", href: "/vendor/products", icon: Package },
  { label: "Orders", href: "/vendor/orders", icon: ShoppingBag },
  { label: "Customers", href: "/vendor/customers", icon: Users },
  { label: "Sales Analytics", href: "/vendor/analytics", icon: BarChart3 },
  { label: "Store Settings", href: "/vendor/settings", icon: Store },
];

export function VendorSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={cn(
        "border-r border-gray-100 bg-white flex flex-col transition-all duration-300 ease-in-out h-screen sticky top-0 overflow-hidden z-[60]",
        isOpen ? "w-64" : "w-20",
      )}
    >
      {/* Brand Header */}
      <div
        className={cn(
          "px-5 mt-6 flex items-center justify-between",
          !isOpen && "justify-center",
        )}
      >
        {isOpen && (
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-sm font-black tracking-tighter text-[#1A1A1A] hover:cursor-pointer">
              VENDOR PORTAL
            </span>
          </Link>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors hover:cursor-pointer text-[#999999] hover:text-[#1A1A1A]"
        >
          {isOpen ? (
            <CaretLeft size={18} weight="bold" />
          ) : (
            <CaretRight size={18} weight="bold" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 mt-12 space-y-2 overflow-y-auto scrollbar-none">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center p-3 rounded-xl transition-all",
                isActive
                  ? "bg-[#F5F5F7] text-[#1A1A1A]"
                  : "text-[#666666] hover:bg-[#F5F5F7]/50 hover:text-[#1A1A1A]",
                !isOpen && "justify-center",
              )}
            >
              <div className="flex items-center gap-3.5">
                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    isActive ? "text-[#1A1A1A]" : "text-[#999999]",
                  )}
                />
                {isOpen && (
                  <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap overflow-hidden">
                    {item.label}
                  </span>
                )}
              </div>

              {isOpen && isActive && (
                <ChevronRight className="h-3 w-3 opacity-40 ml-auto" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div
        className={cn(
          "p-4 space-y-2 border-t border-[#F0F0F0]",
          !isOpen && "flex flex-col items-center",
        )}
      >
        <Button
          variant="ghost"
          className={cn(
            "w-full flex items-center gap-3 px-4 py-2 text-[#999999] hover:text-[#1A1A1A] transition-colors group justify-start",
            !isOpen && "justify-center px-0",
          )}
        >
          <HelpCircle className="h-4 w-4 shrink-0" />
          {isOpen && (
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Support
            </span>
          )}
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full flex items-center gap-3 px-4 py-2 text-[#999999] hover:text-rose-600 transition-colors group justify-start",
            !isOpen && "justify-center px-0",
          )}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {isOpen && (
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Logout
            </span>
          )}
        </Button>
      </div>
    </aside>
  );
}
