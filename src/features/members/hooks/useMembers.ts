import { useQuery } from "@tanstack/react-query";

import { getMembers } from "../api/member.api";

export function useMembers(groupId: string) {
  return useQuery({
    queryKey: ["members", groupId],

    queryFn: () => getMembers(groupId),

    enabled: !!groupId,
  });
}