import api from "@/lib/axios";

export const getMembers = async (
  groupId: string
) => {
  const response = await api.get(
    `/groups/${groupId}/members`
  );

  return response.data;
};

export const addMember = async (
  groupId: string,
  name: string
) => {
  const response = await api.post(
    `/groups/${groupId}/members`,
    {
      name,
    }
  );

  return response.data;
};