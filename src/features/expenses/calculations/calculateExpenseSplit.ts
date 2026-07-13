import { ExpenseSplit } from "../types/expense.types";

export function calculateExpenseSplit(
  amountPaise: number,
  userIds: string[]
): ExpenseSplit[] {
  if (amountPaise <= 0) {
    throw new Error("Expense amount must be greater than zero.");
  }

  if (userIds.length === 0) {
    throw new Error(
      "At least one partner must be selected for splitting."
    );
  }

  const baseShare = Math.floor(
    amountPaise / userIds.length
  );

  let remainingPaise =
    amountPaise - baseShare * userIds.length;

  return userIds.map((userId) => {
    let shareAmountPaise = baseShare;

    if (remainingPaise > 0) {
      shareAmountPaise += 1;
      remainingPaise -= 1;
    }

    return {
      userId,
      shareAmountPaise,
    };
  });
}