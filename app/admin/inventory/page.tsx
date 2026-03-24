'use client';

import { 
  Package, 
  AlertCircle, 
  Store, 
  TrendingUp, 
  Search, 
  Filter, 
  Download, 
  Plus, 
  MoreVertical,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { StatCard } from "@/components/admin/stat-card";
import { AdminCard } from "@/components/admin/admin-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const INVENTORY_ITEMS = [
  { 
    id: "#ELE-9920-BT", 
    name: "Sonic-X Wireless Headphones", 
    vendor: "Atlas Tech", 
    vendorImg: "https://i.pravatar.cc/150?u=at",
    category: "ELECTRONICS", 
    stock: 1240, 
    status: "in-stock" as const, 
    revenue: "$42,900",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
  },
  { 
    id: "#HOM-4412-LC", 
    name: "Artisan Ceramic Brew Set", 
    vendor: "Loom & Clay", 
    vendorImg: "https://i.pravatar.cc/150?u=lc",
    category: "HOME & LIVING", 
    stock: 14, 
    status: "low-stock" as const, 
    revenue: "$8,240",
    img: "https://images.unsplash.com/photo-1517210122415-b0c70b2a09bf?w=100&h=100&fit=crop"
  },
  { 
    id: "#APP-3319-OS", 
    name: "Tailored Merino Overcoat", 
    vendor: "Sartorial Vault", 
    vendorImg: "https://i.pravatar.cc/150?u=sv",
    category: "APPAREL", 
    stock: 0, 
    status: "out-of-stock" as const, 
    revenue: "$104,110",
    img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=100&h=100&fit=crop"
  },
  { 
    id: "#ELE-2104-DS", 
    name: "Digital Archive Camera", 
    vendor: "Atlas Tech", 
    vendorImg: "https://i.pravatar.cc/150?u=at2",
    category: "ELECTRONICS", 
    stock: 432, 
    status: "in-stock" as const, 
    revenue: "$12,400",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&h=100&fit=crop"
  },
];

export default function InventoryPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <nav className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Management</span>
            <ChevronRight className="h-3 w-3 text-[#E5E5E5]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Inventory Atlas</span>
          </nav>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">Global Stock Ledger</h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">Real-time oversight of cross-platform merchant assets, revenue streams, and supply chain health.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5] bg-white">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
          <Button className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 bg-[#1A1A1A] text-white shadow-xl shadow-black/10">
            <Plus className="h-4 w-4" />
            New Entry
          </Button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard 
          label="Total Assets"
          value="14,208"
          trend={{ value: "+12.4%", isUp: true }}
          icon={Package}
        />
        <StatCard 
          label="Low Stock Alerts"
          value="184"
          secondaryLabel="Requires Action"
          icon={AlertCircle}
          className="border-amber-100"
        />
        <StatCard 
          label="Active Merchants"
          value="1,024"
          secondaryLabel="Global Reach"
          icon={Store}
        />
        <StatCard 
          label="Daily Platform Revenue"
          value="$248.5k"
          trend={{ value: "+5.2% Today", isUp: true }}
          icon={TrendingUp}
        />
      </div>

      {/* Inventory Table */}
      <AdminCard 
        headerAction={
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F7] rounded-xl border border-transparent focus-within:border-[#1A1A1A] transition-all">
              <Search className="h-4 w-4 text-[#999999]" />
              <input 
                placeholder="Search inventory..." 
                className="bg-transparent border-none text-[12px] font-bold outline-none w-[200px]"
              />
            </div>
            <div className="h-8 w-[1px] bg-[#E5E5E5]" />
            <Button variant="outline" className="h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
              <Filter className="h-3 w-3" />
              All Categories
            </Button>
            <Button variant="outline" className="h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
              Status: Any
            </Button>
          </div>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-[#F0F0F0]">
                <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">SKU / ID</th>
                <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Product Name</th>
                <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Vendor</th>
                <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Category</th>
                <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Current Stock</th>
                <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Status</th>
                <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Platform Revenue</th>
                <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0F0F0]">
              {INVENTORY_ITEMS.map((item) => (
                <tr key={item.id} className="group hover:bg-[#F9F9FB] transition-all">
                  <td className="py-6 text-[11px] font-black text-[#999999]">{item.id}</td>
                  <td className="py-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl overflow-hidden bg-[#F5F5F7] border border-[#F0F0F0]">
                        <img src={item.img} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[12px] font-black text-[#1A1A1A] max-w-[180px] leading-tight">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-6">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-7 w-7 rounded-lg border border-white shadow-sm">
                        <AvatarImage src={item.vendorImg} />
                        <AvatarFallback className="text-[8px] font-black">{item.vendor.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-[12px] font-bold text-[#1A1A1A]">{item.vendor}</span>
                    </div>
                  </td>
                  <td className="py-6">
                    <span className="text-[10px] font-black bg-[#F5F5F7] px-2.5 py-1 rounded-md text-[#666666] tracking-widest">{item.category}</span>
                  </td>
                  <td className="py-6">
                    <span className="text-[13px] font-black text-[#1A1A1A]">{item.stock.toLocaleString()}</span>
                  </td>
                  <td className="py-6">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="py-6 text-[13px] font-black text-[#1A1A1A]">{item.revenue}</td>
                  <td className="py-6">
                    <button className="h-9 w-9 flex items-center justify-center rounded-xl hover:bg-white border border-transparent hover:border-[#E5E5E5] transition-all text-[#999999] hover:text-[#1A1A1A]">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-8 border-t border-[#F0F0F0] mt-4">
          <p className="text-[11px] font-bold text-[#999999]">Showing 1-10 of 2,491 entries</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg border-[#E5E5E5]"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" className="h-9 px-4 rounded-lg bg-[#1A1A1A] text-white border-none text-[11px] font-black">1</Button>
            <Button variant="outline" className="h-9 px-4 rounded-lg border-[#E5E5E5] text-[11px] font-black hover:bg-white">2</Button>
            <Button variant="outline" className="h-9 px-4 rounded-lg border-[#E5E5E5] text-[11px] font-black hover:bg-white">3</Button>
            <span className="text-[11px] font-black text-[#E5E5E5] px-2">...</span>
            <Button variant="outline" className="h-9 px-4 rounded-lg border-[#E5E5E5] text-[11px] font-black hover:bg-white">249</Button>
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg border-[#E5E5E5]"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </AdminCard>

      {/* Automated Replenishment & Compliance */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
           <div className="relative rounded-3xl bg-[#3B4761] p-10 overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Automated Replenishment Active</h3>
                <p className="text-[#AAB4C8] text-[14px] max-w-[500px] leading-relaxed">System is currently processing 14 auto-orders for low-stock items from certified tier-1 vendors. Manual intervention is disabled for these SKUs.</p>
              </div>
              <Button className="h-12 px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest">
                View Batch Process
              </Button>
            </div>
            <div className="absolute right-[-40px] bottom-[-40px] opacity-10 group-hover:scale-110 transition-transform duration-700">
               <Package size={280} className="text-white" />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <AdminCard title="Compliance Warning" className="bg-amber-50/50 border-amber-100 h-full">
            <div className="space-y-6">
              <div className="p-4 bg-amber-100 text-amber-600 rounded-2xl w-fit">
                <AlertCircle className="h-6 w-6" />
              </div>
              <p className="text-[13px] font-medium text-[#666666] leading-relaxed">
                3 items in "Electronics" are missing mandated recycling compliance certificates for the EU market.
              </p>
              <button className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1A1A1A] flex items-center gap-2 group">
                Review Listings 
                <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </AdminCard>
        </div>
      </div>
    </div>
  );
}
