'use client';

import { AccountPageHeader } from "@/components/account/account-page-header";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";

const wishlistItems = [
  {
    id: "1",
    name: "Studio Reference X2",
    category: "Acoustics",
    price: 349,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    badge: "BEST PRICE",
    vendor: "@TECHNOCO"
  },
  {
    id: "2",
    name: "35mm Prime Artisan",
    category: "Optics",
    price: 890,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    badge: "TOP SELLER",
    vendor: "@PHOTOMASTER"
  },
  {
    id: "5",
    name: "Weekender Satchel",
    category: "Leather",
    price: 430,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
    vendor: "@TAMERWARE"
  },
];

export default function WishlistPage() {
  return (
    <div className="space-y-8">
      <AccountPageHeader 
        title="My Wishlist" 
        description="Manage your saved items and add them to your cart when you're ready."
      >
        <Button className="h-11 px-6 rounded-xl bg-[#1A1A1A] text-[11px] font-black uppercase tracking-widest hover:opacity-90 transition-all gap-2">
            <ShoppingBag className="h-4 w-4" />
            Add All to Cart
        </Button>
      </AccountPageHeader>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((product) => (
            <div key={product.id} className="relative group">
                <ProductCard {...product} />
                <button className="absolute top-8 right-8 z-20 h-10 w-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-rose-500 hover:bg-rose-500 hover:text-white transition-all transform hover:scale-110 flex items-center justify-center border border-rose-100">
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 bg-[#F5F5F7]/30 rounded-3xl border-2 border-dashed border-[#F5F5F7]">
            <div className="h-20 w-20 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                <Heart className="h-10 w-10 text-[#999999]" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Your wishlist is empty</h3>
            <p className="text-[#666666] text-sm mb-8">Save items you love to find them later.</p>
            <Button className="h-12 px-8 rounded-xl bg-[#1A1A1A] text-[11px] font-black uppercase tracking-widest">
                Start Shopping
            </Button>
        </div>
      )}
    </div>
  );
}
