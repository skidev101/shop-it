import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col font-sans">
      {/* Top Branding (for some pages like Register) */}
      <div className="p-6 md:p-8 flex justify-between items-center w-full max-w-[1400px] mx-auto absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <Link href="/" className="text-xl font-bold tracking-tight text-[#1A1A1A] pointer-events-auto">
          Merchant Atlas
        </Link>
        <div className="hidden md:block text-[11px] font-medium text-[#666666] uppercase tracking-widest">
            The Cartographic Authority in Commerce.
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-4 py-20 relative">
        {/* Abstract Background pattern (soft circles/gradients) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gray-100/50 blur-[120px]" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">
            {children}
        </div>
      </main>

      {/* Auth Footer */}
      <footer className="p-8 md:p-12 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-gray-100 bg-white md:bg-transparent">
        <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-tight text-[#1A1A1A]">MERCHANT ATLAS</h3>
            <p className="text-[10px] text-[#999999] max-w-[280px] leading-relaxed uppercase tracking-wider">
                © 2024 MERCHANT ATLAS. THE CARTOGRAPHIC AUTHORITY IN COMMERCE.
            </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2">
            <Link href="/privacy" className="text-[10px] font-bold text-[#666666] hover:text-[#1A1A1A] uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] font-bold text-[#666666] hover:text-[#1A1A1A] uppercase tracking-widest transition-colors">Terms of Service</Link>
            <Link href="/agreement" className="text-[10px] font-bold text-[#666666] hover:text-[#1A1A1A] uppercase tracking-widest transition-colors">Vendor Agreement</Link>
            <Link href="/help" className="text-[10px] font-bold text-[#666666] hover:text-[#1A1A1A] uppercase tracking-widest transition-colors">Help Center</Link>
        </nav>
      </footer>
    </div>
  );
}
