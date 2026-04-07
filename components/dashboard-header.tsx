"use client";

import { Search, Bell, Settings, HelpCircle, ShoppingBag, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  searchPlaceholder?: string;
  userName?: string;
  userRole?: string;
  userAvatar?: string;
  showCart?: boolean;
  className?: string;
}

export function DashboardHeader({
  searchPlaceholder = "Search...",
  userName = "User Name",
  userRole = "Role",
  userAvatar,
  showCart = false,
  className,
}: DashboardHeaderProps) {
  const router = useRouter();

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#F0F0F0] flex items-center justify-between px-6 lg:px-10 py-4",
      className
    )}>
      {/* Mobile Menu Toggle (can be handled by parent if needed) */}
      <div className="lg:hidden mr-4">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-[600px] lg:-ml-2 group hidden sm:block">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-gray-400 group-focus-within:text-[#1A1A1A] transition-colors" />
        <Input
          placeholder={searchPlaceholder}
          className="h-12 pl-12 pr-4 bg-[#F5F5F7] placeholder:text-gray-400 border-none rounded-2xl text-[13px] font-bold focus-visible:ring-1 focus-visible:ring-[#1A1A1A] transition-all"
        />
      </div>

      <div className="sm:hidden flex-1" />

      {/* Right Actions */}
      <div className="flex items-center gap-4 lg:gap-8">
        <div className="flex items-center gap-2 lg:gap-6 text-[#999999]">
          <button className="relative p-2 hover:cursor-pointer hover:text-[#1A1A1A] transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-rose-500 rounded-full border-2 border-white" />
          </button>
          
          <button className="hidden lg:block p-2 hover:text-[#1A1A1A] hover:cursor-pointer transition-colors">
            <HelpCircle className="h-5 w-5" />
          </button>

          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/cart")}
              className="relative hover:rounded-xl h-10 w-10"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="h-8 w-[1px] bg-[#E5E5E5] hidden lg:block" />

        {/* User Profile */}
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#1A1A1A]">
              {userName}
            </p>
            <p className="text-[10px] font-bold text-[#999999]">
              {userRole}
            </p>
          </div>
          <Avatar className="h-10 w-10 lg:h-11 lg:w-11 rounded-xl border border-[#F0F0F0]">
            <AvatarImage src={userAvatar || `https://i.pravatar.cc/150?u=${userName}`} />
            <AvatarFallback className="font-black text-[10px] uppercase">
              {userName.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
