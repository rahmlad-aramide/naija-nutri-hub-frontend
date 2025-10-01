import { LoginForm } from "@/components/features/login/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <header>
        <h1>Welcome Back</h1>
      </header>
      <main>
        <section>
          <LoginForm />
          <p>
            {"Don't"} have an account? <Link href="/signup">Sign up</Link>
          </p>
        </section>
      </main>
    </>
  );
}
