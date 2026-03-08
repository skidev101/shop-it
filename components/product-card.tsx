"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { useCart } from "@/hooks/use-cart";
import { CartItem } from "@/contexts/cart-context";

export function ProductCard({ product }: { product: CartItem }) {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-square relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <Link href={`/products/${product.id}`} className="hover:underline">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        </Link>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 grow">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground">
            {product.category}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={() => addToCart(product)}>
          <Plus className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
