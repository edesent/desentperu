"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Facebook's page plugin, behind a click. Loaded eagerly it pulls in third-party
 * scripts and cookies on every page view and still often renders blank on
 * mobile, so it stays opt-in and the curated highlights above carry the page.
 */
export function FacebookFeed() {
  const [loaded, setLoaded] = useState(false);

  const src =
    "https://www.facebook.com/plugins/page.php?" +
    new URLSearchParams({
      href: site.facebook,
      tabs: "timeline",
      width: "500",
      height: "700",
      small_header: "false",
      adapt_container_width: "true",
      hide_cover: "false",
      show_facepile: "false",
    }).toString();

  return (
    <div className="border border-hairline bg-white">
      {loaded ? (
        <iframe
          src={src}
          title="Facebook posts from the mission work in Peru"
          scrolling="no"
          frameBorder={0}
          allow="encrypted-media"
          className="block h-[700px] w-full border-0"
        />
      ) : (
        <div className="p-8 text-center sm:p-10">
          <h3 className="display-sm text-[1.15rem]">
            The live Facebook feed
          </h3>
          <p className="mx-auto mt-3 max-w-md text-[0.92rem] leading-relaxed text-muted">
            Loads Facebook's own timeline widget, including their cookies. The
            highlights above are the same news without it.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="btn btn-primary"
            >
              Load the feed
            </button>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Open on Facebook
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
