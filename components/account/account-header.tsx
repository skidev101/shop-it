"use client";

import { Search, Bell, Settings, HelpCircle, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function AccountHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#F0F0F0] flex items-center justify-between px-10 py-4">
      {/* Search Bar */}
      <div className="relative w-full max-w-[600px] -ml-2 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-gray-400 group-focus-within:text-[#1A1A1A] transition-colors" />
        <Input
          placeholder="Search orders..."
          className="h-12 pl-12 pr-4 bg-[#F5F5F7] placeholder:text-gray-400 border-none rounded-2xl text-[13px] font-bold focus-visible:ring-1 focus-visible:ring-[#1A1A1A] transition-all"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6 text-[#999999]">
          <button className="relative hover:cursor-pointer hover:text-[#1A1A1A] transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-rose-500 rounded-full border-2 border-white" />
          </button>
          {/*<button className="hover:text-[#1A1A1A] transition-colors">
            <Settings className="h-5 w-5" />
          </button>*/}
          <button className="hover:text-[#1A1A1A] hover:cursor-pointer transition-colors">
            <HelpCircle className="h-5 w-5" />
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/cart")}
            className="relative hover:rounded-xl"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>

        <div className="h-8 w-[1px] bg-[#E5E5E5]" />

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#1A1A1A]">
              Monaski .I
            </p>
            <p className="text-[10px] font-bold text-[#999999]">
              Atlas Customer
            </p>
          </div>
          <Avatar className="h-11 w-11 rounded-xl border border-[#F0F0F0]">
            <AvatarImage src="https://i.pravatar.cc/150?u=m" />
            <AvatarFallback className="font-black text-[10px] uppercase">
              MA
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
