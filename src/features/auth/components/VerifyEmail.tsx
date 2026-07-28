"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import VerifyHero from "./VerifyHero";
import OTPInput from "./OTPInput";
import Timer from "./Timer";
import { useVerifyEmail } from "../hooks/useVerifyEmail";

interface OTPFormData {
  otp: string;
}

export default function VerifyEmail() {
    const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();

  const verifyMutation = useVerifyEmail();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormData>({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data: OTPFormData) => {
    verifyMutation.mutate(
      {
        email: email!,
        otp: data.otp,
      },
      {
        onSuccess: () => {
          router.push("/login");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <main className="min-h-screen flex items-center justify-center bg-[#F7F4FF] py-10">
        <div className="w-full max-w-md overflow-hidden rounded-[35px] bg-white shadow-2xl">

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
              {email}
            </p>
          </div>

          <VerifyHero />

          <div className="px-6">

            <p className="mb-5 text-center text-gray-600">
              Enter the 6-digit code
            </p>

            <OTPInput control={control} />

            {errors.otp && (
              <p className="mt-2 text-center text-sm text-red-500">
                {errors.otp.message}
              </p>
            )}

            <Timer />

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-700 to-violet-500 py-4 text-lg font-semibold text-white"
            >
              Verify Email
            </button>

            <p className="mt-8 text-center text-gray-500">
              Didn't receive the code?
            </p>

            <button
              type="button"
              className="mt-2 w-full text-center font-semibold text-violet-600"
            >
              Resend Code
            </button>

          </div>

        </div>
      </main>
    </form>
  );
}