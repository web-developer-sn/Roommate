import { z } from "zod";

export const joinGroupSchema = z.object({
  inviteCode: z
    .string()
    .trim()
    .min(6, "Invite code is required")
    .max(6, "Invalid invite code")
    .transform((value) =>
      value.toUpperCase()
    ),
});

export type JoinGroupInput =
  z.infer<typeof joinGroupSchema>;