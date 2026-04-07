"use client";

import { Search, UserPlus, MoreVertical, Mail, Phone, MapPin } from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CUSTOMERS = [
  {
    id: "CUST-001",
    name: "Sarah Jenkins",
    email: "sarah@example.com",
    orders: 12,
    totalSpend: "$1,432.00",
    lastOrder: "Oct 24, 2023",
  },
  {
    id: "CUST-002",
    name: "Michael Chen",
    email: "michael@example.com",
    orders: 8,
    totalSpend: "$892.50",
    lastOrder: "Oct 23, 2023",
  },
  {
    id: "CUST-003",
    name: "Emma Wilson",
    email: "emma@example.com",
    orders: 24,
    totalSpend: "$3,210.00",
    lastOrder: "Oct 23, 2023",
  },
];

export default function VendorCustomers() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">
            My Customers
          </h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">
            Build relationships and track customer lifetime value.
          </p>
        </div>
      </div>

      <AdminCard>
        <div className="flex items-center justify-between mb-8">
          <div className="relative w-full max-w-[400px] group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999] group-focus-within:text-[#1A1A1A] transition-colors" />
            <Input
              placeholder="Search by name or email..."
              className="h-11 pl-11 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-[#F0F0F0]">
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Customer</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Total Orders</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Total Spend</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Last Order</TableHead>
                <TableHead className="text-right text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {CUSTOMERS.map((cust) => (
                <TableRow key={cust.id} className="group hover:bg-[#F9F9FB] border-[#F0F0F0] transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3 py-1">
                      <Avatar className="h-9 w-9 rounded-lg">
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${cust.id}`} />
                        <AvatarFallback className="text-[10px] font-black">{cust.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-[#1A1A1A]">{cust.name}</span>
                        <span className="text-[11px] font-medium text-[#999999]">{cust.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-[12px] font-bold text-[#1A1A1A]">{cust.orders} orders</TableCell>
                  <TableCell className="text-[12px] font-black text-[#1A1A1A]">{cust.totalSpend}</TableCell>
                  <TableCell className="text-[12px] font-medium text-[#999999]">{cust.lastOrder}</TableCell>
                  <TableCell className="text-right">
                     <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-[#F0F0F0] rounded-lg">
                        <MoreVertical className="h-4 w-4" />
                     </Button>
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
