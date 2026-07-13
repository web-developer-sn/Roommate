import BalanceTable from "@/features/balances/components/BalanceTable";

import { calculateRoomBalances } from "@/features/balances/calculations/calculateRoomBalances";

import { calculateSettlements } from "@/features/settlements/calculations/calculateSettlements";

import SettlementList from "@/features/settlements/components/SettlementList";

import {
  Expense,
  Partner,
} from "@/features/balances/types/balance.types";

export default function BalancesPage() {
  const partners: Partner[] = [
    { id: "1", name: "Rahul" },
    { id: "2", name: "Aman" },
    { id: "3", name: "Rohit" },
    { id: "4", name: "Sumit" },
  ];

  const expenses: Expense[] = [
    {
      id: "expense-1",
      itemName: "Milk",
      amountPaise: 12000,
      paidByUserId: "1",
      splits: [
        { userId: "1", shareAmountPaise: 3000 },
        { userId: "2", shareAmountPaise: 3000 },
        { userId: "3", shareAmountPaise: 3000 },
        { userId: "4", shareAmountPaise: 3000 },
      ],
    },

    {
      id: "expense-2",
      itemName: "Chicken",
      amountPaise: 60000,
      paidByUserId: "2",
      splits: [
        { userId: "1", shareAmountPaise: 20000 },
        { userId: "2", shareAmountPaise: 20000 },
        { userId: "3", shareAmountPaise: 20000 },
      ],
    },

    {
      id: "expense-3",
      itemName: "Wi-Fi",
      amountPaise: 80000,
      paidByUserId: "4",
      splits: [
        { userId: "1", shareAmountPaise: 20000 },
        { userId: "2", shareAmountPaise: 20000 },
        { userId: "3", shareAmountPaise: 20000 },
        { userId: "4", shareAmountPaise: 20000 },
      ],
    },

    {
      id: "expense-4",
      itemName: "Personal Item",
      amountPaise: 50000,
      paidByUserId: "3",
      splits: [
        { userId: "3", shareAmountPaise: 50000 },
      ],
    },
  ];

const balances = calculateRoomBalances(
  partners,
  expenses
);

const settlements = calculateSettlements(balances);

return (
  <main className="mx-auto max-w-5xl p-6">
    <h1 className="mb-6 text-2xl font-bold">
      Room Balances
    </h1>

    <BalanceTable balances={balances} />

    <div className="mt-10">
      <h2 className="mb-4 text-2xl font-bold">
        Settlement Summary
      </h2>

      <SettlementList settlements={settlements} />
    </div>
  </main>
);
}