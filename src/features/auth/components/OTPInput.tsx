"use client";

import { useRef, useState } from "react";

export default function OTPInput() {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    value: string,
    index: number
  ) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const paste = e.clipboardData
      .getData("text")
      .trim();

    if (!/^\d{6}$/.test(paste)) return;

    const values = paste.split("");

    setOtp(values);

    values.forEach((value, index) => {
      if (inputs.current[index]) {
        inputs.current[index]!.value = value;
      }
    });

    inputs.current[5]?.focus();
  };

  return (
    <div className="flex justify-center gap-3">

      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            inputs.current[index] = element;
          }}
          maxLength={1}
          value={digit}
          onChange={(e) =>
            handleChange(
              e.target.value,
              index
            )
          }
          onKeyDown={(e) =>
            handleBackspace(
              e,
              index
            )
          }
          onPaste={handlePaste}
          inputMode="numeric"
          className="
          h-16
          w-14
          rounded-2xl
          border
          border-gray-200
          text-center
          text-2xl
          font-bold
          outline-none
          transition
          focus:border-violet-600
          focus:ring-4
          focus:ring-violet-100
        "
        />
      ))}

    </div>
  );
}