import { ForgotPasswordForm } from "@/components/features/forgot-password/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <main>
      <section>
        <h2>Reset your password</h2>
        <p>
          Enter the email you used for registration and {"we'll"} send you a one
          time code to reset your password.
        </p>
        <ForgotPasswordForm />
      </section>
    </main>
  );
}
