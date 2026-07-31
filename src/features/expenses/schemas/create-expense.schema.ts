import { z } from "zod";

export const createExpenseSchema = z.object({
  category:z
  .string()
 .min(1, "Please select  Category"),
  title: z
    .string()
    .trim(),
    // .min(2, "Expense name is required"),

  amount: z
    .number()
    .positive("Amount must be greater than 0"),

  paidBy: z
    .string()
    .min(1, "Please select who paid"),

  splitBetween: z
    .array(z.string())
    .min(1, "Select at least one member"),
});

export type CreateExpenseInput = z.infer<
  typeof createExpenseSchema
>;