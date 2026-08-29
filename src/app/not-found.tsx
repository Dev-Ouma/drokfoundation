import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 py-24 pt-32 text-center">
      <p className="kicker">404</p>
      <h1 className="mt-4 font-display text-4xl text-forest font-semibold tracking-tight">
        This path is not on the map
      </h1>
      <p className="mt-4 text-muted">
        The page may have moved, or it has not been written yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-forest px-6 py-3 text-[0.75rem] font-semibold tracking-[0.16em] text-cream uppercase"
      >
        Return home
      </Link>
    </main>
  );
}
