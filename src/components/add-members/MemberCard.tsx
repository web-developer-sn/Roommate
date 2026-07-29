import { MoreVertical, CheckCircle2 } from "lucide-react";

interface Member {
  _id: string;
  name: string;
}

interface Props {
  member: Member;
  selected: boolean;
  onClick: () => void;
}

function getAvatar(name: string) {
  return name.charAt(0).toUpperCase();
}

function getColor(name: string) {
  switch (name.toLowerCase()) {
    case "aman":
      return "bg-green-500";

    case "rohit":
      return "bg-blue-500";

    case "sumit":
      return "bg-orange-500";

    default:
      return "bg-violet-500";
  }
}

export default function MemberCard({
  member,
  selected,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex items-center justify-between rounded-2xl border p-4 shadow-sm transition-all
        ${
          selected
            ? "border-violet-600 bg-violet-50"
            : "border-gray-200 bg-white hover:border-violet-300"
        }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`h-12 w-12 rounded-full ${getColor(
            member.name
          )} flex items-center justify-center font-bold text-white`}
        >
          {getAvatar(member.name)}
        </div>

        <div>
          <h3 className="font-semibold">
            {member.name}
          </h3>

          <p className="text-sm text-gray-500">
            Member
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {selected ? (
          <CheckCircle2
            size={24}
            className="text-violet-600"
          />
        ) : (
          <MoreVertical
            size={20}
            className="text-gray-400"
          />
        )}
      </div>
    </div>
  );
}