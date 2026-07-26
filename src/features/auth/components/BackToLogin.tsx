"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToLogin() {
  return (
    <div className="mt-8 flex justify-center">

      <Link
        href="/login"
        className="
          flex
          items-center
          gap-2
          font-semibold
          text-violet-600
          transition
          hover:text-violet-700
        "
      >
        <ArrowLeft size={18} />

        Back to Login

      </Link>

    </div>
  );
}