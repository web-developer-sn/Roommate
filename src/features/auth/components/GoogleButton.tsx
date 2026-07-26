"use client";

import Image from "next/image";

interface GoogleButtonProps {
  onClick?: () => void;
}

export default function GoogleButton({
  onClick,
}: GoogleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white py-4 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-violet-300 hover:shadow-md active:scale-[0.98]"
    >
      <Image
        src="/images/google.svg"
        alt="Google"
        width={24}
        height={24}
      />

      <span>Continue with Google</span>
    </button>
  );
}