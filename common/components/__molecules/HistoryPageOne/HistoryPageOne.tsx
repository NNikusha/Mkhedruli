"use client"
import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import { useGlobalContext } from "../../../store/store"; // Import the context
import { TEXTS } from "../../../locales/languages"; // Import TEXTS

const HistoryPageOne = () => {
  const { language } = useGlobalContext(); // Get the current language

  return (
    <div className="h-screen bg-historyPhoto bg-bottom bg-cover bg-no-repeat">
      <div className="w-full h-full flex flex-col justify-center px-[110px] pb-[100px] bg-black bg-opacity-60">
        <div className="justify-center text-white 3xl:pt-[500px] pt-[300px]">
          <div className="flex flex-col justify-center 3xl:pb-[220px] pb-[100px]">
            <div className="font-bold pb-4 uppercase text-4xl">
              {TEXTS[language].historyPageOne.OUR_HISTORY}
            </div>
            <div className="text-xl">
              {TEXTS[language].historyPageOne.MKHEDRULI_DESCRIPTION}
            </div>
          </div>
        </div>

        <div className="">
          <GoldLine className="w-full h-[3px] my-2" />
          <div className="text-white flex justify-between pt-[65px] gap-2">
            <div className="font-normal 3xl:text-4xl text-2xl uppercase leading-10">
              {TEXTS[language].historyPageOne.OUR_MISSION}
            </div>
            <div className="w-[700px] h-[200px] 3xl:text-2xl text-xl font-normal leading-7">
              {TEXTS[language].historyPageOne.MISSION_DESCRIPTION}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPageOne;
