import { ResetPasswordForm } from "@/components/features/reset-password/reset-password-form";

import Image from "next/image";

import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <main>
      <section>
        <div>
          <header>
            <h2>Reset Your Password</h2>
            <p>
              Enter your email address and {"we'll"} send you a link to reset
              your password.
            </p>
          </header>
          <Suspense fallback={<p>Loading...</p>}>
            <ResetPasswordForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
