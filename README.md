# Nash & Suzanne Desent — Missionaries to Peru

Missionary support site for Nash and Suzanne Desent, independent Baptist
missionaries in Lima, Peru, working through Independent Baptist Missions (IBM).
Its job is to get a pastor from "who is this?" to one of two actions:

1. **Schedule a presentation** — usually a live video call from the field,
   because they are in Peru most of the year. This is the primary ask.
2. **Support a missionary** — via Donorbox, with **no figure named**.

The site is branded to **Nash and Suzanne themselves**, not to the missions
organisation. There is no IBM logo and no IBM wordmark: the mark is their names
plus the Peruvian flag bar (`src/components/Wordmark.tsx`, `src/app/icon.svg`).

Two related rules, both deliberate:

- **Never name a support amount.** No "$40/month", no "$3 a Bible". The
  argument is made with ratios and weights instead — "a tenth of the cost",
  "2 tons of scriptures" — and /partner says plainly that no figure is being
  asked for. **And giving is not itemised.** /partner describes what a gift
  supports as a plain list, but offers a single custom amount — no fund
  buttons, no per-project tiers, nothing to designate. `supports` in
  `src/app/partner/page.tsx` is prose about the work, not a set of options.
- **Don't rebrand the site to the organisation.** Independent Baptist Missions
  is named in exactly one place — the giving section of `/partner`, via
  `site.processedBy` — so a church recognises the name on its Donorbox receipt.
  That single mention is there for honesty about where money goes; everything
  else speaks as Nash and Suzanne.

The organisation's own site is [ibmperu.org](https://ibmperu.org); this site is
personal to Nash and Suzanne and links out to it.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Turbopack; must pass before pushing
```

Next.js 16 (App Router, Turbopack by default), React 19, Tailwind v4.
**Note:** this Next version differs from older docs — check
`node_modules/next/dist/docs/` before changing framework-level code. Request
APIs (`params`, `cookies`, `headers`) are async.

## Where the content lives

Almost nothing is hardcoded in a component. To change words, edit these:

| File | What's in it |
| --- | --- |
| `src/lib/site.ts` | Identity, phone, links, the headline figures, the five works, Seed/Sowers/Senders, the planting initiative, prayer requests, partner churches, nav |
| `src/lib/letters.ts` | Full mission letters, as structured blocks → rendered at `/updates/<slug>` |
| `src/lib/updates.ts` | Short field notes ("Notes from Facebook") |
| `src/config/chat.ts` | Form-to-Slack key |
| `src/app/globals.css` | The whole design system (colours, type, buttons) |

### Adding a new mission letter

1. Drop the PDF in `public/letters/`.
2. Add an entry to the top of `letters` in `src/lib/letters.ts` — `blocks` is an
   array of `{type: "h" | "p" | "list" | "photo" | "quote"}`.
3. Add any new photos to `public/photos/` with a real `alt` written after
   actually looking at the image.

The letter becomes a page automatically, appears on `/updates`, and enters the
sitemap. Keeping letters as text (not only PDFs) matters: a PDF is invisible to
search, awkward on a phone, and can't be linked to by section.

### Adding a field update

Add to the top of `updates` in `src/lib/updates.ts`. These are hand-carried from
Facebook on purpose — Facebook has no open API, and its own embed is slow,
off-brand, and frequently blank on mobile. The live embed is still on the page,
behind a click, as a secondary.

## Design system

Sourced by sampling the 2026 presentation video frame by frame, so the site and
the video read as one piece:

- `--color-peru` **#700001** — the video's field red, and the site's anchor
- `--color-candle` **#f0e6cf** — the warm off-white the video sets type in
- `--color-cream` **#f3f3eb** / `--color-parchment` **#faf9f4** — page grounds
- `--color-peru-bright` **#a81f23** — the letterhead red, used for eyebrows
- `--color-slate-ink` **#2b4250** — the video's closing frame, used for the
  John 4:35 band
- Cormorant Garamond (display) + Inter (body), both **self-hosted** in
  `src/fonts/`

Conventions worth keeping:

- **Red bands get `.on-red`.** It flips heading, paragraph and rule colours to
  candle. A dark heading on a dark band is the failure mode this prevents.
- **Custom classes live in `@layer components`.** Unlayered CSS beats every
  Tailwind utility and forces `!important` hacks downstream.
- **`.flag-rule`** is the red/white/red hairline used under section headings.
- Fonts are self-hosted because `next/font/google` downloads at build time, and
  a network blip on a Vercel build worker turns that into a hard deploy failure.

## Privacy and safety choices

These are deliberate — please don't undo them:

- **The phone number is never in the HTML.** It's assembled client-side from
  parts in `site.ts` by `PhoneLink`, so scrapers don't harvest it.
- **No email address is printed anywhere.** Contact routes through
  `/schedule`. (`nash.desent@outlook.com` is on ibmperu.org already; this site
  doesn't add another scrapeable copy.)
- **Jorge Rodriguez's support card is not published.** The May 2026 PDF contains
  a page with his family's bank account numbers, CCI codes and personal mobile
  numbers. That image was deliberately excluded from `public/photos/`. Don't add
  it.
- **Third-party embeds are click-to-load.** Donorbox and the Facebook feed both
  wait for a click — a giving iframe mounted on load hijacks the scroll wheel,
  and Facebook's widget drags in cookies on every page view.
- **All photos are real.** Every image is from the church's own report letter or
  their existing site. No AI-generated or upscaled imagery, and nothing
  desaturated.

## Forms

`/schedule` posts to `/api/schedule`, which validates server-side and forwards
to Slack through the WBC Chat backend (`src/lib/slack-form.ts`). There's a
honeypot field named `website`.

**One manual step remains:** the Slack OAuth connection. Until it's done, the
endpoint returns 503 and the form shows a failure message.

1. WBC site is already provisioned — id `98872898-fe3f-4934-82e0-5f7f4d7f0380`.
2. Create the Slack channel (e.g. `#desent-peru`).
3. Open `https://slackwebsitechat.vercel.app/api/slack/install?site=98872898-fe3f-4934-82e0-5f7f4d7f0380`
   and click **Add to Slack**. This is the only step that can't be automated.
4. Set the channel via `PUT /api/admin/sites` with
   `{id, slackChannelId, slackNotifyUserId}` and `Bearer $WBC_ADMIN_SECRET`.
5. Submit the form once and confirm it lands.

## Going live

The site **noindexes itself** until it's on the real domain — a review copy
re-hosts the ministry's own words and photos, and indexed it would compete with
their real site.

`src/lib/site.ts`:

```ts
export const isDemo = !/(^|\.)ibmperu\.org$/.test(new URL(siteUrl).hostname);
```

To launch:

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain in Vercel (production).
2. Redeploy.
3. Verify: `curl -s https://<domain>/robots.txt` should now `Allow: /`.

That one variable fixes robots, every canonical URL, and the sitemap at once.
If the domain is **not** under `ibmperu.org`, update the `isDemo` regex to match
whatever it is, or the site will stay noindexed.

## Wording changed from the source material

Eli asked for **no dollar amounts** and **no IBM branding**. Two places where
that meant editing text that was originally Nash's own:

- The May 2026 letter said *"We can print them here for about $3 per Bible"* →
  now *"very inexpensively"*.
- The same letter said *"IBM is a clearinghouse…"* and *"through our churches
  and IBM"* → now *"We act as a clearinghouse…"* and *"our missions office"*.

**The downloadable PDF still contains the original wording**, since it is the
document as it was actually sent. If the letter should read verbatim instead,
revert those three strings in `src/lib/letters.ts`.

## Facts to confirm with Nash before launch

Two inconsistencies between the May 2026 letter and ibmperu.org — the letter was
used where they conflict:

- **Phone.** Letterhead says `(401) 862-4754`; ibmperu.org says `401.862.6604`.
  The letterhead number is live on the site.
- **Home church.** The May 2026 letterhead says IBM is "a ministry of Landmark
  Baptist Church, Villa El Salvador" (Iglesia Bautista El Lindero Antiguo);
  ibmperu.org says "a ministry of the First Baptist Church of Pachacámac." The
  site follows the letterhead and mentions Pachacámac as the base church and
  home office.

Also unconfirmed: there is **no mailing address** for check giving anywhere in
the source material, so `/partner` invites churches to write for the details
rather than inventing one.
