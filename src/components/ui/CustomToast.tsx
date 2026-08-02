

"use client";

import {
  CheckCircle2,
  AlertCircle,
  Info,
  TriangleAlert,
} from "lucide-react";

type ToastProps = {
  title: string;
  message?: string;
  type: "success" | "error" | "info" | "warning";
};

const styles = {
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    icon: "text-emerald-600",
    title: "text-emerald-900",
    msg: "text-emerald-700",
    Icon: CheckCircle2,
  },

  error: {
    bg: "bg-red-50",
    border: "border-red-300",
    icon: "text-red-600",
    title: "text-red-900",
    msg: "text-red-700",
    Icon: AlertCircle,
  },

  info: {
    bg: "bg-sky-50",
    border: "border-sky-300",
    icon: "text-sky-600",
    title: "text-sky-900",
    msg: "text-sky-700",
    Icon: Info,
  },

  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    icon: "text-yellow-600",
    title: "text-yellow-900",
    msg: "text-yellow-700",
    Icon: TriangleAlert,
  },
};

export default function CustomToast({
  title,
  message,
  type,
}: ToastProps) {
  const item = styles[type];

  return (
    <div
      className={`flex items-start gap-4 p-5 rounded-2xl border ${item.border} ${item.bg}`}
    >
      <div className="rounded-full bg-white p-2 shadow">
        <item.Icon className={`h-6 w-6 ${item.icon}`} />
      </div>

      <div className="flex-1">
        <h4 className={`font-semibold ${item.title}`}>
          {title}
        </h4>

        {message && (
          <p className={`mt-1 text-sm ${item.msg}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}