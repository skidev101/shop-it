'use client';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export function SearchFilters() {
  return (
    <div className="w-full space-y-10">
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] mb-6">Advanced Filters</h3>
        
        {/* Price Range */}
        <div className="space-y-4">
          <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Price Range</Label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-[#999999]">$</span>
              <Input placeholder="0" className="pl-6 h-11 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
            </div>
            <div className="w-2 h-[2px] bg-[#E5E5E5]" />
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-[#999999]">$</span>
              <Input placeholder="500+" className="pl-7 h-11 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Rating */}
      <div className="space-y-4">
        <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Vendor Rating</Label>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox id="rating-4.5" className="h-5 w-5 rounded-md border-[#E5E5E5] data-[state=checked]:bg-[#1A1A1A]" />
            <label htmlFor="rating-4.5" className="text-[13px] font-bold text-[#1A1A1A] flex items-center gap-1 cursor-pointer">
              4.5 & Above <span className="text-[#1A1A1A]">★</span>
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="rating-4.0" className="h-5 w-5 rounded-md border-[#E5E5E5] data-[state=checked]:bg-[#1A1A1A]" />
            <label htmlFor="rating-4.0" className="text-[13px] font-bold text-[#1A1A1A] flex items-center gap-1 cursor-pointer">
              4.0 & Above <span className="text-[#1A1A1A]">★</span>
            </label>
          </div>
        </div>
      </div>

      {/* Shipping Speed */}
      <div className="space-y-4">
        <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Shipping Speed</Label>
        <RadioGroup defaultValue="standard" className="space-y-3">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="same-day" id="same-day" className="h-5 w-5 border-[#E5E5E5] text-[#1A1A1A]" />
            <Label htmlFor="same-day" className="text-[13px] font-bold text-[#1A1A1A] cursor-pointer">Same Day Dispatch</Label>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="standard" id="standard" className="h-5 w-5 border-[#E5E5E5] text-[#1A1A1A]" />
            <Label htmlFor="standard" className="text-[13px] font-bold text-[#1A1A1A] cursor-pointer">Standard (3-5 days)</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Merchant Type */}
      <div className="space-y-4">
        <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Merchant Type</Label>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox id="verified" className="h-5 w-5 rounded-md border-[#E5E5E5] data-[state=checked]:bg-[#1A1A1A]" />
            <Label htmlFor="verified" className="text-[13px] font-bold text-[#1A1A1A] cursor-pointer">Verified Artisans</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="direct" className="h-5 w-5 rounded-md border-[#E5E5E5] data-[state=checked]:bg-[#1A1A1A]" />
            <Label htmlFor="direct" className="text-[13px] font-bold text-[#1A1A1A] cursor-pointer">Direct Manufactures</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="boutique" className="h-5 w-5 rounded-md border-[#E5E5E5] data-[state=checked]:bg-[#1A1A1A]" />
            <Label htmlFor="boutique" className="text-[13px] font-bold text-[#1A1A1A] cursor-pointer">Boutique Curators</Label>
          </div>
        </div>
      </div>

      <Button className="w-full h-12 bg-[#1A1A1A] hover:bg-[#333333] text-white rounded-xl text-[11px] font-black uppercase tracking-widest mt-4 transition-all active:scale-[0.98]">
        Apply Filters
      </Button>
    </div>
  );
}
