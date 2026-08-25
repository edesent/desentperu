import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { isDemo, site, siteUrl } from "@/lib/site";
import "./globals.css";

// Self-hosted: next/font/google downloads at build time, and a network blip on
// a Vercel build worker turns that into a hard deploy failure.
const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-latin.woff2", weight: "300 700", style: "normal" },
    {
      path: "../fonts/cormorant-latin-ext.woff2",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const inter = localFont({
  src: [
    { path: "../fonts/inter-latin.woff2", weight: "300 700", style: "normal" },
    { path: "../fonts/inter-latin-ext.woff2", weight: "300 700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.org,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [{ url: "/promo-poster.jpg", width: 832, height: 464 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/promo-poster.jpg"],
  },
  robots: isDemo
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
      },
  category: "religion",
  icons: {
    icon: [{ url: "/ibm-logo-512.png", type: "image/png" }],
    shortcut: ["/ibm-logo-512.png"],
    apple: ["/ibm-logo-512.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-peru focus:px-4 focus:py-2 focus:text-candle"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
