import Link from "next/link";

import { SignupForm } from "@/components/features/signup/signup-form";

export default function SignupPage() {
  return (
    <main>
      <SignupForm />
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </main>
  );
}
