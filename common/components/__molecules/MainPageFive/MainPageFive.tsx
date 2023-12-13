import React from "react";
import SwiperButton from "../../__atoms/SwiperButton/SwiperButton";
import MainPageFiveSwiper from "../../__atoms/MainPageFiveSwiper/MainPageFiveSwiper";

const MainPageFive = () => {
  return (
    <section className="h-screen w-full bg-[#161616] bg-mainPageThreebg bg-cover items-center flex flex-col justify-center overflow-hidden">
      <MainPageFiveSwiper />
      <div>
        <SwiperButton nextBtn={"btn-next"} prevBtn={"btn-prev"} />
      </div>
    </section>
  );
};

export default MainPageFive;
