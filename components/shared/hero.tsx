import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {/* Left Main Hero Card */}
            <div className="lg:col-span-9 relative rounded-2xl overflow-hidden min-h-[520px] bg-[#1a1a1a]">
                {/* Background Image - Placeholder or provided */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                        alt="Workspace Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                    <div className="max-w-2xl space-y-6">
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                            New Arrivals - This Week
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                            The Precision <br /> Series
                        </h1>
                        <p className="text-lg md:text-lg text-white/70 max-w-lg leading-relaxed">
                            Elevate your workspace with our curated selection of
                            high-performance technical instruments and artisanal
                            hardware.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                size="lg"
                                className="h-14 px-8 rounded-xl bg-primary hover:bg-[#0047FF]/90 font-bold text-white"
                            >
                                Shop the Collection
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 rounded-xl bg-white/5 border-white/20 hover:bg-white/10 hover:text-white text-white backdrop-blur-sm font-bold"
                            >
                                Browse Categories
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Stats Column */}
            <div className="lg:col-span-3 space-y-6">
                <div className="bg-[#F8F8F8] p-8 rounded-2xl h-[250px] flex flex-col justify-center">
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-4xl font-black text-[#1A1A1A] tracking-tighter">
                            1,728
                        </span>
                        <span className="text-xs font-bold text-[#666666] uppercase tracking-widest">
                            Vendors
                        </span>
                    </div>
                    <p className="text-sm text-[#666666] leading-relaxed max-w-[180px]">
                        1,836 high quality products across 3 distinct global
                        regions.
                    </p>
                </div>

                <div className="bg-[#F8F8F8] p-8 rounded-2xl flex-1 flex flex-col justify-between">
                    <div>
                        <span className="text-[10px] font-black text-[#666666] uppercase tracking-[0.2em] mb-4 block">
                            Marketplace Pulse
                        </span>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-4xl font-black text-[#1A1A1A] tracking-tighter">
                                1,284
                            </span>
                            <div className="flex items-center text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                <ArrowUpRight className="h-3 w-3 mr-0.5" />
                                +12%
                            </div>
                        </div>
                        <p className="text-sm text-[#666666] leading-relaxed">
                            New vendors certified this week across 14 distinct
                            global regions.
                        </p>
                    </div>

                    <div className="pt-6">
                        <div className="flex -space-x-2 mb-3">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="h-8 w-8 rounded-full border-2 border-[#F8F8F8] bg-[#E5E5E5] overflow-hidden"
                                >
                                    <Image
                                        src={`https://i.pravatar.cc/150?u=${i}`}
                                        alt="User"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            ))}
                            <div className="h-8 w-8 rounded-full border-2 border-[#F8F8F8] bg-[#1A1A1A] flex items-center justify-center text-[10px] font-bold text-white">
                                +42
                            </div>
                        </div>
                        <p className="text-[10px] font-black text-[#666666] uppercase tracking-[0.15em]">
                            Trusted by 375,000+ worldwide
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
