import { joinGroup } from "../api/join-group.api";

import { JoinGroupInput } from "../types/join-group.types";

export const joinGroupService = (
  data: JoinGroupInput
) => {
  return joinGroup(data);
};