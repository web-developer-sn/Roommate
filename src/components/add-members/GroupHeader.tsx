import { Home } from "lucide-react";

export default function GroupHeader() {
  return (
    <div className="rounded-3xl bg-violet-50 py-8 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-violet-500">

        <Home className="text-white" size={36} />

      </div>

      <h2 className="mt-5 text-3xl font-bold">
        Flat A-203
      </h2>

      <p className="mt-2 text-gray-500">
        Host: Rahul
      </p>

    </div>
  );
}