import React from "react";
import Marquee from "react-fast-marquee";
import "common/assets/globals.css";

const RunningLine = () => {
  return (
    <Marquee
      className=" w-full lg:text-6xl text-3xl text-white lg:mb-[60px] lg:mt-[-30px] overflow-hidden "
      speed={100}
    >
      <p className="shadow-xl gradient-text font-bold 3xl:tracking-widest tracking-normal">
        STATE SONG AND DANCE ENSEMBLE
      </p>
    </Marquee>
  );
};

export default RunningLine;
