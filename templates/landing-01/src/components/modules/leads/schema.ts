import { z } from "zod";

export const leadSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().url(),
  subject: z.string(),
  activity_type: z.enum(["call", "email", "meeting", "task", "note", "message"]),
  activity_date: z.string().datetime(),
  status: z.enum(["Cold Lead", "Hot Lead", "Warm Lead"]),
  created_at: z.string().datetime(),
  source: z.enum(["Dribbble", "Instagram", "Google", "Facebook", "LinkedIn"]),
});

export type Lead = z.infer<typeof leadSchema>;

export const leadStatusColors: Record<Lead["status"], "default" | "error" | "outline" | "secondary" | "success" | "warning" | "info" > = {
  "Cold Lead": "info",    // Blue-ish
  "Hot Lead": "error", // Red
  "Warm Lead": "warning",    // Yellow/Orange
};
