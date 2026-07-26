import Image from "next/image";
import { House } from "lucide-react";
export default function AuthHeader() {
  return (
    <div>

      {/* Logo */}

      <div className="flex items-center gap-4">

     <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-violet-500 shadow-lg">
  <House size={34} className="text-white" strokeWidth={2.5} />
</div>

        <div>

          <h1 className="text-3xl font-extrabold text-violet-700">
            RoomMate
          </h1>

          <p className="text-sm text-gray-500">
            Manage. Split. Live Better.
          </p>

        </div>

      </div>

      {/* Illustration */}

      <div className="mt-8 flex justify-center">

        <Image
          src="/images/login-hero.png"
          alt="Roommates"
          width={320}
          height={220}
          priority
          className="w-full max-w-[320px] h-auto object-contain"
        />

      </div>

    </div>
  );
}