import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GATE_COOKIE, GATE_PATH, GATE_TOKEN } from "@/lib/gate";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === GATE_PATH ||
    pathname.startsWith("/api/gate") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/opengraph-image"
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get(GATE_COOKIE)?.value;
  if (token === GATE_TOKEN) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = GATE_PATH;
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
