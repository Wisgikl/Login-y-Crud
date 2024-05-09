import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(6, {
      message: "Title must be at least 6 characters",
    }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(6, {
      message: "Description must be at least 6 characters",
    }),
  date: z.string().datetime().optional(),
});
