"use client";

import type React from "react";

import { useEffect, useMemo, useRef, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const SERVICES = [
  "Structural Analysis",
  "Product Design",
  "CAD Modeling",
  "Prototyping",
  "Compliance & Testing",
  "Other",
];

export default function Page() {
  return (
    <main className="bg-background">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Get in touch
          </h1>
          <p className="mt-2 text-muted-foreground">
            We’ll respond within 1–2 business days.
          </p>
        </header>

        <div className="rounded-xl border border-border bg-card">
          <div className="p-4 sm:p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const firstInvalidRef = useRef<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null
  >(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  const emailPattern = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  function validate(next: FormValues): FormErrors {
    const e: FormErrors = {};
    if (!next.name.trim()) e.name = "Please enter your full name.";
    if (!next.email.trim()) e.email = "Please enter your email address.";
    else if (!emailPattern.test(next.email))
      e.email = "Please enter a valid email address.";
    if (!next.service.trim()) e.service = "Please select a service.";
    if (!next.message.trim())
      e.message = "Please enter a brief project description.";
    return e;
  }

  function onChange<K extends keyof FormValues>(key: K) {
    return (
      ev: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const next = { ...values, [key]: ev.target.value };
      setValues(next);
      // Progressive validation: clear field error when corrected
      if (errors[key]) {
        const e = validate(next);
        setErrors((prev) => ({ ...prev, [key]: e[key] }));
      }
    };
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);

    if (Object.keys(e).length > 0) {
      // Focus the first invalid input
      requestAnimationFrame(() => {
        firstInvalidRef.current?.focus();
      });
      setSubmitted(false);
      return;
    }

    // Simulate async submit
    await new Promise((r) => setTimeout(r, 500));
    setSubmitted(true);
    // Optionally clear the form
    setValues({ name: "", email: "", service: "", message: "" });

    // Move focus to success banner for SR/keyboard users
    requestAnimationFrame(() => {
      successRef.current?.focus();
    });
  }

  // Set the first invalid ref on render
  useEffect(() => {
    firstInvalidRef.current = null;
  }, [errors]);

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="form-description">
      <p id="form-description" className="sr-only">
        All fields are required. We will reply by email within two business
        days.
      </p>

      {submitted && (
        <div
          ref={successRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className="mb-6 rounded-md border border-green-200 bg-green-50 p-4 text-green-800 outline-none"
        >
          <p className="font-medium">Thanks! Your message has been sent.</p>
          <p className="text-sm">We’ll reach out within 1–2 business days.</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Alex Johnson"
            value={values.name}
            onChange={onChange("name")}
            aria-invalid={Boolean(errors.name) || undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            /* Assign as potential first invalid element */
            ref={(el) => {
              if (errors.name && !firstInvalidRef.current)
                firstInvalidRef.current = el;
            }}
            className="w-full rounded-md border border-input bg-input px-3 py-2 text-foreground placeholder:text-muted-foreground/80 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={onChange("email")}
            aria-invalid={Boolean(errors.email) || undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            ref={(el) => {
              if (errors.email && !firstInvalidRef.current)
                firstInvalidRef.current = el;
            }}
            className="w-full rounded-md border border-input bg-input px-3 py-2 text-foreground placeholder:text-muted-foreground/80 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            htmlFor="service"
            className="text-sm font-medium text-foreground"
          >
            Service needed
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={onChange("service")}
            aria-invalid={Boolean(errors.service) || undefined}
            aria-describedby={errors.service ? "service-error" : undefined}
            ref={(el) => {
              if (errors.service && !firstInvalidRef.current)
                firstInvalidRef.current = el;
            }}
            className="w-full appearance-none rounded-md border border-input bg-input px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" role="alert" className="text-sm text-red-600">
              {errors.service}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Briefly describe your goals, constraints, and timeline…"
            rows={6}
            value={values.message}
            onChange={onChange("message")}
            aria-invalid={Boolean(errors.message) || undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            ref={(el) => {
              if (errors.message && !firstInvalidRef.current)
                firstInvalidRef.current = el;
            }}
            className="w-full rounded-md border border-input bg-input px-3 py-2 text-foreground placeholder:text-muted-foreground/80 focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {errors.message && (
            <p id="message-error" role="alert" className="text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
        <button
          type="reset"
          onClick={() => {
            setValues({ name: "", email: "", service: "", message: "" });
            setErrors({});
            setSubmitted(false);
          }}
          className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary/60 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Clear
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
