'use client';

import Link from 'next/link';
import { RefreshCcw, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ResetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock reset delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Reset link sent!', {
        description: `We've sent a secure link to ${email}.`,
    });
    
    setLoading(false);
  };

  return (
    <div className="w-full max-w-120 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-16 w-16 bg-[#E0E9FF] rounded-2xl flex items-center justify-center">
          <Lock className="h-8 w-8 text-[#3D4D6B]" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#1A1A1A] tracking-tight">
            Reset your password
          </h2>
          <p className="text-sm text-[#666666] max-w-85 mx-auto leading-relaxed">
            Enter the email address associated with your account and we&apos;ll send you a secure link to create a new password.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
        <form onSubmit={handleReset} className="space-y-8 flex flex-col items-center">
          <div className="w-full space-y-2">
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
              className="h-14 rounded-xl border-[#E5E5E5] focus-visible:ring-[#3D4D6B]/5 focus-visible:border-[#3D4D6B] px-5"
            />
          </div>

          <Button 
            disabled={loading}
            className="w-full h-14 rounded-xl bg-[#3D4D6B] hover:bg-[#2C3A52] text-white font-bold text-sm transition-all"
          >
            {loading ? 'Sending link...' : 'Send Reset Link'}
          </Button>

          <Link href="/auth/login" className="flex items-center gap-2 text-xs font-bold text-[#3D4D6B] hover:underline transition-colors group">
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            Back to Sign In
          </Link>
        </form>
      </div>

      <p className="text-[10px] text-center text-[#999999] px-12 leading-relaxed uppercase tracking-widest">
        By continuing, you agree to our security protocols designed to keep your merchant data safe.
      </p>
    </div>
  );
}
