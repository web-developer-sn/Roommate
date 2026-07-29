import { getDashboard } from "../api/dashboard.api";

export const fetchDashboard = async (
  groupId: string,
  memberId: string
) => {
  return getDashboard(groupId, memberId);
};