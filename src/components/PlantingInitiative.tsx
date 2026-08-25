import Image from "next/image";
import { plantingSites, plantingStatuses } from "@/lib/site";

/**
 * The 2026–2028 initiative. The report letter carries this as a flat image; here
 * it is real text so it is searchable, translatable and readable on a phone.
 * The original map is kept alongside as the visual reference.
 */
export function PlantingInitiative() {
  const order = Object.keys(plantingStatuses) as (keyof typeof plantingStatuses)[];
  const grouped = order
    .map((status) => ({
      status,
      ...plantingStatuses[status],
      sites: plantingSites.filter((s) => s.status === status),
    }))
    .filter((g) => g.sites.length > 0);

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
      <div>
        <ul className="space-y-8">
          {grouped.map((group) => (
            <li key={group.status}>
              <p className="flex items-center gap-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-muted">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ background: group.color }}
                />
                {group.label}
              </p>
              <ul className="mt-3 divide-y divide-hairline border-t border-hairline">
                {group.sites.map((s) => (
                  <li
                    key={s.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-2.5"
                  >
                    <span className="display-sm text-[1.05rem]">{s.name}</span>
                    <span className="text-[0.85rem] text-muted">
                      {s.region}
                    </span>
                    {s.note && (
                      <span className="w-full text-[0.83rem] italic text-muted">
                        {s.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <figure className="m-0">
        <Image
          src="/photos/map-church-planting.jpg"
          alt="IBM Church Planting Initiative 2026–2028 map of Peru, with eleven locations colour-coded by whether a church is established, started, or planned and whether land has been secured"
          width={1312}
          height={1600}
          sizes="(min-width: 1024px) 420px, 92vw"
          className="h-auto w-full border border-hairline bg-white"
        />
        <figcaption className="mt-3 text-[0.82rem] text-muted">
          The initiative as it appears in the May 2026 report letter.
        </figcaption>
      </figure>
    </div>
  );
}
