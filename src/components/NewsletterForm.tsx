"use client";

import { useState } from "react";
import { newsletterSchema } from "@/lib/schemas";
import { site } from "@/content/site";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    const subject = encodeURIComponent("[Okutoyi site] Briefing list");
    const body = encodeURIComponent(
      `Please add this address to the Okutoyi briefing list:\n\n${parsed.data.email}`,
    );
    try {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Could not open mail just now.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
    >
      <label className="sr-only" htmlFor="briefing-email">
        Email address
      </label>
      <input
        id="briefing-email"
        name="email"
        type="email"
        required
        placeholder="Your email"
        className={
          dark
            ? "flex-1 border border-gold/40 bg-transparent px-4 py-3 text-cream placeholder:text-cream/50"
            : "flex-1 border border-gold/40 bg-cream px-4 py-3 text-ink placeholder:text-muted"
        }
      />
      <button
        type="submit"
        className="bg-gold px-5 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-forest uppercase"
      >
        Subscribe
      </button>
      {status === "ok" ? (
        <p className={dark ? "w-full text-sm text-gold-soft" : "w-full text-sm text-forest"}>
          Your mail app should open with the subscription request.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="w-full text-sm text-red-300 sm:text-red-800">{message}</p>
      ) : null}
    </form>
  );
}
