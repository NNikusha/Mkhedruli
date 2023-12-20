import React from "react";

const MainPageTwoVideo = () => {
  return (
    <section className="bg-[#161616] h-screen p-10" id="mainPageTwoVideo">
      <iframe
        className="w-full h-full bg-black rounded-3xl no-border"
        src="https://www.youtube.com/embed/nDkgWfcakQI"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default MainPageTwoVideo;
