import React from "react";
import Media from "../../common/components/__molecules/Media/media";
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
    title: "Media",
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
  return <Media />;
};

export default page;
