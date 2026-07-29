"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Wallet,
  ArrowRightLeft,
} from "lucide-react";

import DashboardHeader from "./Header/DashboardHeader";
import BalanceCard from "./Balance/BalanceCard";
import StatsCard from "./Stats/StatsCard";
import RecentExpense from "./Expenses/RecentExpense";
import BottomNavigation from "./Navigation/BottomNavigation";

import { useDashboard } from "../hooks/useDashboard";

export default function Dashboard() {
  const [groupId, setGroupId] =
    useState("");

  const [memberId, setMemberId] =
    useState("");

  useEffect(() => {
    setGroupId(
      localStorage.getItem("groupId") ?? ""
    );

    setMemberId(
      localStorage.getItem("memberId") ?? ""
    );
  }, []);

  const { data, isLoading } =
    useDashboard(groupId, memberId);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        No Data Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F4FF] flex justify-center py-6">
      <div className="w-full max-w-md overflow-hidden rounded-[35px] bg-white shadow-xl">

        <DashboardHeader
          group={data.group}
          currentMember={data.currentMember}
        />

        <div className="px-5">

          <BalanceCard
            balance={
              data.summary.totalBalance
            }
          />

          <div className="mt-5 grid grid-cols-3 gap-3">

            <StatsCard
              title="Members"
              value={String(
                data.summary.memberCount
              )}
              color="blue"
              icon={<Users size={22} />}
            />

            <StatsCard
              title="Total Expense"
              value={`₹${data.summary.totalExpense}`}
              color="green"
              icon={<Wallet size={22} />}
            />

            <StatsCard
              title="To Settle"
              value={`₹${data.summary.toSettle}`}
              color="orange"
              icon={
                <ArrowRightLeft
                  size={22}
                />
              }
            />

          </div>

          <RecentExpense
            expenses={
              data.recentExpenses
            }
          />

        </div>

        <BottomNavigation />

      </div>
    </main>
  );
}