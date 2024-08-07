"use client"
import React from "react";
import SwiperButton from "../../__atoms/SwiperButtons/SwiperButton";
import MainPageFiveSwiper from "../../__atoms/MainPageFiveSwiper/MainPageFiveSwiper";
import GoldOvalLine from "../../../../public/icons/GoldOvalLine";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages"; 

const MainPageFive = () => {
  const { language } = useGlobalContext(); 

  return (
    <section
      className="3xl:h-[95vh] lg:h-[90vh]   w-full  items-center flex flex-col pb-5 justify-end overflow-hidden gap-2 3xl:gap-10 relative"
      id="theShow"
    >
      <GoldOvalLine className="absolute w-full top-[-10px] left-0 rotate-[-22deg]" />

      <h3 className="3xl:text-[80px] lg:text-6xl text-[40px]   mb-20  font-bold text-white text-center">
        {TEXTS[language].mainPageFive?.THE_SHOW.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word}
            <br className="block lg:hidden" />
          </React.Fragment>
        ))}
      </h3>
      <MainPageFiveSwiper />
    </section>
  );
};

export default MainPageFive;
