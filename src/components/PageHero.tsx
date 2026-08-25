import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="on-red bg-peru text-candle">
      <div className="shell py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-lg mt-4 max-w-3xl text-candle">{title}</h1>
        <span className="flag-rule mt-7" />
        {children && (
          <div className="lede mt-7 max-w-2xl">{children}</div>
        )}
      </div>
    </section>
  );
}
