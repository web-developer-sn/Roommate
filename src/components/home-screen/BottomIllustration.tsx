import {
  Sofa,
  LampFloor,
  Flower2,
} from "lucide-react";

export default function FooterIllustration() {
  return (
    <section className="mt-14 pb-10 text-center">

      <div className="flex justify-center gap-8 text-violet-300">

        <Flower2 size={45} />

        <LampFloor size={45} />

        <Sofa size={55} />

      </div>

      <p className="mt-8 text-gray-500 text-lg leading-8">
        Keep everything clear.
        <br />
        Split expenses. Settle easily.
      </p>

    </section>
  );
}