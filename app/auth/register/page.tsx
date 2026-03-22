'use client';

import Link from 'next/link';
import { Compass, Eye, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock registration delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Account created!', {
        description: 'Please check your email to verify your account.',
    });
    
    setLoading(false);
    router.push('/auth/verify-otp');
  };

  return (
    <div className="w-full max-w-120 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-14 w-14 bg-[#E0E9FF] rounded-xl flex items-center justify-center shadow-sm">
          <Compass className="h-7 w-7 text-[#3D4D6B]" />
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-3xl font-bold text-[#1A1A1A] tracking-tight">
            Create your Atlas account
          </h2>
          <p className="text-sm text-[#666666]">Map your journey in the global marketplace.</p>
        </div>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
        <Button
          variant="outline"
          className="w-full h-12 rounded-xl border-[#E5E5E5] bg-[#E9EEF2]/50 hover:bg-[#E9EEF2] text-[#3D4D6B] font-bold text-sm gap-3 mb-8"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5" />
          Continue with Google
        </Button>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100"></span>
          </div>
          <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest">
            <span className="bg-white px-4 text-[#CCCCCC]">or</span>
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullname" className="text-[10px] font-black text-[#666666] uppercase tracking-widest pl-1">
              Full Name
            </Label>
            <Input
              id="fullname"
              placeholder="Alexander Von Humboldt"
              required
              className="h-12 rounded-xl border-[#E5E5E5] focus-visible:ring-[#3D4D6B]/5 focus-visible:border-[#3D4D6B] px-5"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[10px] font-black text-[#666666] uppercase tracking-widest pl-1">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="explorer@merchantatlas.com"
              required
              className="h-12 rounded-xl border-[#E5E5E5] focus-visible:ring-[#3D4D6B]/5 focus-visible:border-[#3D4D6B] px-5"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[10px] font-black text-[#666666] uppercase tracking-widest pl-1">
              Password
            </Label>
            <div className="relative">
                <Input
                id="password"
                type="password"
                placeholder="••••••••••••"
                required
                className="h-12 rounded-xl border-[#E5E5E5] focus-visible:ring-[#3D4D6B]/5 focus-visible:border-[#3D4D6B] px-5 pr-12"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Eye className="h-4 w-4" />
                </button>
            </div>
            
            {/* Password Strength */}
            <div className="pt-2 space-y-2">
                <div className="flex gap-1.5 h-1 w-full px-1">
                    <div className="h-full flex-1 bg-[#3D4D6B] rounded-full" />
                    <div className="h-full flex-1 bg-[#3D4D6B] rounded-full" />
                    <div className="h-full flex-1 bg-gray-200 rounded-full" />
                </div>
                <div className="flex items-center gap-1.5 pl-1">
                    <div className="h-3 w-3 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="h-2 w-2 text-green-600" />
                    </div>
                    <span className="text-[9px] font-black text-[#666666] uppercase tracking-wider">Strong Password</span>
                </div>
            </div>
          </div>

          <div className="flex items-start space-x-2 pl-1 pt-2">
            <input 
                type="checkbox" 
                id="terms" 
                required
                className="mt-0.5 h-4 w-4 rounded border-[#E5E5E5] text-[#3D4D6B] focus:ring-[#3D4D6B]/20" 
            />
            <label htmlFor="terms" className="text-[11px] font-medium text-[#666666] leading-tight">
              I agree to the <Link href="/terms" className="font-bold text-[#1A1A1A] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="font-bold text-[#1A1A1A] hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <Button 
            disabled={loading}
            className="w-full h-14 rounded-xl bg-[#3D4D6B] hover:bg-[#2C3A52] text-white font-bold text-sm transition-all active:scale-[0.98]"
          >
            {loading ? 'Creating account...' : 'CREATE ACCOUNT'}
          </Button>
        </form>

        <div className="mt-8 text-center">
            <p className="text-sm text-[#666666]">
                Already have an account?{' '}
                <Link href="/auth/login" className="font-bold text-[#1A1A1A] hover:underline underline-offset-4 decoration-2 decoration-[#3D4D6B]/30">
                    Sign in
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
