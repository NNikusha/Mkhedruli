"use client"
import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import GrapeOrnament from "../../../../public/icons/GrapeOrnament";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages";

const TheShowTwo = () => {
  const { language } = useGlobalContext();

  return (
    <section className="h-auto 2xl:h-screen">
      <div className="px-[40px] w-full h-full flex">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col relative items-center mt-[150px]">
            <GrapeOrnament className="absolute top-[-150px] h-[80px] md:hidden lg:flex lg:top-[-400px] lg:h-[180px]" />
            <img
              className="rounded-[10px]"
              src="/images/mkhedruliDancers.png"
              alt={TEXTS[language].theShow.TWO.ALT_TEXT}
            />
            <div className="bg-[#1F1F1F] rounded-[10px] w-full h-fit text-white px-4 py-2 xl:hidden">
              {TEXTS[language].theShow.TWO.IMAGE_TEXT}
            </div>
            <div className="hidden xl:flex absolute w-[410px] h-[100px] bottom-[-40px] right-[-80px] px-3 py-4 rounded-sm text-white bg-[#1F1F1F]">
              {TEXTS[language].theShow.TWO.IMAGE_TEXT}
            </div>
          </div>
          <div className="flex items-center text-white flex-1 lg:w-[790px] lg:text-2xl lg:ml-[160px]">
            <div className="flex flex-row-reverse">
              <GoldLine className="w-[3px] h-[180px] xl:h-[333px] xl:w-[5px] rounded-xl" />
              <div className="w-full p-10 bg-opacity-75 backdrop-blur-sm rounded-2xl flex flex-col">
                <h1 className="text-3xl font-bold mb-4">
                  {TEXTS[language].theShow.TWO.TITLE}
                </h1>
                <p className="mb-4">{TEXTS[language].theShow.TWO.DESCRIPTION_1}</p>

                <h2 className="text-2xl font-semibold mb-3">
                  {TEXTS[language].theShow.TWO.PROGRAM_TITLE}
                </h2>
                <ul className="list-disc list-inside mb-6">
                  {TEXTS[language].theShow.TWO.PROGRAM_OPTIONS.map((option, index) => (
                    <li key={index} className="mb-2">
                      {option}
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-semibold mb-3">
                  {TEXTS[language].theShow.TWO.HIGHLIGHTS_TITLE}
                </h2>
                <ul className="list-disc list-inside mb-6">
                  {TEXTS[language].theShow.TWO.HIGHLIGHTS.map((highlight, index) => (
                    <li key={index} className="mb-2">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <h2 className="text-2xl font-semibold mb-3">
                  {TEXTS[language].theShow.TWO.EXPERIENCE_TITLE}
                </h2>
                <p>{TEXTS[language].theShow.TWO.CLOSING}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheShowTwo;
