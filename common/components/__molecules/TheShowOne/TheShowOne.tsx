"use client"
import React from "react";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages";
import GoldLine from "../../__atoms/GoldLine/GoldLine";


const TheShowOne = () => {
  const { language } = useGlobalContext();

  return (
    <section className="h-auto 2xl:h-screen w-full bg-contain">
      <div className="px-[40px] w-full h-full flex">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="flex flex-col relative items-center mt-[150px]">
            <img
              className="rounded-[10px]"
              src={"/images/mkhedruliDancers.png"}
              alt="Mkhedruli Dancers"
            />
            <div className="bg-[#1F1F1F] flex rounded-[10px] w-full h-fit text-white px-4 py-2 xl:hidden text-center items-center justify-center">
              {TEXTS[language].theShow.ONE.IMAGE_TEXT}
            </div>
            <div className="hidden xl:flex absolute w-[410px] h-[100px] bottom-[-40px] left-[-80px] text-[20px] px-3 py-4 rounded-sm text-center items-center justify-center text-white bg-[#1F1F1F]">
              {TEXTS[language].theShow.ONE.IMAGE_TEXT}
            </div>
          </div>
          <div className="flex items-center text-white flex-1 lg:w-[790px] lg:text-2xl lg:mr-[160px]">
            <GoldLine className="w-[3px] h-[180px] xl:h-[333px] xl:w-[5px] rounded-xl" />
            <div className="w-full pl-[60px] backdrop-blur-sm p-[20px] rounded-[20px] flex flex-col space-y-4">
              <h1 className="text-2xl font-bold">
                {TEXTS[language].theShow.ONE.TITLE}
              </h1>
              <p>{TEXTS[language].theShow.ONE.DESCRIPTION_1}</p>

              <h2 className="text-xl font-semibold">
                {TEXTS[language].theShow.ONE.CHOKHA_TITLE}
              </h2>
              <p>{TEXTS[language].theShow.ONE.CHOKHA_DESCRIPTION}</p>

              <h2 className="text-xl font-semibold">
                {TEXTS[language].theShow.ONE.WOMEN_TITLE}
              </h2>
              <p>{TEXTS[language].theShow.ONE.WOMEN_DESCRIPTION}</p>

              <p>{TEXTS[language].theShow.ONE.CLOSING}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheShowOne;
