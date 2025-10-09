import { VerifyAccountForm } from "@/components/features/signup/verify-account-form";
import { Suspense } from "react";

export default function VerifyAccountPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Suspense fallback={<p>Loading...</p>}>
        <VerifyAccountForm />
      </Suspense>
    </div>
  );
}
