import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const maskEmail = (email: string = "") => {
  const [user, domain] = email.split("@");
  const maskedEmail = `***${user.slice(
    Math.max(0, user.length - 3),
    user.length,
  )}@${domain}`;

  return maskedEmail;
};
