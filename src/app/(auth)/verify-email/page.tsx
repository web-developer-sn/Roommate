"use client";

import VerifyEmail from "@/features/auth/components/VerifyEmail";
import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmail />
    </Suspense>
  );
}