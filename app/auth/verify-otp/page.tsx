'use client';

import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function VerifyOTPPage() {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
        toast.error('Please enter the full 6-digit code.');
        return;
    }
    
    setLoading(true);
    // Mock verification
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Email verified successfully!');
    setLoading(false);
    router.push('/');
  };

  return (
    <div className="w-full max-w-120 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-16 w-16 bg-[#F0F4F8] rounded-full flex items-center justify-center">
          <Shield className="h-8 w-8 text-[#3D4D6B]" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#1A1A1A] tracking-tight">
            Check your email
          </h2>
          <p className="text-sm text-gray-800 max-w-[320px] mx-auto">
            We&apos;ve sent a 6-digit verification code to your registered email address.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
        <form onSubmit={handleVerify} className="space-y-8 flex flex-col items-center">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
            className="gap-3"
          >
            <InputOTPGroup className="gap-2">
              <InputOTPSlot index={0} className="h-14 w-12 rounded-xl border-[#E5E5E5] text-lg font-bold" />
              <InputOTPSlot index={1} className="h-14 w-12 rounded-xl border-[#E5E5E5] text-lg font-bold" />
              <InputOTPSlot index={2} className="h-14 w-12 rounded-xl border-[#E5E5E5] text-lg font-bold" />
              <InputOTPSlot index={3} className="h-14 w-12 rounded-xl border-[#E5E5E5] text-lg font-bold" />
              <InputOTPSlot index={4} className="h-14 w-12 rounded-xl border-[#E5E5E5] text-lg font-bold" />
              <InputOTPSlot index={5} className="h-14 w-12 rounded-xl border-[#E5E5E5] text-lg font-bold" />
            </InputOTPGroup>
          </InputOTP>

          <Button 
            disabled={loading}
            className="w-full h-14 rounded-xl bg-[#3D4D6B] hover:bg-[#2C3A52] text-white font-bold text-sm transition-all"
          >
            {loading ? 'Verifying...' : 'Verify'}
          </Button>

          <div className="text-center space-y-2">
            <p className="text-[10px] font-bold text-[#999999] uppercase tracking-widest">
                Didn&apos;t receive the code?
            </p>
            <button 
                type="button"
                onClick={() => toast.info('New code sent to your email.')}
                className="text-xs font-bold text-[#3D4D6B] hover:underline"
            >
                Resend code
            </button>
          </div>
        </form>
      </div>

      <Link href="/auth/login" className="flex items-center justify-center gap-2 text-sm font-bold text-[#666666] hover:text-[#1A1A1A] transition-colors group">
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Login
      </Link>
    </div>
  );
}
