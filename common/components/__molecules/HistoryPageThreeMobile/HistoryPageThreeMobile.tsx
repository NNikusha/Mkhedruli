"use client"
import React from "react";
import GoldOvalLine from "../../../../public/icons/GoldOvalLine";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages";

const HistoryPageThreeMobile = () => {
  const { language } = useGlobalContext();

  return (
    <div className="h-fit relative bg-[#161616] bg-bottom bg-cover bg-no-repeat overflow-y-visible pb-[30px]">
      <GoldOvalLine className="absolute  w-full" />
      <GoldOvalLine className="absolute top-[500px]  w-full rotate-[-22deg]" />
      <div className="w-full h-full flex flex-col justify-center bg-opacity-60 z-10">
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="items-center w-[260px] text-[#FFFF] leading-7 text-sm font-light z-10">
            <div className="flex w-full h-[260px] bg-dancersPiramid bg-cover bg-no-repeat bg-bottom grayscale z-10"></div>
            <span className="text-2xl mt-2">M</span>
            {TEXTS[language].historyPageThree.DESCRIPTION}
            <div className="flex flex-1 h-[150px] bg-mkhedruliDancers bg-cover bg-no-repeat bg-bottom mt-2 z-20"></div>
            <div className="w-full h-[150px] bg-musicians bg-cover bg-no-repeat bg-bottom mt-2 z-20"></div>
            <div className="w-full h-[150px] bg-historyPhoto bg-cover bg-bottom bg-no-repeat mt-2 z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPageThreeMobile;
