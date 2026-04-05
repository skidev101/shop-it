"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Store,
  CreditCard,
  Package,
  BarChart3,
  ShieldCheck,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Plus,
} from "lucide-react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MENU_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Merchants", href: "/admin/merchants", icon: Store },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Inventory", href: "/admin/inventory", icon: Package },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "System Audit", href: "/admin/audit", icon: ShieldCheck },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={cn(
        "bg-white border-r border-[#F0F0F0] flex flex-col transition-all duration-300 ease-in-out h-screen sticky top-0 overflow-hidden",
        isOpen ? "w-[280px]" : "w-[80px]"
      )}
    >
      {/* Brand Header */}
      <div className={cn("p-6 flex items-center justify-between", !isOpen && "justify-center")}>
        {isOpen && (
           <span className="text-sm font-black tracking-tighter text-[#1A1A1A] uppercase">
             Admin Atlas
           </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-[#999999] hover:text-[#1A1A1A]"
        >
          {isOpen ? <CaretLeft size={18} weight="bold" /> : <CaretRight size={18} weight="bold" />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 mt-4 space-y-1 overflow-y-auto scrollbar-none">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center px-4 py-3 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-[#1A1A1A] text-white shadow-xl shadow-black/5"
                  : "text-[#666666] hover:bg-[#F5F5F7] hover:text-[#1A1A1A]",
                !isOpen && "justify-center px-0"
              )}
            >
              <div className="flex items-center gap-3.5">
                <item.icon
                  className={cn(
                    "h-[18px] w-[18px] shrink-0 transition-colors",
                    isActive
                      ? "text-white"
                      : "text-[#999999] group-hover:text-[#1A1A1A]",
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
      <div className={cn("p-4 space-y-2 border-t border-[#F0F0F0]", !isOpen && "flex flex-col items-center")}>
        <Button 
          variant="ghost" 
          className={cn(
            "w-full flex items-center gap-3 px-4 py-2 text-[#999999] hover:text-[#1A1A1A] transition-colors group justify-start",
            !isOpen && "justify-center px-0"
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
            !isOpen && "justify-center px-0"
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
