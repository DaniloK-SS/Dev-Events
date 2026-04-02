"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import posthog from "posthog-js";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  const handleClick = () => {
    posthog.capture("event_card_clicked", {
      event_title: title,
      event_slug: slug,
      event_location: location,
      event_date: date,
    });
  };

  return (
    <Link href={`/events/${slug}`} id="event-card" onClick={handleClick}>
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />
      <div className="flex flex-row items-center gap-2 mt-2">
        <Image src="/icons/pin.svg" alt="lokacija" width={16} height={16} />
        <p>{location}</p>
      </div>
      <p className="title mt-2">{title}</p>
      <div className="flex flex-row items-center gap-2 mt-1">
        <Image src="/icons/calendar.svg" alt="date" width={16} height={16} />
        <p>{date}</p>
        <Image src="/icons/clock.svg" alt="clock" width={16} height={16} />
        <p>{time}</p>
      </div>
    </Link>
  );
};

export default EventCard;
