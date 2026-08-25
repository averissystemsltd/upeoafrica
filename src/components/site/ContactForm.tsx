"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { company, services } from "@/lib/content";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const empty: Fields = { name: "", email: "", company: "", service: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function validate(v: Fields) {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!v.name.trim()) e.name = "Please tell us your name.";
    if (!v.email.trim()) e.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      e.email = "That doesn't look like a valid email.";
    if (!v.message.trim() || v.message.trim().length < 10)
      e.message = "A little more detail helps us help you.";
    return e;
  }

  function set<K extends keyof Fields>(key: K, val: string) {
    setValues((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const eObj = validate(values);
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    const subject = encodeURIComponent(
      `New project enquiry${values.company ? `: ${values.company}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "-"}\nService: ${values.service || "-"}\n\n${values.message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-600">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-ink-900">Thank you!</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-body">
          Your email draft is ready to send. We usually reply within one business day.
          You can also reach us directly at{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-brand-600 underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-300 ease-out-expo hover:decoration-brand-500"
          >
            {company.email}
          </a>
          .
        </p>
        <Button
          onClick={() => {
            setValues(empty);
            setSent(false);
          }}
          variant="outline"
          className="mt-6"
        >
          Send another message
        </Button>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-muted transition-[border-color,box-shadow] duration-300 ease-out-expo hover:border-brand-200 focus:outline-none focus-visible:outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name} htmlFor="name" required>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={cn(inputBase, errors.name ? "border-red-400" : "border-line")}
            placeholder="Amina Hassan"
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="email" required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            className={cn(inputBase, errors.email ? "border-red-400" : "border-line")}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            className={cn(inputBase, "border-line")}
            placeholder="Your organisation"
          />
        </Field>
        <Field label="Service of interest" htmlFor="service">
          <select
            id="service"
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
            className={cn(inputBase, "border-line cursor-pointer appearance-none")}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="How can we help?" error={errors.message} htmlFor="message" required>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            className={cn(inputBase, "resize-none", errors.message ? "border-red-400" : "border-line")}
            placeholder="Tell us about your project, goals, and timeline…"
            aria-invalid={!!errors.message}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We&apos;ll never share your details. Replies within one business day.
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send message
          <Send
            className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            aria-hidden
          />
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-slate-ink"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
