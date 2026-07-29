import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { CreateExpenseInput } from "../types/expense.types";
import { addExpenseService } from "../services/expense.service";

interface AddExpenseVariables {
  groupId: string;
  data: CreateExpenseInput;
}

export function useAddExpense() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      groupId,
      data,
    }: AddExpenseVariables) =>
      addExpenseService(
        groupId,
        data
      ),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [
          "expenses",
          variables.groupId,
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "dashboard",
          variables.groupId,
        ],
      });
    },
  });
}