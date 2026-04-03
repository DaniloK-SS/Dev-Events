import React from "react";
import ExploreBtn from "../components/ExploreBtn";
import EventCard from "../components/EventCard";
import { IEvent } from "@/database/event.model";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  let events: IEvent[] = [];

  try {
    const res = await fetch(`${BASE_URL}/api/events`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const data = await res.json();
      events = data.events;
    }
  } catch (error) {
    console.error("Failed to fetch events:", error);
  }

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
        {events.length > 0 ? (
          events.map((event: IEvent) => (
            <EventCard key={event.slug} {...event} />
          ))
        ) : (
          <p className="text-center">No events found.</p>
        )}
      </div>
    </>
  );
};

export default page;
