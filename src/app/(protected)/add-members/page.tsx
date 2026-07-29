"use client";

import { Suspense } from "react";
import AddMembers from "@/components/add-members/AddMembers";

function AddMembersContent() {
  return <AddMembers />;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddMembersContent />
    </Suspense>
  );
}