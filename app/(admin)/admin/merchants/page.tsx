'use client';

import { useState } from "react";
import { 
  Store, 
  Plus, 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  CheckCircle2, 
  ShieldCheck,
  Package,
  ArrowUpRight,
  MoreVertical,
  ChevronRight
} from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const MERCHANTS = [
  { 
    id: "#MCH-9928", 
    name: "Artisan Leatherworks Co.", 
    owner: "Elena Rodriguez", 
    category: "Fashion", 
    status: "active" as const, 
    revenue: "$124,000", 
    location: "Milan, Italy",
    img: "https://i.pravatar.cc/150?u=artisan"
  },
  { 
    id: "#MCH-4412", 
    name: "Midnight Roast Organics", 
    owner: "Marcus Thorne", 
    category: "Food & Beverage", 
    status: "pending" as const, 
    revenue: "$42,500", 
    location: "Seattle, USA",
    img: "https://i.pravatar.cc/150?u=midnight"
  },
  { 
    id: "#MCH-3319", 
    name: "Graphite & Oak Stationery", 
    owner: "Liam Chen", 
    category: "Office", 
    status: "active" as const, 
    revenue: "$89,200", 
    location: "Tokyo, Japan",
    img: "https://i.pravatar.cc/150?u=graphite"
  },
  { 
    id: "#MCH-2104", 
    name: "Vanguard Tactical Gear", 
    owner: "James Vance", 
    category: "Outdoor", 
    status: "suspended" as const, 
    revenue: "$212,000", 
    location: "Berlin, Germany",
    img: "https://i.pravatar.cc/150?u=vanguard"
  },
];

export default function MerchantManagementPage() {
  const [selectedMerchant, setSelectedMerchant] = useState(MERCHANTS[0]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">Merchant Management</h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">Overseeing <span className="text-[#1A1A1A] font-black">1,284</span> registered platform vendors</p>
        </div>
        <Button className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 bg-[#1A1A1A] text-white shadow-xl shadow-black/10">
          <Plus className="h-4 w-4" />
          Onboard New Merchant
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Merchant List Table */}
        <div className="col-span-8">
          <AdminCard 
            headerAction={
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F7] rounded-xl border border-transparent focus-within:border-[#1A1A1A] transition-all">
                  <Search className="h-4 w-4 text-[#999999]" />
                  <input 
                    placeholder="Search merchants..." 
                    className="bg-transparent border-none text-[12px] font-bold outline-none w-[200px]"
                  />
                </div>
                <Button variant="outline" className="h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
                  <Filter className="h-3 w-3" />
                  Filter
                </Button>
              </div>
            }
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-[#F0F0F0]">
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Merchant</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Category</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Status</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Revenue</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F0F0]">
                  {MERCHANTS.map((merchant) => (
                    <tr 
                      key={merchant.id} 
                      className={cn(
                        "group hover:bg-[#F9F9FB] transition-all cursor-pointer",
                        selectedMerchant.id === merchant.id && "bg-[#F9F9FB]"
                      )}
                      onClick={() => setSelectedMerchant(merchant)}
                    >
                      <td className="py-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 rounded-2xl border border-white shadow-sm">
                            <AvatarImage src={merchant.img} />
                            <AvatarFallback className="font-black text-[10px]">{merchant.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-[13px] font-black text-[#1A1A1A]">{merchant.name}</h4>
                            <p className="text-[11px] font-medium text-[#999999]">Owner: {merchant.owner}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6">
                        <span className="text-[10px] font-black bg-[#F5F5F7] px-2.5 py-1 rounded-md text-[#666666] tracking-widest uppercase">{merchant.category}</span>
                      </td>
                      <td className="py-6">
                        <StatusBadge status={merchant.status} />
                      </td>
                      <td className="py-6">
                        <p className="text-[12px] font-black text-[#1A1A1A]">{merchant.revenue}</p>
                      </td>
                      <td className="py-6">
                        <Button variant="ghost" className="h-9 px-4 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#999999] hover:text-[#1A1A1A] hover:bg-white border border-transparent hover:border-[#E5E5E5]">
                          Manage
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AdminCard>
        </div>

        {/* Quick View Sidebar */}
        <div className="col-span-4">
          <div className="sticky top-[120px] space-y-8">
            <AdminCard className="bg-white">
              <div className="flex flex-col items-center text-center space-y-6 pt-4">
                <Avatar className="h-32 w-32 rounded-[40px] border-4 border-[#F5F5F7] shadow-xl">
                  <AvatarImage src={selectedMerchant.img} />
                  <AvatarFallback className="text-2xl font-black">{selectedMerchant.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div>
                  <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight">{selectedMerchant.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-2 text-[11px] font-bold text-[#999999]">
                    <MapPin className="h-3 w-3" />
                    {selectedMerchant.location}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 rounded-2xl bg-[#F9F9FB] text-left border border-[#F0F0F0]">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#999999]">Active Products</p>
                    <p className="text-[13px] font-black text-[#1A1A1A] mt-1">248 SKUs</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F9F9FB] text-left border border-[#F0F0F0]">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#999999]">Store Rating</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <p className="text-[13px] font-black text-[#1A1A1A]">4.9</p>
                    </div>
                  </div>
                </div>

                <div className="w-full space-y-4 pt-4 border-t border-[#F0F0F0]">
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] text-left">Quick Actions</h5>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-between h-12 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] px-5 group">
                      View Storefront <ArrowUpRight className="h-4 w-4 text-[#999999] group-hover:text-[#1A1A1A]" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between h-12 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] px-5 group">
                      Review Inventory <Package className="h-4 w-4 text-[#999999] group-hover:text-[#1A1A1A]" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between h-12 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] px-5 group">
                      Verification Docs <ShieldCheck className="h-4 w-4 text-[#999999] group-hover:text-[#1A1A1A]" />
                    </Button>
                  </div>
                </div>

                <Button className="w-full h-12 rounded-xl text-[10px] font-black uppercase tracking-widest bg-[#1A1A1A] text-white mt-4">
                  Merchant Settings
                </Button>
              </div>
            </AdminCard>
          </div>
        </div>
      </div>
    </div>
  );
}
