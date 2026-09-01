import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PlantingInitiative } from "@/components/PlantingInitiative";
import { pillars, plans2026, prayerRequests, works } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Work",
  description:
    "The five works Nash and Suzanne Desent labor in across Peru — Villa El Salvador, Pachacámac, Tarapoto, Cacatachi and Lamas, and the travelling tent ministry — plus the 2026–2028 church planting initiative.",
  alternates: { canonical: "/the-work" },
};

export default function TheWorkPage() {
  return (
    <>
      <PageHero eyebrow="The fields" title="The work, field by field">
        <p>
          Five works in different stages, from a church full of children in
          Lima to a building site in the Amazon jungle. Each one has a need we
          can name.
        </p>
      </PageHero>

      {/* Jump list, so a pastor can get to the one he cares about. */}
      <nav className="border-b border-hairline bg-parchment-warm">
        <ul className="shell flex flex-wrap gap-x-6 gap-y-2 py-4 text-[0.88rem]">
          {works.map((w) => (
            <li key={w.slug}>
              <a
                href={`#${w.slug}`}
                className="text-body underline decoration-hairline underline-offset-4 hover:text-peru hover:decoration-peru"
              >
                {w.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#initiative"
              className="text-body underline decoration-hairline underline-offset-4 hover:text-peru hover:decoration-peru"
            >
              2026–2028 initiative
            </a>
          </li>
        </ul>
      </nav>

      {works.map((work, i) => (
        <section
          key={work.slug}
          id={work.slug}
          className={`section-pad scroll-mt-24 ${
            i % 2 === 1 ? "border-y border-hairline bg-cream" : ""
          }`}
        >
          <div className="shell">
            <div
              className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>figure]:order-first" : ""
              }`}
            >
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-peru-bright">
                  {work.place}
                </p>
                <h2 className="display-md mt-3">{work.name}</h2>
                <span className="flag-rule mt-5" />
                <div className="prose-field mt-7 text-[1rem]">
                  {work.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                {work.need && (
                  <p className="mt-7 border-l-2 border-peru bg-white/70 px-5 py-4 text-[0.95rem] leading-relaxed">
                    <span className="mb-1 block text-[0.7rem] font-bold uppercase tracking-[0.15em] text-peru">
                      The need
                    </span>
                    {work.need}
                  </p>
                )}
              </div>

              {work.photo && (
                <figure className="m-0">
                  <div className="relative aspect-[3/2] w-full overflow-hidden border border-hairline bg-cream">
                    <Image
                      src={work.photo.src}
                      alt={work.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 540px, 92vw"
                      className={`object-cover ${
                        work.slug === "pachacamac" ? "object-top" : ""
                      }`}
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.82rem] text-muted">
                    {work.status}
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Seed / Sowers / Senders in detail. */}
      <section className="on-red bg-peru text-candle section-pad">
        <div className="shell">
          <p className="eyebrow">The three words</p>
          <h2 className="display-md mt-4">Seed · Sowers · Senders</h2>
          <span className="flag-rule mt-6" />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.key} className="keyline">
                <p className="font-serif text-[1.8rem] leading-none text-candle">
                  {p.key}
                </p>
                <p className="mt-1 text-[0.75rem] uppercase tracking-[0.18em] text-candle/50">
                  {p.es}
                </p>
                <h3 className="mt-4 text-[1.02rem] font-semibold text-candle">
                  {p.heading}
                </h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The initiative. */}
      <section id="initiative" className="scroll-mt-24 section-pad">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">2026 – 2028</p>
            <h2 className="display-md mt-4">The church planting initiative</h2>
            <span className="flag-rule mt-6" />
            <p className="lede mt-6">
              Eleven locations, planned out over the next two years. We know
              missionaries who intend to come and help. They need your prayers,
              because they have needs of their own.
            </p>
          </div>
          <div className="mt-12">
            <PlantingInitiative />
          </div>
        </div>
      </section>

      {/* Prayer + plans. */}
      <section className="border-t border-hairline bg-cream section-pad">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">How to pray</p>
            <h2 className="display-md mt-4">Prayer requests</h2>
            <span className="flag-rule mt-6" />
            <ul className="mt-8 space-y-4">
              {prayerRequests.map((r) => (
                <li key={r.slice(0, 30)} className="flex gap-3.5">
                  <span
                    aria-hidden
                    className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 bg-peru"
                  />
                  <span className="text-[0.97rem] leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Ahead of us</p>
            <h2 className="display-md mt-4">Plans for the rest of 2026</h2>
            <span className="flag-rule mt-6" />
            <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
              {plans2026.map((p) => (
                <li key={p} className="py-3.5 text-[0.97rem]">
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/partner" className="btn btn-primary">
                Support the work
              </Link>
              <Link href="/schedule" className="btn btn-outline">
                Have us present
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
