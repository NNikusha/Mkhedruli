import React from "react";
import MainPageOne from "../common/components/__molecules/MainPageOne/MainPageOne";
import MainPageTwoVideo from "../common/components/__molecules/MainPageTwoVideo/MainPageTwoVideo";
import MainPageThree from "../common/components/__molecules/MainPageThree/MainPageThree";
import MainPageFour from "../common/components/__molecules/MainPageFour/MainPageFour";
import MainPageFive from "../common/components/__molecules/MainPageFive/MainPageFive";
import RunningLine from "../common/components/__atoms/RunningLine/RunningLine";
import MainPageSix from "../common/components/__molecules/MainPageSix/MainPageSix";
import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.mkhedruli.ge"),
    title: "MKHEDRULI",
    description: "State song and dance ensemble - mkhedruli.ge",
    openGraph: {
      title: "MKHEDRULI",
      description: "State song and dance ensemble - mkhedruli.ge",
      images: [
        {
          url: "/images/7.jpg",
          width: 800,
          height: 600,
          alt: "MKHEDRULI Ensemble Image",
        },
      ],
      type: "website",
    },
    icons: {
      icon: "icons/logo.svg",
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:image" content="images/7.jpg" />
      </Head>
      <MainPageOne />
      <MainPageTwoVideo />
      <div className="bg-mainPageThreebg bg-contain bg-[#161616]">
        <MainPageThree />
        <RunningLine />
        {/* <MainPageFour /> */}
        <MainPageFive />
        <MainPageSix />
      </div>
      <div id="top-ge-counter-container" data-site-id="117516"></div>
      <Script src="//counter.top.ge/counter.js" strategy="afterInteractive" />
    </>
  );
}
