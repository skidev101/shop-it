"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import client from "@/lib/api/client";
import { verifyOtp } from "@/lib/api/auth";

const otpSchema = z.object({
  pin: z.string().length(6, "Enter all 6 digits"),
});

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { pin: "" },
  });

  const onSubmit = async (data: { pin: string }) => {
    try {
      const response = await verifyOtp({ email: email!, otp: data.pin });
      console.log("OTP verification response:", response);

      if (response.success) {
        toast.success("Account verified!");
        router.push("/auth/login");
      }
    } catch (error: any) {
      toast.info("Please verify your email to continue.");
      // Redirect to OTP page and pass the email so the user doesn't have to type it
      router.push(`/auth/verify-otp?email=${encodeURIComponent(email!)}`);
      return;
    }
  };

  // if (!email) {
  //   router.push("/auth/login");
  //   return null;
  // }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Verify Email</CardTitle>
          <CardDescription>
            Enter the code sent to{" "}
            <span className="font-medium text-primary">{email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup className="flex flex-col items-center space-y-6">
              <Field className="flex flex-col items-center gap-4">
                <FieldLabel className="sr-only">One-Time Password</FieldLabel>

                <Controller
                  control={control}
                  name="pin"
                  render={({ field }) => (
                    <InputOTP
                      maxLength={6}
                      onComplete={() => handleSubmit(onSubmit)()}
                      {...field}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  )}
                />

               
                {errors.pin && (
                  <p className="text-sm font-medium text-destructive">
                    {errors.pin.message}
                  </p>
                )}

                <FieldDescription>
                  The code expires in 10 minutes.
                </FieldDescription>
              </Field>

              <Button
                type="submit"
                className="w-full h-11"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Verifying..." : "Verify & Continue"}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
