"use client";

import { FormEvent, useState } from "react";

import {
  Expense,
  ExpensePartner,
} from "../types/expense.types";

import { calculateExpenseSplit } from "../calculations/calculateExpenseSplit";

import { PURCHASE_CATEGORIES } from "../constants/purchaseCategories";

import SplitSelector from "./SplitSelector";

interface AddExpenseFormProps {
  partners: ExpensePartner[];
  onExpenseAdd: (expense: Expense) => void;
}

export default function AddExpenseForm({
  partners,
  onExpenseAdd,
}: AddExpenseFormProps) {
  const [selectedItem, setSelectedItem] =
    useState("");

  const [customItemName, setCustomItemName] =
    useState("");

  const [amount, setAmount] = useState("");

  const [paidByUserId, setPaidByUserId] =
    useState("");

  const [selectedUserIds, setSelectedUserIds] =
    useState<string[]>([]);

  const [error, setError] = useState("");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    const amountRupees = Number(amount);

    if (!selectedItem) {
      setError("Please select a purchase item.");
      return;
    }

    if (
      selectedItem === "Other" &&
      !customItemName.trim()
    ) {
      setError("Please enter the custom item name.");
      return;
    }

    if (
      !Number.isFinite(amountRupees) ||
      amountRupees <= 0
    ) {
      setError("Please enter a valid amount.");
      return;
    }

    if (!paidByUserId) {
      setError("Please select who paid.");
      return;
    }

    if (selectedUserIds.length === 0) {
      setError(
        "Please select at least one partner for splitting."
      );
      return;
    }

    const amountPaise = Math.round(
      amountRupees * 100
    );

    const splits = calculateExpenseSplit(
      amountPaise,
      selectedUserIds
    );

    const finalItemName =
      selectedItem === "Other"
        ? customItemName.trim()
        : selectedItem;

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      itemName: finalItemName,
      amountPaise,
      paidByUserId,
      purchaseDate: new Date()
        .toISOString()
        .split("T")[0],
      splits,
    };

    onExpenseAdd(newExpense);

    // Reset form
    setSelectedItem("");
    setCustomItemName("");
    setAmount("");
    setPaidByUserId("");
    setSelectedUserIds([]);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border p-5 shadow-sm"
    >
      <h2 className="text-xl font-bold">
        Add Purchase
      </h2>

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block font-medium">
          What did you purchase?
        </label>

        <select
          value={selectedItem}
          onChange={(event) =>
            setSelectedItem(event.target.value)
          }
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select Item
          </option>

          {PURCHASE_CATEGORIES.map(
            (category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            )
          )}
        </select>
      </div>

      {selectedItem === "Other" && (
        <div>
          <label className="mb-2 block font-medium">
            Custom Item Name
          </label>

          <input
            type="text"
            value={customItemName}
            onChange={(event) =>
              setCustomItemName(
                event.target.value
              )
            }
            placeholder="Enter item name"
            className="w-full rounded-lg border p-3"
          />
        </div>
      )}

      <div>
        <label className="mb-2 block font-medium">
          Amount
        </label>

        <input
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(event) =>
            setAmount(event.target.value)
          }
          placeholder="Enter amount in ₹"
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Purchased By
        </label>

        <select
          value={paidByUserId}
          onChange={(event) =>
            setPaidByUserId(event.target.value)
          }
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select Partner
          </option>

          {partners.map((partner) => (
            <option
              key={partner.id}
              value={partner.id}
            >
              {partner.name}
            </option>
          ))}
        </select>
      </div>

      <SplitSelector
        partners={partners}
        selectedUserIds={selectedUserIds}
        onChange={setSelectedUserIds}
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white"
      >
        Add Purchase
      </button>
    </form>
  );
}