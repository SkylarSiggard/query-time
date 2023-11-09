import { z } from "zod";

export const validationsSchemas = z.object({
  promoCode: z
    .string()
    .nonempty({ message: "Promo code is required" })
    .min(3, { message: "Promo code must be more than 3 characters" })
    .max(35, { message: "Promo code must be less than 35 characters" }),
  description: z
    .string()
    .max(250, { message: "Description must be less than 250 characters" })
    .optional(),
  isPercentage: z
    .string()
    .min(0.01, { message: "Discount amount must be greater than 0.01" }),
  amountOff: z.number().min(1, { message: "Amount must be greater than 0" }),
  applyToAll: z.string(),
  limit: z.number().min(1, { message: "Limit must be greater than 0" }),
  percentOff: z.number().optional(),
  availableBetween: z.array(z.date()),
  startTime: z.date(),
  endTime: z.date(),
});
