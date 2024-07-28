import React from "react";
import TheShowOne from "../../common/components/__molecules/TheShowOne/TheShowOne";
import TheShowTwo from "../../common/components/__molecules/TheShowTwo/TheShowTwo";
import TheShowThree from "../../common/components/__molecules/TheShowThree/TheShowThree";
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
    title: "The Show",
    description:
      "Mkhedruli - Experience the Spirit of Georgia through traditional attire, intricate dances, and folk music.",
    openGraph: {
      title: "mkhedruli",
      description:
        "Mkhedruli - Experience the Spirit of Georgia through traditional attire, intricate dances, and folk music.",
    },
    icons: {
      icon: "icons/logo.svg",
    },
  };
}

const page = () => {
  return (
    <div className=" bg-mainPageThreebg bg-contain bg-[#161616]">
      <TheShowOne />
      <TheShowTwo />
      <TheShowThree />
    </div>
  );
};

export default page;
