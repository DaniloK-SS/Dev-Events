"use client";
import { IoMdArrowDown } from "react-icons/io";
import React from "react";
const ExploreBtn = () => {
  return (
    <>
      <button
        type="button"
        id="explore-btn"
        className="mt-7 mx-auto"
        onClick={() => console.log("click")}
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
