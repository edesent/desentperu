import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLetter, letters } from "@/lib/letters";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return letters.map((l) => ({ slug: l.slug }));
}

// Params are async in Next 16.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const letter = getLetter(slug);
  if (!letter) return {};
  return {
    title: letter.title,
    description: letter.summary,
    alternates: { canonical: `/updates/${letter.slug}` },
    openGraph: {
      title: letter.title,
      description: letter.summary,
      type: "article",
      publishedTime: letter.date,
    },
  };
}

export default async function LetterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const letter = getLetter(slug);
  if (!letter) notFound();

  return (
    <article>
      <header className="on-red bg-peru text-candle">
        <div className="shell-narrow py-14 sm:py-20">
          <p className="eyebrow">
            <Link href="/updates" className="hover:text-candle">
              Letters &amp; updates
            </Link>
          </p>
          <h1 className="display-lg mt-4 text-candle">{letter.title}</h1>
          <span className="flag-rule mt-7" />
          <p className="mt-6 text-[0.85rem] font-semibold uppercase tracking-[0.15em] text-candle/65">
            <time dateTime={letter.date}>{letter.dateLabel}</time> · Nash &amp;
            Suzanne Desent
          </p>
          {letter.pdf && (
            <a
              href={letter.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-8"
            >
              Download the printable PDF
            </a>
          )}
        </div>
      </header>

      <div className="section-pad">
        <div className="shell-narrow">
          {letter.blocks.map((block, i) => {
            switch (block.type) {
              case "h":
                return (
                  <h2
                    key={i}
                    className="display-md mt-14 text-[1.7rem] first:mt-0 sm:text-[2rem]"
                  >
                    {block.text}
                    <span className="flag-rule mt-4" />
                  </h2>
                );
              case "p":
                return (
                  <p
                    key={i}
                    className="mt-5 text-[1.03rem] leading-[1.78] text-body"
                  >
                    {block.text}
                  </p>
                );
              case "list":
                return (
                  <ul key={i} className="mt-5 space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3.5">
                        <span
                          aria-hidden
                          className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 bg-peru"
                        />
                        <span className="text-[1.01rem] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              case "photo":
                return (
                  <figure key={i} className="mx-0 my-10">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={1600}
                      height={1100}
                      sizes="(min-width: 768px) 700px, 92vw"
                      className="h-auto w-full border border-hairline bg-cream"
                    />
                    {block.caption && (
                      <figcaption className="mt-3 text-[0.85rem] italic text-muted">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              case "quote":
                return (
                  <p
                    key={i}
                    className="mt-12 border-l-2 border-peru bg-cream px-6 py-5 font-serif text-[1.25rem] italic leading-snug text-ink"
                  >
                    {block.text}
                  </p>
                );
            }
          })}
        </div>
      </div>

      <section className="border-t border-hairline bg-cream">
        <div className="shell-narrow py-14 text-center">
          <h2 className="display-md text-[1.8rem]">
            “I will know you read this if you schedule me.”
          </h2>
          <p className="lede mx-auto mt-5 max-w-xl">
            We can present to your church live by video from Peru, or in person
            during our September 2026 trip. And a Peruvian missionary can be
            supported for $40 a month.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/schedule" className="btn btn-primary">
              Schedule a presentation
            </Link>
            <Link href="/partner" className="btn btn-outline">
              Support a missionary
            </Link>
          </div>
          <p className="mt-8 text-[0.85rem] text-muted">
            More about the organization at{" "}
            <a
              href={site.orgSite}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-peru underline decoration-peru/30 underline-offset-4"
            >
              ibmperu.org
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}
