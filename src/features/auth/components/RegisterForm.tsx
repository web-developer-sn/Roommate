"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import AuthInput from "./AuthInput";
import GoogleButton from "./GoogleButton";
import TermsCheckbox from "./TermsCheckbox";
import RegisterHero from "./RegisterHero";
import {useForm} from 'react-hook-form';
import { useRegister } from "../hooks/useRegister";

interface RegisterFormData{
  fullName:string,
  email:string,
  password:string,
  confirmPassword:string,
}


export default function RegisterForm( ) {
  const router = useRouter();
  const { register,handleSubmit,formState:{errors}}=useForm<RegisterFormData>();
    const registerMutation = useRegister();
  const onSubmit = (data: RegisterFormData) => {
    const  payload={name:data.fullName,email:data.email,password:data.password}
    registerMutation.mutate(payload, {
    onSuccess: () => {
  router.push(
    `/verify-email?email=${encodeURIComponent(data.email)}`
  );
},

      onError: (error: any) => {
        console.log(error.response.data);
      },
    });

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <main className="min-h-screen bg-[#F7F4FF] flex items-center justify-center py-10">

      <div className="w-full max-w-md overflow-hidden rounded-[35px] bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center px-6 py-5">

          <ArrowLeft
            className="cursor-pointer"
            onClick={() => router.back()}
          />

          <h1 className="flex-1 text-center text-2xl font-bold">
            Create Account
          </h1>

          <div className="w-6" />

        </div>

        {/* Hero */}

        <RegisterHero />

        {/* Card */}

        <div className="mx-5 -mt-4 rounded-3xl border bg-white p-6 shadow-lg">

          <div className="space-y-5">

            <AuthInput
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
                  register={register("fullName", {
                  required: "Full Name Required",
                })}
                error={errors.fullName?.message}
            />

            <AuthInput
              label="Email Address"
              placeholder="Enter your email"
              type="email"
                  register={register("email", {
                  required: "Email Required",
                })}
                error={errors.email?.message}
            />

            <AuthInput
              label="Password"
              placeholder="Create a password"
              type="password"
                  register={register("password", {
                  required: "Password Required",
                })}
                error={errors.password?.message}
            />

            <AuthInput
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
                  register={register("confirmPassword", {
                  required: "Confirm Password Required",
                })}
                error={errors.confirmPassword?.message}
            />

          </div>

          <TermsCheckbox />

          <button
            className=" mt-6 w-full rounded-xl bg-gradient-to-r  from-violet-700 to-violet-500 py-4 text-lg font-semibold  text-white "
          >
            Create Account
          </button>

        </div>

        <div className="px-5 py-6">

          <div className="my-6 flex items-center gap-3">

            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-gray-400">
              or
            </span>

            <div className="h-px flex-1 bg-gray-200" />

          </div>

          <GoogleButton />

          <p className="mt-6 text-center text-gray-500">

            Already have an account?

            <Link
              href="/login"
              className="ml-2 font-semibold text-violet-600"
            >
              Sign In
            </Link>

          </p>

        </div>

      </div>

    </main>
    </form>
  );
}