import { ShieldCheck } from "lucide-react";

export default function InfoCard() {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-violet-50 p-5">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">

        <ShieldCheck
          size={24}
          className="text-violet-600"
        />

      </div>

      <p className="text-sm leading-6 text-gray-600">
        As a host, you can add members
        <br />
        and manage the group.
      </p>

    </div>
  );
}