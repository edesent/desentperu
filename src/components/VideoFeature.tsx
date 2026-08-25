"use client";

import { useRef, useState } from "react";

/**
 * The 2026 presentation video. Held behind a poster and a click so nothing
 * autoplays with sound, and so a pastor on cellular data chooses to spend it.
 */
export function VideoFeature({
  src = "/promo.mp4",
  poster = "/promo-poster.jpg",
  label = "Watch the 2026 report",
  duration = "3 min",
}: {
  src?: string;
  poster?: string;
  label?: string;
  duration?: string;
}) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const start = () => {
    setStarted(true);
    // The element exists on this render already; play on the next tick.
    requestAnimationFrame(() => void videoRef.current?.play());
  };

  return (
    <figure className="group relative m-0 aspect-video w-full overflow-hidden bg-peru-deep shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] ring-1 ring-candle/20">
      <video
        ref={videoRef}
        src={started ? src : undefined}
        poster={poster}
        controls={started}
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      >
        <p className="p-6 text-candle">
          Your browser cannot play this video.{" "}
          <a href={src} className="underline">
            Download it instead
          </a>
          .
        </p>
      </video>

      {!started && (
        <button
          type="button"
          onClick={start}
          className="absolute inset-0 cursor-pointer"
          aria-label={`${label} (${duration})`}
        >
          {/* Light overall wash so the poster stays a photograph, with the
              weight concentrated behind the label at the bottom. */}
          <span className="absolute inset-0 bg-peru-deep/20 transition-colors group-hover:bg-peru-deep/10" />
          <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-peru-deep/90 via-peru-deep/55 to-transparent" />

          <span className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-candle/70 bg-peru/80 backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
            <svg
              width="21"
              height="25"
              viewBox="0 0 22 26"
              fill="none"
              aria-hidden="true"
            >
              <path d="M21 13 0 25.99V0.01L21 13Z" fill="#f0e6cf" />
            </svg>
          </span>

          <span className="absolute inset-x-0 bottom-0 px-5 pb-5 text-center">
            <span className="block font-serif text-[1.3rem] leading-tight text-candle">
              {label}
            </span>
            <span className="mt-0.5 block text-[0.7rem] font-semibold tracking-[0.2em] text-candle/75">
              {duration.toUpperCase()}
            </span>
          </span>
        </button>
      )}
    </figure>
  );
}
