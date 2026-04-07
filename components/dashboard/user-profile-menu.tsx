"use client";

import { LogOut, Settings, User, CreditCard, Shield } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

interface UserProfileMenuProps {
  userName: string;
  userRole: string;
  userAvatar?: string;
}

export function UserProfileMenu({
  userName,
  userRole,
  userAvatar,
}: UserProfileMenuProps) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 lg:gap-4 cursor-pointer hover:opacity-80 transition-opacity">
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
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-1 border-[#F0F0F0]">
        <DropdownMenuLabel className="font-bold text-xs px-2 py-2">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-[#F0F0F0]" />
        <DropdownMenuItem onClick={() => router.push("/account/profile")} className="cursor-pointer py-2 px-3 rounded-lg focus:bg-[#F5F5F7]">
          <User className="mr-2 h-4 w-4" />
          <span className="font-bold text-[13px]">Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/account/settings")} className="cursor-pointer py-2 px-3 rounded-lg focus:bg-[#F5F5F7]">
          <Settings className="mr-2 h-4 w-4" />
          <span className="font-bold text-[13px]">Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/account/billing")} className="cursor-pointer py-2 px-3 rounded-lg focus:bg-[#F5F5F7]">
          <CreditCard className="mr-2 h-4 w-4" />
          <span className="font-bold text-[13px]">Billing</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-[#F0F0F0]" />
        <DropdownMenuItem className="cursor-pointer py-2 px-3 rounded-lg text-rose-600 focus:bg-rose-50 focus:text-rose-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span className="font-bold text-[13px]">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
