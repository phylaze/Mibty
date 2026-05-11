"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitInquiry } from "@/app/contact/actions";
import { inquirySchema, intents, type InquiryInput } from "@/lib/validation/inquiry";
import { cn } from "@/lib/utils";

const INTENT_META: Record<
  (typeof intents)[number],
  { label: string; description: string; cta: string; extra?: { name: keyof InquiryInput; label: string; placeholder: string }[] }
> = {
  project: {
    label: "Project inquiry",
    description:
      "Hire MIBTY to design, build, or run a system. We'll come back within two business days with a frame.",
    cta: "Send inquiry",
    extra: [
      { name: "scope", label: "Scope or domain", placeholder: "e.g., diagnostic imaging triage" },
      { name: "timeline", label: "Timeline", placeholder: "e.g., Q3 2026" },
    ],
  },
  research: {
    label: "Research collaboration",
    description:
      "Universities, labs, ministries, foundations. We'll route this to our research practice.",
    cta: "Send brief",
    extra: [
      { name: "scope", label: "Domain & question", placeholder: "e.g., low-data signal classification" },
      { name: "timeline", label: "Funding status", placeholder: "e.g., grant-pending" },
    ],
  },
  press: {
    label: "Press / general",
    description: "Press, speaking, partnerships, careers, or anything else.",
    cta: "Send message",
  },
};

export function ContactForm() {
  const [intent, setIntent] = useState<(typeof intents)[number]>("project");
  const [done, setDone] = useState(false);
  const [serverErr, setServerErr] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { intent: "project", website: "" },
  });

  const meta = INTENT_META[intent];

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      {/* Intent selector */}
      <aside className="lg:col-span-4">
        <p className="type-eyebrow text-(--color-fg-subtle)">What brings you here?</p>
        <ul className="mt-4 space-y-2">
          {intents.map((i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => {
                  setIntent(i);
                  setDone(false);
                  reset({ intent: i, website: "" });
                }}
                aria-pressed={intent === i}
                className={cn(
                  "w-full rounded-lg border px-5 py-4 text-left transition-all",
                  "duration-(--dur-fast) ease-(--ease-out-soft)",
                  intent === i
                    ? "border-violet-500/60 bg-violet-500/10"
                    : "border-(--color-border) bg-(--color-surface) hover:border-violet-500/30",
                )}
              >
                <p className="type-title text-(--color-fg)">{INTENT_META[i].label}</p>
                <p className="type-body-s mt-1 text-(--color-fg-muted)">
                  {INTENT_META[i].description}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Form */}
      <div className="lg:col-span-8">
        {done ? (
          <div className="hairline rounded-xl bg-(--color-surface) p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
              <Check size={20} />
            </div>
            <h2 className="type-display-s mt-6 text-(--color-fg)">Thank you — we have it.</h2>
            <p className="type-body-l mt-4 text-(--color-fg-muted)">
              We&rsquo;ll reply within two business days. If your message is urgent, book directly via the
              calendar below.
            </p>
            <Button
              type="button"
              variant="ghost"
              size="md"
              className="mt-6"
              onClick={() => {
                setDone(false);
                reset({ intent, website: "" });
              }}
            >
              Send another
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit((data) => {
              setServerErr(null);
              startTransition(async () => {
                const res = await submitInquiry({ ...data, intent });
                if (res.ok) setDone(true);
                else setServerErr(res.message ?? "Something went wrong. Please try again.");
              });
            })}
            className="hairline rounded-xl bg-(--color-surface) p-8 md:p-10"
            noValidate
          >
            <input type="hidden" {...register("intent")} value={intent} />
            {/* Honeypot */}
            <div className="pointer-events-none absolute -left-[9999px]">
              <label>
                Website
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" error={errors.name?.message} required>
                <input
                  {...register("name")}
                  type="text"
                  autoComplete="name"
                  className={inputClass(!!errors.name)}
                />
              </Field>
              <Field label="Email" error={errors.email?.message} required>
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  className={inputClass(!!errors.email)}
                />
              </Field>
              <Field label="Organization" error={errors.organization?.message}>
                <input
                  {...register("organization")}
                  type="text"
                  autoComplete="organization"
                  className={inputClass(!!errors.organization)}
                />
              </Field>
              <Field label="Your role" error={errors.role?.message}>
                <input
                  {...register("role")}
                  type="text"
                  autoComplete="organization-title"
                  className={inputClass(!!errors.role)}
                />
              </Field>
              {meta.extra?.map((f) => (
                <Field key={f.name} label={f.label} error={errors[f.name]?.message}>
                  <input
                    {...register(f.name)}
                    type="text"
                    placeholder={f.placeholder}
                    className={inputClass(!!errors[f.name])}
                  />
                </Field>
              ))}
            </div>

            <Field className="mt-6" label="What are you trying to do?" error={errors.message?.message} required>
              <textarea
                {...register("message")}
                rows={6}
                className={cn(inputClass(!!errors.message), "resize-y")}
                placeholder="Two or three sentences of context."
              />
            </Field>

            {serverErr ? (
              <p className="type-body-s mt-6 text-(--color-danger)">{serverErr}</p>
            ) : null}

            <div className="mt-8 flex items-center gap-4">
              <Button type="submit" size="lg" disabled={pending}>
                {pending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  meta.cta
                )}
              </Button>
              <p className="type-mono-s text-(--color-fg-subtle)">
                We typically reply within two business days.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  required,
  className,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="type-mono-s text-(--color-fg-subtle)">
        {label}
        {required ? <span className="ml-1 text-violet-300">*</span> : null}
      </span>
      <div className="mt-2">{children}</div>
      {error ? <span className="type-body-s mt-2 block text-(--color-danger)">{error}</span> : null}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-md border bg-(--color-bg) px-4 py-3 text-[15px] text-(--color-fg)",
    "placeholder:text-(--color-fg-subtle)",
    "transition-colors duration-(--dur-fast) ease-(--ease-out-soft)",
    "focus:outline-none focus:ring-0",
    hasError
      ? "border-(--color-danger) focus:border-(--color-danger)"
      : "border-(--color-border) focus:border-violet-500/60",
  );
}
