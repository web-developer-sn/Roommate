import Image from "next/image";

export default function ForgotPasswordHero() {
  return (
    <div className="mt-8 flex justify-center">

      <Image
        src="/images/forgot-password.png"
        alt="Forgot Password"
        width={280}
        height={240}
        priority
        className="h-auto w-full max-w-[280px] object-contain"
      />

    </div>
  );
}