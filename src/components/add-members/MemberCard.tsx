import {
  MoreVertical,
} from "lucide-react";

interface Member {

  id: number;

  name: string;

  host: boolean;

}

interface Props {

  member: Member;

}

function getAvatar(name: string) {

  return name.charAt(0).toUpperCase();

}

function getColor(name: string, host: boolean) {
  if (host) return "bg-violet-500";

  switch (name.toLowerCase()) {
    case "aman":
      return "bg-green-500";

    case "rohit":
      return "bg-blue-500";

    case "sumit":
      return "bg-orange-500";

    default:
      return "bg-pink-500";
  }
}

export default function MemberCard({
  member,
}: Props) {

  return (
    <div className="flex items-center justify-between rounded-2xl border bg-white p-4 shadow-sm">

      <div className="flex items-center gap-4">

        <div
          className={`h-12 w-12 rounded-full ${getColor(
            member.name,
            member.host
          )} flex items-center justify-center text-white font-bold`}
        >
          {getAvatar(member.name)}
        </div>

        <div>

          <h3 className="font-semibold">

            {member.name}

            {member.host && " (You)"}

          </h3>

        </div>

      </div>

      <div className="flex items-center gap-3">

        {member.host ? (
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            Host
          </span>
        ) : (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Member
          </span>
        )}

        <MoreVertical
          size={20}
          className="cursor-pointer text-gray-500"
        />

      </div>

    </div>
  );
}