import Link from "next/link";

import { SignupForm } from "@/components/features/signup/signup-form";

export default function SignupPage() {
  return (
    <>
      <header>
        <h1>Signup to get started</h1>
      </header>
      <main>
        <section>
          <SignupForm />
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </section>
      </main>
    </>
  );
}
