// Form delivery through the WBC Chat backend: a submitted form is posted into a
// Slack channel and @-mentions the recipient, so it reaches a phone in seconds.
//
// This path needs no verified sending domain, unlike email, so the form works
// the day the site ships.
//
// The key is public by design — it only permits posting into this site's own
// Slack channel and cannot read anything — so it lives in the repo rather than
// an env var, which keeps preview deploys and local dev working. WBC_API_KEY
// overrides it if it ever needs rotating without a commit.
export const CHAT = {
  origin: "https://slackwebsitechat.vercel.app",
  apiKey:
    process.env.WBC_API_KEY ??
    "wbc_2f46177e997cfde67678e2bd63ebe9df89573877a5a28b7b",
  /** WBC site id, for the admin API. */
  siteId: "98872898-fe3f-4934-82e0-5f7f4d7f0380",
} as const;
