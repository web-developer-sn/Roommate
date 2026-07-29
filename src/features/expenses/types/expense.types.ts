export interface CreateExpenseInput {
  title: string;
  amount: number;
  paidBy: string;
  splitBetween: string[];
}