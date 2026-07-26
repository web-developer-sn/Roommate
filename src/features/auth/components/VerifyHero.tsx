import Image from "next/image";

export default function VerifyHero() {
  return (
    <div className="mt-8 flex justify-center">

      <Image
        src="/images/verify-email.png"
        alt="Verify Email"
        width={280}
        height={240}
        priority
        className="h-auto w-full max-w-[280px] object-contain"
      />

    </div>
  );
}