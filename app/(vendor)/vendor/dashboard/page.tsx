"use client";

import {
  Package,
  ShoppingBag,
  Users,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  ChevronRight,
  Clock,
  AlertCircle,
  BarChart3,
} from "lucide-react";
import { StatCard } from "@/components/admin/stat-card";
import { AdminCard } from "@/components/admin/admin-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const RECENT_ORDERS = [
  {
    id: "#ORD-7429",
    customer: "Sarah Jenkins",
    date: "Oct 24, 2023",
    amount: "$142.00",
    status: "processing" as const,
  },
  {
    id: "#ORD-7428",
    customer: "Michael Chen",
    date: "Oct 23, 2023",
    amount: "$89.50",
    status: "shipped" as const,
  },
  {
    id: "#ORD-7427",
    customer: "Emma Wilson",
    date: "Oct 23, 2023",
    amount: "$210.00",
    status: "delivered" as const,
  },
];

const TOP_PRODUCTS = [
  {
    name: "Tactical EDC Pack",
    sales: 124,
    revenue: "$8,432.00",
    stock: 12,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=100&h=100&fit=crop",
  },
  {
    name: "Weatherproof Shell",
    sales: 89,
    revenue: "$15,130.00",
    stock: 45,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=100&h=100&fit=crop",
  },
  {
    name: "Titanium Carabiner",
    sales: 215,
    revenue: "$3,225.00",
    stock: 0,
    image: "https://images.unsplash.com/photo-1544265852-a41581cab8e7?w=100&h=100&fit=crop",
  },
];

export default function VendorDashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">
            Store Overview
          </h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">
            Performance metrics for Vanguard Gear.
          </p>
        </div>
        <Button className="bg-[#1A1A1A] text-white hover:bg-[#333333] rounded-xl px-6 h-12 text-[12px] font-black uppercase tracking-widest gap-2">
          <Package className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Revenue"
          value="$24,842.00"
          trend={{ value: "18.2%", isUp: true }}
          secondaryLabel="vs last month"
          variant="accent"
          icon={CreditCard}
        />
        <StatCard
          label="Active Orders"
          value="42"
          trend={{ value: "+12", isUp: true }}
          secondaryLabel="this week"
          icon={ShoppingBag}
        />
        <StatCard label="Total Products" value="156" icon={Package} />
        <StatCard
          label="Out of Stock"
          value="3"
          icon={AlertCircle}
          className="border-rose-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Recent Orders */}
        <div className="lg:col-span-7 space-y-8">
          <AdminCard
            title="Recent Orders"
            headerAction={
              <Button
                variant="ghost"
                className="h-auto p-0 text-[10px] font-black uppercase tracking-widest text-[#999999] gap-2"
              >
                View All <ChevronRight className="h-3 w-3" />
              </Button>
            }
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Order ID
                    </th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Customer
                    </th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Date
                    </th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Amount
                    </th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F0F0]">
                  {RECENT_ORDERS.map((order) => (
                    <tr key={order.id} className="group hover:bg-[#F9F9FB] transition-colors">
                      <td className="py-5 text-[12px] font-black text-[#1A1A1A]">
                        {order.id}
                      </td>
                      <td className="py-5 text-[12px] font-bold text-[#1A1A1A]">
                        {order.customer}
                      </td>
                      <td className="py-5 text-[12px] font-medium text-[#999999]">
                        {order.date}
                      </td>
                      <td className="py-5 text-[12px] font-black text-[#1A1A1A]">
                        {order.amount}
                      </td>
                      <td className="py-5">
                        <StatusBadge status={order.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AdminCard>

          {/* Store Analytics Mini Chart Placeholder */}
          <AdminCard title="Sales Velocity">
            <div className="h-[240px] w-full bg-[#F5F5F7] rounded-2xl flex items-center justify-center border border-dashed border-[#E5E5E5]">
               <div className="text-center">
                  <BarChart3 className="h-10 w-10 text-[#CCCCCC] mx-auto mb-3" />
                  <p className="text-[11px] font-black uppercase tracking-widest text-[#999999]">
                    Analytics Visualization Pipeline
                  </p>
               </div>
            </div>
          </AdminCard>
        </div>

        {/* Right Column: Top Products and Inventory */}
        <div className="lg:col-span-5 space-y-8">
          <AdminCard title="Top Performing Products">
            <div className="space-y-6">
              {TOP_PRODUCTS.map((product, idx) => (
                <div key={idx} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl overflow-hidden border border-[#F0F0F0] bg-[#F5F5F7]">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-black text-[#1A1A1A]">
                        {product.name}
                      </h4>
                      <p className="text-[11px] font-medium text-[#999999]">
                        {product.sales} sales • {product.revenue}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={cn(
                      "text-[11px] font-black",
                      product.stock === 0 ? "text-rose-600" : "text-[#1A1A1A]"
                    )}>
                      {product.stock === 0 ? "OOS" : `${product.stock} in stock`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-8 h-11 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5]"
            >
              Manage Inventory
            </Button>
          </AdminCard>

          <AdminCard title="Store Health">
            <div className="space-y-6">
               <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                    <span className="text-[#999999]">Order Fulfillment Rate</span>
                    <span className="text-[#1A1A1A]">98%</span>
                  </div>
                  <Progress value={98} className="h-2 bg-[#F0F0F0]" />
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                    <span className="text-[#999999]">Customer Rating</span>
                    <span className="text-[#1A1A1A]">4.9/5.0</span>
                  </div>
                  <Progress value={92} className="h-2 bg-[#F0F0F0]" />
               </div>
            </div>
          </AdminCard>
        </div>
      </div>
    </div>
  );
}
