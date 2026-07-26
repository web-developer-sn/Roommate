"use client";

import { useState } from "react";

interface Props {
  onAdd: (name: string) => void;
}

export default function AddMemberInput({
  onAdd,
}: Props) {
  const [name, setName] = useState("");

  function handleAdd() {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    onAdd(trimmedName);

    setName("");
  }

  return (
    <div>
      <label className="mb-2 block font-semibold text-gray-700">
        Add New Member
      </label>

      <div className="flex gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter member name"
          className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition duration-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />

        <button
          type="button"
          onClick={handleAdd}
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-violet-700 active:scale-95"
        >
          Add
        </button>
      </div>
    </div>
  );
}