import AccountPageHeader from "@/components/account/account-page-header";
import {
    Package,
    ChevronLeft,
    MapPin,
    CreditCard,
    Clock,
    CheckCircle2,
    Truck,
    Download,
    ArrowLeft,
    Calendar,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Mock data for a single order
const orderDetails = {
    id: "#ORD-7721",
    date: "Mar 12, 2024",
    status: "Delivered",
    statusIcon: CheckCircle2,
    statusColor: "text-emerald-500",
    statusBg: "bg-emerald-50",
    total: "$429.00",
    subtotal: "$399.00",
    shipping: "$25.00",
    tax: "$5.00",
    paymentMethod: "Visa ending in 4242",
    shippingAddress: {
        name: "John Doe",
        address: "123 Atlas Way, Victoria Island",
        city: "Lagos",
        country: "Nigeria",
        phone: "+234 801 234 5678",
    },
    timeline: [
        {
            status: "Order Delivered",
            date: "Mar 15, 2024",
            time: "02:15 PM",
            current: true,
        },
        {
            status: "Out for Delivery",
            date: "Mar 15, 2024",
            time: "09:00 AM",
            current: false,
        },
        {
            status: "Arrived at Sort Facility",
            date: "Mar 14, 2024",
            time: "11:30 PM",
            current: false,
        },
        {
            status: "Shipped from Warehouse",
            date: "Mar 13, 2024",
            time: "04:45 PM",
            current: false,
        },
        {
            status: "Order Confirmed",
            date: "Mar 12, 2024",
            time: "10:20 AM",
            current: false,
        },
    ],
    items: [
        {
            id: "1",
            name: "Studio Reference X2",
            price: 349.0,
            quantity: 1,
            variant: "Midnight Black",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
        },
        {
            id: "2",
            name: "35mm Prime Artisan",
            price: 80.0,
            quantity: 1,
            variant: "f/1.4 G-Master",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&q=80",
        },
    ],
};

export default async function OrderDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const orderId = (await params).id.toUpperCase();
    const steps = [
        { label: "Account", href: "/account" },
        { label: "Orders", href: "/account/orders" },
        { label: `#${orderId}`, isCurrent: true },
    ];

    return (
        <div className="space-y-10 pb-10">
            {/* Back Button & Header */}
            <div>
                {/*<Link
                    href="/account/orders"
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#999999] hover:text-[#1A1A1A] transition-colors mb-6 group"
                >
                    <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                    Back to Orders
                </Link>*/}
                <AccountPageHeader
                    title={`Order ${orderId}`}
                    description="Detailed information about your purchase and delivery status."
                    steps={steps}
                >
                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            className="h-11 px-5 rounded-xl border-[#E5E5E5] text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Invoice
                        </Button>
                        <Button className="h-11 px-5 rounded-xl bg-[#1A1A1A] text-[10px] font-black uppercase tracking-widest transition-all">
                            Reorder Items
                        </Button>
                    </div>
                </AccountPageHeader>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Details (Left Column) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Status Card */}
                    <Card className="border-none bg-[#F5F5F7]/50 rounded-2xl overflow-hidden shadow-none">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div
                                    className={cn(
                                        "h-12 w-12 rounded-2xl flex items-center justify-center",
                                        orderDetails.statusBg,
                                    )}
                                >
                                    <orderDetails.statusIcon
                                        className={cn(
                                            "h-6 w-6",
                                            orderDetails.statusColor,
                                        )}
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#999999] mb-1">
                                        Current Status
                                    </p>
                                    <h3
                                        className={cn(
                                            "text-xl font-black uppercase tracking-tight",
                                            orderDetails.statusColor,
                                        )}
                                    >
                                        {orderDetails.status}
                                    </h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[#999999]">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">
                                            Order Date
                                        </span>
                                    </div>
                                    <p className="text-sm font-bold text-[#1A1A1A]">
                                        {orderDetails.date}
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[#999999]">
                                        <Truck className="h-3.5 w-3.5" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">
                                            Courier
                                        </span>
                                    </div>
                                    <p className="text-sm font-bold text-[#1A1A1A]">
                                        Atlas Logistics
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[#999999]">
                                        <ShieldCheck className="h-3.5 w-3.5" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">
                                            Warranty
                                        </span>
                                    </div>
                                    <p className="text-sm font-bold text-[#1A1A1A]">
                                        2 Year Protection Plan
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Items List */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-1 bg-[#1A1A1A] rounded-full" />
                            <h3 className="text-lg font-bold">
                                Items Purchased
                            </h3>
                        </div>

                        <div className="bg-white border border-[#F5F5F7] rounded-3xl overflow-hidden">
                            {orderDetails.items.map((item, idx) => (
                                <div
                                    key={item.id}
                                    className={cn(
                                        "p-6 flex items-center justify-between gap-6",
                                        idx !== orderDetails.items.length - 1 &&
                                            "border-b border-[#F5F5F7]",
                                    )}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="h-20 w-20 bg-[#F5F5F7] rounded-2xl overflow-hidden relative border border-[#F5F5F7]">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-base font-bold text-[#1A1A1A]">
                                                {item.name}
                                            </h4>
                                            <p className="text-[11px] font-bold text-[#999999] uppercase tracking-tight">
                                                Variant: {item.variant}
                                            </p>
                                            <p className="text-[11px] font-black text-[#1A1A1A] mt-2">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black text-[#1A1A1A] tabular-nums">
                                            ${item.price.toFixed(2)}
                                        </p>
                                        <button className="text-[10px] font-black uppercase tracking-widest text-[#0047FF] hover:underline mt-2">
                                            Write a review
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Delivery Timeline */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-1 bg-[#1A1A1A] rounded-full" />
                            <h3 className="text-lg font-bold">
                                Delivery Journey
                            </h3>
                        </div>

                        <div className="bg-[#F9F9F9]/30 border border-[#F5F5F7] rounded-3xl p-8">
                            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#E5E5E5]">
                                {orderDetails.timeline.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-6 relative"
                                    >
                                        <div
                                            className={cn(
                                                "h-6 w-6 rounded-full border-4 border-white shadow-sm shrink-0 z-10",
                                                step.current
                                                    ? "bg-[#1A1A1A]"
                                                    : "bg-[#E5E5E5]",
                                            )}
                                        />
                                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
                                            <div>
                                                <p
                                                    className={cn(
                                                        "text-[13px] font-bold",
                                                        step.current
                                                            ? "text-[#1A1A1A]"
                                                            : "text-[#999999]",
                                                    )}
                                                >
                                                    {step.status}
                                                </p>
                                                <p className="text-[10px] font-medium text-[#999999] uppercase tracking-wider">
                                                    {step.date}
                                                </p>
                                            </div>
                                            <p className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest tabular-nums">
                                                {step.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summaries (Right Column) */}
                <div className="space-y-8">
                    {/* Address & Payment Card */}
                    <Card className="border-[#F5F5F7] rounded-3xl overflow-hidden shadow-none">
                        <CardContent className="p-8 space-y-10">
                            <section className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <h4 className="text-sm font-black uppercase tracking-widest">
                                        Shipping
                                    </h4>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-[#1A1A1A]">
                                        {orderDetails.shippingAddress.name}
                                    </p>
                                    <p className="text-[13px] font-medium text-[#666666] leading-relaxed">
                                        {orderDetails.shippingAddress.address},
                                        <br />
                                        {
                                            orderDetails.shippingAddress.city
                                        },{" "}
                                        {orderDetails.shippingAddress.country}
                                    </p>
                                    <p className="text-[11px] font-bold text-[#999999] pt-2">
                                        {orderDetails.shippingAddress.phone}
                                    </p>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center">
                                        <CreditCard className="h-4 w-4" />
                                    </div>
                                    <h4 className="text-sm font-black uppercase tracking-widest">
                                        Payment
                                    </h4>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-[#1A1A1A]">
                                        {orderDetails.paymentMethod}
                                    </p>
                                    <p className="text-[11px] font-bold text-[#999999]">
                                        Billed to John Doe
                                    </p>
                                </div>
                            </section>
                        </CardContent>
                    </Card>

                    {/* Order Total Card */}
                    <Card className="border-none bg-[#1A1A1A] text-white rounded-3xl overflow-hidden shadow-2xl">
                        <CardContent className="p-8 space-y-6">
                            <h4 className="text-sm font-black uppercase tracking-widest opacity-50">
                                Order Summary
                            </h4>
                            <div className="space-y-4 pt-2">
                                <div className="flex justify-between items-center text-[13px]">
                                    <span className="font-bold opacity-60">
                                        Subtotal
                                    </span>
                                    <span className="font-black tabular-nums">
                                        {orderDetails.subtotal}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-[13px]">
                                    <span className="font-bold opacity-60">
                                        Shipping
                                    </span>
                                    <span className="font-black tabular-nums">
                                        {orderDetails.shipping}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-[13px]">
                                    <span className="font-bold opacity-60">
                                        Tax (VAT)
                                    </span>
                                    <span className="font-black tabular-nums">
                                        {orderDetails.tax}
                                    </span>
                                </div>
                                <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">
                                        Total Paid
                                    </span>
                                    <span className="text-3xl font-black tabular-nums">
                                        {orderDetails.total}
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80">
                                        Payment Successful via Paystack
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Help & Support Box */}
                    <div className="p-8 bg-[#F5F5F7] rounded-3xl space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#1A1A1A]">
                            Need Help?
                        </h4>
                        <p className="text-[11px] text-[#666666] font-medium leading-relaxed">
                            Having issues with your order? Our support team is
                            available 24/7 to assist with tracking, returns, or
                            product inquiries.
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <Button
                                variant="outline"
                                className="h-10 rounded-xl border-[#E5E5E5] text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all bg-transparent"
                            >
                                Contact Care
                            </Button>
                            <Button
                                variant="outline"
                                className="h-10 rounded-xl border-[#E5E5E5] text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all bg-transparent"
                            >
                                Return Policy
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
