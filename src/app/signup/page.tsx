"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const storedEmail =
    typeof window !== "undefined" ? localStorage.getItem("pendingEmail") : null;
  const email = searchParams.get("email") || storedEmail || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Creating account...");

    try {
      const response = await fetch(
        "https://naija-nutri-hub.azurewebsites.net/sign-up",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Sign up successful! Redirecting...");
        localStorage.setItem("pendingEmail", form.email);

        router.push(`/verify-account?email=${encodeURIComponent(form.email)}`);
      } else {
        setMessage(`Sign up failed: ${data.message || "Try again."}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md bg-neutral-800 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-[#FF7A50]">
          Create Your Account
        </h2>

        <input
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-neutral-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A50]"
        />
        <input
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-neutral-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A50]"
        />
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-neutral-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A50]"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-neutral-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A50]"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-neutral-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A50]"
        />

        <button
          type="submit"
          className="bg-[#FF7A50] hover:bg-[#ff885f] text-white font-semibold py-3 rounded-md transition-all"
        >
          Sign Up
        </button>

        {message && (
          <p className="mt-3 text-center text-sm text-gray-300">{message}</p>
        )}
      </form>
    </div>
  );
}