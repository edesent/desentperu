"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Assembles the phone number in the browser so it never appears as a dialable
 * string in the served HTML, in JSON-LD, or in a scraper's page fetch.
 */
export function PhoneLink({ className }: { className?: string }) {
  const [parts, setParts] = useState<string[] | null>(null);

  useEffect(() => setParts([...site.phoneParts]), []);

  if (!parts) {
    return (
      <span className={className} aria-hidden>
        (•••) •••-••••
      </span>
    );
  }

  const [a, b, c] = parts;
  return (
    <a className={className} href={`tel:+1${a}${b}${c}`}>
      ({a}) {b}-{c}
    </a>
  );
}
