"use client";

import { Plus, Search, Filter, MoreVertical, Edit2, Trash2, Eye } from "lucide-react";
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

const PRODUCTS = [
  {
    id: "PROD-001",
    name: "Tactical EDC Pack",
    category: "Equipments",
    price: "$142.00",
    stock: 12,
    status: "active" as const,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=100&h=100&fit=crop",
  },
  {
    id: "PROD-002",
    name: "Weatherproof Shell",
    category: "Apparel",
    price: "$185.00",
    stock: 45,
    status: "active" as const,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=100&h=100&fit=crop",
  },
  {
    id: "PROD-003",
    name: "Titanium Carabiner",
    category: "Accessories",
    price: "$15.00",
    stock: 0,
    status: "out_of_stock" as const,
    image: "https://images.unsplash.com/photo-1544265852-a41581cab8e7?w=100&h=100&fit=crop",
  },
  {
    id: "PROD-004",
    name: "Solar Power Bank",
    category: "Electronics",
    price: "$64.00",
    stock: 8,
    status: "low_stock" as const,
    image: "https://images.unsplash.com/photo-1617130818348-428c489caec6?w=100&h=100&fit=crop",
  },
];

export default function VendorProducts() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">
            Product Catalog
          </h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">
            Manage your store's inventory and listings.
          </p>
        </div>
        <Button className="bg-[#1A1A1A] text-white hover:bg-[#333333] rounded-xl px-6 h-12 text-[12px] font-black uppercase tracking-widest gap-2 w-full sm:w-auto">
          <Plus className="h-4 w-4" />
          Add New Product
        </Button>
      </div>

      <AdminCard>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:max-w-[400px] group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999] group-focus-within:text-[#1A1A1A] transition-colors" />
            <Input
              placeholder="Search products..."
              className="h-11 pl-11 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button variant="outline" className="h-11 rounded-xl gap-2 text-[11px] font-black uppercase tracking-widest border-[#E5E5E5] flex-1 sm:flex-none">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="h-11 rounded-xl text-[11px] font-black uppercase tracking-widest border-[#E5E5E5] flex-1 sm:flex-none">
              Export CSV
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-[#F0F0F0]">
                <TableHead className="w-[80px] text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Image</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Product</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Category</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Price</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Stock</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Status</TableHead>
                <TableHead className="text-right text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PRODUCTS.map((product) => (
                <TableRow key={product.id} className="group hover:bg-[#F9F9FB] border-[#F0F0F0] transition-colors">
                  <TableCell>
                    <div className="h-12 w-12 rounded-lg overflow-hidden border border-[#F0F0F0] bg-[#F5F5F7]">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-black text-[#1A1A1A]">{product.name}</span>
                      <span className="text-[11px] font-bold text-[#999999]">{product.id}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-[12px] font-bold text-[#1A1A1A]">{product.category}</TableCell>
                  <TableCell className="text-[12px] font-black text-[#1A1A1A]">{product.price}</TableCell>
                  <TableCell className="text-[12px] font-bold text-[#1A1A1A]">{product.stock} units</TableCell>
                  <TableCell>
                    <StatusBadge status={product.status === 'out_of_stock' ? 'cancelled' : product.status === 'low_stock' ? 'processing' : 'settled'} />
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
                          <Eye className="h-4 w-4" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-lg text-[11px] font-black uppercase tracking-widest cursor-pointer hover:bg-[#F5F5F7]">
                          <Edit2 className="h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-lg text-[11px] font-black uppercase tracking-widest cursor-pointer text-rose-600 hover:bg-rose-50">
                          <Trash2 className="h-4 w-4" /> Delete
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
