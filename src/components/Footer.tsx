import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { Wordmark } from "@/components/Wordmark";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-red bg-peru-deep text-candle">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark tone="candle" />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
            Sent out of {site.homeChurch} ({site.homeChurchEs}),{" "}
            {site.homeChurchCity}, and laboring across Peru.
          </p>
          <p className="mt-5 font-serif text-[1.05rem] italic leading-snug text-candle/85">
            “{site.verse.text}”
            <span className="mt-1 block text-[0.78rem] not-italic tracking-[0.16em] text-candle/60">
              {site.verse.ref}
            </span>
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Reach Us</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            <li>
              <PhoneLink className="hover:text-white" />
            </li>
            <li>
              <Link href="/schedule" className="hover:text-white">
                Send a message
              </Link>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={site.orgSite}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                ibmperu.org
              </a>
            </li>
            <li>
              <a
                href={site.university}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Baptist International University
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-candle/15">
        <div className="shell flex flex-col gap-2 py-6 text-[0.8rem] text-candle/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Villa El Salvador · Pachacámac · Tarapoto</p>
        </div>
      </div>
    </footer>
  );
}
