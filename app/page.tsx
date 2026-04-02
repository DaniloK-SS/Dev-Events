import React from "react";
import ExploreBtn from "./components/ExploreBtn";
import EventCard from "./components/EventCard";
import { events } from "@/lib/constants";

const page = () => {
  return (
    <>
      <section>
        <h1 className="text-center">
          The Hub for Every Dev <br />
          Event You Can't Miss
        </h1>
        <p className="text-center mt-5">
          Hackathons, Meetups and Conferences, All in one Place
        </p>
      </section>
      <ExploreBtn />
      <div id="events" className="events mt-7">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </>
  );
};

export default page;
