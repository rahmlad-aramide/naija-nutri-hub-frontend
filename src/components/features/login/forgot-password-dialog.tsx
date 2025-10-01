"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ForgotPasswordForm } from "@/components/features/login/forgot-password-form";

export const ForgotPasswordDialog = () => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="absolute top-37 right-0 underline underline-offset-1 cursor-pointer leading-5 text-sm text-foreground font-normal"
        >
          Forgot Password?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Reset your password
          </DialogTitle>
          <DialogDescription>
            Enter the email you used for registration and {"we'll"} send you a
            one time code to reset your password.
          </DialogDescription>
        </DialogHeader>
        <ForgotPasswordForm closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
};
