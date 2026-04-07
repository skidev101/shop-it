"use client";

import { useAuth } from "@/hooks/use-auth";
import {
  LayoutDashboard,
  Package,
  Heart,
  MapPin,
  User,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { href: "/account", label: "Dashboard", icon: LayoutDashboard },
  { href: "/account/orders", label: "Order History", icon: Package },
  { href: "/account/wishlist", label: "My Wishlist", icon: Heart },
  { href: "/account/addresses", label: "Shipping Addresses", icon: MapPin },
  { href: "/account/profile", label: "Profile Settings", icon: User },
];

export default function AccountSidebar() {
  const { logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col h-[100vh] sticky z-51 top-0 transition-all pb-2 duration-200 ease-in-out border-r border-gray-100 bg-white overflow-hidden",
        isOpen ? "w-64" : "w-20",
      )}
    >
      <div className="flex flex-col h-full p-4">
        {/* Toggle Button */}
        <div
          className={cn(
            "flex px-2 mt-2",
            isOpen ? "justify-between items-center" : "justify-center",
          )}
        >
          {isOpen && (
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="text-sm font-black tracking-tighter text-[#1A1A1A] hover:cursor-pointer">
                MA
              </span>
            </Link>
          )}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-transparent hover:bg-gray-50 text-gray-400 hover:text-black transition-colors"
          >
            {isOpen ? (
              <CaretLeft size={20} weight="bold" />
            ) : (
              <CaretRight size={20} weight="bold" />
            )}
          </Button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 pt-10">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "group flex items-center p-3 rounded-xl transition-all",
                  isActive
                    ? "bg-[#F5F5F7] text-[#1A1A1A]"
                    : "text-[#666666] hover:bg-[#F5F5F7]/50 hover:text-[#1A1A1A]",
                  !isOpen && "justify-center",
                )}
              >
                <div className="flex items-center gap-3">
                  <link.icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      isActive ? "text-[#1A1A1A]" : "text-[#999999]",
                    )}
                  />
                  {isOpen && (
                    <span className="text-[13px] font-bold">{link.label}</span>
                  )}
                </div>
                {isOpen && (
                  <ChevronRight
                    className={cn(
                      "h-3 w-3 ml-auto transition-transform",
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                    )}
                  />
                )}
              </Link>
            );
          })}

          <button
            onClick={handleLogout}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-all mt-4 w-full",
              !isOpen && "justify-center",
            )}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            {isOpen && <span className="text-[13px] font-bold">Sign Out</span>}
          </button>
        </nav>

        {isOpen && (
          <div className="mt-auto p-5 bg-[#1A1A1A] rounded-2xl text-white space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest">
              Atlas Elite
            </h4>
            <p className="text-[10px] text-white/60 leading-relaxed">
              You are 2 orders away from unlocking Premium Shipping.
            </p>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[60%]" />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
