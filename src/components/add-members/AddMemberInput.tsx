"use client";

import { useAddMember } from "@/features/members/hooks/useAddMember";
import { useState } from "react";
import { showToast } from "../ui/toast";


interface Props {
  groupId: string;
}

export default function AddMemberInput({
  groupId,
}: Props) {
  const [name, setName] = useState("");

  const addMemberMutation = useAddMember();

  const handleAdd = () => {
    const trimmedName = name.trim();

    if (!trimmedName)
       {
        showToast.error("Member name is required", "Please enter a valid member name.");
        return;
       }
    addMemberMutation.mutate(
      {
        groupId,
        name: trimmedName,
      },
      {
        onSuccess: () => {
          setName("");
        },

        onError: (error: any) => {
          console.log(error.response?.data);
        },
      }
    );
  };

  return (
    <div>
      <label className="mb-2 block font-semibold text-gray-700">
        Add New Member
      </label>

      <div className="flex gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Enter member name"
          className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition duration-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />

        <button
          type="button"
          onClick={handleAdd}
          disabled={addMemberMutation.isPending}
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-violet-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {addMemberMutation.isPending
            ? "Adding..."
            : "Add"}
        </button>
      </div>
    </div>
  );
}