import Image from "next/image";

export default function RegisterHero() {
  return (
    <div className="px-6">

      <p className="text-center text-gray-500">
        Create your account to get started
      </p>

      <div className="mt-6 flex justify-center">

        <Image
          src="/images/register-hero.png"
          alt="Register Hero"
          width={280}
          height={220}
          priority
          className="h-auto w-full max-w-[280px] object-contain"
        />

      </div>

    </div>
  );
}