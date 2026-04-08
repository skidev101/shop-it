"use client";

import { useRouter, useParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChevronLeft, Loader2 } from "lucide-react";
import { ProductForm, ProductFormValues } from "@/components/vendor/product-form";
import { updateProduct, getProductById, getCategories } from "@/lib/api/products";
import { toast } from "sonner";
import Link from "next/link";
import { UpdateProductPayload } from "@/types/product";
import { useMemo } from "react";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const { data: product, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { mutate: handleUpdateProduct, isPending } = useMutation({
    mutationFn: (payload: UpdateProductPayload) => updateProduct(id, payload),
    onSuccess: () => {
      toast.success("Product updated successfully!");
      router.push("/vendor/products");
      router.refresh();
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to update product");
    },
  });

  const initialData = useMemo(() => {
    if (!product) return undefined;

    // Transform specifications from Record to array
    const specificationsArray = Object.entries(product.specifications || {}).map(
      ([key, value]) => ({ key, value })
    );

    return {
      ...product,
      specifications: specificationsArray,
    };
  }, [product]);

  const onSubmit = (values: ProductFormValues) => {
    // Transform specifications from array to Record
    const specifications: Record<string, string> = {};
    values.specifications.forEach((spec) => {
      if (spec.key && spec.value) {
        specifications[spec.key] = spec.value;
      }
    });

    const payload: UpdateProductPayload = {
      ...values,
      specifications,
    } as any;

    handleUpdateProduct(payload);
  };

  if (isLoadingProduct) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#4B5E7E]/40" />
      </div>
    );
  }

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
            Edit Product
          </h1>
          <p className="text-[16px] text-[#999999] font-medium mt-2">
            Refine "{product?.name}" details and optimize listing.
          </p>
        </div>
      </div>

      <ProductForm 
        initialData={initialData as any}
        onSubmit={onSubmit} 
        isLoading={isPending} 
        categories={categories} 
      />
    </div>
  );
}
