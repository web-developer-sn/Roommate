"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import VerifyHero from "./VerifyHero";
import OTPInput from "./OTPInput";
import Timer from "./Timer";

export default function VerifyEmail() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#F7F4FF] flex justify-center items-center py-10">

      <div className="w-full max-w-md rounded-[35px] bg-white shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="flex items-center px-6 py-6">

          <ArrowLeft
            className="cursor-pointer"
            onClick={() => router.back()}
          />

        </div>

        <div className="px-6">

          <h1 className="text-center text-4xl font-bold">
            Verify Your Email
          </h1>

          <p className="mt-3 text-center text-gray-500">
            We've sent a 6-digit code to
          </p>

          <p className="mt-1 text-center font-semibold text-violet-600">
            john.doe@example.com
          </p>

        </div>

        <VerifyHero />

        <div className="px-6">

          <p className="mb-5 text-center text-gray-600">
            Enter the 6-digit code
          </p>

          <OTPInput />

          <Timer />

          <button
            className="
              mt-8
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
            Verify Email
          </button>

          <p className="mt-8 text-center text-gray-500">
            Didn't receive the code?
          </p>

          <button
            className="
              mt-2
              w-full
              text-center
              font-semibold
              text-violet-600
            "
          >
            Resend Code
          </button>

        </div>

      </div>

    </main>
  );
}