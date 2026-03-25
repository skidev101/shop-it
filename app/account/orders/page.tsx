'use client';

import { AccountPageHeader } from "@/components/account/account-page-header";
import { 
  Package, 
  Search, 
  ChevronRight,
  Clock,
  CheckCircle2,
  Truck,
  XCircle,
  Filter
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

const orders = [
  {
    id: "#ORD-7721",
    date: "Mar 12, 2024",
    status: "Delivered",
    statusIcon: CheckCircle2,
    statusColor: "text-emerald-500",
    statusBg: "bg-emerald-50",
    total: "$429.00",
    items: [
      { name: "Studio Reference X2", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80" },
      { name: "35mm Prime Artisan", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&q=80" }
    ]
  },
  {
    id: "#ORD-7690",
    date: "Feb 28, 2024",
    status: "In Transit",
    statusIcon: Truck,
    statusColor: "text-blue-500",
    statusBg: "bg-blue-50",
    total: "$1,240.00",
    items: [
        { name: "Linear Core TKL", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=100&q=80" }
    ]
  },
  {
    id: "#ORD-7512",
    date: "Feb 15, 2024",
    status: "Processing",
    statusIcon: Clock,
    statusColor: "text-orange-500",
    statusBg: "bg-orange-50",
    total: "$89.50",
    items: [
        { name: "Weekender Satchel", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=100&q=80" }
    ]
  },
  {
    id: "#ORD-7401",
    date: "Jan 10, 2024",
    status: "Cancelled",
    statusIcon: XCircle,
    statusColor: "text-rose-500",
    statusBg: "bg-rose-50",
    total: "$199.00",
    items: [
        { name: "Analog Renaissance", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=100&q=80" }
    ]
  }
];

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <AccountPageHeader 
        title="Order History" 
        description="View and track your previous orders and their current status."
      >
        <div className="flex items-center gap-2">
            <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
                <Input 
                    placeholder="Search by ID or product" 
                    className="h-11 pl-10 rounded-xl border-[#E5E5E5] bg-white text-xs font-medium focus-visible:ring-[#1A1A1A]"
                />
            </div>
            <Button variant="outline" className="h-11 w-11 p-0 rounded-xl border-[#E5E5E5] hover:bg-[#F5F5F7]">
                <Filter className="h-4 w-4" />
            </Button>
        </div>
      </AccountPageHeader>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="rounded-2xl bg-white border border-[#F5F5F7] overflow-hidden group hover:border-[#1A1A1A] transition-all duration-300">
            {/* Order Header */}
            <div className="p-6 border-b border-[#F5F5F7] bg-[#F9F9F9]/50 flex flex-wrap items-center justify-between gap-6">
               <div className="flex items-center gap-8 flex-wrap">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#999999] mb-1.5">Order ID</p>
                    <h4 className="text-sm font-black text-[#1A1A1A]">{order.id}</h4>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#999999] mb-1.5">Order Placed</p>
                    <p className="text-[12px] font-bold text-[#1A1A1A]">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#999999] mb-1.5">Total Amount</p>
                    <p className="text-[12px] font-black text-[#1A1A1A]">{order.total}</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-10 px-4 rounded-xl border-[#E5E5E5] text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all">
                        Order Details
                    </Button>
                    <Button className="h-10 px-4 rounded-xl bg-[#1A1A1A] text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all">
                        Track Order
                    </Button>
               </div>
            </div>

            {/* Order Items */}
            <div className="p-6">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex flex-col gap-6 flex-1">
                    {order.items.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-center">
                            <div className="h-16 w-16 bg-[#F5F5F7] rounded-xl overflow-hidden relative shrink-0">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div>
                                <h5 className="text-sm font-bold text-[#1A1A1A]">{item.name}</h5>
                                <p className="text-[10px] text-[#999999] uppercase font-bold tracking-tight mt-1">Quantity: 1 • Variant: Default</p>
                            </div>
                        </div>
                    ))}
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4 md:border-l border-[#F5F5F7] md:pl-12">
                     <div className={cn("px-4 py-2 rounded-full flex items-center gap-2", order.statusBg)}>
                        <order.statusIcon className={cn("h-4 w-4", order.statusColor)} />
                        <span className={cn("text-[10px] font-black uppercase tracking-widest", order.statusColor)}>
                            {order.status}
                        </span>
                     </div>
                     <p className="text-[10px] text-[#999999] font-medium max-w-[140px] md:text-right">
                        Last updated on {order.date} at 04:32 PM
                     </p>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination or Load More */}
      <div className="flex justify-center pt-8">
        <Button variant="outline" className="h-12 px-8 rounded-xl border-[#E5E5E5] text-[11px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all">
            Load More Orders
        </Button>
      </div>
    </div>
  );
}
