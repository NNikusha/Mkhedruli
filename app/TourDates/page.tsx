import React from "react";

import { Metadata } from "next";
import MyComponent from "../../common/components/__molecules/MyComponent/MyComponent";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.mkhedruli.ge"),
    title: "Tour dates",
    description: "State song and dance ensemble - mkhedruli",
    openGraph: {
      title: "mkhedruli",
      description: "State song and dance ensemble - mkhedruli",
    },
    icons: {
      icon: "/icons/logo.svg", 
    },
  };
}

const Page: React.FC = () => {
  return <MyComponent />;
};

export default Page;
