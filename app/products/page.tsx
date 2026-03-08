"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api/products";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", { search }],
    queryFn: () => getProducts({ search }),
  });

  if (error)
    return <div className="text-center p-8">Error loading products</div>;

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <Input
          placeholder="Search products..."
          className="max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-[400px] bg-muted animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
