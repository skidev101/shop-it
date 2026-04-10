"use client";

import Image from "next/image";
import { Heart, ShoppingBag, Star, User } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/hooks/use-cart";

export interface ProductCardProps {
    id: string;
    name: string;
    category?: string;
    price: number;
    rating: number;
    reviews?: number;
    image: string;
    badge?: string;
    vendor?: string | { name: string; avatar: string };
    description?: string;
    className?: string;
}

export function ProductCard({
    id,
    name,
    category,
    price,
    rating,
    reviews,
    image,
    badge,
    vendor,
    description,
    className,
}: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({
            id,
            name,
            price,
            image,
            category: category || "",
            quantity: 1,
            description: description || "",
        });
    };

    const vendorName = typeof vendor === "string" ? vendor : vendor?.name;
    const vendorAvatar = typeof vendor === "string" ? null : vendor?.avatar;

    return (
        <div
            className={cn(
                "group relative flex flex-col bg-white rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 p-4 border border-transparent hover:border-[#F5F5F7]",
                className,
            )}
        >
            {/* Image Container */}
            <div className="relative aspect-square w-full bg-[#F5F5F7] rounded-2xl overflow-hidden mb-5">
                {badge && (
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-black/5">
                        <div
                            className={cn(
                                "h-1.5 w-1.5 rounded-full",
                                badge === "BEST PRICE" || badge === "BESTSELLER"
                                    ? "bg-orange-500"
                                    : "bg-blue-500",
                            )}
                        />
                        <span className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-widest">
                            {badge}
                        </span>
                    </div>
                )}

                <button className="absolute top-4 right-4 z-10 h-10 w-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all transform hover:scale-110 flex items-center justify-center">
                    <Heart className="h-4 w-4" />
                </button>

                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col px-1">
                <div className="mb-4">
                    <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="text-[17px] font-bold text-[#1A1A1A] leading-snug line-clamp-2">
                            {name}
                        </h3>
                        <span className="text-[17px] font-black text-[#1A1A1A] tabular-nums whitespace-nowrap">
                            ${price.toLocaleString()}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-[#1A1A1A] text-[#1A1A1A]" />
                            <span className="text-[12px] font-black text-[#1A1A1A]">
                                {rating.toFixed(1)}
                            </span>
                        </div>
                        {reviews !== undefined && (
                            <span className="text-[11px] font-bold text-[#999999] uppercase tracking-wider">
                                ({reviews} reviews)
                            </span>
                        )}
                        {category && (
                            <span className="text-[11px] font-black text-[#E5E5E5] uppercase tracking-widest ml-auto">
                                {category}
                            </span>
                        )}
                    </div>
                </div>

                {/* Vendor Info */}
                {(vendorName || vendorAvatar) && (
                    <div className="flex items-center gap-2.5 mb-6 pt-1">
                        {vendorAvatar ? (
                            <div className="h-6 w-6 rounded-full bg-[#E5E5E5] overflow-hidden relative border border-white shadow-sm">
                                <Image
                                    src={vendorAvatar}
                                    alt={vendorName || ""}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="h-6 w-6 rounded-full bg-[#F5F5F7] flex items-center justify-center">
                                <User className="h-3 w-3 text-[#999999]" />
                            </div>
                        )}
                        <p className="text-[11px] font-medium text-[#999999]">
                            Sold by{" "}
                            <span className="font-bold text-[#1A1A1A]">
                                {vendorName}
                            </span>
                        </p>
                    </div>
                )}

                {/* Action Button */}
                <Button
                    onClick={handleAddToCart}
                    className="w-full h-12 rounded-2xl bg-[#1A1A1A] hover:bg-[#333333] text-white text-[11px] font-black uppercase tracking-widest gap-3 mt-auto shadow-xl shadow-black/5 transition-all active:scale-[0.98]"
                >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}
