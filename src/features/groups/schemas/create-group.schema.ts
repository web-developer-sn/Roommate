import { z } from "zod";

export const createGroupSchema =
  z.object({
    name: z
      .string()
      .trim()
      .min(2)
      .max(50),

    description: z
      .string()
      .trim()
      .optional(),
  });

export type CreateGroupInput =
  z.infer<
    typeof createGroupSchema
  >;