"use client";

import { useState } from "react";

const KINDS = [
  {
    value: "virtual",
    label: "A virtual presentation",
    hint: "We join by video call from Peru — the simplest option, and available year-round.",
  },
  {
    value: "inPerson",
    label: "In person, if you can route the trip",
    hint: "We plan a month of stateside meetings in September 2026.",
  },
  { value: "either", label: "Either one — whatever works" },
  { value: "question", label: "I just have a question first" },
];

export function ScheduleForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setState("sending");

    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setState("idle");
        return;
      }
      setState("sent");
    } catch {
      setError("Something went wrong. Please try again.");
      setState("idle");
    }
  }

  if (state === "sent") {
    return (
      <div className="border border-peru/25 bg-white p-10 text-center">
        <p className="font-serif text-[2rem] leading-none text-peru">
          Thank you.
        </p>
        <p className="mx-auto mt-4 max-w-md text-[0.98rem] leading-relaxed text-body">
          Your message reached us. We will write back to set a time — and if you
          asked for a virtual presentation, we will send a link and everything
          your media person needs beforehand.
        </p>
        <p className="mt-4 font-serif text-[1.05rem] italic text-muted">
          — Nash &amp; Suzanne Desent
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-hairline bg-white p-7 sm:p-9">
      {/* Honeypot. Hidden from people, irresistible to bots. */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset className="border-0 p-0">
        <legend className="field-label !mb-3">
          What would you like?
        </legend>
        <div className="space-y-2.5">
          {KINDS.map((k, i) => (
            <label
              key={k.value}
              className="flex cursor-pointer gap-3 border border-hairline p-3.5 transition-colors hover:border-peru/50 has-[:checked]:border-peru has-[:checked]:bg-peru/[0.04]"
            >
              <input
                type="radio"
                name="kind"
                value={k.value}
                defaultChecked={i === 0}
                className="mt-1 h-4 w-4 shrink-0 accent-[#700001]"
              />
              <span>
                <span className="block text-[0.95rem] font-medium text-ink">
                  {k.label}
                </span>
                {k.hint && (
                  <span className="mt-0.5 block text-[0.85rem] leading-snug text-muted">
                    {k.hint}
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Your name *
          </label>
          <input id="name" name="name" required className="field-input" autoComplete="name" />
        </div>
        <div>
          <label className="field-label" htmlFor="role">
            Your role
          </label>
          <input
            id="role"
            name="role"
            className="field-input"
            placeholder="Pastor, missions chairman…"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="church">
            Church
          </label>
          <input id="church" name="church" className="field-input" autoComplete="organization" />
        </div>
        <div>
          <label className="field-label" htmlFor="location">
            City &amp; state
          </label>
          <input id="location" name="location" className="field-input" />
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field-input"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className="field-input" autoComplete="tel" />
        </div>
      </div>

      <div className="mt-5">
        <label className="field-label" htmlFor="timing">
          When were you thinking?
        </label>
        <input
          id="timing"
          name="timing"
          className="field-input"
          placeholder="A Sunday evening this fall, our October missions conference…"
        />
      </div>

      <div className="mt-5">
        <label className="field-label" htmlFor="message">
          Anything else
        </label>
        <textarea id="message" name="message" rows={5} className="field-input" />
      </div>

      {error && (
        <p className="mt-5 border-l-2 border-peru bg-peru/5 px-4 py-3 text-[0.9rem] text-peru">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn btn-primary mt-7 w-full disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send this to the Desents"}
      </button>
      <p className="mt-3 text-center text-[0.8rem] text-muted">
        Goes straight to Nash and Suzanne. No list, no newsletter signup.
      </p>
    </form>
  );
}
