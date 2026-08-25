import { NextResponse } from "next/server";
import { sendToSlack } from "@/lib/slack-form";

const KINDS: Record<string, string> = {
  virtual: "Virtual presentation (video call from the field)",
  inPerson: "In person — stateside trip",
  either: "Either one — whatever works",
  question: "Just a question",
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  const str = (key: string, max = 2000) =>
    typeof body[key] === "string" ? (body[key] as string).trim().slice(0, max) : "";

  // Honeypot — bots fill hidden fields, people don't.
  if (str("website")) return NextResponse.json({ ok: true });

  const name = str("name", 120);
  const email = str("email", 200);
  const kind = str("kind", 40);

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please give us your name and an email address." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const phone = str("phone", 60);
  const result = await sendToSlack({
    subject: "🇵🇪 A church wants a missions presentation",
    name,
    contact: phone ? `${email} · ${phone}` : email,
    fields: [
      ["Church", str("church", 200)],
      ["Location", str("location", 200)],
      ["Role", str("role", 120)],
      ["Wants", KINDS[kind] ?? kind],
      ["Timing", str("timing", 300)],
    ],
    message: str("message"),
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json({ ok: true });
}
