"use client";

import Link from "next/link";
import { AlertCircle, RefreshCcw, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CancelPage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-10 animate-in fade-in zoom-in duration-700">
        {/* Error Icon */}
        <div className="relative mx-auto h-32 w-32 bg-red-50 rounded-full flex items-center justify-center">
          <AlertCircle className="h-14 w-14 text-red-500" />
          <div className="absolute inset-0 border-2 border-dashed border-red-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-black tracking-tight text-[#1A1A1A]">
            Payment Cancelled
          </h1>
          <p className="text-[#666666] text-sm leading-relaxed">
            Your payment was not completed. If this was a mistake, you can try again using the button below. Your cart is still saved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <Link href="/checkout">
            <Button className="w-full h-16 rounded-2xl bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-widest hover:bg-[#333333] transition-all group">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Payment Again
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="outline" className="w-full h-16 rounded-2xl border-none bg-[#F5F5F7] text-[#1A1A1A] text-[12px] font-black uppercase tracking-widest hover:bg-[#E5E5E7] transition-all group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Return to Cart
            </Button>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#F5F5F7] flex items-center justify-center gap-2">
            <ShoppingBag className="h-4 w-4 text-[#999999]" />
            <span className="text-[10px] font-bold text-[#999999] uppercase tracking-widest">Items Reserved for 30m</span>
        </div>
      </div>
    </div>
  );
}
