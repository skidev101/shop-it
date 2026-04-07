"use client";

import { Bell, Check, ShoppingCart, Star, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: 1,
    title: "New order received",
    description: "Order #ORD-1234 from John Doe",
    time: "2 mins ago",
    icon: ShoppingCart,
    color: "text-blue-500",
    bg: "bg-blue-50",
    unread: true,
  },
  {
    id: 2,
    title: "New user registered",
    description: "A new user just joined the platform",
    time: "1 hour ago",
    icon: UserPlus,
    color: "text-green-500",
    bg: "bg-green-50",
    unread: true,
  },
  {
    id: 3,
    title: "New review",
    description: "Product 'Summer T-Shirt' received a 5-star review",
    time: "5 hours ago",
    icon: Star,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    unread: false,
  },
];

export function NotificationsPanel() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 hover:cursor-pointer hover:text-[#1A1A1A] transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-rose-500 rounded-full border-2 border-white" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0 border-[#F0F0F0] overflow-hidden">
        <div className="p-4 border-b border-[#F0F0F0] flex items-center justify-between">
          <h3 className="font-bold text-sm">Notifications</h3>
          <Button variant="ghost" size="xs" className="text-[10px] uppercase font-black tracking-widest text-[#999999] hover:text-[#1A1A1A]">
            Mark all read
          </Button>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "p-4 border-b border-[#F0F0F0] last:border-0 hover:bg-[#F9F9FB] transition-colors cursor-pointer relative",
                notification.unread && "bg-[#F5F5F7]/50"
              )}
            >
              <div className="flex gap-3">
                <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center shrink-0", notification.bg)}>
                  <notification.icon className={cn("h-4 w-4", notification.color)} />
                </div>
                <div className="space-y-1">
                  <p className="text-[13px] font-bold text-[#1A1A1A] leading-tight">
                    {notification.title}
                  </p>
                  <p className="text-[12px] text-[#666666] leading-tight">
                    {notification.description}
                  </p>
                  <p className="text-[10px] text-[#999999] font-medium">
                    {notification.time}
                  </p>
                </div>
              </div>
              {notification.unread && (
                <div className="absolute top-4 right-4 h-2 w-2 bg-[#1A1A1A] rounded-full" />
              )}
            </div>
          ))}
        </div>
        <div className="p-3 bg-[#F9F9FB] text-center">
          <Button variant="ghost" size="sm" className="w-full text-[11px] font-bold text-[#1A1A1A]">
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
