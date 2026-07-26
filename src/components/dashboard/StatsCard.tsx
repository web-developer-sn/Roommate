import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color: "blue" | "green" | "orange";
}

const colors = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
};

export default function StatsCard({
  title,
  value,
  icon,
  color,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-lg transition">

      <div
        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${colors[color].bg} ${colors[color].text}`}
      >
        {icon}
      </div>

      <h2 className="mt-4 text-center text-2xl font-bold">
        {value}
      </h2>

      <p className="mt-1 text-center text-sm text-gray-500">
        {title}
      </p>

    </div>
  );
}