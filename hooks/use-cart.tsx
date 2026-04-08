"use client";
import { useCartStore } from "@/stores/cart-store";
import { useEffect, useMemo, useState } from "react";

export const useCart = () => {
  const [isMounted, setIsMounted] = useState(false);
  const store = useCartStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return useMemo(() => {
    if (!isMounted) {
      return {
        items: [],
        cartTotal: 0,
        cartCount: 0,
        addToCart: () => void 0,
        removeFromCart: () => void 0,
        updateQuantity: () => void 0,
        clearCart: () => void 0,
      };
    }

    return store;
  }, [isMounted, store]);
};
