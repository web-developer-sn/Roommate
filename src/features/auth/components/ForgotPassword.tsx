"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import AuthInput from "./AuthInput";
import ForgotPasswordHero from "./ForgotPasswordHero";
import InfoCard from "./InfoCard";
import BackToLogin from "./BackToLogin";

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F7F4FF] flex items-center justify-center py-10">

      <div className="w-full max-w-md overflow-hidden rounded-[35px] bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center px-6 py-5">

          <ArrowLeft
            className="cursor-pointer"
            onClick={() => router.back()}
          />

        </div>

        {/* Title */}

        <div className="px-6 text-center">

          <h1 className="text-4xl font-bold">
            Forgot Password
          </h1>

          <p className="mt-3 text-gray-500 leading-7">
            No worries! Enter your email and
            we'll send you a reset link.
          </p>

        </div>

        {/* Hero */}

        <ForgotPasswordHero />

        {/* Form */}

        <div className="px-6">

          <AuthInput
            label=""
            placeholder="Enter your email address"
            type="email"
          />

          <button
            className="
              mt-6
              w-full
              rounded-xl
              bg-gradient-to-r
              from-violet-700
              to-violet-500
              py-4
              text-lg
              font-semibold
              text-white
              transition
              hover:scale-[1.02]
            "
          >
            Send Reset Link
          </button>

          <InfoCard />

          <BackToLogin />

        </div>

      </div>

    </main>
  );
}