"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import { VerifyAccountFormSchema } from "@/lib/zod";
import { ResendOTPButton } from "@/components/features/signup/resend-otp-button";

interface VerifyAccountFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VerifyAccountForm = ({ setOpen }: VerifyAccountFormProps) => {
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

    // success
    setOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP
                  autoFocus
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  onComplete={form.handleSubmit(onSubmit)}
                  {...field}
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
          {"Didn't"} get a code? <ResendOTPButton />
        </p>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
