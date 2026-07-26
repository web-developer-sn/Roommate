"use client";

import Link from "next/link";
import { useState } from "react";

export default function TermsCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mt-6">

      <label className="flex items-start gap-3 cursor-pointer">

        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="
            mt-1
            h-5
            w-5
            rounded
            accent-violet-600
            border-gray-300
          "
        />

        <span className="text-sm text-gray-600 leading-6">

          I agree to the{" "}

          <Link
            href="/terms"
            className="font-semibold text-violet-600 hover:underline"
          >
            Terms & Conditions
          </Link>

          {" "}and{" "}

          <Link
            href="/privacy"
            className="font-semibold text-violet-600 hover:underline"
          >
            Privacy Policy
          </Link>

        </span>

      </label>

    </div>
  );
}