"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * CRT-style unlock console — password must match SITE_PASSWORD (default 2032).
 */
export function TerminalGate() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [lines, setLines] = useState<string[]>([
    "DrOK Foundation — secure channel",
    "Build 2032 · Butere preparation node",
    "",
    "Authentication required before content is revealed.",
    "",
  ]);
  const [status, setStatus] = useState<"idle" | "checking" | "error">("idle");
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  async function submit(password: string) {
    if (!password || status === "checking") return;
    setStatus("checking");
    setLines((prev) => [...prev, `> password: ${"*".repeat(password.length)}`]);

    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setLines((prev) => [
          ...prev,
          "Access denied.",
          "Retry with the correct access code.",
          "",
        ]);
        setStatus("error");
        setValue("");
        inputRef.current?.focus();
        return;
      }

      setLines((prev) => [
        ...prev,
        "Access granted.",
        "Opening the public record…",
      ]);
      setStatus("idle");
      router.replace("/");
      router.refresh();
    } catch {
      setLines((prev) => [...prev, "Channel error. Try again.", ""]);
      setStatus("error");
      setValue("");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black px-4 py-8 font-mono text-[13px] text-[#33ff66] sm:text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.35) 2px, rgba(0,0,0,0.35) 4px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 120px rgba(0,0,0,0.85)",
        }}
        aria-hidden
      />

      <div className="relative w-full max-w-2xl">
        <p className="mb-3 text-[11px] tracking-[0.2em] text-[#33ff66]/70 uppercase">
          drok@maseno ~ secure shell
        </p>
        <div
          className="min-h-[320px] rounded-lg border border-[#33ff66]/35 bg-black/90 p-5 shadow-[0_0_40px_rgba(51,255,102,0.12)] sm:p-6"
          role="dialog"
          aria-label="Site access terminal"
        >
          <div className="space-y-1 whitespace-pre-wrap">
            {lines.map((line, i) => (
              <p key={`${i}-${line.slice(0, 12)}`} className="leading-relaxed">
                {line || "\u00A0"}
              </p>
            ))}
          </div>

          <form
            className="mt-3 flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              void submit(value);
            }}
          >
            <label htmlFor="gate-password" className="shrink-0">
              password:
            </label>
            <div className="relative min-w-0 flex-1">
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
                className="w-full border-0 bg-transparent text-[#33ff66] caret-transparent outline-none"
                aria-describedby="gate-hint"
              />
              <span
                className="pointer-events-none absolute top-0 left-0 tracking-[0.05em]"
                aria-hidden
              >
                {"*".repeat(value.length)}
                <span
                  className={
                    blink ? "inline-block bg-[#33ff66] text-black" : "opacity-0"
                  }
                >
                  ▌
                </span>
              </span>
            </div>
          </form>

          <p id="gate-hint" className="mt-6 text-[11px] text-[#33ff66]/55">
            Enter the access code, then press Return.
            {status === "error" ? " — last attempt failed." : ""}
            {status === "checking" ? " — verifying…" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
