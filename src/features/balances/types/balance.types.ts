export interface Partner {
  id: string;
  name: string;
}
export interface ExpensePartner {
  id: string;
  name: string;
}

export interface ExpenseSplit {
  userId: string;
  shareAmountPaise: number;
}

export interface Expense {
  id: string;
  itemName: string;
  amountPaise: number;
  paidByUserId: string;
  splits: ExpenseSplit[];
}

export interface MemberBalance {
  userId: string;
  name: string;
  totalPaidPaise: number;
  actualSharePaise: number;
  netBalancePaise: number;
}