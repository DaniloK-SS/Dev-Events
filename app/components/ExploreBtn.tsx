"use client";
import { IoMdArrowDown } from "react-icons/io";
import React from "react";
import posthog from "posthog-js";
const ExploreBtn = () => {
  const handleClick = () => {
    console.log("click");
    posthog.capture("explore_events_clicked");
  };

  return (
    <>
      <button
        type="button"
        id="explore-btn"
        className="mt-7 mx-auto"
        onClick={handleClick}
      >
        <a href="#events">
          {" "}
          Explore Events <IoMdArrowDown size={24} />
        </a>
      </button>
    </>
  );
};

export default ExploreBtn;
