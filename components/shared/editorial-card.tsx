"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export interface EditorialCardProps {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  className?: string;
}

export function EditorialCard({
  title,
  description,
  image,
  ctaText = "READ JOURNAL",
  aspectRatio = "portrait",
  className,
}: EditorialCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden group cursor-pointer",
        aspectRatio === "square"
          ? "aspect-square"
          : aspectRatio === "portrait"
            ? "aspect-[4/5]"
            : "aspect-[16/9]",
        className,
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
        <h3 className="text-3xl font-bold text-white mb-3 tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[280px] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
          {description}
        </p>
        <Button
          variant="outline"
          className="w-max h-11 px-8 rounded-xl bg-white/10 border-white/20 text-white text-[11px] font-black tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500 delay-150"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
}
