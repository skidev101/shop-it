"use client";

import { Search, Filter, MoreVertical, Eye, Download, Truck } from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/admin/status-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ORDERS = [
  {
    id: "ORD-7429",
    customer: "Sarah Jenkins",
    items: 3,
    total: "$142.00",
    date: "Oct 24, 2023",
    status: "processing" as const,
    payment: "Paid",
  },
  {
    id: "ORD-7428",
    customer: "Michael Chen",
    items: 1,
    total: "$89.50",
    date: "Oct 23, 2023",
    status: "shipped" as const,
    payment: "Paid",
  },
  {
    id: "ORD-7427",
    customer: "Emma Wilson",
    items: 2,
    total: "$210.00",
    date: "Oct 23, 2023",
    status: "delivered" as const,
    payment: "Paid",
  },
  {
    id: "ORD-7426",
    customer: "James Rodriguez",
    items: 5,
    total: "$450.00",
    date: "Oct 22, 2023",
    status: "cancelled" as const,
    payment: "Refunded",
  },
];

export default function VendorOrders() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">
            Customer Orders
          </h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">
            Track and manage your store's sales and fulfillment.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl text-[12px] font-black uppercase tracking-widest border-[#E5E5E5] gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <AdminCard>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:max-w-[400px] group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999] group-focus-within:text-[#1A1A1A] transition-colors" />
            <Input
              placeholder="Search by order ID or customer name..."
              className="h-11 pl-11 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button variant="outline" className="h-11 rounded-xl gap-2 text-[11px] font-black uppercase tracking-widest border-[#E5E5E5] flex-1 sm:flex-none">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <div className="h-11 w-[1px] bg-[#F0F0F0] hidden sm:block" />
            <div className="flex bg-[#F5F5F7] p-1 rounded-xl w-full sm:w-auto">
                {['All', 'Pending', 'Completed'].map((tab) => (
                    <button key={tab} className="px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all hover:text-[#1A1A1A] text-[#999999]">
                        {tab}
                    </button>
                ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-[#F0F0F0]">
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Order ID</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Customer</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Items</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Total</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Date</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Status</TableHead>
                <TableHead className="text-right text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ORDERS.map((order) => (
                <TableRow key={order.id} className="group hover:bg-[#F9F9FB] border-[#F0F0F0] transition-colors">
                  <TableCell className="text-[13px] font-black text-[#1A1A1A]">{order.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-[#1A1A1A]">{order.customer}</span>
                      <span className="text-[11px] font-medium text-[#999999]">{order.payment}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-[12px] font-bold text-[#1A1A1A]">{order.items} items</TableCell>
                  <TableCell className="text-[12px] font-black text-[#1A1A1A]">{order.total}</TableCell>
                  <TableCell className="text-[12px] font-medium text-[#999999]">{order.date}</TableCell>
                  <TableCell>
                    <StatusBadge status={order.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-[#F0F0F0] rounded-lg">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 p-2 rounded-xl border-[#E5E5E5] shadow-xl">
                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-lg text-[11px] font-black uppercase tracking-widest cursor-pointer hover:bg-[#F5F5F7]">
                          <Eye className="h-4 w-4" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-lg text-[11px] font-black uppercase tracking-widest cursor-pointer hover:bg-[#F5F5F7]">
                          <Truck className="h-4 w-4" /> Update Status
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-lg text-[11px] font-black uppercase tracking-widest cursor-pointer text-[#0047FF] hover:bg-blue-50">
                          <Download className="h-4 w-4" /> Invoice
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </AdminCard>
    </div>
  );
}
