"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

import { SignupFormSchema } from "@/lib/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { VerifyAccountDialog } from "@/components/features/signup/verify-account-dialog";

export const SignupForm = () => {
  // controls the verify-account dialog
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignupFormSchema>) {
    console.log(values);

    // Simulate username taken error for demo
    if (values.username === "testuser") {
      setUsernameError(true);
      return;
    }

    // success
    setOpen(true);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-white text-sm leading-none" style={{ fontFamily: 'var(--font-manrope)' }}>Username</FormLabel>
                <FormControl>
                  <div className="relative">
                    <img src="/icons/user-icon.svg" alt="user" className="absolute left-3 top-1/2 -translate-y-1/2 size-5" />
                    <Input 
                      placeholder="Enter username" 
                      className={`bg-[#222222] border rounded-md pl-10 h-12 text-white ${usernameError ? 'border-red-500' : 'border-[#444444]'}`}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setUsernameError(false);
                      }}
                    />
                  </div>
                </FormControl>
                {usernameError && (
                  <div className="flex items-center space-x-2 text-red-500 text-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 11.5C7.44772 11.5 7 11.0523 7 10.5C7 9.94772 7.44772 9.5 8 9.5C8.55228 9.5 9 9.94772 9 10.5C9 11.0523 8.55228 11.5 8 11.5ZM8 8.5C7.44772 8.5 7 8.05228 7 7.5V4.5C7 3.94772 7.44772 3.5 8 3.5C8.55228 3.5 9 3.94772 9 4.5V7.5C9 8.05228 8.55228 8.5 8 8.5Z" fill="#FF7A50"/>
                    </svg>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontSize: '12px' }} className="text-[#FF7A50]">Username taken</span>
                  </div>
                )}
                <FormMessage className="text-[#FF7A50]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-white text-sm leading-none" style={{ fontFamily: 'var(--font-manrope)' }}>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <img src="/icons/mail-01.png" alt="mail" className="absolute left-3 top-1/2 -translate-y-1/2 size-5" />
                    <Input 
                      placeholder="Enter email" 
                      className="bg-[#222222] border border-[#444444] rounded-md pl-10 h-12 text-white" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-[#FF7A50]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="password" className="text-white text-sm leading-none" style={{ fontFamily: 'var(--font-manrope)' }}>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      aria-describedby="password-constraints"
                      autoComplete="current-password"
                      id="password"
                      placeholder="Enter Password"
                      className="bg-[#222222] border border-[#444444] rounded-md pl-10 pr-10 h-12 text-white"
                      {...field}
                    />
                    <img src="/icons/square-lock-password.png" alt="lock" className="absolute left-3 top-1/2 -translate-y-1/2 size-5" />
                    <Button
                      type="button"
                      id="toggle-password"
                      aria-label="Show password as plain text. Warning: this will display your password on the screen."
                      variant="ghost"
                      size="icon"
                      onClick={togglePasswordVisibility}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:bg-transparent"
                    >
                      {showPassword ? (
                        <EyeOffIcon aria-hidden="true" className="size-5" />
                      ) : (
                        <EyeIcon aria-hidden="true" className="size-5" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide" : "Show"} password
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <div className="flex items-center space-x-2 text-[#9E9E9E] text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 11.5C7.44772 11.5 7 11.0523 7 10.5C7 9.94772 7.44772 9.5 8 9.5C8.55228 9.5 9 9.94772 9 10.5C9 11.0523 8.55228 11.5 8 11.5ZM8 8.5C7.44772 8.5 7 8.05228 7 7.5V4.5C7 3.94772 7.44772 3.5 8 3.5C8.55228 3.5 9 3.94772 9 4.5V7.5C9 8.05228 8.55228 8.5 8 8.5Z" fill="#9CA3AF"/>
                  </svg>
                  <span style={{ fontFamily: 'var(--font-manrope)', fontSize: '12px' }} className="text-[#9E9E9E]">Must contain 1 uppercase letter, 1 number and a minimum of 8 characters</span>
                </div>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-[#FF7A50] hover:bg-[#FF7A50]/90 text-white py-3 rounded-md h-12 font-semibold text-sm leading-none"
            style={{ fontFamily: 'var(--font-source-serif-pro)' }}
          >
            Create account
          </Button>
        </form>
      </Form>

      <VerifyAccountDialog
        email={form.getValues("email")}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};
