import { z } from "zod";

export const verifyEmailSchema = z.object({
  email: z.email("Invalid email"),

  otp: z
    .string()
    .length(6, "OTP must be 6 digits"),
});

export type VerifyEmailInput = z.infer<
  typeof verifyEmailSchema
>;