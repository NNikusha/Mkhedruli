"use client"
import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages";

const HistoryPageTwoMobile = () => {
  const { language } = useGlobalContext();

  return (
    <div className="bg-[#161616] bg-bottom bg-cover bg-no-repeat py-6">
      <div className="w-full h-full flex relative flex-col justify-center bg-[#161616]">
        <div className="flex flex-col text-white justify-center w-full p-6 gap-6 items-end">
          <div className="text-sm text-end font-light px-4">
            {TEXTS[language].historyPageTwo.DESCRIPTION}
          </div>
          <GoldLine className="w-[85%] h-1" />
        </div>
      </div>
    </div>
  );
};

export default HistoryPageTwoMobile;
