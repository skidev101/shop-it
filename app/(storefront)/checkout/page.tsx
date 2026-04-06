"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
    ChevronLeft, 
    CreditCard, 
    Truck, 
    ShieldCheck, 
    ArrowRight,
    Lock,
    TestTube2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";
import { CheckoutSteps } from "@/components/checkout-steps";
import { useOrders } from "@/hooks/use-orders";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const checkoutSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z.string().min(5, "Postal code must be at least 5 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

const steps = [
  { id: 1, label: "Review Cart" },
  { id: 2, label: "Shipping" },
  { id: 3, label: "Payment" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, cartTotal } = useCart();
  const { initializePayment, loading } = useOrders();
  
  // Test/Mock Mode State
  const [mockMode, setMockMode] = useState<"success" | "error" | null>(null);

  const subtotal = cartTotal;
  const shipping = 0;
  const total = subtotal + shipping;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutForm) => {
    try {
      await initializePayment({
        items: items.map(item => ({
          id: item.id,
          quantity: item.quantity,
          price: item.price
        })),
        shippingDetails: data,
        totalAmount: total,
        callbackUrl: `${window.location.origin}/checkout/success`,
        cancelUrl: `${window.location.origin}/checkout/cancel`
      }, mockMode || undefined);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="relative mx-auto h-24 w-24">
            <div className="absolute inset-0 border-4 border-[#F5F5F7] rounded-full" />
            <div className="absolute inset-0 border-4 border-[#1A1A1A] rounded-full border-t-transparent animate-spin" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight">
                {mockMode ? "Simulating Payment..." : "Initializing Secure Payment"}
            </h2>
            <p className="text-xs text-[#666666]">
                {mockMode ? "Please wait while we test your order flow." : "You are being redirected to Paystack to complete your purchase..."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
        <div className="bg-white min-h-[80vh] flex items-center justify-center px-4 text-center">
            <div className="space-y-6">
                <h1 className="text-3xl font-black tracking-tight">Your cart is empty</h1>
                <p className="text-[#666666] max-w-sm">Add some artisan products to your cart before checking out.</p>
                <Link href="/shop">
                    <Button className="h-14 px-8 rounded-2xl bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-widest">
                        Go Shopping
                    </Button>
                </Link>
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
            <Link href="/cart" className="group flex items-center gap-2 text-[10px] font-black text-[#999999] uppercase tracking-[0.2em] hover:text-[#1A1A1A] transition-colors">
              <ChevronLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              Return to Cart
            </Link>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1A1A1A]">
                Checkout
            </h1>
          </div>
          
          <div className="hidden lg:block w-full max-w-md">
            <CheckoutSteps currentStep={2} steps={steps} />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Checkout Form */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* MOCK MODE TOGGLE FOR TESTING */}
            <div className="bg-[#F5F5F7] rounded-3xl p-6 border-2 border-dashed border-[#1A1A1A]/10">
                <div className="flex items-center gap-3 mb-4">
                    <TestTube2 className="h-5 w-5 text-[#1A1A1A]" />
                    <h3 className="text-xs font-black text-[#1A1A1A] uppercase tracking-widest">Developer Sandbox (Mock Mode)</h3>
                </div>
                <div className="flex flex-wrap gap-6">
                    <div className="flex items-center space-x-2">
                        <Checkbox 
                            id="live" 
                            checked={mockMode === null} 
                            onCheckedChange={() => setMockMode(null)}
                        />
                        <Label htmlFor="live" className="text-[10px] font-bold uppercase tracking-wider cursor-pointer">Live (Express API)</Label>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                        <Checkbox 
                            id="mock-success" 
                            checked={mockMode === "success"} 
                            onCheckedChange={() => setMockMode("success")}
                        />
                        <Label htmlFor="mock-success" className="text-[10px] font-bold uppercase tracking-wider cursor-pointer">Mock Success</Label>
                    </div>
                    <div className="flex items-center space-x-2 text-red-600">
                        <Checkbox 
                            id="mock-error" 
                            checked={mockMode === "error"} 
                            onCheckedChange={() => setMockMode("error")}
                        />
                        <Label htmlFor="mock-error" className="text-[10px] font-bold uppercase tracking-wider cursor-pointer">Mock Error</Label>
                    </div>
                </div>
            </div>

            {/* Shipping Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-[#F5F5F7] rounded-2xl flex items-center justify-center">
                        <Truck className="h-6 w-6 text-[#1A1A1A]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight">Shipping Details</h2>
                        <p className="text-xs text-[#666666]">Where should we send your artisan goods?</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest ml-1">Full Name</label>
                        <Input 
                            {...register("fullName")} 
                            placeholder="Alex Rivulet" 
                            className="h-14 rounded-2xl bg-[#F5F5F7] border-none px-6 focus-visible:ring-1 focus-visible:ring-[#1A1A1A] transition-all"
                        />
                        {errors.fullName && <p className="text-[10px] font-bold text-red-500 ml-1">{errors.fullName.message}</p>}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest ml-1">Email Address</label>
                        <Input 
                            {...register("email")} 
                            type="email"
                            placeholder="alex@atlas.com" 
                            className="h-14 rounded-2xl bg-[#F5F5F7] border-none px-6 focus-visible:ring-1 focus-visible:ring-[#1A1A1A] transition-all"
                        />
                        {errors.email && <p className="text-[10px] font-bold text-red-500 ml-1">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest ml-1">Shipping Address</label>
                        <Input 
                            {...register("address")} 
                            placeholder="128 Artisan Way, Suite 400" 
                            className="h-14 rounded-2xl bg-[#F5F5F7] border-none px-6 focus-visible:ring-1 focus-visible:ring-[#1A1A1A] transition-all"
                        />
                        {errors.address && <p className="text-[10px] font-bold text-red-500 ml-1">{errors.address.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest ml-1">City</label>
                        <Input 
                            {...register("city")} 
                            placeholder="New York" 
                            className="h-14 rounded-2xl bg-[#F5F5F7] border-none px-6 focus-visible:ring-1 focus-visible:ring-[#1A1A1A] transition-all"
                        />
                        {errors.city && <p className="text-[10px] font-bold text-red-500 ml-1">{errors.city.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest ml-1">Postal Code</label>
                        <Input 
                            {...register("postalCode")} 
                            placeholder="10001" 
                            className="h-14 rounded-2xl bg-[#F5F5F7] border-none px-6 focus-visible:ring-1 focus-visible:ring-[#1A1A1A] transition-all"
                        />
                        {errors.postalCode && <p className="text-[10px] font-bold text-red-500 ml-1">{errors.postalCode.message}</p>}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest ml-1">Country</label>
                        <Input 
                            {...register("country")} 
                            placeholder="United States" 
                            className="h-14 rounded-2xl bg-[#F5F5F7] border-none px-6 focus-visible:ring-1 focus-visible:ring-[#1A1A1A] transition-all"
                        />
                        {errors.country && <p className="text-[10px] font-bold text-red-500 ml-1">{errors.country.message}</p>}
                    </div>
                </div>
            </section>

            {/* Payment Info (Visual Placeholder) */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-[#F5F5F7] rounded-2xl flex items-center justify-center">
                        <CreditCard className="h-6 w-6 text-[#1A1A1A]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight">Payment Method</h2>
                        <p className="text-xs text-[#666666]">All transactions are secure and encrypted.</p>
                    </div>
                </div>

                <div className="bg-[#F5F5F7] rounded-[2rem] p-8 space-y-6 opacity-60 pointer-events-none">
                    <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-6">
                        <div className="flex items-center gap-3">
                            <div className="h-4 w-4 rounded-full border-4 border-[#1A1A1A]" />
                            <span className="text-sm font-bold">Credit or Debit Card</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-10 bg-white rounded border border-[#E5E5E5]" />
                            <div className="h-6 w-10 bg-white rounded border border-[#E5E5E5]" />
                        </div>
                    </div>
                    <p className="text-xs text-[#666666] italic">Payment details will be collected on the next secure step.</p>
                </div>
            </section>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
                <div className="bg-[#F5F5F7] rounded-[2.5rem] p-8 text-[#1A1A1A] border border-[#E5E5E5]">
                    <h2 className="text-2xl font-black tracking-tight mb-8">Order Review</h2>
                    
                    <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="h-16 w-16 rounded-xl bg-white border border-[#E5E5E5] shrink-0 relative overflow-hidden">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-[11px] font-bold truncate">{item.name}</h4>
                                    <p className="text-[10px] text-[#999999] uppercase tracking-widest mt-1">QTY: {item.quantity}</p>
                                    <p className="text-[11px] font-black mt-1 text-[#1A1A1A]">${(item.price * item.quantity).toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-px bg-[#E5E5E5] mb-8" />

                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] font-black text-[#999999] uppercase tracking-widest">Subtotal</span>
                            <span className="text-sm font-bold tabular-nums">${subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] font-black text-[#999999] uppercase tracking-widest">Shipping</span>
                            <span className="text-[11px] font-black text-[#0047FF] uppercase tracking-widest bg-white px-2 py-0.5 rounded border border-[#E5E5E5]">Free</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-end mb-8 pt-4 border-t border-[#E5E5E5]">
                        <span className="text-[11px] font-black text-[#999999] uppercase tracking-widest pb-1">Grand Total</span>
                        <span className="text-3xl font-black tabular-nums tracking-tighter">
                            ${total.toLocaleString()}
                        </span>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-16 rounded-2xl bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-widest hover:bg-[#333333] transition-all group shadow-xl shadow-black/5"
                    >
                        {loading ? (
                            "Processing..."
                        ) : (
                            <>
                                Complete Purchase
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </Button>

                    <div className="mt-6 flex items-center justify-center gap-2 text-[9px] text-[#999999] uppercase tracking-[0.2em]">
                        <Lock className="h-3 w-3" />
                        Encrypted Security
                    </div>
                </div>

                {/* Trust Footer */}
                <div className="bg-[#F5F5F7] rounded-3xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 text-[#1A1A1A]" />
                        <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest">Atlas Buyer Protection</span>
                    </div>
                    <p className="text-[10px] text-[#666666] leading-relaxed">
                        Your purchase is protected by our global artisan network. 100% money-back guarantee for 30 days.
                    </p>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
