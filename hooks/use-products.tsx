import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api/products";
import { ProductQuery } from "@/types";

export const useProducts = (params?: ProductQuery) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params || { page: 1, limit: 10 }),
  });
};
