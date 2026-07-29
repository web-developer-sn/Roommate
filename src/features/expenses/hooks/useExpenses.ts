import { useQuery } from "@tanstack/react-query";

import { getExpensesService } from "../services/expense.service";

export function useExpenses(
  groupId: string
) {
  return useQuery({
    queryKey: [
      "expenses",
      groupId,
    ],

    queryFn: () =>
      getExpensesService(groupId),

    enabled: !!groupId,
  });
}