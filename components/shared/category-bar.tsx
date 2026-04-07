"use client";

import {
  LayoutGrid,
  Music,
  Camera,
  Monitor,
  Wrench,
  Package,
  LucideIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  LayoutGrid: LayoutGrid,
  Music: Music,
  Camera: Camera,
  Monitor: Monitor,
  Wrench: Wrench,
  Package: Package,
};

export interface CategoryItem {
  name: string;
  iconName: string;
  active?: boolean;
}

export interface CategoryBarProps {
  categories: CategoryItem[];
  productCount?: number;
  onCategoryChange?: (name: string) => void;
  activeCategory?: string;
}

export function CategoryBar({
  categories,
  productCount,
  onCategoryChange,
  activeCategory,
}: CategoryBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-b border-[#F5F5F7] mb-12">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive =
            activeCategory === cat.name || (cat.active && !activeCategory);
          const Icon = ICON_MAP[cat.iconName] || Package;

          return (
            <Button
              key={cat.name}
              onClick={() => onCategoryChange?.(cat.name)}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "h-10 px-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all",
                isActive
                  ? "bg-[#1A1A1A] text-white shadow-lg shadow-black/10"
                  : "text-[#666666] hover:bg-[#F5F5F7] hover:text-[#1A1A1A]",
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4 mr-2.5",
                  isActive ? "text-white" : "text-[#999999]",
                )}
              />
              {cat.name}
            </Button>
          );
        })}
      </div>

      {/* Stats and Sort */}
      <div className="flex items-center gap-10">
        {productCount !== undefined && (
          <span className="text-[10px] font-black text-[#999999] uppercase tracking-[0.2em]">
            {productCount.toLocaleString()} curated products
          </span>
        )}
        <div className="flex items-center gap-1.5 text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em] cursor-pointer group hover:text-[#0047FF] transition-colors">
          Sort: Popular Today
          <div className="h-4 w-4 rounded-full bg-[#F5F5F7] flex items-center justify-center group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
            <svg
              width="6"
              height="4"
              viewBox="0 0 6 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-0"
            >
              <path
                d="M0.5 0.75L3 3.25L5.5 0.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
