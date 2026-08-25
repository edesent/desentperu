"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * The 2026 presentation video. The card is only a poster and a play button;
 * clicking it opens the video in a lightbox over the page.
 *
 * Built on a native <dialog> with showModal(), which gives focus trapping and
 * Escape-to-close for free — a hand-rolled overlay has to reimplement both and
 * usually gets the focus part wrong. preload="none" keeps the browser from
 * fetching the file until play() is called, so a pastor on cellular data does
 * not pay for 8 MB just by landing on the page (verified: zero requests for
 * promo.mp4 before the click, one after).
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    // The src is set declaratively below; load and play once it is attached.
    requestAnimationFrame(() => void videoRef.current?.play());
  };

  const close = () => dialogRef.current?.close();

  // Rewind on close so reopening starts at the beginning rather than mid-report,
  // and release the scroll lock. "close" covers Escape, the button and the
  // backdrop alike.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      document.documentElement.style.overflow = "";
    };

    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("close", onClose);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <>
      <figure className="m-0">
        <button
          type="button"
          onClick={() => {
            document.documentElement.style.overflow = "hidden";
            open();
          }}
          aria-label={`${label} — ${duration}. Opens in a player.`}
          className="group relative block aspect-video w-full cursor-pointer overflow-hidden bg-peru-deep shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] ring-1 ring-candle/20"
        >
          <Image
            src={poster}
            alt=""
            width={832}
            height={464}
            priority
            className="h-full w-full object-cover"
          />

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
      </figure>

      <dialog
        ref={dialogRef}
        // Clicks that land on the dialog itself, not on the frame inside it,
        // are backdrop clicks.
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-[#2a0000]/90 open:flex open:items-center open:justify-center"
      >
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          className="flex h-full w-full items-center justify-center p-4 sm:p-8"
        >
          <div className="relative w-full max-w-5xl">
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              controls
              playsInline
              preload="none"
              className="aspect-video w-full bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
            >
              <p className="p-6 text-candle">
                Your browser cannot play this video.{" "}
                <a href={src} className="underline">
                  Download it instead
                </a>
                .
              </p>
            </video>

            <button
              type="button"
              onClick={close}
              aria-label="Close the player"
              className="absolute -top-11 right-0 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-candle/80 transition-colors hover:text-candle sm:-top-12"
            >
              Close
              <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
