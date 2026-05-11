"use server";

import { inquirySchema, type InquiryInput } from "@/lib/validation/inquiry";

export type SubmitResult =
  | { ok: true }
  | { ok: false; errors?: Partial<Record<keyof InquiryInput, string>>; message?: string };

export async function submitInquiry(input: InquiryInput): Promise<SubmitResult> {
  const parsed = inquirySchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    const errors: Partial<Record<keyof InquiryInput, string>> = {};
    for (const [k, msgs] of Object.entries(fieldErrors)) {
      if (msgs && msgs[0]) errors[k as keyof InquiryInput] = msgs[0];
    }
    return { ok: false, errors, message: "Please fix the highlighted fields." };
  }

  // Honeypot: silently succeed on bot submissions.
  if (parsed.data.website && parsed.data.website.length > 0) {
    return { ok: true };
  }

  // Phase 2: log + return success.
  // Phase 3 wires Resend (transactional email) + Sanity write (audit trail).
  console.log("[inquiry]", {
    at: new Date().toISOString(),
    intent: parsed.data.intent,
    name: parsed.data.name,
    email: parsed.data.email,
    organization: parsed.data.organization,
  });

  return { ok: true };
}
