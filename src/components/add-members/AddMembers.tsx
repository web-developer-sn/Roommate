"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import GroupHeader from "./GroupHeader";
import AddMemberInput from "./AddMemberInput";
import MemberCard from "./MemberCard";
import {useRouter} from "next/navigation";
export default function AddMembers() {
  
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Rahul",
      host: true,
    },
    {
      id: 2,
      name: "Aman",
      host: false,
    },
    {
      id: 3,
      name: "Rohit",
      host: false,
    },
    {
      id: 4,
      name: "Sumit",
      host: false,
    },
  ]);

  function addMember(name: string) {
    if (!name.trim()) return;

    setMembers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        host: false,
      },
    ]);
  }
const router=useRouter();
const handleContinue=()=>{
  router.push("/dashboard");
}
  return (
    <main className="min-h-screen bg-[#F7F4FF] flex justify-center py-8">

      <div className="w-full max-w-md rounded-[35px] bg-white shadow-xl">

        <div className="flex items-center px-6 py-5">

          <ArrowLeft />

          <h1 className="flex-1 text-center text-xl font-bold">
            Add Members
          </h1>

          <div className="w-6"></div>

        </div>

        <div className="px-5">

          <GroupHeader />

          <div className="mt-8">

            <AddMemberInput
              onAdd={addMember}
            />

          </div>

          <h2 className="mt-8 mb-4 font-semibold">

            Members ({members.length})

          </h2>

          <div className="space-y-3">

            {members.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
              />
            ))}

          </div>

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