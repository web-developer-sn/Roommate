import api from "@/lib/axios";

export interface CreateGroupPayload {
  name: string;
  description?: string;
}

export const createGroup = async (
  data: CreateGroupPayload
) => {
  const response = await api.post(
    "/groups",
    data
  );

  return response.data;
};