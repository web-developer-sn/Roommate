"use client";

import DashboardHeader from "./DashboardHeader";
import BalanceCard from "./BalanceCard";
import StatsCard from "./StatsCard";
import RecentExpense from "./RecentExpense";
import BottomNavigation from "./BottomNavigation";

import {
  Users,
  Wallet,
  ArrowRightLeft,
} from "lucide-react";

export default function Dashboard() {
 
  return (
    <main className="min-h-screen bg-[#F7F4FF] flex justify-center py-6">

      <div className="w-full max-w-md bg-white rounded-[35px] shadow-xl overflow-hidden">

        <DashboardHeader />

        <div className="px-5">

          <BalanceCard />

          

          <div className="grid grid-cols-3 gap-3 mt-5">

            <StatsCard
              title="Members"
              value="4"
              color="blue"
              icon={<Users size={22} />}
            />

            <StatsCard
              title="Total Expenses"
              value="₹0.00"
              color="green"
              icon={<Wallet size={22} />}
            />

            <StatsCard
              title="To Settle"
              value="₹0.00"
              color="orange"
              icon={<ArrowRightLeft size={22} />}
            />

          </div>

          <RecentExpense />

        </div>

        <BottomNavigation />

      </div>

    </main>
  );
}