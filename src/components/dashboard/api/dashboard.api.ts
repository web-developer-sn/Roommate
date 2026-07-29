import api from "@/lib/axios";

export const getDashboard = async (
  groupId: string,
  memberId: string
) => {
  const response = await api.get("/dashboard", {
    params: {
      groupId,
      memberId,
    },
  });

  return response.data;
};