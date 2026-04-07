"use client";

import { useSearchParams } from "next/navigation";
import { Search, Package, Users, ShoppingCart, ArrowRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SearchResult {
  id: string;
  type: "product" | "order" | "user" | "merchant";
  title: string;
  subtitle: string;
  status?: string;
  date?: string;
  price?: string;
  url: string;
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    type: "product",
    title: "Premium Cotton T-Shirt",
    subtitle: "In Stock - 45 units",
    price: "$29.99",
    url: "/vendor/products/1",
  },
  {
    id: "2",
    type: "order",
    title: "Order #ORD-99283",
    subtitle: "Pending Payment",
    date: "Oct 24, 2023",
    url: "/vendor/orders/99283",
  },
  {
    id: "3",
    type: "user",
    title: "Alice Smith",
    subtitle: "alice@example.com",
    status: "Active",
    url: "/admin/users/3",
  },
];

const typeIcons = {
  product: Package,
  order: ShoppingCart,
  user: Users,
  merchant: ExternalLink,
};

export function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
          Search Results
        </h1>
        <p className="text-[#666666] font-medium">
          Showing results for <span className="text-[#1A1A1A] font-bold">"{query}"</span>
        </p>
      </div>

      <div className="grid gap-4">
        {mockResults.length > 0 ? (
          mockResults.map((result) => (
            <Card key={result.id} className="p-4 border-[#F0F0F0] hover:border-[#1A1A1A] transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-[#1A1A1A]">
                    {(() => {
                      const Icon = typeIcons[result.type];
                      return <Icon className="h-6 w-6" />;
                    })()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[15px] text-[#1A1A1A]">
                        {result.title}
                      </h3>
                      <Badge variant="outline" className="text-[10px] uppercase font-black bg-[#F5F5F7] border-none">
                        {result.type}
                      </Badge>
                    </div>
                    <p className="text-[13px] text-[#666666] font-medium">
                      {result.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    {result.price && (
                      <p className="font-bold text-[15px] text-[#1A1A1A]">{result.price}</p>
                    )}
                    {result.date && (
                      <p className="text-[12px] text-[#999999] font-bold uppercase tracking-wider">{result.date}</p>
                    )}
                    {result.status && (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none font-bold text-[10px] uppercase">
                        {result.status}
                      </Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="icon" className="group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="h-20 w-20 bg-[#F5F5F7] rounded-full flex items-center justify-center mx-auto">
              <Search className="h-10 w-10 text-[#999999]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-[#1A1A1A]">No results found</h3>
              <p className="text-[#666666] max-w-xs mx-auto">
                We couldn't find anything matching your search. Try different keywords.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
