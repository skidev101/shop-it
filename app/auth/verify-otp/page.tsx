'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import client from '@/lib/api/client';
import { toast } from 'sonner'; 

const otpSchema = z.object({
  otp: z.string().length(6, 'OTP must be exactly 6 digits'),
});

type OtpForm = z.infer<typeof otpSchema>;

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtpForm>({
    resolver: zodResolver(otpSchema),
  });

  // Redirect if no email is found in URL
  if (!email) {
    router.push('/auth/login');
    return null;
  }

  const onSubmit = async (data: OtpForm) => {
    try {
      await client.post('/auth/verify-otp', {
        email,
        otp: data.otp,
      });

      toast.success('Verification successful!');
      router.push('/auth/login'); // Or straight to dashboard if auto-logging in
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Verification failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Verify your Email</CardTitle>
          <CardDescription className="text-center">
            Enter the 6-digit code sent to <span className="font-semibold">{email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Input
                {...register('otp')}
                placeholder="000000"
                className="text-center text-2xl tracking-[0.5em] font-bold"
                maxLength={6}
              />
              {errors.otp && (
                <p className="text-sm text-center text-red-500">{errors.otp.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Verifying...' : 'Verify OTP'}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Didn&apos;t receive a code?{' '}
            <button 
              onClick={() => {/* Call your resend API */}}
              className="text-blue-600 hover:underline font-medium"
            >
              Resend
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}