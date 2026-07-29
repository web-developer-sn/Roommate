import { useQuery } from "@tanstack/react-query";

import { fetchDashboard } from "../services/dashboard.service";

export function useDashboard(
  groupId: string,
  memberId: string
) {
  return useQuery({
    queryKey: [
      "dashboard",
      groupId,
      memberId,
    ],

    queryFn: () =>
      fetchDashboard(
        groupId,
        memberId
      ),

    enabled:
      !!groupId &&
      !!memberId,
  });
}