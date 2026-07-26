"use client";

import { ArrowLeft, Users } from "lucide-react";
import { useRouter } from "next/navigation";

import FormInput from "./FormInput";
import InfoCard from "./InfoCard";

export default function CreateGroup() {
 
  const router = useRouter();
  
 const createGroup = () => {
  console.log("Button Clicked");
  router.push("/add-members");
};

  return (
    <main className="min-h-screen bg-[#F7F4FF] flex justify-center items-center py-8">
      <div className="w-full max-w-md rounded-[35px] bg-white shadow-xl overflow-hidden">

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
              <Users
                className="text-white"
                size={38}
              />
            </div>
          </div>

          <h2 className="mt-6 text-center text-3xl font-bold">
            Create Your Group
          </h2>

          <p className="mt-3 text-center text-gray-500 leading-7">
            Add some basic details to get started with your group.
          </p>

          <div className="mt-8 space-y-6">

            <FormInput
              label="Room / Group Name"
              placeholder="e.g. Flat A-203"
            />

            <FormInput
              label="Your Name (Host)"
              placeholder="e.g. Rahul"
            />

          </div>

          <button
            onClick={createGroup}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 py-4 font-semibold text-white transition hover:scale-[1.02]"
          >
            Create Group
          </button>

        </div>

        <div className="px-5 pb-8 pt-5">
          <InfoCard />
        </div>

      </div>
    </main>
  );
}