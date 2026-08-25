"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-hairline bg-parchment/95 backdrop-blur"
          : "border-transparent bg-parchment"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/ibm-logo.png"
            alt="Independent Baptist Missions"
            width={1400}
            height={595}
            priority
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden border-l border-hairline pl-3 text-[0.78rem] leading-tight text-muted sm:block">
            Nash &amp; Suzanne Desent
            <span className="block text-[0.7rem] tracking-wide text-peru-bright">
              Missionaries to Peru
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-[0.9rem] font-medium transition-colors hover:text-peru ${
                  active ? "text-peru" : "text-body"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-peru" />
                )}
              </Link>
            );
          })}
          <Link href="/partner" className="btn btn-primary !py-2.5 !px-5">
            Support the Work
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-[2px] w-6 bg-ink transition-all ${
                open ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[2px] w-6 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-6 bg-ink transition-all ${
                open ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-parchment lg:hidden">
          <nav className="shell flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-hairline/60 py-3.5 text-[1.05rem] ${
                  pathname === item.href ? "text-peru" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/partner" className="btn btn-primary mt-4">
              Support the Work
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
