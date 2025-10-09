import { ForgotPasswordForm } from "@/components/features/forgot-password/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen text-center flex-col items-center justify-center bg-[#222222]">
      <section className="w-full max-w-md px-8">
        <h2
          className="text-2xl mb-2"
          style={{ fontFamily: "var(--font-source-serif-pro)" }}
        >
          Reset your password
        </h2>
        <p
          className="text-gray-40  0 mb-6"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Enter your email address and we&apos;ll send you a link to reset your
          password
        </p>
        <ForgotPasswordForm />
      </section>
    </main>
  );
}
