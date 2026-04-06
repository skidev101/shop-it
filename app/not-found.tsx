"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 sm:py-10">
      <div className="max-w-md w-full text-center space-y-12 animate-in fade-in zoom-in duration-700">
        {/* Futuristic 404 Spinner */}
        <div className="relative mx-auto h-40 w-40 flex items-center justify-center">
          <div className="absolute inset-0 border-[1px] border-[#1A1A1A]/10 rounded-full" />
          <div className="absolute inset-0 border-t-[3px] border-[#1A1A1A] rounded-full animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-2 border-b-[2px] border-[#1A1A1A]/50 rounded-full animate-[spin_5s_linear_infinite_reverse]" />
          <div className="absolute inset-6 border-[1px] border-[#1A1A1A]/20 rounded-full animate-pulse" />

          <h1 className="text-6xl font-black text-[#1A1A1A] tracking-tighter z-10">
            404
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-black text-[#1A1A1A] uppercase tracking-[0.2em] mb-2">
            System Error: Node Missing
          </h2>
          <p className="text-[#666666] text-sm leading-relaxed max-w-xs mx-auto font-medium">
            The artisan product or digital pathway you are attempting to access
            has been relocated or removed from the Atlas.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <Link href="/" className="w-full">
            <Button className="w-full h-14 rounded-2xl bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#333333] transition-all group shadow-xl shadow-black/5">
              <ArrowLeft className="mr-3 h-3 w-3 transition-transform group-hover:-translate-x-1" />
              Return Home
            </Button>
          </Link>
          <Link href="/shop" className="w-full">
            <Button
              variant="outline"
              className="w-full h-14 rounded-2xl border-none bg-[#F5F5F7] text-[#1A1A1A] text-[11px] font-black uppercase tracking-widest hover:bg-[#E5E5E7] transition-all group"
            >
              <Search className="mr-3 h-3 w-3" />
              Browse Catalog
            </Button>
          </Link>
        </div>

        <div className="pt-12 flex justify-center opacity-40">
          <span className="text-[9px] font-bold text-[#1A1A1A] uppercase tracking-[0.4em] flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#1A1A1A] rounded-full animate-pulse" />
            Atlas Node System v1.0
          </span>
        </div>
      </div>
    </div>
  );
}
