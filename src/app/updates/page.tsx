import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FacebookFeed } from "@/components/FacebookFeed";
import { PageHero } from "@/components/PageHero";
import { letters } from "@/lib/letters";
import { site } from "@/lib/site";
import { updates } from "@/lib/updates";

export const metadata: Metadata = {
  title: "Letters & Updates",
  description:
    "Mission letters and field updates from Nash and Suzanne Desent in Peru — read the full reports, or catch the shorter notes from Facebook.",
  alternates: { canonical: "/updates" },
};

export default function UpdatesPage() {
  return (
    <>
      <PageHero eyebrow="From the field" title="Letters & updates">
        <p>
          The full report letters, and the shorter notes in between. If your
          church supports us, this is our accounting to you.
        </p>
      </PageHero>

      {/* Mission letters. */}
      <section className="section-pad">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Mission letters</p>
            <h2 className="display-md mt-4">The full reports</h2>
            <span className="flag-rule mt-6" />
          </div>

          <ul className="mt-10 space-y-6">
            {letters.map((letter) => (
              <li key={letter.slug} className="card p-7 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="display-sm text-[1.35rem]">
                    <Link
                      href={`/updates/${letter.slug}`}
                      className="hover:text-peru"
                    >
                      {letter.title}
                    </Link>
                  </h3>
                  <time
                    dateTime={letter.date}
                    className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    {letter.dateLabel}
                  </time>
                </div>
                <p className="mt-3 max-w-2xl text-[0.97rem] leading-relaxed text-body">
                  {letter.summary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <Link
                    href={`/updates/${letter.slug}`}
                    className="btn btn-primary !py-2.5 !px-5"
                  >
                    Read the letter
                  </Link>
                  {letter.pdf && (
                    <a
                      href={letter.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.88rem] font-semibold text-peru underline decoration-peru/30 underline-offset-4 hover:decoration-peru"
                    >
                      Download the printable PDF
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Shorter notes + the live feed. */}
      <section className="border-y border-hairline bg-cream section-pad">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">In between</p>
              <h2 className="display-md mt-4">Notes from Facebook</h2>
              <span className="flag-rule mt-6" />
            </div>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Follow on Facebook
            </a>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <ol className="space-y-8">
              {updates.map((u) => (
                <li
                  key={u.title}
                  className="border-b border-hairline pb-8 last:border-b-0 last:pb-0"
                >
                  <div className="flex gap-6">
                    {u.photo && (
                      <Image
                        src={u.photo.src}
                        alt={u.photo.alt}
                        width={320}
                        height={320}
                        sizes="120px"
                        className="hidden h-[120px] w-[120px] shrink-0 border border-hairline object-cover sm:block"
                      />
                    )}
                    <div>
                      <time
                        dateTime={u.date}
                        className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-peru-bright"
                      >
                        {u.dateLabel}
                      </time>
                      <h3 className="display-sm mt-2 text-[1.15rem]">
                        {u.title}
                      </h3>
                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-body">
                        {u.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div>
              <FacebookFeed />
            </div>
          </div>
        </div>
      </section>

      <section className="on-red bg-peru text-candle">
        <div className="shell-narrow py-16 text-center">
          <h2 className="display-md">Would you rather we told you in person?</h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            We can present the work to your church live by video from the field,
            or in person during our September 2026 stateside trip.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/schedule" className="btn btn-candle">
              Schedule a presentation
            </Link>
            <Link href="/partner" className="btn btn-outline">
              Support the work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
