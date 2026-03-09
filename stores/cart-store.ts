import { CartStore } from "@/types/cart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      cartTotal: 0,
      cartCount: 0,
      addToCart: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);

          const newItems = existing
            ? state.items.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
              )
            : [...state.items, { ...product, quantity: 1 }];
          const cartCount = newItems.reduce(
            (sum, item) => sum + item.quantity,
            0,
          );
          const cartTotal = newItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
          );

          return {
            items: newItems,
            cartCount,
            cartTotal,
          };
        }),
      removeFromCart: (id) =>
        set((state) => {
          const newItems = state.items.filter((i) => i.id !== id);
          const cartCount = newItems.reduce(
            (sum, item) => sum + item.quantity,
            0,
          );
          const cartTotal = newItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
          );

          return {
            items: newItems,
            cartCount,
            cartTotal,
          };
        }),
      updateQuantity: (id, quantity) =>
        set((state) => {
          const newItems = state.items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i,
          );
          const cartCount = newItems.reduce(
            (sum, item) => sum + item.quantity,
            0,
          );
          const cartTotal = newItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
          );

          return {
            items: newItems,
            cartCount,
            cartTotal,
          };
        }),
      clearCart: () => set({ items: [], cartTotal: 0, cartCount: 0 }),
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
