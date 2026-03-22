'use client';

import Link from 'next/link';
import { Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock login delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Successfully signed in!', {
        description: `Welcome back to the Merchant Atlas.`,
    });
    
    setLoading(false);
    router.push('/');
  };

  return (
    <div className="w-full max-w-120 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-12 w-12 bg-[#3D4D6B] rounded-xl flex items-center justify-center shadow-lg">
          <Compass className="h-6 w-6 text-white" />
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter">
            MERCHANT ATLAS
          </h2>
          <p className="text-sm text-[#666666]">Sign in to your account</p>
        </div>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[10px] font-black text-[#666666] uppercase tracking-widest pl-1">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 rounded-xl border-[#E5E5E5] focus-visible:ring-[#3D4D6B]/5 focus-visible:border-[#3D4D6B] px-5 bg-[#F9FAFB]/30"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <Label htmlFor="password" className="text-[10px] font-black text-[#666666] uppercase tracking-widest">
                Password
              </Label>
              <Link
                href="/auth/reset-password"
                className="text-[10px] font-bold text-[#666666] hover:text-[#3D4D6B] transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 rounded-xl border-[#E5E5E5] focus-visible:ring-[#3D4D6B]/5 focus-visible:border-[#3D4D6B] px-5 bg-[#F9FAFB]/30"
            />
          </div>

          <div className="flex items-center space-x-2 pl-1">
            <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 rounded border-[#E5E5E5] text-[#3D4D6B] focus:ring-[#3D4D6B]/20" 
            />
            <label htmlFor="remember" className="text-xs font-medium text-[#666666] select-none">
              Keep me signed in
            </label>
          </div>

          <Button 
            disabled={loading}
            className="w-full h-14 rounded-xl bg-[#3D4D6B] hover:bg-[#2C3A52] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            {loading ? 'Signing in...' : (
                <>
                    Sign In <ArrowRight className="h-4 w-4" />
                </>
            )}
          </Button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100"></span>
          </div>
          <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest">
            <span className="bg-white px-4 text-[#CCCCCC]">or</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full h-14 rounded-xl border-[#E5E5E5] bg-[#E9EEF2]/50 hover:bg-[#E9EEF2] text-[#3D4D6B] font-bold text-sm gap-3 transition-colors"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5" />
          Continue with Google
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <p className="text-sm text-[#666666]">
          Don&apos;t have an account?{' '}
          <Link href="/auth/register" className="font-bold text-[#1A1A1A] hover:underline underline-offset-4 decoration-2 decoration-[#3D4D6B]/30">
            Sign up
          </Link>
        </p>

        <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-1.5 grayscale opacity-40">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">SSL Secured</span>
            </div>
            <div className="flex items-center gap-1.5 grayscale opacity-40">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Vendor</span>
            </div>
        </div>
      </div>
    </div>
  );
}
