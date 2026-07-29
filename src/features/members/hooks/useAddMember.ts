import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { addMember } from "../api/member.api";

export function useAddMember() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      groupId,
      name,
    }: {
      groupId: string;
      name: string;
    }) => addMember(groupId, name),

    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: ["members", variables.groupId],
      });
    },
  });
}