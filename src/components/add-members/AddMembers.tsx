"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import GroupHeader from "./GroupHeader";
import AddMemberInput from "./AddMemberInput";
import MemberCard from "./MemberCard";
import { useMembers } from "@/features/members/hooks/useMembers";
import { showToast } from "../ui/toast";




export default function AddMembers() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const groupId = searchParams.get("groupId") ?? "";

  const { data, isLoading } = useMembers(groupId);

  const members = data?.members ?? [];

  const [selectedMember, setSelectedMember] =
    useState("");

  const handleContinue = () => {
    console.log("Button Clicked");

  if (!selectedMember) {
    showToast.error(
      "Member Required",
      "You must select yourself as a member."
    );

    return;
  }

    localStorage.setItem(
      "groupId",
      groupId
    );

    localStorage.setItem(
      "memberId",
      selectedMember
    );

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#F7F4FF] flex justify-center py-8">
      <div className="w-full max-w-md rounded-[35px] bg-white shadow-xl">
        <div className="flex items-center px-6 py-5">
          <ArrowLeft 
            className="cursor-pointer"
            onClick={() => router.back()}
          />

          <h1 className="flex-1 text-center text-xl font-bold">
            Add Members
          </h1>

          <div className="w-6" />
        </div>

        <div className="px-5">
          <GroupHeader />

          <div className="mt-8">
            <AddMemberInput
              groupId={groupId}
            />
          </div>

          <h2 className="mt-8 mb-4 font-semibold">
            Members ({members.length})
          </h2>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="space-y-3">
              {members.map((member: any) => (
                <MemberCard
                  key={member._id}
                  member={member}
                  selected={
                    selectedMember ===
                    member._id
                  }
                  onClick={() =>
                    setSelectedMember(
                      member._id
                    )
                  }
                />
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={handleContinue}
            className="mt-8 mb-8 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue to Dashboard

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}