import api from "@/lib/axios";

import {
  JoinGroupInput,
  JoinGroupResponse,
} from "../types/join-group.types";

export const joinGroup = async (
  data: JoinGroupInput
): Promise<JoinGroupResponse> => {
  const { data: response } = await api.post<JoinGroupResponse>(
    "/groups/join",
    data
  );

  return response;
};