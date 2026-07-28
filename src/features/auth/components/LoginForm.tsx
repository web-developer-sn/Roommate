"use client";

import { useLogin } from "../hooks/useLogin";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import GoogleButton from "./GoogleButton";
import RememberMe from "./RememberMe";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
interface LoginFormData {
  email: string;
  password: string;
}
export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>();
  const handleSignUp = () => {
    router.push("/register");
  };
  const loginMutation = useLogin();
  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        router.replace("/");
      },
      onError: (error: any) => {
        console.log(error.response.data);
    },
  });
};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <main className="min-h-screen bg-[#F7F4FF] flex justify-center items-center py-10">
        <div className="w-full max-w-md rounded-[35px] bg-white shadow-2xl overflow-hidden">
          <div className="px-6 py-8">
            <AuthHeader />

            <div className="mt-8">
              <h2 className="text-4xl font-bold">Welcome back!</h2>

              <p className="mt-2 text-gray-500">
                Login to continue managing your room
              </p>
            </div>

            <div className="mt-8 space-y-5">
              <AuthInput
                label="Email"
                type="email"
                placeholder="Email"
                register={register("email", {
                  required: "Email Required",
                })}
                error={errors.email?.message}
              />

              <AuthInput
                type="password"
                label="Password"
                placeholder="Password"
                register={register("password", {
                  required: "Password Required",
                })}
                error={errors.password?.message}
              />
            </div>

            <RememberMe />

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-700 to-violet-500 py-4 text-lg font-semibold text-white transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-gray-400">OR</span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <GoogleButton />

            <p className="mt-8 text-center text-gray-500">
              Don't have an account?
              <span
                onClick={handleSignUp}
                className="ml-2 cursor-pointer font-semibold text-violet-600"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </main>
    </form>
  );
}
