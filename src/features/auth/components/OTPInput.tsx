"use client";

import { useRef } from "react";
import {
  Control,
  useController,
} from "react-hook-form";

interface FormValues {
  otp: string;
}

interface OTPInputProps {
  control: Control<FormValues>;
}

export default function OTPInput({
  control,
}: OTPInputProps) {

  const {
    field,
  } = useController({
    name: "otp",
    control,
    rules: {
      required: "OTP is required",
      minLength: {
        value: 6,
        message: "OTP must be 6 digits",
      },
    },
  });

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const digits = Array.from(
    { length: 6 },
    (_, index) => field.value?.[index] ?? ""
  );

  const handleChange = (
    value: string,
    index: number
  ) => {
    if (!/^\d?$/.test(value)) return;

    const values = [...digits];

    values[index] = value;

    field.onChange(values.join(""));

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !digits[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    field.onChange(pasted);

    inputRefs.current[
      Math.min(pasted.length - 1, 5)
    ]?.focus();
  };

  return (
    <div className="flex justify-center gap-3">

      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          maxLength={1}
          value={digit}
          inputMode="numeric"
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
          className="h-16 w-14 rounded-2xl border border-gray-200 text-center text-2xl font-bold outline-none transition focus:border-violet-600 focus:ring-4 focus:ring-violet-100"
        />
      ))}

    </div>
  );
}