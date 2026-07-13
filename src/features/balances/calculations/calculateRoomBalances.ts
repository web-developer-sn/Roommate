import {
  Expense,
  MemberBalance,
  Partner,
} from "../types/balance.types";

import { calculateMemberBalance } from "./calculateMemberBalance";

export function calculateRoomBalances(
  partners: Partner[],
  expenses: Expense[]
): MemberBalance[] {
  return partners.map((partner) =>
    calculateMemberBalance(partner, expenses)
  );
}