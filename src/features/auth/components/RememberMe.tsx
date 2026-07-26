"use client";

import Link from "next/link";
import { useState } from "react";

export default function RememberMe() {
  const [remember, setRemember] = useState(false);

  return (
    <div className="mt-6 flex items-center justify-between">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={remember}
          onChange={() => setRemember((prev) => !prev)}
          className="h-5 w-5 rounded border border-gray-300 accent-violet-600"
        />

        <span className="text-sm text-gray-600">
          Remember me
        </span>
      </label>

      <Link
        href="/forgot-password"
        className="text-sm font-semibold text-violet-600 transition-colors duration-200 hover:text-violet-700"
      >
        Forgot Password?
      </Link>
    </div>
  );
}