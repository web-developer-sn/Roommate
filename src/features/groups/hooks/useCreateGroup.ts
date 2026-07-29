import { useMutation } from "@tanstack/react-query";

import {
  createGroup,
  CreateGroupPayload,
} from "../api/group.api";

export function useCreateGroup() {
  return useMutation({
    mutationFn: (
      data: CreateGroupPayload
    ) => createGroup(data),
  });
}