import {
  Expense,
  MemberBalance,
  Partner,
} from "../types/balance.types";

export function calculateMemberBalance(
  partner: Partner,
  expenses: Expense[]
): MemberBalance {
  let totalPaidPaise = 0;
  let actualSharePaise = 0;

  for (const expense of expenses) {
    // Check if this partner paid for the expense
    if (expense.paidByUserId === partner.id) {
      totalPaidPaise += expense.amountPaise;
    }

    // Find this partner's share in the expense
    const partnerSplit = expense.splits.find(
      (split) => split.userId === partner.id
    );

    if (partnerSplit) {
      actualSharePaise += partnerSplit.shareAmountPaise;
    }
  }

  const netBalancePaise =
    totalPaidPaise - actualSharePaise;

  return {
    userId: partner.id,
    name: partner.name,
    totalPaidPaise,
    actualSharePaise,
    netBalancePaise,
  };
}