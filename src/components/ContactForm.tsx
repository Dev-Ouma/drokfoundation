"use client";

import { useState } from "react";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { site } from "@/content/site";

const intents: { value: ContactInput["intent"]; label: string }[] = [
  { value: "story", label: "Share a story or invitation" },
  { value: "volunteer", label: "Volunteer" },
  { value: "media", label: "Press / media" },
  { value: "partnership", label: "Partnership" },
  { value: "general", label: "General enquiry" },
];

function intentLabel(value: ContactInput["intent"]) {
  return intents.find((i) => i.value === value)?.label ?? value;
}

/** Validate in-browser, then open the visitor’s mail client (mailto mode). */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = new FormData(e.currentTarget);
    const raw = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      location: String(form.get("location") ?? ""),
      intent: String(form.get("intent") ?? "general"),
      message: String(form.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    const d = parsed.data;
    const subject = encodeURIComponent(
      `[Okutoyi site] ${intentLabel(d.intent)} — ${d.name}`,
    );
    const body = encodeURIComponent(
      [
        d.message,
        "",
        "—",
        `Name: ${d.name}`,
        `Email: ${d.email}`,
        d.phone ? `Phone: ${d.phone}` : null,
        d.location ? `Location: ${d.location}` : null,
        `Intent: ${intentLabel(d.intent)}`,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    try {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="paper-card p-8">
        <p className="kicker">Mail client opened</p>
        <h2 className="mt-3 font-display text-3xl text-forest italic">
          Please send the draft in your email app
        </h2>
        <p className="mt-4 text-muted">
          Your message was prepared for{" "}
          <a className="text-forest underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          . If nothing opened, write that address directly.
        </p>
        <button
          type="button"
          className="mt-6 text-[0.75rem] font-semibold tracking-[0.16em] text-gold-deep uppercase"
          onClick={() => setStatus("idle")}
        >
          Write another →
        </button>
      </div>
    );
  }

  const field =
    "mt-2 w-full border border-gold/35 bg-cream px-4 py-3 text-ink outline-none transition focus:border-gold";

  return (
    <form
      onSubmit={onSubmit}
      className="paper-card space-y-5 p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-forest">
          Full name
          <input className={field} name="name" autoComplete="name" required />
          {errors.name ? (
            <span className="mt-1 block text-sm text-red-800">{errors.name}</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-forest">
          Email
          <input
            className={field}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          {errors.email ? (
            <span className="mt-1 block text-sm text-red-800">{errors.email}</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-forest">
          Phone <span className="font-normal text-muted">(optional)</span>
          <input className={field} name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="block text-sm font-medium text-forest">
          Ward or town{" "}
          <span className="font-normal text-muted">(optional)</span>
          <input
            className={field}
            name="location"
            autoComplete="address-level2"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-forest">
        How can we help
        <select className={field} name="intent" defaultValue="general">
          {intents.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-forest">
        Message
        <textarea className={`${field} min-h-36`} name="message" required />
        {errors.message ? (
          <span className="mt-1 block text-sm text-red-800">
            {errors.message}
          </span>
        ) : null}
      </label>
      {status === "error" ? (
        <p className="text-sm text-red-800">
          Could not open mail. Please email{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      ) : null}
      <button
        type="submit"
        className="rounded-full bg-forest px-8 py-3 text-[0.78rem] font-semibold tracking-[0.18em] text-cream uppercase transition hover:bg-forest-mid"
      >
        Open in email →
      </button>
      <p className="text-xs text-muted">
        Opens your email app with a prepared message to {site.email}.
      </p>
    </form>
  );
}
