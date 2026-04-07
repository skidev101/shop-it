"use client";

import Link from "next/link";
import {
  Instagram,
  Twitter,
  Github,
  ArrowUpRight,
  Globe,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "All Products", href: "/shop" },
      { label: "Featured Artisans", href: "/vendors" },
      { label: "New Arrivals", href: "/shop?sort=newest" },
      { label: "Deals & Offers", href: "/deals" },
    ],
    atlas: [
      { label: "About the Atlas", href: "/about" },
      { label: "Become a Vendor", href: "/auth/register?role=vendor" },
      { label: "Ethical Standards", href: "/ethics" },
      { label: "Artisan Stories", href: "/stories" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Shipping Policy", href: "/shipping" },
      { label: "Return Portal", href: "/returns" },
      { label: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12">
      <div className="mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tighter text-[#1A1A1A] uppercase">
                Merchant Atlas
              </span>
            </Link>
            <p className="text-sm text-[#666666] leading-relaxed max-w-sm">
              The premier cartographic authority in modern commerce. We curate
              the world's finest artisans into a single, seamless digital
              landscape.
            </p>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em]">
                Subscribe to the Journal
              </h4>
              <div className="flex gap-2 max-w-sm">
                <Input
                  type="email"
                  placeholder="email@example.com"
                  className="h-12 rounded-xl bg-[#F5F5F7] border-none px-4 focus-visible:ring-1 focus-visible:ring-[#1A1A1A]/10 transition-all"
                />
                <Button className="h-12 w-12 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#333333] transition-all flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-[9px] text-[#999999] uppercase tracking-widest leading-loose">
                Latest updates on artisan drops and atlas news.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em]">
                Shop
              </h4>
              <ul className="space-y-4">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em]">
                Atlas
              </h4>
              <ul className="space-y-4">
                {footerLinks.atlas.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em]">
                Support
              </h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6 text-right md:text-left lg:text-right">
              <h4 className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em]">
                Connect
              </h4>
              <div className="flex justify-end md:justify-start lg:justify-end gap-4">
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 text-right md:text-left lg:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F5F5F7] rounded-full">
                <Globe className="h-3 w-3 text-[#1A1A1A]" />
                <span className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-widest">
                  Global Node: Verified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#F5F5F7] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <p className="text-[11px] font-bold text-[#999999] uppercase tracking-widest">
              © {currentYear} Merchant Atlas Inc.
            </p>
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-4 w-4 text-[#E5E5E5]" />
              <Zap className="h-4 w-4 text-[#E5E5E5]" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link
              href="/privacy"
              className="text-[10px] font-black text-[#999999] uppercase tracking-[0.2em] hover:text-[#1A1A1A] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] font-black text-[#999999] uppercase tracking-[0.2em] hover:text-[#1A1A1A] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-[10px] font-black text-[#999999] uppercase tracking-[0.2em] hover:text-[#1A1A1A] transition-colors"
            >
              Cookie Settings
            </Link>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.4em]">
            <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" />
            Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
