
export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-06-12",
    time: "09:00",
},
    
  {
    image: "/images/event2.png",
    title: "Google I/O Extended",
    slug: "google-io-extended",
    location: "San Francisco, USA",
    date: "2026-05-20",
    time: "10:00",
    
  },
  {
    image: "/images/event3.png",
    title: "Global Hack Week",
    slug: "global-hack-week",
    location: "Online",
    date: "2026-03-10",
    time: "12:00",
    
  },
  {
    image: "/images/event4.png",
    title: "JS Nation",
    slug: "js-nation",
    location: "Remote",
    date: "2026-04-18",
    time: "11:00",

  },
  {
    image: "/images/event5.png",
    title: "AI & ML Meetup",
    slug: "ai-ml-meetup",
    location: "New York, USA",
    date: "2026-02-25",
    time: "18:00",
    
  },
  {
    image: "/images/event6.png",
    title: "HackMIT",
    slug: "hackmit",
    location: "Cambridge, USA",
    date: "2026-09-14",
    time: "09:30",
    
  },
];