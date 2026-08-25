// Short field notes, mirroring what gets posted to Facebook. Facebook's embed is
// also on the page, but it is slow, off-brand, and often blank on mobile — so
// the highlights that matter are kept here where they always render, stay
// searchable, and can be linked to.
//
// To add one: copy the post's words, pick a photo already in /public/photos (or
// add a new one), and put the newest entry at the top.

export type Update = {
  date: string; // ISO
  dateLabel: string;
  title: string;
  body: string;
  photo?: { src: string; alt: string };
};

export const updates: Update[] = [
  {
    date: "2026-05-28",
    dateLabel: "May 2026",
    title: "The temple exterior is painted in Tarapoto",
    body: "The parsonage steel structure is finished, and Lord willing the parsonage itself will be done this year so we can stop paying rent. Jorge Rodriguez moved to Tarapoto in March and is conducting services in a rental home God opened for us.",
    photo: {
      src: "/photos/tarapoto-temple-exterior.jpg",
      alt: "The freshly painted white exterior of the Tarapoto temple at dusk with the steel-framed parsonage alongside",
    },
  },
  {
    date: "2026-03-20",
    dateLabel: "March 2026",
    title: "41 American brethren for a week in Pachacútec",
    body: "Pastor John Barnes of Northeast Gospel Crusades brought forty-one brethren for a weeklong tent campaign. It was a huge coordination effort and a huge blessing — and a mission church held its first service in that place afterward.",
    photo: {
      src: "/photos/tent-meeting-night.jpg",
      alt: "A full tent meeting at night, evangelist Denton Bell preaching from a lit platform",
    },
  },
  {
    date: "2026-03-01",
    dateLabel: "March 2026",
    title: "A mission church's first service",
    body: "After the tent came down in Pachacútec, the workers and visitors gathered for the first service of the new mission church. This is what a tent meeting is for.",
    photo: {
      src: "/photos/mission-church-first-service.jpg",
      alt: "Around forty workers and visitors standing for a photograph at the first service of the new mission church",
    },
  },
  {
    date: "2026-01-25",
    dateLabel: "January 2026",
    title: "The MRI came back clear",
    body: "Suzanne and I were in Massachusetts for a cardiac MRI. The results show no scarring, normal size, and I am no longer in danger. God is good. He used this to move us to get things in order for the next generation — we do not know how much time we have.",
  },
];
