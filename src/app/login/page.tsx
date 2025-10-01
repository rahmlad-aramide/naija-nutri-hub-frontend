import { LoginForm } from "@/components/features/login/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main>
      <LoginForm />
      <p>
        {"Don't"} have an account? <Link href="/signup">Sign up</Link>
      </p>
    </main>
  );
}
