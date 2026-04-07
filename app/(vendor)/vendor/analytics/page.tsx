"use client";

import { BarChart3, TrendingUp, ArrowUpRight, ArrowDownRight, Calendar, Download } from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { StatCard } from "@/components/admin/stat-card";
import { Button } from "@/components/ui/button";

export default function VendorAnalytics() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">
            Sales Analytics
          </h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">
            Deep dive into your store's performance and customer behavior.
          </p>
        </div>
        <Button variant="outline" className="h-12 px-6 rounded-xl text-[12px] font-black uppercase tracking-widest border-[#E5E5E5] gap-2">
          <Calendar className="h-4 w-4" />
          Last 30 Days
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          label="Total Sales"
          value="$42,902.00"
          trend={{ value: "12.4%", isUp: true }}
          secondaryLabel="vs previous period"
        />
        <StatCard
          label="Average Order Value"
          value="$112.50"
          trend={{ value: "3.1%", isUp: false }}
          secondaryLabel="vs previous period"
        />
        <StatCard
          label="Conversion Rate"
          value="4.2%"
          trend={{ value: "0.8%", isUp: true }}
          secondaryLabel="vs previous period"
        />
      </div>

      <AdminCard title="Revenue Growth" headerAction={
        <Button variant="ghost" className="h-auto p-0 text-[10px] font-black uppercase tracking-widest text-[#0047FF] gap-2">
          Download Report <Download className="h-3 w-3" />
        </Button>
      }>
        <div className="h-[400px] w-full bg-[#F5F5F7] rounded-2xl flex items-center justify-center border border-dashed border-[#E5E5E5]">
            <div className="text-center">
                <BarChart3 className="h-12 w-12 text-[#CCCCCC] mx-auto mb-4" />
                <p className="text-[11px] font-black uppercase tracking-widest text-[#999999]">
                    Advanced Analytics Engine Processing...
                </p>
            </div>
        </div>
      </AdminCard>
    </div>
  );
}
