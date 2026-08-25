"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Donorbox is loaded only on click. A giving iframe mounted on page load
 * hijacks the scroll wheel over its own area and drags the reader back into it.
 */
export function GiveEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="border border-hairline bg-white p-8 text-center sm:p-10">
        <h3 className="display-sm text-[1.2rem]">Give any amount</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.93rem] leading-relaxed text-muted">
          Secure giving through Donorbox — one-time or monthly, in whatever
          amount you choose. There are no set levels and nothing to designate.
          100% goes to the work and to the scriptures; our home church bears the
          administration costs.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="btn btn-primary"
          >
            Open the giving form
          </button>
          <a
            href={site.donorbox}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Give in a new tab
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-hairline bg-white">
      <iframe
        src="https://donorbox.org/embed/independent-baptist-missions"
        title="Give to the mission work in Peru"
        name="donorbox"
        allow="payment"
        seamless
        className="block h-[900px] w-full border-0"
      />
      <p className="border-t border-hairline px-5 py-3 text-center text-[0.82rem] text-muted">
        Form not loading?{" "}
        <a
          href={site.donorbox}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-peru underline underline-offset-2"
        >
          Open it in a new tab
        </a>
        .
      </p>
    </div>
  );
}
