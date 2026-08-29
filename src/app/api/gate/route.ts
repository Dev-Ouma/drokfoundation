import { NextResponse } from "next/server";
import { GATE_COOKIE, GATE_PASSWORD, GATE_TOKEN } from "@/lib/gate";

export async function POST(request: Request) {
  let password = "";
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => null)) as {
      password?: string;
    } | null;
    password = String(body?.password ?? "");
  } else {
    const form = await request.formData().catch(() => null);
    password = String(form?.get("password") ?? "");
  }

  if (password.trim() !== GATE_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "Access denied." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: GATE_COOKIE,
    value: GATE_TOKEN,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return response;
}
