"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ShieldCheck,
  RefreshCcw,
  Tag,
  ArrowRight,
  Settings,
  ShoppingBag,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { CheckoutSteps } from "@/components/shared/checkout-steps";
import { Separator } from "@/components/ui/separator";

const steps = [
  { id: 1, label: "Review Cart" },
  { id: 2, label: "Shipping" },
  { id: 3, label: "Payment" },
];

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal, addToCart } =
    useCart();
  const subtotal = cartTotal;
  const shipping = 0;
  const total = subtotal + shipping;

  const loadSampleItems = () => {
    const samples = [
      {
        id: "1",
        name: "Studio Reference X2",
        category: "Acoustics",
        price: 349,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        quantity: 1,
        description: "Professional grade studio headphones.",
      },
      {
        id: "2",
        name: "35mm Prime Artisan",
        category: "Optics",
        price: 890,
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
        quantity: 1,
        description: "High-performance camera lens.",
      },
    ];
    samples.forEach((item) => addToCart(item));
  };

  if (items.length === 0) {
    return (
      <div className="bg-white min-h-[80vh] sm:py-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="relative mx-auto h-40 w-40 bg-[#F5F5F7] rounded-full flex items-center justify-center">
            <ShoppingBag className="h-16 w-16 text-[#1A1A1A] opacity-20" />
            <div className="absolute inset-0 border-2 border-dashed border-[#E5E5E5] rounded-full animate-[spin_20s_linear_infinite]" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
              Your Cart is Empty
            </h1>
            <p className="text-[#666666] text-sm leading-relaxed">
              Looks like you haven't added anything to your collection yet.
              Explore our curated selection of artisan goods.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/shop">
              <Button className="w-full h-14 rounded-2xl bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#333333] transition-all">
                Explore Products
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={loadSampleItems}
              className="w-full h-14 rounded-2xl border-none bg-[#F5F5F7] text-[#666666] text-[11px] font-black uppercase tracking-widest hover:bg-[#E5E5E7] transition-all"
            >
              Load Sample Selection
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <Link
              href="/shop"
              className="group flex items-center gap-2 text-[10px] font-black text-[#999999] uppercase tracking-[0.2em] hover:text-[#1A1A1A] transition-colors"
            >
              <ChevronLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              Back to Shop
            </Link>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1A1A1A] flex items-baseline gap-4">
              Your Cart
              <span className="text-lg font-bold text-[#E5E5E5] tabular-nums">
                ({items.length})
              </span>
            </h1>
          </div>

          <div className="hidden lg:block w-full max-w-md">
            <CheckoutSteps currentStep={1} steps={steps} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Cart Items */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-[2rem] border border-[#F5F5F7] p-4 sm:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 flex flex-col sm:flex-row gap-6"
                >
                  {/* Product Image */}
                  <div className="relative h-32 w-32 sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-2xl bg-[#F5F5F7] self-center sm:self-start">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-[#E5E5E5] uppercase tracking-[0.2em]">
                          {item.category}
                        </span>
                        <Link
                          href={`/products/${item.id}`}
                          className="block text-xl font-bold text-[#1A1A1A] hover:text-[#0047FF] transition-colors leading-tight"
                        >
                          {item.name}
                        </Link>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full text-[#E5E5E5] hover:text-[#FF3B30] hover:bg-[#FF3B30]/5 transition-all"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#666666] bg-[#F5F5F7] px-3 py-1.5 rounded-full">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#1A1A1A]" />
                        2Y WARRANTY
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#666666] bg-[#F5F5F7] px-3 py-1.5 rounded-full">
                        <RefreshCcw className="h-3.5 w-3.5 text-[#1A1A1A]" />
                        30D RETURNS
                      </div>
                    </div>

                    {/* Controls & Price */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center bg-[#F5F5F7] rounded-xl p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-lg hover:bg-white hover:shadow-sm text-[#1A1A1A]"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <div className="w-10 text-center text-xs font-black text-[#1A1A1A] tabular-nums">
                          {item.quantity}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-lg hover:bg-white hover:shadow-sm text-[#1A1A1A]"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="text-2xl font-black text-[#1A1A1A] tabular-nums">
                        ${(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Shipping Progress */}
            <div className="bg-[#F5F5F7] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-sm font-black text-[#1A1A1A] uppercase tracking-widest">
                  Free Shipping Unlocked
                </h3>
                <p className="text-xs text-[#666666]">
                  Your order qualifies for complimentary express delivery.
                </p>
              </div>
              <div className="h-12 w-full md:w-48 bg-white rounded-2xl flex items-center justify-center border border-[#E5E5E5]">
                <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em]">
                  Priority Shipping
                </span>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#F5F5F7] rounded-[2.5rem] p-8 text-[#1A1A1A]">
                <h2 className="text-2xl font-black tracking-tight mb-8">
                  Summary
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-black text-[#666666] uppercase tracking-widest">
                      Subtotal
                    </span>
                    <span className="text-lg font-bold tabular-nums">
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-black text-[#666666] uppercase tracking-widest">
                      Shipping
                    </span>
                    <span className="text-[11px] font-black text-[#0047FF] uppercase tracking-widest bg-white px-2 py-0.5 rounded border border-[#E5E5E5]">
                      Free
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-black text-[#666666] uppercase tracking-widest">
                      Est. Taxes
                    </span>
                    <span className="text-[11px] font-bold text-[#666666] italic">
                      Calculated at checkout
                    </span>
                  </div>
                </div>

                <div className="h-px bg-[#E5E5E5] mb-8" />

                <div className="flex justify-between items-end mb-8">
                  <span className="text-[11px] font-black text-[#666666] uppercase tracking-widest pb-1">
                    Total due
                  </span>
                  <span className="text-4xl font-black tabular-nums tracking-tighter">
                    ${total.toLocaleString()}
                  </span>
                </div>

                <Link href="/checkout" className="block">
                  <Button className="w-full h-16 rounded-2xl bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-widest hover:bg-[#333333] transition-all group shadow-xl shadow-black/5">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>

                <p className="text-[9px] text-center text-[#999999] uppercase tracking-widest mt-6 leading-relaxed">
                  SECURE CHECKOUT POWERED BY ATLAS NODE
                </p>
              </div>

              {/* Promo Code Card */}
              <div className="bg-white rounded-[2rem] border border-[#F5F5F7] p-8 flex items-center justify-between group cursor-pointer hover:border-[#E5E5E7] transition-all">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-[#F5F5F7] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Tag className="h-5 w-5 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-widest">
                      Promo Code
                    </h4>
                    <p className="text-[10px] text-[#666666]">
                      Add a discount to your order
                    </p>
                  </div>
                </div>
                <Plus className="h-5 w-5 text-[#E5E5E5] group-hover:text-[#1A1A1A] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
