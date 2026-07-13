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
  purchaseDate: string;
  splits: ExpenseSplit[];
}

export interface CreateExpenseInput {
  itemName: string;
  amountPaise: number;
  paidByUserId: string;
  purchaseDate: string;
  splitBetweenUserIds: string[];
}