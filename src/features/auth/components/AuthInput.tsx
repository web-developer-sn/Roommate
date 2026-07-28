"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface AuthInputProps {
  label: string;
  placeholder: string;
  type: "email" | "password" | "text";
  register?:UseFormRegisterReturn;
  error?:string;
}

export default function AuthInput({
  label,
  placeholder,
  type,
  register,
  error
}: AuthInputProps) {
  const [showPassword, setShowPassword] =
    useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <div className="relative">

        {/* Left Icon */}

        <div className="absolute left-4 top-1/2 -translate-y-1/2">

          {type === "email" ? (
            <Mail
              size={20}
              className="text-gray-400"
            />
          ) : (
            <Lock
              size={20}
              className="text-gray-400"
            />
          )}

        </div>

        <input
        {...register}
          type={inputType}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-12 text-gray-800 outline-none transition duration-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />

        {/* Eye Button */}

        {type === "password" && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}

      </div>

    </div>
  );
}