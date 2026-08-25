// Field letters, kept as structured content rather than only as PDFs — a PDF
// is invisible to search, awkward on a phone, and cannot be linked to a
// section. The original PDF stays available for churches that print it.

export type LetterBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "photo"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string };

export type Letter = {
  slug: string;
  title: string;
  date: string; // ISO
  dateLabel: string;
  summary: string;
  pdf?: string;
  blocks: LetterBlock[];
};

export const letters: Letter[] = [
  {
    slug: "may-2026-report",
    title: "May 2026 Missionary Report",
    date: "2026-05-28",
    dateLabel: "May 28, 2026",
    summary:
      "Halfway through 2026: baptisms planned, a temple painted in Tarapoto, eight tent campaigns since December, and a cardiac MRI that came back clear.",
    pdf: "/letters/may-2026-missionary-report.pdf",
    blocks: [
      {
        type: "p",
        text: "Dear wonderful supporting churches and our dear brothers and sisters. Praise God, we have made it halfway through 2026 to labor for the Lord Jesus Christ. There is so much happening here! Because of the great work God is doing, I will divide this letter into sections and elaborate accordingly.",
      },
      {
        type: "p",
        text: "First, thank you so much for your prayers and faithful support.",
      },
      { type: "h", text: "Souls saved and baptized" },
      {
        type: "p",
        text: "Everywhere we go there are opportunities to win souls. Our church has a few baptisms planned for the next couple of months. God is blessing us in evangelism and church growth.",
      },
      { type: "h", text: "Children's ministries" },
      {
        type: "p",
        text: "The two ministries with children are going well. Thank God for helpers such as Sister Diana Martinez and Sister Beatriz Moreno and their great ministries with these wonderful children.",
      },
      {
        type: "photo",
        src: "/photos/villa-children-singing.jpg",
        alt: "A group of young children holding song sheets and singing on the platform steps at Landmark Baptist Church, a teacher singing with them from an open songbook",
        caption: "The children's ministry in Villa El Salvador.",
      },
      { type: "h", text: "Many visitors and events" },
      {
        type: "p",
        text: "Part of the ministry is hospitality and encouraging visitors to see the need, and hopefully to support missions in a greater way. This half-year has held trips to the Amazon jungle for the Tarapoto work, trips to Cacatachi and Lamas for the next church plants, visits from many brethren from the USA and other areas of Peru, tent meetings, missions conferences and holiday celebrations.",
      },
      { type: "h", text: "Trip to the USA" },
      {
        type: "p",
        text: "During January, Suzanne and I were in Massachusetts for a cardiac MRI. The results show my heart has no scarring, normal size, and I am no longer in danger. God is good. God used this to move me to get things in order, because we do not know how much time we have. Consequently, we are moving quickly this year to get things in place for the next generation. Overall I feel great, but I am still taking care of my health. We thank you for your prayers.",
      },
      {
        type: "p",
        text: "We are planning a trip in September for a month to report to churches. If you want to schedule me, it is a blessing to come. I will know you read this if you schedule me.",
      },
      { type: "h", text: "Villa El Salvador" },
      {
        type: "p",
        text: "The church in Villa is doing great. We had a lot of children come and we are having youth group activities. We need to find a larger place to rent. We have the funds, but finding the location requires a lot of prayer.",
      },
      {
        type: "photo",
        src: "/photos/villa-congregation.jpg",
        alt: "About forty members and visitors of the church in Villa El Salvador gathered for a group photograph inside the meeting hall, beneath a banner reading “Por tanto, id, y haced discípulos a todas las naciones”",
      },
      { type: "h", text: "Pachacámac" },
      {
        type: "p",
        text: "The work of First Baptist Church of Pachacámac is going well. We thank God for the Moreno family. Without their faithful support in labor, we could not do what we do. Please pray for this family.",
      },
      {
        type: "photo",
        src: "/photos/moreno-family.jpg",
        alt: "Juan and Beatriz Moreno with their children Dara and Uziel, standing together against a white wall",
        caption: "Juan and Beatriz Moreno, and children Dara and Uziel.",
      },
      { type: "h", text: "Tarapoto" },
      {
        type: "p",
        text: "The church plant in the Amazon jungle of Peru is going very well. We want to thank especially Michael Van Horn from the Wallace Legacy Foundation and Michael Drust from Regions Beyond Albania for their support and labor of love for this project. We also highly appreciate evangelist Barry McKee, who has labored for this work.",
      },
      {
        type: "p",
        text: "Jorge Rodriguez is our missionary who moved to Tarapoto in March. God opened a door for a great rental home where Jorge conducts services. Lord willing the parsonage will be finished this year so we can save on rent. Please pray and consider giving to this great work. We are not only working to plant many churches in Tarapoto, but also in the surrounding cities that have no Baptist churches.",
      },
      {
        type: "p",
        text: "Please also pray for Jorge and his family to get the financial support needed so they can operate full-time in Tarapoto. The building is progressing well, and we sincerely thank all who have donated to this work. Much fruit will be added to your account! We want to give a special thanks to Mount Vernon Baptist Temple and Pastor Joshua Lehman for their generous gift to this work. Thank you so much!",
      },
      {
        type: "photo",
        src: "/photos/tarapoto-temple-exterior.jpg",
        alt: "The exterior of the Tarapoto temple, freshly painted white with red brick detail, photographed at dusk with the parsonage structure to the left",
        caption:
          "The exterior of the temple is painted in Tarapoto, and the parsonage steel structure is finished.",
      },
      { type: "h", text: "New works in Cacatachi and Lamas" },
      {
        type: "p",
        text: "For 2026 we will be focusing on the work in Tarapoto — building that work up and starting other churches in that town, which currently has no Baptist churches. However, twenty minutes away is Cacatachi, and another twenty minutes is Lamas, and that city has no Baptist church. We are preparing laborers for that area. We have secured land for churches and a camp there, but we need more men to surrender to the mission field. Pray the Lord of the harvest that he sends forth laborers!",
      },
      {
        type: "p",
        text: "Do you have a desire to labor in Peru? Come help us. We need laborers for Cacatachi, Lamas and other places. Having a vision for the future is necessary for a missionary. We must pray and step through doors that God opens for us.",
      },
      { type: "h", text: "Tent meeting ministry" },
      {
        type: "p",
        text: "We thank God for Evangelist Pastor Larry Gibbs and his love and burden for Peru. Since last December, when Larry Gibbs shipped a tent to Peru, we have had many opportunities to help him with evangelistic campaigns.",
      },
      {
        type: "list",
        items: [
          "Arequipa — four meetings",
          "Pachacútec — one meeting",
          "Villa María — one meeting",
          "Pachacámac — two meetings",
        ],
      },
      {
        type: "p",
        text: "The weeklong meeting in March in Pachacútec was a huge blessing. Pastor John Barnes of Northeast Gospel Crusades brought 41 American brethren for a week of labor. It was a huge coordination effort, but we were very blessed.",
      },
      {
        type: "photo",
        src: "/photos/tent-meeting-night.jpg",
        alt: "A crowded tent meeting at night in Pachacútec, with evangelist Denton Bell preaching from a lit platform to rows of people seated in white plastic chairs",
        caption: "Tent meeting at night — Evangelist Denton Bell preaching.",
      },
      {
        type: "photo",
        src: "/photos/mission-church-first-service.jpg",
        alt: "Around forty workers and visitors standing together for a photograph in the new mission church, a metal-roofed structure with unfinished block and timber walls",
        caption:
          "The first church service in the mission church after the tent meeting — workers and visitors.",
      },
      {
        type: "p",
        text: "Please pray for this tent ministry work in Peru. We have more tent meetings scheduled for 2026. Brother Gibbs could use a helper and a vehicle to travel Peru. Please pray for those things.",
      },
      { type: "h", text: "Seed, Sowers and Senders" },
      {
        type: "p",
        text: "Many of you know that we summarize our ministry here in Peru as Seed, Sowers and Senders. Seed means we are committed to the publication and distribution of scriptures in Peru and South America. We encourage churches to do what they can, even if it is on the micro level of publishing and distribution.",
      },
      {
        type: "p",
        text: "We produced a ton of New Testaments in the Awajún language for tribal communities in northern Peru in 2024. We also published another ton in 2025. The brethren are asking for more Bibles. We can print them here very inexpensively. Please pray for this. We have the ability to publish and distribute, but our funds are low.",
      },
      {
        type: "p",
        text: "Sowers is the training of pastors, preachers and missionaries through our university — Baptist International University. This is going well; we have helpers who teach the program, and students all over the world. Although I am physically working from Peru, the international work of the university continues. We have wonderful brethren in Liberia, Africa who are doing a great work training many students. We also have hopes of school approval in Rwanda. Schools in Peru and Chile are going forward, and other countries are starting to be involved.",
      },
      {
        type: "p",
        text: "Senders: supporting missions through our churches and our missions office is always active, thanks to God. But we also do a lot of preaching and teaching in churches all over to encourage their support of missions. We strive to plant a church every year. We also encourage every missionary and church we minister to to support two new missionaries every year, and encourage them to do this also. We act as a clearinghouse to filter and approve missionaries we believe are very good investments for your missionary support dollars.",
      },
      { type: "h", text: "Special blessings" },
      {
        type: "p",
        text: "Many have given to the work here. I want to sincerely thank you all, and to give a very special thanks for the church missions trip from Highland Hills Baptist Church in Michigan. It was WONDERFUL having our beloved brethren visit. Pastor Matt Leathley and his group are a tremendous blessing to us, and we thank them immensely!",
      },
      {
        type: "p",
        text: "Thank you all, dear brethren — you know who you are. All who give and pray for our work have a part in the rewards for the work accomplished here in South America.",
      },
      { type: "h", text: "Prayer requests" },
      {
        type: "p",
        text: "We do ask that you pray for more funds to be given for scripture publishing and for supporting Peruvian missionaries going into the world. This is our biggest need. Please know that every penny given goes to these works. We know this work is in God's hands, but he indeed hears our prayers. We use much of our personal funds for these works, but the need is still great.",
      },
      {
        type: "p",
        text: "Please also pray for the many churches and pastors in South America. They also have needs, and we do what we can to help them.",
      },
      { type: "h", text: "Final words" },
      {
        type: "p",
        text: "Two things in conclusion. First, please plan on visiting — we have comfortable and safe accommodations. Secondly, please consider giving to the work in Tarapoto and the surrounding areas. The city has 200,000 people and no Baptist church. We have the land and the plans finished, and some funds ready for the construction. We just need added funds so we can start without stopping.",
      },
      {
        type: "quote",
        text: "God bless you all, Nash and Suzanne Desent — your servants in Peru.",
      },
    ],
  },
];

export function getLetter(slug: string) {
  return letters.find((l) => l.slug === slug);
}
