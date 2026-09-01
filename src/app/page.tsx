import Image from "next/image";
import Link from "next/link";
import { VideoFeature } from "@/components/VideoFeature";
import { figures, pillars, site, whySupportUs, works } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero — the video is the point, so it sits beside the ask, not under it. */}
      <section className="on-red relative overflow-hidden bg-peru text-candle">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-3/5 opacity-[0.10] lg:block"
          style={{
            backgroundImage: "url(/photos/tarapoto-temple-exterior.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // Without the fade the panel's straight edge reads as a seam.
            maskImage:
              "linear-gradient(to right, transparent, black 55%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 55%, black 100%)",
          }}
        />
        <div className="shell relative grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.06fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">{site.tagline}</p>
            <h1 className="display-lg mt-5 text-candle">
              A city of 200,000 with
              <br />
              no fundamental Baptist church.
            </h1>
            <span className="flag-rule mt-7" />
            <p className="lede mt-7 max-w-xl">
              We are Nash and Suzanne Desent, and we have spent our lives
              putting scriptures and trained preachers into places
              that have neither. Thirty-five years in, we are still on the
              field, and{" "}
              <strong className="font-semibold text-candle">
                every man we train reaches people we never could
              </strong>
              . Would your church stand with us?
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/partner" className="btn btn-candle">
                Stand with us
              </Link>
              <Link href="/schedule" className="btn btn-outline">
                Have us present to your church
              </Link>
            </div>
          </div>

          <div>
            <VideoFeature
              label="Watch our 2026 report"
              duration="3 min"
            />
            <p className="mt-4 text-[0.85rem] text-candle/70">
              Three minutes on the work in Peru — the fields, the tent, the
              scriptures, and what we are asking of you.
            </p>
          </div>
        </div>
      </section>

      {/* The numbers that make the case. */}
      <section className="border-b border-hairline bg-parchment-warm">
        <div className="shell grid gap-px py-14 sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((f) => (
            <div
              key={f.label}
              className="px-1 sm:px-6 sm:first:pl-0 sm:last:pr-0 lg:border-r lg:border-hairline lg:last:border-r-0"
            >
              <p className="font-serif text-[2.9rem] leading-none text-peru">
                {f.value}
                <span className="ml-1.5 align-middle text-[0.95rem] font-sans font-medium tracking-wide text-muted">
                  {f.unit}
                </span>
              </p>
              <p className="mt-3 display-sm text-[1.08rem]">{f.label}</p>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">
                {f.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are, briefly — the personal anchor. */}
      <section className="section-pad">
        {/* The portrait makes the left column much taller than the prose, so the
            text is centred against it rather than stranded at the top. */}
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="display-md mt-4">
              Thirty-five years of seed, sowers and senders
            </h2>
            <span className="flag-rule mt-6" />
            <figure className="m-0 mt-9">
              <Image
                src="/photos/nash-preaching.jpg"
                alt="Nash Desent teaching from a music stand with both hands raised mid-sentence, wearing a striped shirt and a red striped tie, a whiteboard behind him and an acoustic guitar propped against the wall"
                width={780}
                height={975}
                sizes="(min-width: 1024px) 420px, 92vw"
                className="h-auto w-full border border-hairline"
              />
              <figcaption className="mt-3 text-[0.82rem] text-muted">
                Training men and women who will carry on the work after us is
                the means to have fruit that remains. 1 Corinthians 3:10.
                Reproducing laborers who will also reproduce. 2 Timothy 2:2.
              </figcaption>
            </figure>
          </div>
          <div className="prose-field lede">
            <p>
              In 1991 Nash Desent was sent to Rhode Island, where he founded
              Historic Baptist Church and oversaw Bearing Precious Seed
              scripture production. In 1996 we proved the work in the mountains
              of Honduras — a small press, a generator, and no electricity. In
              2023 God opened the door to Peru, and we moved the missions
              office under a local Baptist church here.
            </p>
            <p>
              Today we labor from Villa El Salvador, Pachacámac, and the Amazon
              jungle. Nash is president of Baptist International University and
              Independent Baptist Missions; together we print scriptures, train
              preachers, plant churches, and help with gospel tent evangelistic
              campaigns. Suzanne serves in many ways: trip planning,
              hospitality, women’s ministries, and the children's work. People
              remember her the most.
            </p>
            <p className="!mb-0">
              <Link
                href="/about"
                className="font-semibold text-peru underline decoration-peru/30 underline-offset-4 hover:decoration-peru"
              >
                Read our story →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* The fields. */}
      <section className="border-y border-hairline bg-cream section-pad">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">The fields</p>
            <h2 className="display-md mt-4">Where the work is right now</h2>
            <span className="flag-rule mt-6" />
            <p className="lede mt-6">
              Five works, in different stages. Some are established and full of
              children. One is a building site in the jungle. One is land we
              own in a city with no Baptist church at all.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <li key={work.slug} className="card group flex flex-col">
                {work.photo && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                    <Image
                      src={work.photo.src}
                      alt={work.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 92vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-peru-bright">
                    {work.place}
                  </p>
                  <h3 className="display-sm mt-2">{work.name}</h3>
                  <p className="mt-3 flex-1 text-[0.93rem] leading-relaxed text-body">
                    {work.summary}
                  </p>
                  <p className="mt-4 border-t border-hairline pt-3 text-[0.82rem] text-muted">
                    {work.status}
                  </p>
                </div>
              </li>
            ))}
            <li className="flex flex-col justify-center border border-dashed border-peru/30 bg-white/50 p-8">
              <h3 className="display-sm">And eleven more planned</h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-body">
                The 2026–2028 initiative maps every location, from Lambayeque
                on the coast to Pucallpa in the jungle — with land secured for
                some and still needed for others.
              </p>
              <Link
                href="/the-work#initiative"
                className="mt-5 self-start font-semibold text-peru underline decoration-peru/30 underline-offset-4 hover:decoration-peru"
              >
                See the whole map →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Seed · Sowers · Senders */}
      <section className="on-red bg-peru text-candle section-pad">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-20">
            <div>
              <p className="eyebrow">Our mission</p>
              <h2 className="display-md mt-4">
                <span className="block">Seed</span>
                <span className="block">Sowers</span>
                <span className="block">Senders</span>
              </h2>
              <span className="flag-rule mt-6" />
              <p className="mt-6 text-[0.98rem] leading-relaxed">
                Everything we do falls under one of three words. We say them in
                Spanish too, because the men we are training will carry the
                work after us.
              </p>
              <Image
                src="/seed-sowers-senders-light.png"
                alt="Line drawing of a sower scattering books across a globe, captioned Semilla, Sembradores, Enviadores"
                width={440}
                height={723}
                className="mt-9 h-auto w-44 opacity-90"
              />
            </div>

            <ul className="space-y-10">
              {pillars.map((p) => (
                <li key={p.key} className="keyline">
                  <p className="font-serif text-[1.9rem] leading-none text-candle">
                    {p.key}
                    <span className="ml-3 align-middle text-[0.85rem] font-sans font-medium uppercase tracking-[0.18em] text-candle/50">
                      {p.es}
                    </span>
                  </p>
                  <h3 className="mt-3 text-[1.05rem] font-semibold text-candle">
                    {p.heading}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed">
                    {p.body}
                  </p>
                  <p className="mt-3 text-[0.78rem] uppercase tracking-[0.14em] text-candle/45">
                    {p.since}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The virtual-presentation offer — we are on the field, so bring us in by video. */}
      <section className="section-pad">
        <div className="shell">
          <div className="grid items-center gap-12 border border-hairline bg-white p-8 sm:p-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow">For pastors</p>
              <h2 className="display-md mt-4">
                We can present to your church from the field
              </h2>
              <span className="flag-rule mt-6" />
              <p className="lede mt-6">
                We are in Peru, and most of the year we cannot be in your
                church. So let us come in by video — a live presentation to
                your congregation, your missions committee, or just to you,
                from the works themselves. No travel cost, no honorarium
                expected, and you see the field as it actually is.
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                We are also planning a month of stateside meetings in September
                2026. If you would rather have us in person, tell us and we
                will try to route the trip your way.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/schedule" className="btn btn-primary">
                  Schedule a presentation
                </Link>
                <Link href="/the-work" className="btn btn-outline">
                  See the work first
                </Link>
              </div>
            </div>
            <ul className="space-y-5 border-t border-hairline pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {[
                ["Live, from Peru", "Video call into your service or meeting — Sunday, midweek, or a committee night."],
                ["15 to 45 minutes", "As long or short as you want, with time for questions from your people."],
                ["Nothing asked of you", "No travel, no lodging, no love offering required. We would simply like you to see it."],
              ].map(([h, b]) => (
                <li key={h}>
                  <h3 className="display-sm text-[1.02rem]">{h}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">
                    {b}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why a church should support them. */}
      <section className="border-y border-hairline bg-cream section-pad">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Why us</p>
            <h2 className="display-md mt-4">
              Why put us on your missions budget
            </h2>
            <span className="flag-rule mt-6" />
          </div>
          <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {whySupportUs.map((w, i) => (
              <li key={w.heading} className="flex gap-5">
                <span className="font-serif text-[1.6rem] leading-none text-peru/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display-sm">{w.heading}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-body">
                    {w.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing ask, in the video's own words. */}
      <section className="relative overflow-hidden bg-slate-ink text-candle">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: "url(/photos/mission-church-first-service.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="shell-narrow relative py-20 text-center sm:py-28">
          <p className="font-serif text-[2.6rem] leading-none text-candle sm:text-[3.4rem]">
            Go
          </p>
          <p className="mt-5 font-serif text-[1.35rem] leading-snug text-candle/90 sm:text-[1.6rem]">
            “Lift up your eyes, and look on the fields; for they are white
            already to harvest.”
          </p>
          <p className="mt-3 text-[0.78rem] font-semibold tracking-[0.2em] text-candle/55">
            JOHN 4:35
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/partner" className="btn btn-candle">
              Partner with us
            </Link>
            <Link href="/updates" className="btn btn-outline !border-candle/45 !text-candle hover:!bg-candle/10">
              Read the latest report
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
