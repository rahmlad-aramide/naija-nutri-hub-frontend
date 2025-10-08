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
import { Input } from "@/components/ui/input";
import { ForgotPasswordFormSchema } from "@/lib/zod";

export const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof ForgotPasswordFormSchema>>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof ForgotPasswordFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-sm leading-none" style={{ fontFamily: "var(--font-manrope)" }}>Email</FormLabel>
              <FormControl>
                <div className="relative">
                    <img
                      src="/icons/mail-01.png"
                      alt="mail"
                      className="absolute left-3 top-1/2 -translate-y-1/2 size-5"
                    />
                    <Input
                      placeholder="Enter email"
                      className="bg-[#222222] border border-[#444444] rounded-md pl-10 h-12 text-white"
                      {...field}
                    />
                  </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full py-3 h-12 bg-[#FF7A50] hover:bg-[#FF7A50]/90 text-white rounded-md text-sm leading-none focus:outline-none" style={{ fontFamily: "var(--font-source-serif-pro)" }}>Reset Password</Button>
      </form>
    </Form>
  );
};
