import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Nash and Suzanne Desent — thirty-five years of scripture publishing, church planting and training preachers, from Shreveport to Rhode Island to Honduras to Lima, Peru.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    year: "Late 1980s",
    text: "Nash works closely with Dr. D. M. Fraser leading the Bearing Precious Seed scripture production work and the School of the Scriptures at Baptist Tabernacle in Shreveport, Louisiana, under Dr. J. G. Tharpe.",
  },
  {
    year: "1991",
    text: "Sent to Rhode Island, where he founds Historic Baptist Church and oversees Bearing Precious Seed scripture production and Rhode Island Baptist Seminary.",
  },
  {
    year: "1996",
    text: "The “McDonald's method” is proved in Honduras — teaching small indigenous churches to publish scriptures for themselves. Missionary Robert Baker takes a small press and a generator into the mountains where there is no electricity, and publishes John and Romans in three locations.",
  },
  {
    year: "2016",
    text: "Scripture publishing begins in Peru, and Baptist International's School of the Scriptures is offered there.",
  },
  {
    year: "2023",
    text: "God opens the door to Peru. The missions office moves under a local Baptist church so that Peruvian missionaries can be trained and sent from Peru itself.",
  },
  {
    year: "2024",
    text: "First Baptist Church of Pachacámac is organized on January 6 as a mission church under Iglesia Bautista El Lindero Antiguo in Villa El Salvador. We construct our church and mission’s base of operations in 9 months. A ton of New Testaments is produced in the Awajún language for Amazon tribal communities.",
  },
  {
    year: "2026",
    text: "Jorge Rodriguez moves to Tarapoto in April 2026. The temple is built, the parsonage steel is up, and eleven locations are mapped for the 2026–2028 planting initiative. Missionary Jorge Rodriguez is currently conducting services in four locations. The need for laborers is great.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Nash &amp; Suzanne Desent</>}
      >
        <p>
          Missionary workers in Peru. Thirty-five years of putting scriptures
          into hands and training men to preach — most of it in places that had
          neither.
        </p>
      </PageHero>

      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="prose-field lede">
            <p>
              We live and labor in Lima, Peru. Nash — Dr. N. Sebastian Desent —
              is the founding pastor of First Baptist Church of Pachacámac and
              president of Baptist International University, and previously
              founded Historic Baptist Church in Rhode Island, where he pastored
              from 1991 until 2023. Suzanne carries the home, the hospitality,
              and much of the children's work that visiting brethren remember
              longest.
            </p>
            <p>
              Our work summarizes into three words: Seed, Sowers and Senders. We
              publish and distribute scriptures in country. We train pastors,
              preachers and missionaries. And we help churches send — filtering
              and approving Peruvian men whose support goes ten times as far as
              an American's would, and whom we know personally.
            </p>
            <p>
              We are not building something for ourselves. We want fruit that
              remains so that we are a profitable missionary investment for the
              churches who partner with us. We are diligently working to plant
              churches, train missionaries, and get the scriptures to the world.
              We have a big vision for South America and the rest of the world.
              We invite you to be part of this wonderful work. This work will
              continue after us.
            </p>
            <p className="!mb-0">
              Two standing invitations. First, come visit — we have comfortable
              and safe accommodations, and we would rather show you than tell
              you. Second, if you cannot come, let us{" "}
              <Link
                href="/schedule"
                className="font-semibold text-peru underline decoration-peru/30 underline-offset-4 hover:decoration-peru"
              >
                present to your church by video
              </Link>{" "}
              from the field.
            </p>
          </div>

          <div className="space-y-8">
            <figure className="m-0">
              <Image
                src="/photos/nash-missions-conference.jpg"
                alt="Nash Desent standing with two Peruvian preachers, all wearing red ties, in front of a hand-made “Misiones 2025” board displaying the flags of Bolivia, Uruguay, Peru and Honduras alongside photographs of the men serving in each field"
                width={1560}
                height={1030}
                priority
                sizes="(min-width: 1024px) 480px, 92vw"
                className="h-auto w-full border border-hairline"
              />
              <figcaption className="mt-3 text-[0.82rem] text-muted">
                Nash with Peruvian brethren at a missions conference. The board
                behind them names the fields and the men serving in each one.
              </figcaption>
            </figure>
            <div className="border border-hairline bg-white p-7">
              <div className="flex items-start gap-4">
                <Image
                  src="/university-seal.png"
                  alt="Seal of Universidad Bautista Internacional — Baptist International University, founded 1977, bearing the motto Semilla Sembradores Enviadores"
                  width={323}
                  height={328}
                  className="h-16 w-16 shrink-0"
                />
                <h2 className="display-sm">The ministries we serve</h2>
              </div>
              <ul className="mt-4 space-y-3 text-[0.93rem] leading-relaxed">
                <li>
                  <strong className="font-semibold text-ink">
                    The missions work
                  </strong>{" "}
                  — a collaboration of independent Baptist churches supporting
                  world evangelism, which we help administer.{" "}
                  <a
                    href={site.orgSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-peru underline decoration-peru/30 underline-offset-4"
                  >
                    ibmperu.org
                  </a>
                </li>
                <li>
                  <strong className="font-semibold text-ink">
                    {site.homeChurch}
                  </strong>{" "}
                  ({site.homeChurchEs}) — {site.homeChurchCity}.
                </li>
                <li>
                  <strong className="font-semibold text-ink">
                    First Baptist Church of Pachacámac
                  </strong>{" "}
                  — the base church and home office.
                </li>
                <li>
                  <strong className="font-semibold text-ink">
                    Baptist International University
                  </strong>{" "}
                  — founded 1977, training men in Peru, Chile, Liberia and
                  beyond.{" "}
                  <a
                    href={site.university}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-peru underline decoration-peru/30 underline-offset-4"
                  >
                    Visit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline. */}
      <section className="border-y border-hairline bg-cream section-pad">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">How we got here</p>
            <h2 className="display-md mt-4">Thirty-five years</h2>
            <span className="flag-rule mt-6" />
          </div>
          <ol className="mt-12 max-w-3xl">
            {timeline.map((t) => (
              <li
                key={t.year}
                className="grid gap-x-8 gap-y-2 border-t border-hairline py-6 sm:grid-cols-[9rem_1fr]"
              >
                <p className="font-serif text-[1.4rem] leading-none text-peru">
                  {t.year}
                </p>
                <p className="text-[0.98rem] leading-relaxed text-body">
                  {t.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-red bg-peru text-candle">
        <div className="shell-narrow py-16 text-center">
          <h2 className="display-md">Come and see, or let us come to you</h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            We would love to host you in Peru. Until then, we can bring the
            field to your church by video.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/schedule" className="btn btn-candle">
              Schedule a presentation
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
