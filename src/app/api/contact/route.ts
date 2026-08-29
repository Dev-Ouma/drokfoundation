import { contactSchema } from "@/lib/schemas";
import { NextResponse } from "next/server";

/**
 * Optional server intake. The public Contact form uses mailto by default.
 * Keep this route for future Resend / mailbox wiring without breaking clients.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    delivery: "mailto",
    hint: "Client forms open the visitor mail app; wire RESEND_API_KEY later for server delivery.",
  });
}
