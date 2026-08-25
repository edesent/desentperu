import type { Metadata } from "next";
import Link from "next/link";
import { GiveEmbed } from "@/components/GiveEmbed";
import { PageHero } from "@/components/PageHero";
import { partnerChurches, site, whyPeru } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Support a Peruvian missionary, help print scriptures, or help finish the church building in Tarapoto. 100% of every gift goes to missionaries and scriptures — give whatever the Lord leads.",
  alternates: { canonical: "/partner" },
};

/**
 * What one gift supports — described, not itemised. Deliberately NOT a set of
 * fund buttons or price tiers: a church gives a single amount of its own
 * choosing and it goes where the need is greatest.
 */
const supports = [
  "Monthly support for Peruvian missionaries and their families",
  "Printing and distributing scriptures in country, including New Testaments in the Awajún language for the Amazon",
  "Church construction — the temple and parsonage in Tarapoto",
  "The travelling tent ministry and its evangelistic campaigns",
  "Training pastors, preachers and missionaries through the university",
  "New church plants in Cacatachi, Lamas and the cities beyond them",
];

/** From ibmperu.org — the terms a supporting church is agreeing to. */
const commitments = [
  "Pastor Desent personally screens each missionary, and we know their work.",
  "We support men who serve regardless of the income we can provide — men with a world vision.",
  "We commit to support as long as the missionary labors in good testimony.",
  "We expect regular updates from the field.",
  "Support is normally a three-year term for a man with one church; every new church started lengthens it.",
  "Our missionaries must be involved in scripture distribution.",
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title={<>A tenth of the cost.<br />Ten times the reach.</>}
      >
        <p>
          A Peruvian man can do effective missionary work on a small fraction of
          what it costs to send an American. We are already there, we already
          know these men, and the fields are already open. Give whatever the
          Lord lays on your church — there is no figure we are asking for.
        </p>
      </PageHero>

      {/* What a gift supports — described, not itemised into funds. */}
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">Where it goes</p>
            <h2 className="display-md mt-4">What your gift supports</h2>
            <span className="flag-rule mt-6" />
            <div className="prose-field lede mt-7">
              <p>
                100% of every monetary gift goes to supporting missionaries and
                to the scriptures. We do not use funds for anything else — our
                home church bears all administration costs.
              </p>
              <p className="!mb-0">
                There is nothing to choose between and no figure we are asking
                for. Give one amount, whatever the Lord lays on your church, and
                it goes to the work that needs it most.
              </p>
            </div>
          </div>

          <ul className="divide-y divide-hairline border-y border-hairline">
            {supports.map((item) => (
              <li key={item} className="flex gap-4 py-4">
                <span
                  aria-hidden
                  className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 bg-peru"
                />
                <span className="text-[0.98rem] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Giving. */}
      <section className="border-y border-hairline bg-cream section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">How to give</p>
            <h2 className="display-md mt-4">Two ways to give</h2>
            <span className="flag-rule mt-6" />
            <div className="prose-field mt-7 text-[1rem]">
              <p>
                Online giving runs through Donorbox, and handles both one-time
                gifts and monthly support. If your church prefers to send a
                check — many do — write to us and we will send the mailing
                details and anything your treasurer needs for your missions
                budget.
              </p>
              <p>
                If you would like to talk it through first, or have us present
                to your missions committee before you decide, that is the better
                order. We would rather you saw the work.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/schedule" className="btn btn-outline">
                Ask about giving by check
              </Link>
            </div>

            <div className="mt-10 border-t border-hairline pt-8">
              <h3 className="display-sm">What we commit to</h3>
              <ul className="mt-5 space-y-3">
                {commitments.map((c) => (
                  <li key={c.slice(0, 30)} className="flex gap-3.5">
                    <span
                      aria-hidden
                      className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-peru"
                    />
                    <span className="text-[0.93rem] leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <GiveEmbed />
          </div>
        </div>
      </section>

      {/* Why this route. */}
      <section className="on-red bg-peru text-candle section-pad">
        <div className="shell">
          <p className="eyebrow">The case</p>
          <h2 className="display-md mt-4">
            Why send it through Peruvian hands
          </h2>
          <span className="flag-rule mt-6" />
          <ul className="mt-12 grid gap-x-14 gap-y-10 sm:grid-cols-2">
            {whyPeru.map((w, i) => (
              <li key={w.heading} className="flex gap-5">
                <span className="font-serif text-[1.6rem] leading-none text-candle/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.02rem] font-semibold text-candle">
                    {w.heading}
                  </h3>
                  <p className="mt-2 text-[0.94rem] leading-relaxed">{w.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-3xl text-[0.95rem] leading-relaxed">
            We act as a clearinghouse: we filter and approve missionaries we
            believe are very good investments for your missionary support
            dollars. Gifts are received and disbursed through{" "}
            {site.processedBy} — the name your church will see on the receipt.
            You can read the full standards we hold our missionaries to at{" "}
            <a
              href={`${site.orgSite}/our-missionaries/`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-candle underline decoration-candle/40 underline-offset-4 hover:decoration-candle"
            >
              ibmperu.org
            </a>
            .
          </p>
        </div>
      </section>

      {/* Churches already in. */}
      <section className="section-pad">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Already partnering</p>
            <h2 className="display-md mt-4">Churches standing with us</h2>
            <span className="flag-rule mt-6" />
            <p className="lede mt-6">
              These are independent Baptist churches already supporting this
              work and the Peruvian men we send. If your church joins them, we
              would be glad to add your name here.
            </p>
          </div>
          <ul className="mt-10 grid gap-x-10 gap-y-1 border-t border-hairline pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerChurches.map((c) => (
              <li
                key={c}
                className="border-b border-hairline/60 py-2.5 text-[0.9rem] leading-snug"
              >
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/schedule" className="btn btn-primary">
              Talk with us first
            </Link>
            <Link href="/the-work" className="btn btn-outline">
              See the work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
