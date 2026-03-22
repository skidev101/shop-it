'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  Heart, 
  Share2, 
  Truck, 
  ShieldCheck, 
  ChevronRight,
  Plus,
  ArrowRight,
  Check,
} from 'lucide-react';
import { Compass, ShoppingBagIcon } from "@phosphor-icons/react"
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';
import { Label } from '@/components/ui/label';

// Mock data for the product detail view
const product = {
  id: 'vanguard-ref',
  name: 'Vanguard Reference Studio Headphones',
  model: 'AX-900 MKII',
  price: 349.00,
  originalPrice: 420.00,
  discount: '15% OFF',
  rating: 5,
  reviewCount: 128,
  tier: 'PREMIUM TIER',
  editorChoice: true,
  vendor: {
    name: 'Atlas Audio Boutique',
    rating: 4.9,
    status: 'GOLD LEVEL MERCHANT',
    avatar: 'https://i.pravatar.cc/150?u=atlas'
  },
  images: [
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&q=80',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&q=80'
  ],
  finishes: [
    { name: 'Midnight', color: '#1A1C2C' },
    { name: 'Silver', color: '#B2BCC9' },
    { name: 'Gold', color: '#D4AF37' }
  ],
  sizes: ['Standard', 'Large', 'Studio', 'Custom'],
  specs: [
    { label: 'Transducer Principle', value: 'Dynamic, Open-back' },
    { label: 'Frequency Response', value: '5Hz - 42,000Hz' },
    { label: 'Nominal Impedance', value: '300 Ohms' },
    { label: 'Total Harmonic Distortion', value: '< 0.05%' },
    { label: 'Weight (without cable)', value: '285g' }
  ],
  inBox: [
    'Vanguard Reference AX-900 MKII',
    '3m Detachable Oxygen-Free Cable',
    '6.3mm Gold-Plated Adapter',
    'Premium Alcantara Hardshell Case'
  ]
};

export default function ProductDetailPage() {
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Standard');
  const [activeTab, setActiveTab] = useState('Specifications');
  const { addToCart } = useCart();

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#999999] mb-8">
          <Link href="/" className="hover:text-[#1A1A1A]">Marketplace</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/categories/electronics" className="hover:text-[#1A1A1A]">Electronics</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#1A1A1A]">Audio</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F5F5F7]">
                <div className="absolute top-6 right-6 z-10">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                        {product.tier}
                    </span>
                </div>
                <Image 
                    src={product.images[0]} 
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                    <div key={i} className={cn(
                        "relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all border-2",
                        i === 0 ? "border-[#1A1A1A]" : "border-transparent opacity-60 hover:opacity-100"
                    )}>
                        <Image src={img} alt={`${product.name} view ${i+1}`} fill className="object-cover" />
                    </div>
                ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        {product.editorChoice && (
                            <span className="text-[9px] font-black bg-[#E0E9FF] text-[#3D4D6B] px-2 py-0.5 rounded uppercase tracking-wider">
                                Editor&apos;s Choice
                            </span>
                        )}
                        <span className="text-[10px] font-bold text-[#999999] uppercase tracking-widest">
                            Model: {product.model}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.1]">
                        {product.name}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="h-3.5 w-3.5 fill-[#1A1A1A] text-[#1A1A1A]" />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-[#666666]">
                            ({product.reviewCount} Reviews)
                        </span>
                    </div>
                </div>

                <div className="flex items-baseline gap-4 pt-2">
                    <span className="text-4xl font-black text-[#1A1A1A] tracking-tight">
                        ${product.price.toFixed(2)}
                    </span>
                    <span className="text-lg text-[#999999] line-through font-medium">
                        ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-sm font-black text-orange-500 uppercase tracking-wider">
                        {product.discount}
                    </span>
                </div>

                {/* Vendor Card */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F8F9FB] border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden relative">
                            <Image src={product.vendor.avatar} alt={product.vendor.name} fill />
                        </div>
                        <div>
                            <span className="text-[9px] font-black text-[#999999] uppercase tracking-widest block mb-0.5">Sold By</span>
                            <span className="text-sm font-bold text-[#1A1A1A] block">{product.vendor.name}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center justify-end gap-1.5 mb-0.5">
                            <Compass className="h-3 w-3 text-[#3D4D6B]" />
                            <span className="text-xs font-bold text-[#1A1A1A]">{product.vendor.rating}</span>
                        </div>
                        <span className="text-[9px] font-black text-[#999999] uppercase tracking-widest">{product.vendor.status}</span>
                    </div>
                </div>

                {/* Configuration Options */}
                <div className="space-y-6 pt-4">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <Label className="text-[10px] font-black text-[#666666] uppercase tracking-[0.2em]">Chassis Finish</Label>
                            <span className="text-[10px] font-bold text-[#1A1A1A]">{product.finishes[selectedFinish].name}</span>
                        </div>
                        <div className="flex gap-3">
                            {product.finishes.map((finish, i) => (
                                <button
                                    key={finish.name}
                                    onClick={() => setSelectedFinish(i)}
                                    className={cn(
                                        "h-10 w-10 rounded-full border-2 transition-all p-0.5",
                                        selectedFinish === i ? "border-[#1A1A1A]" : "border-transparent"
                                    )}
                                >
                                    <div 
                                        className="h-full w-full rounded-full shadow-inner" 
                                        style={{ backgroundColor: finish.color }} 
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <Label className="text-[10px] font-black text-[#666666] uppercase tracking-[0.2em]">Cup Size</Label>
                            <button className="text-[10px] font-bold text-[#666666] hover:text-[#1A1A1A] underline decoration-gray-300 underline-offset-4">Fit Guide</button>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={cn(
                                        "h-10 text-[11px] font-black uppercase tracking-widest rounded-lg border transition-all",
                                        selectedSize === size 
                                            ? "bg-[#1A1A1A] border-[#1A1A1A] text-white" 
                                            : "bg-white border-gray-100 text-[#666666] hover:border-gray-300"
                                    )}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6">
                    <Button 
                        onClick={() => addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.images[0],
                            category: 'Audio',
                            quantity: 1,
                            description: product.model
                        })}
                        className="w-full h-14 rounded-2xl bg-[#3D4D6B] hover:bg-[#2C3A52] text-white font-bold text-sm shadow-xl shadow-[#3D4D6B]/10 active:scale-[0.98] transition-all"
                    >
                        Add to Cart — ${product.price.toFixed(2)}
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="h-12 rounded-xl bg-gray-50 border-none text-[#1A1A1A] font-bold text-[11px] uppercase tracking-widest gap-2">
                            <Heart className="h-4 w-4" /> Wishlist
                        </Button>
                        <Button variant="outline" className="h-12 rounded-xl bg-gray-50 border-none text-[#1A1A1A] font-bold text-[11px] uppercase tracking-widest gap-2">
                            <Share2 className="h-4 w-4" /> Share
                        </Button>
                    </div>
                </div>

                {/* Shipping info */}
                <div className="flex items-center justify-between pt-6">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                            <Truck className="h-5 w-5 text-[#3D4D6B]" />
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-[#999999] uppercase tracking-widest block">Delivery</span>
                            <span className="text-xs font-bold text-[#1A1A1A]">Free Express Shipping</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                            <ShieldCheck className="h-5 w-5 text-[#3D4D6B]" />
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-[#999999] uppercase tracking-widest block">Warranty</span>
                            <span className="text-xs font-bold text-[#1A1A1A]">2 Year Limited</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Tabbed Info Section */}
        <div className="border-t border-gray-100 mb-20">
            <div className="flex gap-10 overflow-x-auto no-scrollbar py-6">
                {['Specifications', 'Description', 'Merchant Info', 'Reviews (128)'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all relative py-2",
                            activeTab === tab 
                                ? "text-[#1A1A1A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1A1A1A]" 
                                : "text-[#999999] hover:text-[#1A1A1A]"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
                <div className="lg:col-span-6 space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight">Technical Details</h2>
                    <div className="space-y-4">
                        {product.specs.map((spec) => (
                            <div key={spec.label} className="flex justify-between items-baseline border-b border-gray-50 pb-4">
                                <span className="text-sm text-[#666666]">{spec.label}</span>
                                <span className="text-sm font-bold text-[#1A1A1A] text-right">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-5 lg:offset-1">
                    <div className="bg-[#F8F9FB] rounded-3xl p-8 space-y-6 relative overflow-hidden">
                        <h3 className="text-xl font-bold tracking-tight">In the Box</h3>
                        <div className="space-y-4 relative z-10">
                            {product.inBox.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="h-5 w-5 rounded-full bg-[#3D4D6B] flex items-center justify-center shrink-0">
                                        <Check className="h-3 w-3 text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-[#1A1A1A]">{item}</span>
                                </div>
                            ))}
                        </div>
                        {/* Box abstract graphic */}
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-5">
                            <ShoppingBagIcon size={200} weight="fill" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* You May Also Seek Section */}
        <section className="mb-20">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <span className="text-[10px] font-black text-[#999999] uppercase tracking-[0.2em] block mb-2">Discovery Hub</span>
                    <h2 className="text-4xl font-bold tracking-tight">You May Also Seek</h2>
                </div>
                <Link href="/products" className="flex items-center gap-1 text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest hover:opacity-70 transition-opacity">
                    View Entire Collection <ChevronRight className="h-3 w-3" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Large Related Item */}
                <div className="md:col-span-4 bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col group">
                    <div className="p-8 pb-4">
                        <Badge className="mb-4 bg-orange-100 text-orange-600 hover:bg-orange-100 border-none font-bold text-[9px] px-2 py-0.5 uppercase tracking-wider">Best Value</Badge>
                        <h3 className="text-2xl font-bold mb-1">Acoustic Pro Isolation Pads</h3>
                        <p className="text-xs text-[#666666] mb-4">Enhanced sonic clarity.</p>
                        <span className="text-xl font-bold">$89.00</span>
                    </div>
                    <div className="relative flex-1 min-h-[250px] bg-gray-50 mt-auto">
                        <Image src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=80" alt="Isolation Pads" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>

                {/* Hero Related Item */}
                <div className="md:col-span-8 relative rounded-3xl overflow-hidden min-h-[400px] group">
                    <Image src="https://images.unsplash.com/photo-1558485940-84fe2179a6ea?w=1000&q=80" alt="Tube Amp" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                        <h3 className="text-3xl font-bold text-white mb-1">Valhalla Tube Amp</h3>
                        <p className="text-sm font-black text-white/50 uppercase tracking-widest mb-4">Merchant: Old World Tech</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-black text-white">$850.00</span>
                            <Button size="icon" className="h-12 w-12 rounded-full bg-white text-[#1A1A1A] hover:bg-white/90">
                                <Plus className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Row Items */}
                {[
                    { name: 'Silver-Core XLR 3m', price: 125, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80' },
                    { name: 'Oak Minimalist Stand', price: 45, img: 'https://images.unsplash.com/photo-1558485940-84fe2179a6ea?w=400&q=80' },
                    { name: 'BitStream USB DAC', price: 210, img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80' }
                ].map((item, i) => (
                    <div key={i} className="md:col-span-4 bg-[#F8F9FB] rounded-2xl p-6 flex flex-col group cursor-pointer border border-transparent hover:border-gray-200 transition-all">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                            <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <div>
                                <h4 className="text-[13px] font-bold text-[#1A1A1A] mb-0.5">{item.name}</h4>
                                <span className="text-sm font-black text-[#1A1A1A]">${item.price.toFixed(2)}</span>
                            </div>
                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white shadow-sm hover:bg-[#1A1A1A] hover:text-white transition-all">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}
