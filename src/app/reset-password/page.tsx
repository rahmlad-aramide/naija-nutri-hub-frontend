import { ResetPasswordForm } from "@/components/features/reset-password/reset-password-form";

import Image from "next/image";

import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <main>
      <section>
        <h2>Set a new password</h2>
        <Suspense fallback={<p>Loading...</p>}>
          <ResetPasswordForm />
        </Suspense>
      </section>
    </main>
  );
}
