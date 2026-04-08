"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { ProductForm, ProductFormValues } from "@/components/vendor/product-form";
import { createProduct, getCategories } from "@/lib/api/products";
import { toast } from "sonner";
import Link from "next/link";
import { ProductPayload } from "@/types/product";

export default function NewProductPage() {
  const router = useRouter();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { mutate: handleCreateProduct, isPending } = useMutation({
    mutationFn: (payload: ProductPayload) => createProduct(payload),
    onSuccess: () => {
      toast.success("Product created successfully!");
      router.push("/vendor/products");
      router.refresh();
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to create product");
    },
  });

  const onSubmit = (values: ProductFormValues) => {
    // Transform specifications from array to Record
    const specifications: Record<string, string> = {};
    values.specifications.forEach((spec) => {
      if (spec.key && spec.value) {
        specifications[spec.key] = spec.value;
      }
    });

    const payload: ProductPayload = {
      ...values,
      specifications,
    } as any; // Cast for now as SKU and shipping aren't in payload type yet

    handleCreateProduct(payload);
  };

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <Link href="/vendor/products" className="group flex items-center gap-2 text-[#999999] hover:text-[#1A1A1A] transition-colors w-fit">
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">Back to Products</span>
        </Link>
        <div>
          <h1 className="text-[40px] font-black tracking-tight text-[#1A1A1A] leading-tight">
            Create New Product
          </h1>
          <p className="text-[16px] text-[#999999] font-medium mt-2">
            Populate the global catalog with your curated offerings.
          </p>
        </div>
      </div>

      <ProductForm 
        onSubmit={onSubmit} 
        isLoading={isPending} 
        categories={categories} 
      />
    </div>
  );
}
