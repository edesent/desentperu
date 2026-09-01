/**
 * The site's mark is their names, not an organisation logo. The red/white/red
 * bar is the Peruvian flag, used as a small identifying device.
 */
export function Wordmark({
  tone = "ink",
}: {
  tone?: "ink" | "candle";
}) {
  const isCandle = tone === "candle";
  return (
    <span className="flex items-center gap-3">
      <span
        aria-hidden
        className="flex h-8 w-[18px] shrink-0 flex-col overflow-hidden"
      >
        <span className="h-full w-full bg-[linear-gradient(to_right,var(--color-peru)_0_33.333%,var(--color-cream)_33.333%_66.666%,var(--color-peru)_66.666%_100%)]" />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-serif text-[1.12rem] font-semibold tracking-tight ${
            isCandle ? "text-candle" : "text-ink"
          }`}
        >
          Nash &amp; Suzanne Desent
        </span>
        <span
          className={`block text-[0.66rem] font-semibold uppercase tracking-[0.18em] ${
            isCandle ? "text-candle/65" : "text-peru-bright"
          }`}
        >
          Baptist Missionaries to Peru
        </span>
      </span>
    </span>
  );
}
