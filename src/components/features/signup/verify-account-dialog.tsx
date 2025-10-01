"use client";

import Image from "next/image";

import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { VerifyAccountForm } from "./verify-account-form";
import { maskEmail } from "@/lib/utils";

interface VerifyAccountDialogProps {
  email: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VerifyAccountDialog = ({
  email,
  open,
  setOpen,
}: VerifyAccountDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter verification code</DialogTitle>
          <DialogDescription>
            Enter the <abbr title="One Time Password">OTP</abbr> we sent to {maskEmail(email)}
          </DialogDescription>
        </DialogHeader>

        <VerifyAccountForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
