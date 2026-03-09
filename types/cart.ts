export interface CartProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  category: string;
}

export interface CartState {
  items: CartProductItem[];
  cartTotal: number;
  cartCount: number;
}

export interface CartActions {
  addToCart: (product: CartProductItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export type CartStore = CartState & CartActions;
