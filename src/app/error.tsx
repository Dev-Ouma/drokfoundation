"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-xl px-5 py-24 pt-32 text-center">
      <p className="kicker">A pause</p>
      <h1 className="mt-4 font-display text-4xl text-forest italic">
        This page could not be shown
      </h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 bg-forest px-5 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-cream uppercase"
      >
        Try again
      </button>
    </main>
  );
}
