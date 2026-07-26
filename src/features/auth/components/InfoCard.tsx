import { ShieldCheck } from "lucide-react";

export default function InfoCard() {
  return (
    <div className="mt-8 rounded-3xl bg-violet-50 p-5">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">

          <ShieldCheck
            size={26}
            className="text-violet-600"
          />

        </div>

        <p className="text-sm leading-6 text-gray-600">

          We'll send a password reset link to
          your email.

          Please check your inbox and spam
          folder.

        </p>

      </div>

    </div>
  );
}