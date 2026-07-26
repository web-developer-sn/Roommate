import { z } from "zod";

export const createGroupSchema = z.object({
  roomName: z
    .string()
    .min(3, "Room name must be at least 3 characters")
    .max(50),

  hostName: z
    .string()
    .min(2, "Host name must be at least 2 characters")
    .max(30),
});

export type CreateGroupInput = z.infer<typeof createGroupSchema>;