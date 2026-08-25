import { CHAT } from "@/config/chat";

type SendResult = { ok: true } | { ok: false; status: number; error: string };

const FAILURE =
  "Sorry — that didn't send. Please try again in a moment, or reach us on Facebook.";

export interface SlackFormPayload {
  /** Bold headline in Slack. */
  subject: string;
  name: string;
  /** Whatever should be replied to — email, or "email · phone". */
  contact: string;
  /** Label/value pairs printed above the message, in order. */
  fields?: [string, string][];
  message?: string;
}

export async function sendToSlack(
  payload: SlackFormPayload,
): Promise<SendResult> {
  if (!CHAT.apiKey) {
    console.error("Slack form: WBC_API_KEY is not set");
    return { ok: false, status: 500, error: FAILURE };
  }

  const lines = [
    ...(payload.fields ?? [])
      .filter(([, value]) => value)
      .map(([label, value]) => `*${label}:* ${value}`),
    ...(payload.message ? ["", payload.message] : []),
  ];

  try {
    const response = await fetch(`${CHAT.origin}/api/chat/contact-form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: CHAT.apiKey,
        subject: payload.subject,
        name: payload.name,
        contact: payload.contact,
        // The backend rejects an empty message.
        message: lines.join("\n").trim() || "No extra details given.",
      }),
    });

    if (!response.ok) {
      console.error(
        "Slack form failed:",
        response.status,
        await response.text().catch(() => ""),
      );
      return { ok: false, status: 502, error: FAILURE };
    }
  } catch (error) {
    console.error("Slack form error:", error);
    return { ok: false, status: 502, error: FAILURE };
  }

  return { ok: true };
}
