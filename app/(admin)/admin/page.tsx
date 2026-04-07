"use client";

import {
  Users,
  Store,
  CreditCard,
  AlertTriangle,
  ArrowUpRight,
  Clock,
  ShieldAlert,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";
import { StatCard } from "@/components/admin/stat-card";
import { AdminCard } from "@/components/admin/admin-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PackageIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const RECENT_PAYOUTS = [
  {
    date: "Oct 24, 2023",
    gross: "$142,902.00",
    fee: "$4,287.06",
    net: "$138,614.94",
    status: "settled" as const,
  },
  {
    date: "Oct 23, 2023",
    gross: "$121,500.00",
    fee: "$3,645.00",
    net: "$117,855.00",
    status: "settled" as const,
  },
  {
    date: "Oct 22, 2023",
    gross: "$168,220.50",
    fee: "$5,046.62",
    net: "$163,173.88",
    status: "processing" as const,
  },
];

const PENDING_VERIFICATIONS = [
  {
    id: 1,
    name: "Artisan Leatherworks Co.",
    taxId: "82-192XXX",
    time: "2h ago",
    icon: "https://i.pravatar.cc/150?u=a",
  },
  {
    id: 2,
    name: "Midnight Roast Organics",
    taxId: "44-902XXX",
    time: "5h ago",
    icon: "https://i.pravatar.cc/150?u=m",
  },
  {
    id: 3,
    name: "Graphite & Oak Stationery",
    taxId: "12-552XXX",
    time: "1d ago",
    icon: "https://i.pravatar.cc/150?u=g",
  },
];

const SYSTEM_ALERTS = [
  {
    id: 1,
    type: "critical",
    title: "Payment Gateway Latency",
    desc: "Stripe API is reporting elevated response times (1.4s) in Region US-EAST-1. Potential impact on checkout conversion.",
    priority: "high",
    time: "14 mins ago",
  },
  {
    id: 2,
    type: "warning",
    title: "Unusual Login Pattern",
    desc: "Multiple failed login attempts from IP 192.168.1.1 on merchant account 'Vanguard Gear'.",
    priority: "medium",
    time: "42 mins ago",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">
          Executive Command
        </h1>
        <p className="text-[14px] text-[#999999] font-medium mt-1">
          Real-time oversight of the Merchant Atlas ecosystem.
        </p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          label="Gross Platform Volume"
          value="$984,234.0"
          trend={{ value: "12.4%", isUp: true }}
          secondaryLabel="vs last month"
          variant="accent"
          icon={CreditCard}
        />
        <StatCard
          label="Active Vendors"
          value="1,284"
          trend={{ value: "+42", isUp: true }}
          secondaryLabel="this week"
          icon={Store}
        />
        <StatCard label="New Users" value="842" icon={Users} />
        <StatCard
          label="Open Disputes"
          value="12"
          icon={AlertTriangle}
          className="border-rose-100"
        />
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Verifications and Payouts */}
        <div className="col-span-8 space-y-8">
          {/* Pending Verifications */}
          <AdminCard
            title="Pending Vendor Verifications"
            headerAction={
              <StatusBadge
                status="pending"
                className="bg-[#1A1A1A] text-white border-none"
              />
            }
          >
            <div className="space-y-4">
              {PENDING_VERIFICATIONS.map((v) => (
                <div
                  key={v.id}
                  className="flex items-center justify-between p-5 rounded-2xl bg-[#F9F9FB] border border-transparent hover:border-[#E5E5E5] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 rounded-xl border border-white shadow-sm">
                      <AvatarImage src={v.icon} />
                      <AvatarFallback className="bg-[#1A1A1A] text-white text-[10px] font-black">
                        {v.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-[13px] font-black text-[#1A1A1A]">
                        {v.name}
                      </h4>
                      <p className="text-[11px] font-medium text-[#999999]">
                        Tax ID: {v.taxId} • Applied {v.time}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="h-9 px-6 rounded-lg text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] hover:bg-white"
                  >
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </AdminCard>

          {/* Revenue Flow */}
          <AdminCard
            title="Payout & Revenue Flow"
            headerAction={
              <Button
                variant="ghost"
                className="h-auto p-0 text-[10px] font-black uppercase tracking-widest text-[#999999] gap-2"
              >
                Last 7 Days <ChevronRight className="h-3 w-3" />
              </Button>
            }
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Date
                    </th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Gross Volume
                    </th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Platform Fee (3%)
                    </th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Net Payout
                    </th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F0F0]">
                  {RECENT_PAYOUTS.map((p, idx) => (
                    <tr key={idx} className="group">
                      <td className="py-5 text-[12px] font-bold text-[#1A1A1A]">
                        {p.date}
                      </td>
                      <td className="py-5 text-[12px] font-bold text-[#1A1A1A]">
                        {p.gross}
                      </td>
                      <td className="py-5 text-[12px] font-bold text-[#999999]">
                        {p.fee}
                      </td>
                      <td className="py-5 text-[12px] font-bold text-[#1A1A1A]">
                        {p.net}
                      </td>
                      <td className="py-5">
                        <StatusBadge status={p.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AdminCard>
        </div>

        {/* Right Column: System Alerts and Health */}
        <div className="col-span-4 space-y-8">
          <AdminCard
            title="Critical System Alerts"
            headerAction={
              <button className="text-[10px] font-black uppercase tracking-widest text-[#0047FF] hover:underline">
                Clear All
              </button>
            }
          >
            <div className="space-y-6">
              {SYSTEM_ALERTS.map((alert) => (
                <div
                  key={alert.id}
                  className="flex gap-4 p-5 rounded-2xl bg-[#FFF9F9] border border-rose-100"
                >
                  <div
                    className={cn(
                      "h-10 w-10 shrink-0 rounded-xl flex items-center justify-center",
                      alert.type === "critical"
                        ? "bg-rose-100 text-rose-600"
                        : "bg-amber-100 text-amber-600",
                    )}
                  >
                    {alert.type === "critical" ? (
                      <ShieldAlert className="h-5 w-5" />
                    ) : (
                      <Activity className="h-5 w-5" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[13px] font-black text-[#1A1A1A] leading-tight">
                      {alert.title}
                    </h4>
                    <p className="text-[11px] font-medium text-[#666666] leading-relaxed">
                      {alert.desc}
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <span
                        className={cn(
                          "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md",
                          alert.priority === "high"
                            ? "bg-rose-600 text-white"
                            : "bg-amber-500 text-white",
                        )}
                      >
                        {alert.priority} priority
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#999999]">
                        {alert.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AdminCard>

          <AdminCard title="Inventory Health">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#999999]">
                      Total Global SKU Count
                    </p>
                    <h3 className="text-[32px] font-black text-[#1A1A1A] mt-1">
                      42,901
                    </h3>
                  </div>
                  <div className="h-10 w-[1px] bg-[#E5E5E5] mb-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold text-[#1A1A1A]">
                    <span>Active Listings</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-[#F0F0F0]" />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#F0F0F0]">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#999999]">
                  Low Stock Alerts
                </p>
                <div className="space-y-3">
                  {[
                    {
                      name: "Vanguard Tactical",
                      status: "Critical: Under 5 units",
                      count: "12 SKUs",
                      color: "rose",
                    },
                    {
                      name: "Flora & Fern",
                      status: "Warning: Under 20 units",
                      count: "48 SKUs",
                      color: "amber",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "h-8 w-8 rounded-lg flex items-center justify-center",
                            item.color === "rose"
                              ? "bg-rose-50 text-rose-600"
                              : "bg-amber-50 text-amber-600",
                          )}
                        >
                          <PackageIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <h5 className="text-[11px] font-black text-[#1A1A1A]">
                            {item.name}
                          </h5>
                          <p className="text-[9px] font-bold text-[#999999]">
                            {item.status}
                          </p>
                        </div>
                      </div>
                      <span
                        className={cn(
                          "text-[10px] font-black",
                          item.color === "rose"
                            ? "text-rose-600"
                            : "text-amber-600",
                        )}
                      >
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full h-11 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5]"
              >
                View Detailed Audit
              </Button>
            </div>
          </AdminCard>
        </div>
      </div>
    </div>
  );
}
