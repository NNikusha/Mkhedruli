
"use client";

import React from "react";
import GoldLine1 from "../../../../public/icons/GoldLine1";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages";
import GoldLine2 from "../../../../public/icons/GoldLine2";
import "../../__molecules/MyComponent/MyComponent.css"

const MyComponent: React.FC = () => {
  const { language } = useGlobalContext();

  return (
    <section className="h-full relative w-full pt-[110px] bg-bottom bg-[#161616] overflow-y-hidden flex justify-center items-center">
      <GoldLine1 className="absolute top-[230px] overflow-hidden" />
      <GoldLine2 className="absolute top-[120px] right-6 overflow-hidden" />
      <div className="w-full h-full px-4 max-w-[1500px]">
        <div className="text-white font-bold text-center pt-8 uppercase text-4xl">
          {TEXTS[language].tourDates.MONTH}
        </div>
        <div className="py-[30px] px-[30px] grid gap-10 grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TEXTS[language].tourDates.CONCERTS.map((concert, index) => {
            const [day, month] = concert.date.split(" ");
            return (
              <a
                key={index}
                href={concert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative h-[370px] bg-black transform Tour block"
              >
                <div className="flex w-full top-6 items-center justify-center absolute z-20 text-shadow">
                  <div className="flex items-center justify-center font-bold text-2xl uppercase">
                    <div className="text-white">{day}</div>
                    <div className="gradient-text-tour-dates font-bold text-2xl uppercase text-[#FFD700]">
                      {month}
                    </div>
                  </div>
                </div>
                <div className="flex bg-samaia h-full grayscale-0 sm:grayscale sm:hover:grayscale-0 bg-bottom bg-cover bg-no-repeat flex-col justify-center items-center text-white pt-[280px]"></div>
                <div className="pb-[20px] max-w-[200px] absolute bottom-[5px] left-0 right-0 mx-auto text-shadow">
                  <div className="text-xl text-center font-bold text-[#B0E0E6]">
                    {concert.city}
                  </div>
                  <div className="text-xl text-center font-[800] text-[#ADD8E6]">
                    {concert.theatre}
                  </div>
                  <div className="flex bg-gray-800 rounded-2xl justify-center mt-2">
                    <button className="py-1 px-8 rounded-[4px] font-medium transition duration-300 bg-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE497] via-[#E3A455] to-[#8F653B] hover:bg-black">
                      {TEXTS[language].tourDates.BUY_TICKET}
                    </button>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
