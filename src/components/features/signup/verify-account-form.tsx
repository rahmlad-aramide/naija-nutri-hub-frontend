"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import { VerifyAccountFormSchema } from "@/lib/zod";
// NOTE: I've simplified the resend button to a simple paragraph for this example
// import { ResendOTPButton } from "@/components/features/signup/resend-otp-button";

export const VerifyAccountForm = () => {
  const form = useForm<z.infer<typeof VerifyAccountFormSchema>>({
    resolver: zodResolver(VerifyAccountFormSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(data: z.infer<typeof VerifyAccountFormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex flex-col items-center text-center space-y-8 max-w-sm">
      
      <h1 className="text-4xl font-serif">
        We sent you a mail
      </h1>
      
      <Mail className="h-14 w-14 text-muted-foreground" />
      
      <p className="text-muted-foreground">
        Enter the security code we sent to your email
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    autoFocus
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                    onComplete={form.handleSubmit(onSubmit)}
                    {...field}
                    className="mx-auto" // Center the OTP input
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-sm">
            Resend code by Email
          </p>

          <Button type="submit" className="w-full">
            Verify
          </Button>
        </form>
      </Form>
    </div>
  );
};