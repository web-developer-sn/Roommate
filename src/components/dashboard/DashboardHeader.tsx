import { Bell, Menu, ChevronDown } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-6">

      <button className="rounded-lg p-2 hover:bg-gray-100">
        <Menu size={24} />
      </button>

      <div className="flex items-center gap-1">

        <h2 className="text-xl font-bold">
          Flat A-203
        </h2>

        <ChevronDown size={18} />

      </div>

      <button className="rounded-lg p-2 hover:bg-gray-100">
        <Bell size={22} />
      </button>

    </header>
  );
}