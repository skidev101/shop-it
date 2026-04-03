"use client";

import Link from "next/link";
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

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-white border-r border-[#F0F0F0] flex flex-col z-50">
      {/* Brand Header */}
      <div className="p-8 space-y-1">
        <h1 className="text-[18px] font-black tracking-tight text-[#1A1A1A]">
          Atlas Admin
        </h1>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
          Cartographic Authority
        </p>
      </div>
      bg-

      {/* Navigation Links */}
      <nav className="flex-1 px-4 mt-4 space-y-1 overflow-y-auto">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-[#1A1A1A] text-white shadow-xl shadow-black/5"
                  : "text-[#666666] hover:bg-[#F5F5F7] hover:text-[#1A1A1A]",
              )}
            >
              <div className="flex items-center gap-3.5">
                <item.icon
                  className={cn(
                    "h-[18px] w-[18px] transition-colors",
                    isActive
                      ? "text-white"
                      : "text-[#999999] group-hover:text-[#1A1A1A]",
                  )}
                />
                <span className="text-[11px] font-black uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#1A1A1A] rounded-l-full" />
              )}
              {isActive && <ChevronRight className="h-3 w-3 opacity-40" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-6 space-y-6">
        {/* <Button className="w-full h-12 bg-[#3B4761] hover:bg-[#2C364A] text-white rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 shadow-lg shadow-[#3B4761]/20">
          <Plus className="h-3 w-3" />
          Generate Report
        </Button> */}

        <div className="space-y-1">
          <Button className="w-full flex items-center gap-3 px-4 py-2 text-[#999999] hover:text-[#1A1A1A] transition-colors group">
            <HelpCircle className="h-4 w-4" />
            <span className="text-[11px] font-bold uppercase tracking-widest">
              Support
            </span>
          </Button>
          <Button className="w-full flex items-center gap-3 px-4 py-2 text-[#999999] hover:text-rose-600 transition-colors group">
            <LogOut className="h-4 w-4" />
            <span className="text-[11px] font-bold uppercase tracking-widest">
              Logout
            </span>
          </Button>
        </div>
      </div>
    </aside>
  );
}
