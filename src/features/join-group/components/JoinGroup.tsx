"use client";

import { ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  joinGroupSchema,
  type JoinGroupInput,
} from "../schemas/join-group.schema";

import { useJoinGroup } from "../hooks/useJoinGroup";

export default function JoinGroup() {
  const router = useRouter();

  const joinMutation = useJoinGroup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinGroupInput>({
    resolver: zodResolver(joinGroupSchema),
  });

  const onSubmit = (
    data: JoinGroupInput
  ) => {
    joinMutation.mutate(data, {
      onSuccess(response) {
        router.push(
          `/add-members?groupId=${response.groupId}&join=true`
        );
      },

      onError(error: any) {
        alert(
          error.response?.data?.message ??
            "Invalid Invite Code"
        );
      },
    });
  };

  return (
    <main className="min-h-screen flex justify-center bg-[#F7F4FF] py-8">
      <div className="w-full max-w-md rounded-[35px] bg-white shadow-xl">

        {/* Header */}

        <div className="flex items-center px-6 py-5">

          <ArrowLeft
            className="cursor-pointer"
            onClick={() => router.back()}
          />

          <h1 className="flex-1 text-center text-xl font-bold">
            Join Existing Group
          </h1>

          <div className="w-6" />

        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 px-6 pb-8"
        >

          <div className="rounded-3xl bg-violet-50 py-8 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-violet-500">

              <Home
                className="text-white"
                size={36}
              />

            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Join Existing Group
            </h2>

            <p className="mt-2 text-gray-500">
              Enter the invite code shared by your roommate.
            </p>

          </div>

          <div>

            <label className="mb-2 block font-semibold">
              Invite Code
            </label>

            <input
              {...register("inviteCode")}
              placeholder="ABC123"
              className="w-full rounded-xl border border-gray-200 p-4 uppercase outline-none focus:border-violet-500"
            />

            {errors.inviteCode && (
              <p className="mt-2 text-sm text-red-500">
                {errors.inviteCode.message}
              </p>
            )}

          </div>

          <button
            type="submit"
            disabled={joinMutation.isPending}
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 py-4 font-semibold text-white"
          >
            {joinMutation.isPending
              ? "Checking..."
              : "Continue"}
          </button>

        </form>

      </div>
    </main>
  );
}