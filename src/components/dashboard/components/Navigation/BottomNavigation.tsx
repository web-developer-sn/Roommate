"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {
  Home,
  ReceiptText,
  Plus,
  Wallet,
  Settings,
} from "lucide-react";

export default function BottomNavigation() {
  const router=useRouter();
  return (
    <nav className="sticky bottom-0 mt-8 border-t bg-white px-4 py-3">

      <div className="flex items-center justify-between">

        {/* Dashboard */}

        <Link
          href="/dashboard"
          className="flex flex-col items-center text-violet-600"
        >
          <Home size={22} />

          <span className="mt-1 text-xs font-semibold">
            Dashboard
          </span>
        </Link>

        {/* Expenses */}

        <Link
          href="/expenses"
          className="flex flex-col items-center text-gray-500 hover:text-violet-600"
        >
          <ReceiptText size={22} />

          <span className="mt-1 text-xs">
            Expenses
          </span>
        </Link>

        {/* Floating Add Button */}

        <button onClick={()=>router.push("/add-expense")}
  className="-mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-700 to-violet-500 text-white shadow-xl"
>
  <Plus size={32} />
</button>

        {/* Balance */}

        <Link
          href="/balances"
          className="flex flex-col items-center text-gray-500 hover:text-violet-600"
        >
          <Wallet size={22} />

          <span className="mt-1 text-xs">
            Balances
          </span>
        </Link>

        {/* Settings */}

        <Link
          href="/settings"
          className="flex flex-col items-center text-gray-500 hover:text-violet-600"
        >
          <Settings size={22} />

          <span className="mt-1 text-xs">
            Settings
          </span>
        </Link>

      </div>

    </nav>
  );
}