"use client"
import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import GrapeOrnament from "../../../../public/icons/GrapeOrnament";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages";

const HistoryPageTwo = () => {
  const { language } = useGlobalContext();

  return (
    <div className="h-[70vh] bg-[#161616] bg-bottom bg-cover bg-no-repeat">
      <div className="w-full h-full flex relative flex-col justify-center px-[110px] pb-[100px] bg-[#161616] bg-opacity-60">
        <GrapeOrnament className="absolute left-[-200px] top-[8px]" />
        <div className="flex flex-col 3xl:px-[300px] px-[50px] 3xl:pt-[55px] pt-[250px] text-white justify-center items-center w-[100%]">
          <div className="text-xl font-normal leading-8">
            {TEXTS[language].historyPageTwo.DESCRIPTION}
          </div>
        </div>
        <div className="flex absolute right-[250px] bottom-[100px] justify-end items-end">
          <GoldLine className="w-[400px] h-[3px]" />
        </div>
      </div>
    </div>
  );
};

export default HistoryPageTwo;
