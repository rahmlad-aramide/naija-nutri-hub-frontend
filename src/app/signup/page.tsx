"use client";

import axios from "axios";
import { useState } from "react";

export default function SignupForm() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/sign-up`, form);

      setMessage("Sign-up successful! Check your email for OTP.");
    } catch (error: unknown) {
      setMessage("Sign-up failed. Please try again.");
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
