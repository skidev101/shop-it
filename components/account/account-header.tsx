// components/account-header.tsx
"use client";

import Link from "next/link";
import { Search, ShoppingBag, Globe } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DynamicBreadcrumb } from "../breadcrumbs-list";

export function AccountHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Left Side: Brand + Breadcrumbs */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
              Merchant Atlas
            </span>
          </Link>

          <div className="hidden md:block h-6 w-[1px] bg-border mx-2" />

          <DynamicBreadcrumb
            steps={[
              { label: "Account", href: "/account" },
              { label: "Dashboard", isCurrent: true },
            ]}
          />
        </div>

        {/* Right Side: Search + Mini Actions */}
        <div className="flex items-center gap-4 flex-1 justify-end max-w-xl">
          <div className="relative w-full max-w-[300px] hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search orders..."
              className="w-full bg-[#F5F5F7] pl-10 h-9 border-none rounded-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs">
              M
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
