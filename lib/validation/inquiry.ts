import { z } from "zod";

export const intents = ["project", "research", "press"] as const;
export type InquiryIntent = (typeof intents)[number];

export const inquirySchema = z.object({
  intent: z.enum(intents),
  name: z.string().min(2, "Please enter your name").max(120),
  email: z.string().email("Please enter a valid email"),
  organization: z.string().max(160).optional(),
  role: z.string().max(120).optional(),
  scope: z.string().max(200).optional(),
  timeline: z.string().max(120).optional(),
  message: z.string().min(20, "A sentence or two of context, please").max(4000),
  // Honeypot — must remain empty
  website: z.string().max(0).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
