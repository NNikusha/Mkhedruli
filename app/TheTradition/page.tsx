import React from "react";
import HistoryPageOne from "../../common/components/__molecules/HistoryPageOne/HistoryPageOne";
import HistoryPageTwo from "../../common/components/__molecules/HistoryPageTwo/HistoryPageTwo";
import HistoryPageThree from "../../common/components/__molecules/HistoryPageThree/HistoryPageThree";
import HistoryPageOneMobile from "../../common/components/__molecules/HistoryPageOneMobile/HistoryPageOneMobile";
import HistoryPageTwoMobile from "../../common/components/__molecules/HistoryPageTwoMobile/HistoryPageTwoMobile";
import HistoryPageThreeMobile from "../../common/components/__molecules/HistoryPageThreeMobile/HistoryPageThreeMobile";
import { Metadata } from "next";

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
    title: "The Tradition",
    description: "Mkhedruli - is unique dance ensemble",
    openGraph: {
      title: "mkhedruli",
      description: "Mkhedruli - is unique dance ensemble",
    },
    icons: {
      icon: "icons/logo.svg",
    },
  };
}

const page = () => {
  return (
    <>
      <div className="hidden lg:block">
        <HistoryPageOne />
        <HistoryPageTwo />
        <HistoryPageThree />
      </div>
      <div className="block lg:hidden">
        <HistoryPageOneMobile />
        <HistoryPageTwoMobile />
        <HistoryPageThreeMobile />
      </div>
    </>
  );
};

export default page;
