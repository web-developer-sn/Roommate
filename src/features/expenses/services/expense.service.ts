import {
  createExpense,
  getExpenses,
} from "../api/expense.api";
import { CreateExpenseInput } from "../types/expense.types";



export const addExpenseService = (
  groupId: string,
  data: CreateExpenseInput
) => {
  return createExpense(groupId, data);
};

export const getExpensesService = (
  groupId: string
) => {
  return getExpenses(groupId);
};