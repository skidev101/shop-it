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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";
import { CheckoutSteps } from "@/components/checkout-steps";
import { Separator } from "@/components/ui/separator";

const steps = [
  { id: 1, label: "Cart" },
  { id: 2, label: "Details" },
  { id: 3, label: "Payment" },
];

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal, addToCart } =
    useCart();
  const subtotal = cartTotal;
  const discount = 0; // Placeholder
  const total = subtotal - discount;

  const loadSampleItems = () => {
    const samples = [
      {
        id: "1",
        name: "iPhone 15 Pro Max - Blue Titanium",
        description: "The ultimate iPhone with Titanium design.",
        image:
          "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400&q=80",
        price: 1199.99,
        quantity: 1,
        category: "Electronics",
      },
      {
        id: "2",
        name: "Sony WH-1000XM5 Noise Cancelling Headphones",
        description: "Industry-leading noise cancellation.",
        image:
          "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
        price: 349.99,
        quantity: 1,
        category: "Electronics",
      },
      {
        id: "3",
        name: "Premium Leather Minimalist Wallet",
        description: "Handcrafted genuine leather wallet.",
        image:
          "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80",
        price: 59.5,
        quantity: 1,
        category: "Fashion",
      },
    ];
    samples.forEach((item) => addToCart(item));
  };

  if (items.length === 0) {
    return (
      <div className="container max-w-4xl px-4 py-20 flex flex-col items-center justify-center gap-6 text-center animate-in fade-in zoom-in duration-500">
        <div className="h-32 w-32 bg-muted rounded-full flex items-center justify-center mb-4">
          <Image
            src="/window.svg"
            width={64}
            height={64}
            alt="Empty Cart"
            className="opacity-50"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Your cart is empty
        </h1>
        <p className="text-muted-foreground max-w-md">
          Looks like you haven&apos;t added anything to your cart yet. Discover
          our latest products and start shopping!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/products">
            <Button
              size="lg"
              className="h-12 px-8 rounded-xl font-bold bg-[#0047FF] hover:bg-[#0047FF]/90 transition-all hover:scale-105"
            >
              Start Shopping
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 rounded-xl font-bold border-[#0047FF] text-[#0047FF] hover:bg-[#0047FF]/5 transition-all hover:scale-105"
            onClick={loadSampleItems}
          >
            Load Sample Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl px-4 py-8 mx-auto">
      {/* Checkout Progress Steps */}
      <div className="mb-12">
        <CheckoutSteps currentStep={1} steps={steps} />
      </div>

      {/* Promo Banner */}
      <div className="bg-[#0047FF]/10 border border-[#0047FF]/20 rounded-xl p-4 mb-8 flex items-start gap-3">
        <div className="h-5 w-5 mt-0.5 rounded-full border-2 border-[#0047FF] flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-[#0047FF]">i</span>
        </div>
        <p className="text-sm font-medium text-[#0047FF]">
          You have <span className="font-bold">Free Shipping</span> available
          for this order! Complete your purchase now to secure your items.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Cart Section */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              Your Cart
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                {items.length}
              </span>
            </h1>
            <Button variant="outline" size="sm" className="gap-2 h-9">
              <Settings className="h-4 w-4" />
              Actions
            </Button>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden border-muted transition-all hover:shadow-md group"
              >
                <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                  {/* Checkbox (Visual only for now) */}
                  <div className="hidden sm:flex items-start pt-2">
                    <div className="h-5 w-5 rounded border-muted-foreground/30 border-2" />
                  </div>

                  {/* Product Image */}
                  <div className="relative h-24 w-24 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-xl border bg-muted self-center sm:self-start">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <Link
                          href={`/products/${item.id}`}
                          className="text-lg font-bold hover:text-[#0047FF] transition-colors line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.category}
                        </p>

                        {/* Add-ons / Features */}
                        <div className="flex flex-wrap gap-3 mt-2">
                          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                            <ShieldCheck className="h-3.5 w-3.5 text-[#0047FF]" />
                            Protection Plan
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                            <RefreshCcw className="h-3.5 w-3.5 text-green-600" />
                            30-Day Returns
                          </div>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 -mt-2 -mr-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Controls & Price */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                      <div className="flex items-center border rounded-lg bg-background shadow-sm">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9 rounded-none hover:bg-muted"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <div className="w-12 text-center font-bold text-sm tabular-nums border-x h-9 flex items-center justify-center">
                          {item.quantity}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9 rounded-none hover:bg-muted"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="text-xl font-bold text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="sticky top-24 space-y-6">
            <Card className="shadow-lg border-muted/60 overflow-hidden">
              <CardHeader className="bg-muted/30 pb-4 border-b">
                <CardTitle className="text-xl font-bold">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Calculations */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-green-600 font-bold">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Tax</span>
                    <span className="text-muted-foreground">
                      Calculated next step
                    </span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start px-0 text-[#0047FF] hover:text-[#0047FF]/80 hover:bg-transparent h-auto p-0 font-semibold gap-2"
                  >
                    <Tag className="h-4 w-4" />
                    Add a discount code
                  </Button>
                  {/* <div className="flex gap-2 mt-2">
                        <Input placeholder="Enter code" className="bg-muted/20" />
                        <Button variant="secondary">Apply</Button>
                    </div> */}
                </div>

                <Separator />

                {/* Total */}
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold">Total due</span>
                  <div className="text-right">
                    <span className="text-3xl font-black tracking-tight">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout" className="block">
                  <Button
                    size="lg"
                    className="w-full h-14 text-lg font-bold rounded-xl bg-[#0047FF] hover:bg-[#0047FF]/90 shadow-lg shadow-[#0047FF]/20 transition-all hover:scale-[1.02]"
                  >
                    Go to Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <p className="text-xs text-center text-muted-foreground px-4">
                  By proceeding, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="flex justify-center gap-6 grayscale opacity-60">
              {/* Placeholders for payment icons */}
              <div className="h-6 w-10 bg-muted rounded" />
              <div className="h-6 w-10 bg-muted rounded" />
              <div className="h-6 w-10 bg-muted rounded" />
              <div className="h-6 w-10 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
