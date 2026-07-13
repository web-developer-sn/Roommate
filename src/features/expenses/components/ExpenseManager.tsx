"use client";

import { useState } from "react";

import AddExpenseForm from "./AddExpenseForm";

import {
  Expense,
  ExpensePartner,
} from "../types/expense.types";

const partners: ExpensePartner[] = [
  {
    id: "1",
    name: "Rahul",
  },
  {
    id: "2",
    name: "Aman",
  },
  {
    id: "3",
    name: "Rohit",
  },
  {
    id: "4",
    name: "Sumit",
  },
];

export default function ExpenseManager() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  function handleExpenseAdd(newExpense: Expense) {
    setExpenses((previousExpenses) => [
      ...previousExpenses,
      newExpense,
    ]);

    console.log("New Expense:", newExpense);
  }

  return (
    <div>
      <AddExpenseForm
        partners={partners}
        onExpenseAdd={handleExpenseAdd}
      />

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">
          Added Expenses
        </h2>

        {expenses.length === 0 ? (
          <p className="text-gray-500">
            No expenses added yet.
          </p>
        ) : (
          <div className="space-y-3">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="rounded-xl border p-4"
              >
                <h3 className="font-semibold">
                  {expense.itemName}
                </h3>

                <p>
                  Amount: ₹
                  {(expense.amountPaise / 100).toFixed(2)}
                </p>

                <p>
                  Paid By:{" "}
                  {
                    partners.find(
                      (partner) =>
                        partner.id ===
                        expense.paidByUserId
                    )?.name
                  }
                </p>

                <p>
                  Split between:{" "}
                  {expense.splits.length} partners
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}