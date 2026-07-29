import { z } from "zod";

export const createMemberSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Member name is required")
    .max(50, "Maximum 50 characters"),
});

export type CreateMemberInput = z.infer<
  typeof createMemberSchema
>;