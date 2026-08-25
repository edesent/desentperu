import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
  photo,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  /** Optional background photograph. Omit for the plain red hero. */
  photo?: { src: string; alt: string };
}) {
  return (
    <section className="on-red relative isolate overflow-hidden bg-peru text-candle">
      {photo && (
        <>
          {/* Decorative here — the alt text is carried by the caption-less
              figure on the page itself, and a background image announced by a
              screen reader interrupts the heading. */}
          <Image
            src={photo.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          {/*
            The canopy across the top of these photographs is close to white,
            and candle type on white is unreadable, so this is a heavy tinted
            wash rather than a light scrim: a flat darkening pass that keeps the
            photograph's own colour, then a stronger wash down the left where
            the heading and lede actually sit.
          */}
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-[#2a0000]/62"
          />
          {/* On a phone the copy spans nearly the full width, so it needs the
              wash carried further right than it does on a wide screen. */}
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2a0000]/90 via-[#2a0000]/72 to-[#2a0000]/38 sm:from-[#2a0000]/85 sm:via-[#2a0000]/55 sm:to-transparent"
          />
        </>
      )}
      <div
        className={
          photo ? "shell py-20 sm:py-28" : "shell py-14 sm:py-20"
        }
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1
          className={`display-lg mt-4 max-w-3xl text-candle${
            photo ? " [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]" : ""
          }`}
        >
          {title}
        </h1>
        <span className="flag-rule mt-7" />
        {children && <div className="lede mt-7 max-w-2xl">{children}</div>}
      </div>
    </section>
  );
}
