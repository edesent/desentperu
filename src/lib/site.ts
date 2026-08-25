// Every word of content on this site lives here, so it can be updated without
// touching a component. Sourced from the May 28, 2026 missionary report letter,
// the 2026 presentation video, and ibmperu.org.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://desentperu.elijahdesent.com";

/**
 * True until NEXT_PUBLIC_SITE_URL points at the real domain. Gates robots.txt
 * so a review copy can never outrank the real site.
 */
export const isDemo = !/(^|\.)ibmperu\.org$/.test(new URL(siteUrl).hostname);

export const site = {
  name: "Nash & Suzanne Desent",
  tagline: "Missionary Workers in Peru",
  shortName: "Desent Peru",
  description:
    "Nash and Suzanne Desent are independent Baptist missionaries in Lima, Peru — planting churches, publishing scriptures, and training and sending Peruvian preachers. Put them on your church\u2019s missions budget.",
  /** The organisation gifts are processed through. Named on /partner only, so
      a donor recognises it on the Donorbox receipt — it is not the site brand. */
  processedBy: "Independent Baptist Missions",
  orgSite: "https://ibmperu.org",
  homeChurch: "Landmark Baptist Church",
  homeChurchEs: "Iglesia Bautista El Lindero Antiguo",
  homeChurchCity: "Villa El Salvador, Lima, Peru",
  verse: {
    text:
      "For whosoever shall call upon the name of the Lord shall be saved.",
    ref: "Romans 10:13",
  },
  // Phone is assembled client-side from these parts so crawlers and scrapers
  // never see a dialable string in the HTML. See PhoneLink.
  phoneParts: ["401", "862", "4754"],
  donorbox: "https://donorbox.org/independent-baptist-missions",
  facebook: "https://www.facebook.com/profile.php?id=61581004076317",
  university: "https://baptistinternationalseminary.org/",
} as const;

/** Headline numbers. Each one is defensible from the report letter. */
export const figures = [
  {
    value: "35 years",
    unit: "of ministry",
    label: "Nash and Suzanne, still on the field",
    note:
      "A church founded and pastored in Rhode Island from 1991, and now a church, a home office and a university in Peru.",
  },
  {
    value: "2 tons",
    unit: "of scriptures",
    label: "New Testaments in Awajún",
    note:
      "Printed in country for Amazon tribal communities in 2024, and again in 2025. The brethren are asking for more.",
  },
  {
    value: "200,000",
    unit: "people",
    label: "Tarapoto, with no Baptist church",
    note:
      "The land is secured and the plans are finished. We need funds to build without stopping.",
  },
  {
    value: "11",
    unit: "locations",
    label: "In the 2026–2028 planting initiative",
    note:
      "From Lambayeque on the coast to Pucallpa in the jungle — some established, most still waiting on laborers.",
  },
] as const;

/** The fields. Ordered roughly by how established each work is. */
export type Work = {
  slug: string;
  name: string;
  place: string;
  status: string;
  summary: string;
  body: string[];
  photo?: { src: string; alt: string };
  need?: string;
};

export const works: Work[] = [
  {
    slug: "villa-el-salvador",
    name: "Landmark Baptist Church",
    place: "Villa El Salvador, Lima",
    status: "Established · needs a larger building",
    summary:
      "Our sending church in Lima, and the press where scriptures are printed. Full of children.",
    body: [
      "Iglesia Bautista El Lindero Antiguo — Landmark Baptist Church — is the church in Villa El Salvador where this work is anchored. The church is doing great. We had a lot of children come, and we are having youth group activities.",
      "Two children's ministries are running well. We thank God for helpers such as Sister Diana Martinez and Sister Beatriz Moreno and their great ministries with these wonderful children.",
      "The building has become the limit. We need to find a larger place to rent. We have the funds, but finding the location requires a lot of prayer.",
    ],
    photo: {
      src: "/photos/villa-children-bibles.jpg",
      alt:
        "Children standing with open Bibles and song sheets at Landmark Baptist Church in Villa El Salvador, in front of a wall reading “haced discípulos a todas las naciones”",
    },
    need: "A larger building to rent — the funds are in hand, the location is not.",
  },
  {
    slug: "pachacamac",
    name: "First Baptist Church of Pachacámac",
    place: "Pachacámac, Lima",
    status: "Established · home office",
    summary:
      "The base church, the missions office, and where university classes are taught.",
    body: [
      "The work of First Baptist Church of Pachacámac is going well. It is also our home office and, this year, the place where Baptist International University classes are being taught in Peru.",
      "We thank God for the Moreno family. Without their faithful support in labor, we could not do what we do. Please pray for this family.",
    ],
    photo: {
      src: "/photos/moreno-family.jpg",
      alt:
        "Juan and Beatriz Moreno with their children Dara and Uziel, standing against a white wall in Pachacámac",
    },
    need: "Prayer for the Moreno family, who carry much of the labor.",
  },
  {
    slug: "tarapoto",
    name: "Tarapoto",
    place: "San Martín — the Amazon jungle",
    status: "Building now · the most urgent need",
    summary:
      "A city of 200,000 with no Baptist church. The temple is painted; the parsonage is framed.",
    body: [
      "The church plant in the Amazon jungle of Peru is going very well. Jorge Rodriguez is our missionary who moved to Tarapoto in March, and God opened a door for a great rental home where Jorge conducts services.",
      "The exterior of the temple is painted and the steel structure of the parsonage is finished. Lord willing the parsonage will be completed this year so we can save on rent. The building is progressing well, and we sincerely thank all who have donated to this work.",
      "We want to thank especially Michael Van Horn of the Wallace Legacy Foundation and Michael Drust of Regions Beyond Albania for their support and labor of love for this project. We also highly appreciate evangelist Barry McKee, who has labored for this work, and give special thanks to Mount Vernon Baptist Temple and Pastor Joshua Lehman for their generous gift.",
      "We are not only working to plant churches in Tarapoto, but also in the surrounding cities that have no Baptist churches.",
    ],
    photo: {
      src: "/photos/tarapoto-temple-exterior.jpg",
      alt:
        "The newly painted white exterior of the Baptist temple in Tarapoto at dusk, with the steel-framed parsonage beside it and turned earth in the foreground",
    },
    need:
      "Funds to finish the building without stopping, and full monthly support for Jorge Rodriguez and his family.",
  },
  {
    slug: "cacatachi-and-lamas",
    name: "Cacatachi & Lamas",
    place: "20 and 40 minutes from Tarapoto",
    status: "Land secured · waiting on laborers",
    summary:
      "Land for churches and a youth camp is already bought. Lamas has no Baptist church.",
    body: [
      "For 2026 we are focusing on Tarapoto — building that work up and starting other churches in the town. But twenty minutes away is Cacatachi, and another twenty minutes is Lamas, and that city has no Baptist church.",
      "We have secured land for churches and for a camp there, and we are preparing laborers for the area. What we need is men who will surrender to the mission field. Pray the Lord of the harvest that he sends forth laborers.",
      "Do you have a desire to labor in Peru? Come help us. Having a vision for the future is necessary for a missionary — we must pray, and step through the doors God opens.",
    ],
    photo: {
      src: "/photos/map-tarapoto-region.jpg",
      alt:
        "Satellite map of the Tarapoto region labelling Pachamama, Cacatachi and Loma Linda, with Lamas to the northwest",
    },
    need: "Men who will surrender to the mission field.",
  },
  {
    slug: "tent-ministry",
    name: "The Tent Ministry",
    place: "Across Peru",
    status: "Eight campaigns since December",
    summary:
      "A tent shipped from the States in December has been raised in four regions since.",
    body: [
      "We thank God for Evangelist Pastor Larry Gibbs and his love and burden for Peru. Since last December, when Brother Gibbs shipped a tent to Peru, we have had many opportunities to help him with evangelistic campaigns.",
      "The tent has gone up in Arequipa four times, and once each in Pachacútec and Villa María, and twice in Pachacámac. The weeklong meeting in March in Pachacútec was a huge blessing: Pastor John Barnes of Northeast Gospel Crusades brought 41 American brethren for a week of labor. It was a huge coordination effort, but we were very blessed — and a mission church held its first service in that place afterward.",
      "We have more tent meetings scheduled for 2026. Brother Gibbs could use a helper and a vehicle to travel Peru. Please pray for those things.",
    ],
    photo: {
      src: "/photos/tent-meeting-night.jpg",
      alt:
        "A full tent meeting at night in Pachacútec, evangelist Denton Bell preaching from a lit platform to rows of seated people in white plastic chairs",
    },
    need: "A helper and a vehicle so Brother Gibbs can keep travelling.",
  },
];

/** Seed · Sowers · Senders — how the whole ministry is summarized. */
export const pillars = [
  {
    key: "Seed",
    es: "Semilla",
    heading: "The scriptures, printed in country",
    body:
      "We are committed to publishing and distributing scriptures in Peru and South America. We produced a ton of New Testaments in the Awajún language for tribal communities in northern Peru in 2024, and another ton in 2025. The brethren are asking for more. We can print them in country for a fraction of what they cost elsewhere — we have the ability to publish and distribute, but our funds are low.",
    since: "Bearing Precious Seed since 1996 in Honduras, and in Peru since 2016",
  },
  {
    key: "Sowers",
    es: "Sembradores",
    heading: "Training pastors, preachers and missionaries",
    body:
      "Pastor Desent is president of Baptist International University. Though he works physically from Peru, the international work of the university continues: brethren in Liberia are training many students, schools in Peru and Chile are going forward, we have hopes of approval in Rwanda, and other countries are beginning to be involved.",
    since: "Founded 1977",
  },
  {
    key: "Senders",
    es: "Enviadores",
    heading: "Churches sending, and churches multiplying",
    body:
      "Part of our own labor is filtering and approving missionaries, so that a church\u2019s missions giving lands on men who will last. Nash personally screens each man and knows his work. We strive to plant a church every year, and we encourage every missionary and church we minister to to support two new missionaries every year — and to teach them to do the same.",
    since: "Over 35 years in missions, scriptures and training men",
  },
] as const;

/** The 2026–2028 initiative, rebuilt from the map in the report letter. */
export const plantingStatuses = {
  operatingWithLand: {
    label: "Established and operating, with land",
    color: "#2E7D32",
  },
  operatingNoLand: {
    label: "Established and operating, without land",
    color: "#E5A50A",
  },
  startedWithLand: {
    label: "Started under a missionary, with land",
    color: "#E05252",
  },
  futureWithLand: { label: "Planned, land secured", color: "#5B8FD4" },
  futureNoLand: { label: "Planned, land still needed", color: "#8B7BC8" },
} as const;

export type PlantingStatus = keyof typeof plantingStatuses;

export const plantingSites: {
  name: string;
  region: string;
  status: PlantingStatus;
  note?: string;
}[] = [
  { name: "Pachacámac", region: "Lima", status: "operatingWithLand" },
  {
    name: "Jauja",
    region: "Junín",
    status: "operatingWithLand",
    note: "A partner church; has two missions of its own",
  },
  { name: "Villa El Salvador", region: "Lima", status: "operatingNoLand" },
  { name: "Tarapoto", region: "San Martín", status: "startedWithLand" },
  { name: "Lamas", region: "San Martín", status: "futureWithLand" },
  { name: "Cacatachi", region: "San Martín", status: "futureWithLand" },
  { name: "Lambayeque", region: "Lambayeque", status: "futureWithLand" },
  { name: "Juanjuí", region: "San Martín", status: "futureNoLand" },
  { name: "Pucallpa", region: "Ucayali", status: "futureNoLand" },
  { name: "Cañete", region: "Lima", status: "futureNoLand" },
  { name: "Santa Rosa", region: "—", status: "futureNoLand" },
];

/** Straight from the letter's prayer requests and 2026 plans. */
export const prayerRequests = [
  "Funds for scripture publishing and for supporting Peruvian missionaries going into the world. This is our biggest need.",
  "A larger building to rent for the church in Villa El Salvador.",
  "Full financial support for Jorge Rodriguez and his family in Tarapoto.",
  "Men who will surrender to the mission field for Cacatachi, Lamas and other places.",
  "A helper and a vehicle for Brother Gibbs and the tent ministry.",
  "The many churches and pastors across South America, who have needs of their own.",
];

export const plans2026 = [
  "More missions conferences in different areas",
  "The August leadership conference",
  "More trips to the jungle works",
  "Tent meetings",
  "The church planting initiative",
  "University classes here in Pachacámac",
];

/**
 * Why a church should put Nash and Suzanne on its missions budget. This is
 * deliberately NOT an argument for funding a national instead of an American —
 * they are the Americans being supported. It is an argument about reach.
 */
export const whySupportUs = [
  {
    heading: "Thirty-five years in",
    body:
      "This is not a work being started. A church founded and pastored from 1991, a church and home office in Peru, and national pastors known personally in every one of the 24 departments of the country.",
  },
  {
    heading: "Your support multiplies",
    body:
      "We do not only labor ourselves. We train Peruvian men and send them, and a Peruvian man can labor on a small fraction of what an American needs. Supporting us funds the training, the sending and the oversight — not one household.",
  },
  {
    heading: "You will hear from us",
    body:
      "Full report letters from the field, with photographs and names, and a live presentation to your church whenever you want one. Every letter we have sent is on this site to read before you decide.",
  },
  {
    heading: "Peru sends",
    body:
      "Spanish is the most-spoken language in this hemisphere — 2.6 times that of English. Our vision is to make Peru a missionary-sending country, as England was in the 1800s and the USA in the 1900s.",
  },
];

/** Churches already standing with the work, from ibmperu.org. */
export const partnerChurches = [
  "Bellingham Bible Baptist Church — Bellingham, Massachusetts",
  "Bible Baptist Church — Central Falls, Rhode Island",
  "First Baptist Church of Bellingham — Bellingham, Massachusetts",
  "Highland Hills Baptist Church — Michigan",
  "Historic Baptist Church — North Kingstown, Rhode Island",
  "Milford Bible Baptist Church — Milford, Massachusetts",
  "Open Bible Baptist Church — Brooklyn, Connecticut",
  "Open Door Baptist Church — New Bedford, Massachusetts",
  "State Line Baptist Church — New Hampshire",
  "Truth Baptist Church — Dubois, Wyoming",
  "Westview Baptist Church — Warren, Michigan",
  "Iglesia Bautista Bíblica Los Trigales — Tarija, Bolivia",
  "Iglesia Bautista de la Comunidad — Rocha, Uruguay",
  "Iglesia Bautista Bíblica de Ventanilla — Ventanilla, Peru",
  "Iglesia Bautista El Lindero Antiguo — Villa El Salvador, Peru",
  "Iglesia Bautista Central de Jauja — Jauja, Peru",
  "Primera Iglesia Bautista de Pachacámac — Peru",
  "Iglesia Bautista Antioquia — Villalta, Arequipa, Peru",
];

export const nav = [
  { href: "/the-work", label: "The Work" },
  { href: "/updates", label: "Updates" },
  { href: "/about", label: "About Us" },
  { href: "/schedule", label: "Have Us Present" },
  { href: "/partner", label: "Partner" },
];
