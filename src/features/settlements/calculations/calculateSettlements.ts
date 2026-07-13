import {
  Settlement,
  SettlementMember,
} from "../types/settlement.types";

export function calculateSettlements(
  members: SettlementMember[]
): Settlement[] {
  const debtors = members
    .filter((member) => member.netBalancePaise < 0)
    .map((member) => ({
      userId: member.userId,
      name: member.name,
      amountPaise: Math.abs(member.netBalancePaise),
    }));

  const creditors = members
    .filter((member) => member.netBalancePaise > 0)
    .map((member) => ({
      userId: member.userId,
      name: member.name,
      amountPaise: member.netBalancePaise,
    }));

  const settlements: Settlement[] = [];

  while (debtors.length > 0 && creditors.length > 0) {
    // Largest debtor first
    debtors.sort(
      (a, b) => b.amountPaise - a.amountPaise
    );

    // Largest creditor first
    creditors.sort(
      (a, b) => b.amountPaise - a.amountPaise
    );

    const debtor = debtors[0];
    const creditor = creditors[0];

    const paymentAmount = Math.min(
      debtor.amountPaise,
      creditor.amountPaise
    );

    settlements.push({
      fromUserId: debtor.userId,
      fromName: debtor.name,
      toUserId: creditor.userId,
      toName: creditor.name,
      amountPaise: paymentAmount,
    });

    debtor.amountPaise -= paymentAmount;
    creditor.amountPaise -= paymentAmount;

    if (debtor.amountPaise === 0) {
      debtors.shift();
    }

    if (creditor.amountPaise === 0) {
      creditors.shift();
    }
  }

  return settlements;
}