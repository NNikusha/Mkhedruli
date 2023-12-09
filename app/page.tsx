import Image from "next/image";
import React, { CSSProperties } from "react";
import MainPageOne from "../common/components/__molecules/MainPageOne/MainPageOne";
import MainPageTwoVideo from "../common/components/__molecules/MainPageTwoVideo/MainPageTwoVideo";
import MainPageThree from "../common/components/__molecules/MainPageThree/MainPageThree";
import MainPageFour from "../common/components/__molecules/MainPageFour/MainPageFour";

export default function Home() {
  return (
    <>
      <MainPageOne />
      <MainPageTwoVideo />
      <MainPageThree />
      <MainPageFour />
    </>
  );
}
