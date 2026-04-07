'use client';

import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Search, 
  Filter, 
  Download,
  Calendar,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/admin/stat-card";
import { cn } from "@/lib/utils";

const TRANSACTIONS = [
  { 
    id: "#TRX-88219", 
    customer: "Elena Rodriguez", 
    merchant: "Artisan Leatherworks", 
    amount: "$420.00", 
    date: "Oct 24, 2023", 
    status: "settled" as const,
    method: "Visa •••• 4242"
  },
  { 
    id: "#TRX-88220", 
    customer: "Marcus Thorne", 
    merchant: "Midnight Roast", 
    amount: "$32.50", 
    date: "Oct 24, 2023", 
    status: "processing" as const,
    method: "Apple Pay"
  },
  { 
    id: "#TRX-88221", 
    customer: "Liam Chen", 
    merchant: "Graphite & Oak", 
    amount: "$124.99", 
    date: "Oct 23, 2023", 
    status: "settled" as const,
    method: "Mastercard •••• 8812"
  },
  { 
    id: "#TRX-88222", 
    customer: "James Vance", 
    merchant: "Vanguard Tactical", 
    amount: "$1,200.00", 
    date: "Oct 23, 2023", 
    status: "failed" as const,
    method: "Visa •••• 1104"
  },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">Financial Overview</h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">Real-time monitoring of platform-wide transaction flow</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 bg-[#1A1A1A] text-white shadow-xl shadow-black/10">
            Configure Payouts
          </Button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          label="Total Volume (MTD)"
          value="$984,234"
          trend={{ value: "12.4%", isUp: true }}
          secondaryLabel="vs last month"
          variant="accent"
          icon={CreditCard}
        />
        <StatCard
          label="Pending Payouts"
          value="$42,890"
          icon={Clock}
        />
        <StatCard 
          label="Success Rate" 
          value="98.2%" 
          icon={CheckCircle2} 
        />
        <StatCard
          label="Refund Rate"
          value="0.42%"
          icon={AlertCircle}
          className="border-rose-100"
        />
      </div>

      <div className="grid grid-cols-1 gap-8">
        <AdminCard 
          title="Recent Transactions"
          headerAction={
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F7] rounded-xl border border-transparent focus-within:border-[#1A1A1A] transition-all">
                  <Search className="h-4 w-4 text-[#999999]" />
                  <input 
                    placeholder="Search transaction ID, customer..." 
                    className="bg-transparent border-none text-[12px] font-bold outline-none w-[280px]"
                  />
                </div>
                <Button variant="outline" className="h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
                  <Calendar className="h-3 w-3" />
                  Date Range
                </Button>
                <Button variant="outline" className="h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
                  <Filter className="h-3 w-3" />
                  Filters
                </Button>
            </div>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-[#F0F0F0]">
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Transaction ID</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Customer / Merchant</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Amount</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Payment Method</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Date</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {TRANSACTIONS.map((trx) => (
                  <tr key={trx.id} className="group hover:bg-[#F9F9FB] transition-all">
                    <td className="py-6">
                      <span className="text-[12px] font-black text-[#1A1A1A]">{trx.id}</span>
                    </td>
                    <td className="py-6">
                      <div>
                        <h4 className="text-[13px] font-black text-[#1A1A1A]">{trx.customer}</h4>
                        <p className="text-[11px] font-medium text-[#999999]">to {trx.merchant}</p>
                      </div>
                    </td>
                    <td className="py-6">
                      <span className="text-[13px] font-black text-[#1A1A1A]">{trx.amount}</span>
                    </td>
                    <td className="py-6">
                      <span className="text-[11px] font-bold text-[#666666]">{trx.method}</span>
                    </td>
                    <td className="py-6">
                      <span className="text-[12px] font-bold text-[#999999]">{trx.date}</span>
                    </td>
                    <td className="py-6">
                      <StatusBadge status={trx.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-[#F0F0F0] pt-6">
            <p className="text-[11px] font-medium text-[#999999]">Showing 4 of 1,240 results</p>
            <div className="flex gap-2">
              <Button variant="outline" className="h-9 px-4 rounded-lg text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] opacity-50 cursor-not-allowed">Previous</Button>
              <Button variant="outline" className="h-9 px-4 rounded-lg text-[10px] font-black uppercase tracking-widest border-[#E5E5E5]">Next Page</Button>
            </div>
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
