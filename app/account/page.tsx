"use client";

import { useAuth } from "@/hooks/use-auth";
import {
  Package,
  Heart,
  MapPin,
  CreditCard,
  ChevronRight,
  Clock,
  CheckCircle2,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Reusable Stat Card for Account Dashboard
function AccountStatCard({
  label,
  value,
  icon: Icon,
  href,
  className,
}: {
  label: string;
  value: string | number;
  icon: any;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className="block group">
      <Card
        className={cn(
          "border-none bg-[#F5F5F7] transition-all duration-300 group-hover:bg-[#1A1A1A] group-hover:shadow-xl",
          className,
        )}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999] group-hover:text-white/50 transition-colors">
                {label}
              </h4>
              <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A] group-hover:text-white transition-colors">
                {value}
              </h2>
            </div>
            <div className="p-3 rounded-2xl bg-white text-[#1A1A1A] group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

const recentOrders = [
  {
    id: "#ORD-7721",
    date: "Mar 12, 2024",
    status: "Delivered",
    statusIcon: CheckCircle2,
    statusColor: "text-emerald-500",
    total: "$429.00",
    items: 2,
  },
  {
    id: "#ORD-7690",
    date: "Feb 28, 2024",
    status: "In Transit",
    statusIcon: Truck,
    statusColor: "text-blue-500",
    total: "$1,240.00",
    items: 4,
  },
  {
    id: "#ORD-7512",
    date: "Feb 15, 2024",
    status: "Processing",
    statusIcon: Clock,
    statusColor: "text-orange-500",
    total: "$89.50",
    items: 1,
  },
];

export default function AccountDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-12 w-full">
      {/* Welcome Header */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#1A1A1A] mb-2">
              Welcome back, {user?.firstName || "Monaski"}
            </h2>
            <p className="text-[#666666] text-sm font-medium">
              Check your latest updates and manage your account settings here.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#999999] mb-1">
                Current Points
              </p>
              <p className="text-lg font-black text-[#1A1A1A]">
                2,450 <span className="text-[10px] text-[#999999]">PTS</span>
              </p>
            </div>
            <Button
              variant="outline"
              className="h-12 px-6 rounded-xl border-[#E5E5E5] text-[11px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Earn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <AccountStatCard
          label="Total Orders"
          value={12}
          icon={Package}
          href="/account/orders"
        />
        <AccountStatCard
          label="Wishlist Items"
          value={8}
          icon={Heart}
          href="/account/wishlist"
        />
        <AccountStatCard
          label="Saved Addresses"
          value={2}
          icon={MapPin}
          href="/account/addresses"
        />
        <AccountStatCard
          label="Payment Methods"
          value={1}
          icon={CreditCard}
          href="/account/profile"
        />
      </section>

      {/* Recent Orders Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A]">
            Recent Orders
          </h3>
          <Link
            href="/account/orders"
            className="flex items-center gap-1 text-[10px] font-black text-[#1A1A1A] hover:opacity-70 transition-opacity uppercase tracking-widest"
          >
            View All <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-4">
          {recentOrders.map((order) => (
            <Link
              key={order.id}
              href={`/account/orders/${order.id.replace("#", "")}`}
              className="group"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-white border border-[#F5F5F7] group-hover:border-[#1A1A1A] group-hover:shadow-lg transition-all duration-300 gap-6">
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <div className="h-12 w-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center shrink-0 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#1A1A1A]">
                      {order.id}
                    </h4>
                    <p className="text-[11px] font-bold text-[#999999] mt-0.5">
                      {order.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto sm:gap-12 lg:gap-24">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#999999] mb-1">
                      Status
                    </p>
                    <div
                      className={cn(
                        "flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest",
                        order.statusColor,
                      )}
                    >
                      <order.statusIcon className="h-3.5 w-3.5" />
                      {order.status}
                    </div>
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#999999] mb-1">
                      Items
                    </p>
                    <p className="text-[11px] font-black text-[#1A1A1A] uppercase">
                      {order.items} {order.items > 1 ? "Items" : "Item"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#999999] mb-1">
                      Total
                    </p>
                    <p className="text-[11px] font-black text-[#1A1A1A]">
                      {order.total}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#F5F5F7] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Profile Summary & Security */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-[#F5F5F7] rounded-2xl overflow-hidden shadow-none">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Profile Summary</h3>
              <Link
                href="/account/profile"
                className="text-[10px] font-black uppercase tracking-widest text-[#999999] hover:text-[#1A1A1A]"
              >
                Edit
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-2xl font-black text-[#1A1A1A]">
                  {user?.firstName || "M"}
                </div>
                <div>
                  <h4 className="text-base font-black text-[#1A1A1A]">
                    {user?.firstName || "Member"}
                  </h4>
                  <p className="text-[12px] font-medium text-[#666666]">
                    {user?.email || "member@atlas.com"}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F5F5F7] space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-[#999999] uppercase tracking-wider">
                    Member Since
                  </span>
                  <span className="text-[11px] font-black text-[#1A1A1A]">
                    January 2024
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-[#999999] uppercase tracking-wider">
                    Default Address
                  </span>
                  <span className="text-[11px] font-black text-[#1A1A1A]">
                    Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F5F5F7] rounded-2xl overflow-hidden shadow-none bg-[#F5F5F7]/30">
          <CardContent className="p-8 space-y-6">
            <h3 className="text-lg font-bold">Account Security</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#F5F5F7]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-wide">
                      Email Verified
                    </h5>
                    <p className="text-[10px] text-[#999999] font-medium">
                      Your email is protected.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#F5F5F7]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-wide">
                      2FA Disabled
                    </h5>
                    <p className="text-[10px] text-[#999999] font-medium">
                      Add another layer of security.
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="h-8 px-3 rounded-lg text-[9px] font-black uppercase tracking-widest border-[#E5E5E5]"
                >
                  Enable
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
