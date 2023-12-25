"use client";
import React, { useState } from "react";
import MainPageOne from "../common/components/__molecules/MainPageOne/MainPageOne";
import MainPageTwoVideo from "../common/components/__molecules/MainPageTwoVideo/MainPageTwoVideo";
import MainPageThree from "../common/components/__molecules/MainPageThree/MainPageThree";
import MainPageFour from "../common/components/__molecules/MainPageFour/MainPageFour";
import MainPageFive from "../common/components/__molecules/MainPageFive/MainPageFive";
import RunningLine from "../common/components/__atoms/RunningLine/RunningLine";
import MainPageSix from "../common/components/__molecules/MainPageSix/MainPageSix";

export default function Home() {

  return (
    <>
      <MainPageOne />
      <MainPageTwoVideo />
      <div className=" bg-mainPageThreebg bg-contain bg-[#161616]">
        <MainPageThree />
        <RunningLine />
        <MainPageFour />
        <MainPageFive />
        <MainPageSix />
      </div>
    </>
  );
}
