import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-10 px-6 text-center">

      <div className="flex justify-center">
        <Image
          src="/images/room-partner.png"
          alt="Room Partner"
          width={280}
          height={280}
          priority
          className="w-full max-w-[280px] h-auto"
        />
      </div>

      <h1 className="mt-4 text-4xl font-bold text-violet-600">
        Room Partner
      </h1>

      <p className="mt-3 text-gray-500 text-lg leading-8">
        Manage shared expenses
        <br />
        with your room members
      </p>

    </section>
  );
}