"use client";

import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { cn } from "@/lib/utils";

// Define the props the component will accept
interface ResendOTPButtonProps {
  email: string;
}

export const ResendOTPButton = ({ email }: ResendOTPButtonProps) => {
  const [timer, setTimer] = useState(30);
  const [isCoolingDown, setIsCoolingDown] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // This useEffect handles the countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isCoolingDown) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsCoolingDown(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isCoolingDown]);

  // This is the new function to handle the API call
  const handleResend = async () => {
    setIsLoading(true);
    try {
      // Make the POST request to the backend
      await axiosInstance.post("/resend_otp", { email });

      // On success, show a notification and restart the timer
      toast.success("A new OTP has been sent to your email.");
      setTimer(30);
      setIsCoolingDown(true);
    } catch (error) {
      // On failure, show an error notification
      let errorMessage = "Failed to resend OTP. Please try again.";

      // Check if the error is an Axios error
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = isCoolingDown || isLoading;

  return (
    <Button
      variant="link"
      onClick={handleResend}
      disabled={isDisabled}
      className={cn(
        "p-0 h-auto font-normal", // Styling to make it look like a simple link
        isDisabled ? "cursor-not-allowed" : "cursor-pointer",
      )}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading
        ? "Sending..."
        : isCoolingDown
          ? `Resend OTP in ${timer}s`
          : "Resend OTP"}
    </Button>
  );
};
