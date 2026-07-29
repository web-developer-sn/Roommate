import api from "@/lib/axios";

import { CreateExpenseInput } from "../types/expense.types";

export const createExpense = async (
  groupId: string,
  data: CreateExpenseInput
) => {
  const response = await api.post(
    `/groups/${groupId}/expenses`,
    data
  );

  return response.data;
};

export const getExpenses = async (
  groupId: string
) => {
  const response = await api.get(
    `/groups/${groupId}/expenses`
  );

  return response.data;
};