import React from "react";
import FadeIn from "../../__atoms/FadeIn/FadeIn";

const MainPageTwoVideo = () => {
  return (
    <section className="bg-[#161616] h-screen p-10" id="mainPageTwoVideo">
      <FadeIn direction="none" duration={0.9} className="w-full h-full">
        <iframe
          className="w-full h-full bg-black rounded-3xl no-border"
          src="https://www.youtube.com/embed/nDkgWfcakQI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </FadeIn>
    </section>
  );
};

export default MainPageTwoVideo;
