"use client";

import { ArrowLeft, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import FormInput from "./FormInput";
import InfoCard from "./InfoCard";
import { useCreateGroup } from "@/features/groups/hooks/useCreateGroup";

interface CreateGroupForm {
  name: string;
  description: string;
}

export default function CreateGroup() {
  const router = useRouter();

  const createGroupMutation = useCreateGroup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGroupForm>();

  const onSubmit = (data: CreateGroupForm) => {
    createGroupMutation.mutate(data, {
      onSuccess: (response) => {
        const group = response.group;

        localStorage.setItem("inviteCode", group.inviteCode);

        router.push(`/add-members?groupId=${group._id}`);
      },
      onError: (error: any) => {
        console.log(error.response?.data);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <main className="min-h-screen flex items-center justify-center bg-[#F7F4FF] py-8">
        <div className="w-full max-w-md overflow-hidden rounded-[35px] bg-white shadow-xl">
          {/* Header */}

          <div className="flex items-center px-6 py-5">
            <ArrowLeft
              className="cursor-pointer"
              onClick={() => router.back()}
            />

            <h1 className="flex-1 text-center text-xl font-bold">
              Create New Group
            </h1>

            <div className="w-6" />
          </div>

          {/* Card */}

          <div className="mx-5 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-violet-500">
                <Users size={38} className="text-white" />
              </div>
            </div>

            <h2 className="mt-6 text-center text-3xl font-bold">
              Create Your Group
            </h2>

            <p className="mt-3 text-center leading-7 text-gray-500">
              Add some basic details to get started.
            </p>

            <div className="mt-8 space-y-6">
              <FormInput
                label="Room / Group Name"
                placeholder="Flat A-203"
                register={register("name", {
                  required: "Group Name Required",
                })}
                error={errors.name?.message}
              />

              <FormInput
                label="Description"
                placeholder="3 BHK Flat"
                register={register("description")}
                error={errors.description?.message}
              />
            </div>

            <button
              type="submit"
              disabled={createGroupMutation.isPending}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 py-4 font-semibold text-white"
            >
              {createGroupMutation.isPending ? "Creating..." : "Create Group"}
            </button>
          </div>

          <div className="px-5 pb-8 pt-5">
            <InfoCard />
          </div>
        </div>
      </main>
    </form>
  );
}
