import Image from "next/image";

export default function BalanceCard() {
  return (
    <div className="mt-2 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-violet-600 to-purple-500 px-6 py-5 text-white shadow-xl">

      <div className="flex items-center justify-between">

        {/* Left Side */}
        <div className="flex-1">

          <p className="text-sm font-medium text-violet-100">
            Total Balance
          </p>

          <h1 className="mt-2 text-5xl font-bold tracking-tight">
            ₹0.00
          </h1>

          <p className="mt-2 text-sm text-violet-100">
            You are all settled up!
          </p>

        </div>

        {/* Right Side */}
        <div className="relative flex h-28 w-28 items-center justify-center">

          <Image
            src="/images/wallet.png"
            alt="Wallet"
            width={95}
            height={95}
            priority
            className="object-contain"
          />

        </div>

      </div>

    </div>
  );
}