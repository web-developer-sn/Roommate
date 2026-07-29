"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";

interface Member {
  _id: string;
  name: string;
}

export default function TestPage() {
  const [groupId, setGroupId] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    const gid = localStorage.getItem("groupId") ?? "";

    setGroupId(gid);

    if (!gid) return;

    fetchMembers(gid);
  }, []);

  async function fetchMembers(groupId: string) {
    try {
      const res = await api.get(
        `/groups/${groupId}/members`
      );

      setMembers(res.data.members);
    } catch (error) {
      console.error(error);
    }
  }

  function toggleMember(memberId: string) {
    setSelectedMembers((prev) =>
      prev.includes(memberId)
        ? prev.filter((id) => id !== memberId)
        : [...prev, memberId]
    );
  }

  async function handleSubmit() {
    try {
      const res = await api.post(
        `/groups/${groupId}/expenses`,
        {
          title,
          amount: Number(amount),
          paidBy,
          splitBetween: selectedMembers,
        }
      );

      setResponse(res.data);

      alert("Expense Added");
    } catch (error: any) {
      console.log(error.response?.data);

      setResponse(error.response?.data);
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-xl space-y-6 rounded-lg border p-6">

      <h1 className="text-2xl font-bold">
        Expense API Test
      </h1>

      <input
        className="w-full rounded border p-2"
        placeholder="Expense Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        className="w-full rounded border p-2"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <div>
        <label className="mb-2 block font-semibold">
          Paid By
        </label>

        <select
          value={paidBy}
          onChange={(e) =>
            setPaidBy(e.target.value)
          }
          className="w-full rounded border p-2"
        >
          <option value="">
            Select Member
          </option>

          {members.map((member) => (
            <option
              key={member._id}
              value={member._id}
            >
              {member.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Split Between
        </label>

        {members.map((member) => (
          <label
            key={member._id}
            className="flex gap-2"
          >
            <input
              type="checkbox"
              checked={selectedMembers.includes(
                member._id
              )}
              onChange={() =>
                toggleMember(member._id)
              }
            />

            {member.name}
          </label>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="rounded bg-violet-600 px-6 py-3 text-white"
      >
        Create Expense
      </button>

      {response && (
        <pre className="overflow-auto rounded bg-gray-100 p-4 text-sm">
          {JSON.stringify(
            response,
            null,
            2
          )}
        </pre>
      )}
    </div>
  );
}