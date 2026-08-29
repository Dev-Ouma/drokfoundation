"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/** Institutional access gate — restrained unlock before public content. */
export function TerminalGate() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "checking" | "error">("idle");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function submit(password: string) {
    if (!password || status === "checking") return;
    setStatus("checking");

    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setStatus("error");
        setValue("");
        inputRef.current?.focus();
        return;
      }

      setStatus("idle");
      router.replace("/");
      router.refresh();
    } catch {
      setStatus("error");
      setValue("");
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-cream px-5">
      <div className="w-full max-w-md border border-[var(--line)] bg-white p-8 md:p-10">
        <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-muted uppercase">
          Restricted preview
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-forest md:text-3xl">
          Enter access code
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This site is in controlled preview. Enter the access code to continue
          to the public record of Dr. Joel Okutoyi.
        </p>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void submit(value);
          }}
        >
          <label htmlFor="gate-password" className="block text-sm text-forest">
            Access code
          </label>
          <input
            ref={inputRef}
            id="gate-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={value}
            disabled={status === "checking"}
            onChange={(e) => {
              setStatus("idle");
              setValue(e.target.value);
            }}
            className="w-full border border-[var(--line)] bg-cream px-4 py-3 text-forest outline-none focus:border-forest"
          />
          {status === "error" ? (
            <p className="text-sm text-red-800">Access denied. Please try again.</p>
          ) : null}
          <button
            type="submit"
            disabled={status === "checking"}
            className="w-full bg-forest px-4 py-3 text-[0.72rem] font-semibold tracking-[0.12em] text-cream uppercase transition hover:bg-forest-mid disabled:opacity-60"
          >
            {status === "checking" ? "Verifying…" : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
