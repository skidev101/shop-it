'use client';

import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  ShoppingBag, 
  ArrowUpRight,
  ChevronRight,
  Calendar,
  Filter,
  Download
} from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { StatCard } from "@/components/admin/stat-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const TOP_CATEGORIES = [
  { name: "Electronics", value: 84, growth: "+12%", color: "bg-blue-500" },
  { name: "Fashion", value: 65, growth: "+8%", color: "bg-purple-500" },
  { name: "Home & Garden", value: 45, growth: "-3%", color: "bg-emerald-500" },
  { name: "Books", value: 28, growth: "+5%", color: "bg-amber-500" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">Performance Analytics</h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">Deep dive into platform growth and user behavior</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
            <Calendar className="h-4 w-4" />
            Last 30 Days
          </Button>
          <Button className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 bg-[#1A1A1A] text-white shadow-xl shadow-black/10">
            <Download className="h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          label="Conversion Rate"
          value="3.42%"
          trend={{ value: "0.8%", isUp: true }}
          icon={TrendingUp}
        />
        <StatCard
          label="Avg. Order Value"
          value="$128.50"
          trend={{ value: "4.2%", isUp: true }}
          icon={ShoppingBag}
        />
        <StatCard 
          label="Customer LTV" 
          value="$842.00" 
          icon={Users} 
        />
        <StatCard
          label="Churn Rate"
          value="1.2%"
          trend={{ value: "0.2%", isUp: false }}
          icon={TrendingDown}
        />
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Growth Chart Placeholder */}
        <div className="col-span-8">
          <AdminCard 
            title="Revenue Growth"
            headerAction={
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#1A1A1A]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#999999]">Current Period</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#E5E5E5]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#999999]">Previous Period</span>
                </div>
              </div>
            }
          >
            <div className="h-[300px] w-full bg-[#F9F9FB] rounded-2xl border border-dashed border-[#E5E5E5] flex flex-col items-center justify-center text-center p-8">
               <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-[#1A1A1A]" />
               </div>
               <h4 className="text-[14px] font-black text-[#1A1A1A]">Revenue Visualization</h4>
               <p className="text-[12px] text-[#999999] max-w-[280px] mt-2 font-medium">Interactive revenue and volume charts will be rendered here using the primary charting library.</p>
            </div>
          </AdminCard>
        </div>

        {/* Category Breakdown */}
        <div className="col-span-4">
          <AdminCard title="Category Performance">
            <div className="space-y-8">
              {TOP_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <h5 className="text-[11px] font-black text-[#1A1A1A]">{cat.name}</h5>
                      <p className="text-[9px] font-bold text-[#999999] uppercase tracking-widest">{cat.growth} vs last month</p>
                    </div>
                    <span className="text-[12px] font-black text-[#1A1A1A]">{cat.value}%</span>
                  </div>
                  <Progress value={cat.value} className={cn("h-2 bg-[#F5F5F7]", cat.color)} />
                </div>
              ))}
              
              <Button variant="outline" className="w-full h-12 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] mt-4">
                Full Category Audit
              </Button>
            </div>
          </AdminCard>
        </div>
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-3 gap-8">
        <AdminCard title="User Acquisition">
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F9F9FB] border border-[#F0F0F0]">
              <span className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-widest">Organic Search</span>
              <span className="text-[13px] font-black text-[#1A1A1A]">42%</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F9F9FB] border border-[#F0F0F0]">
              <span className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-widest">Direct</span>
              <span className="text-[13px] font-black text-[#1A1A1A]">28%</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F9F9FB] border border-[#F0F0F0]">
              <span className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-widest">Social Media</span>
              <span className="text-[13px] font-black text-[#1A1A1A]">18%</span>
            </div>
          </div>
        </AdminCard>

        <AdminCard title="Regional Distribution">
           <div className="h-[200px] w-full bg-[#F9F9FB] rounded-2xl border border-dashed border-[#E5E5E5] flex items-center justify-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#999999]">Map Projection Placeholder</span>
           </div>
        </AdminCard>

        <AdminCard title="Device Usage">
          <div className="space-y-6">
             <div className="flex items-center gap-4">
                <div className="h-2 flex-1 bg-[#F5F5F7] rounded-full overflow-hidden flex">
                   <div className="h-full bg-[#1A1A1A]" style={{ width: '65%' }} />
                   <div className="h-full bg-[#999999]" style={{ width: '25%' }} />
                   <div className="h-full bg-[#E5E5E5]" style={{ width: '10%' }} />
                </div>
             </div>
             <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                   <p className="text-[13px] font-black text-[#1A1A1A]">65%</p>
                   <p className="text-[9px] font-bold text-[#999999] uppercase">Mobile</p>
                </div>
                <div className="text-center">
                   <p className="text-[13px] font-black text-[#1A1A1A]">25%</p>
                   <p className="text-[9px] font-bold text-[#999999] uppercase">Desktop</p>
                </div>
                <div className="text-center">
                   <p className="text-[13px] font-black text-[#1A1A1A]">10%</p>
                   <p className="text-[9px] font-bold text-[#999999] uppercase">Tablet</p>
                </div>
             </div>
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
