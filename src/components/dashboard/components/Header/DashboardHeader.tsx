import { Bell, Menu, ChevronDown } from "lucide-react";

interface DashboardHeaderProps {
  group: {
    _id: string;
    name: string;
  };

  currentMember: {
    _id: string;
    name: string;
  };
}

export default function DashboardHeader({
  group,
  currentMember,
}: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-6">

      <button className="rounded-lg p-2 hover:bg-gray-100">
        <Menu size={24} />
      </button>

      <div className="text-center">

        <div className="flex items-center justify-center gap-1">

          <h2 className="text-xl font-bold">
            {group.name}
          </h2>

          <ChevronDown size={18} />

        </div>

        <p className="text-xs text-gray-500">
          {currentMember.name}
        </p>

      </div>

      <button className="rounded-lg p-2 hover:bg-gray-100">
        <Bell size={22} />
      </button>

    </header>
  );
}