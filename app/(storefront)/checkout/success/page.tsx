"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, ShoppingBag, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-12 animate-in fade-in zoom-in duration-1000">
        {/* Success Icon */}
        <div className="relative mx-auto h-40 w-40 bg-[#F5F5F7] rounded-full flex items-center justify-center">
          <CheckCircle className="h-20 w-20 text-[#1A1A1A]" />
          <div className="absolute inset-0 border-2 border-dashed border-[#1A1A1A]/10 rounded-full animate-[spin_30s_linear_infinite]" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1A1A1A]">
            Order Confirmed
          </h1>
          <p className="text-[#666666] text-lg max-w-md mx-auto leading-relaxed">
            Your payment was successful and your artisan goods are being prepared for shipment.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-[#F5F5F7] rounded-3xl p-8 space-y-3">
                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#1A1A1A]" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest">Receipt Sent</h3>
                <p className="text-xs text-[#666666]">We've sent a detailed receipt and order confirmation to your email address.</p>
            </div>
            <div className="bg-[#F5F5F7] rounded-3xl p-8 space-y-3">
                <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-[#1A1A1A]" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest">Tracking Info</h3>
                <p className="text-xs text-[#666666]">You'll receive another update once your items are dispatched from our warehouse.</p>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/shop">
            <Button className="h-16 px-10 rounded-2xl bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-widest hover:bg-[#333333] transition-all group">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/account/orders">
            <Button variant="outline" className="h-16 px-10 rounded-2xl border-none bg-[#F5F5F7] text-[#1A1A1A] text-[12px] font-black uppercase tracking-widest hover:bg-[#E5E5E7] transition-all">
              View Order Status
            </Button>
          </Link>
        </div>

        <p className="text-[10px] text-[#999999] uppercase tracking-[0.2em]">
            Thank you for supporting independent artisans.
        </p>
      </div>
    </div>
  );
}
