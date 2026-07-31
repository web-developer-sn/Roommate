export interface CreateExpenseInput {
  category?:string,
  title: string;
  amount: number;
  paidBy: string;
  splitBetween: string[];
}