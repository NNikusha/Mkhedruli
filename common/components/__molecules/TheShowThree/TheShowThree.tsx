"use client"
import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages";


const TheShowThree = () => {
  const { language } = useGlobalContext();

  return (
    <section className="h-auto 2xl:h-screen">
      <div className="px-[40px] w-full h-full flex">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="flex flex-col relative items-center mt-[150px]">
            <img
              className="rounded-[10px]"
              src={"/images/mkhedruliDancers.png"}
              alt="Mkhedruli Dancers"
            />
            <div className="bg-[#1F1F1F] w-full h-fit rounded-[10px] text-white px-4 py-2 xl:hidden">
              {TEXTS[language].theShow.THREE.IMAGE_TEXT}
            </div>
            <div className="hidden xl:flex absolute w-[410px] h-[100px] bottom-[-40px] left-[-80px] px-3 py-4 rounded-sm text-white text-center text-[20px] bg-[#1F1F1F]">
              {TEXTS[language].theShow.THREE.IMAGE_TEXT}
            </div>
          </div>
          <div className="flex items-center text-white flex-1 lg:w-[790px] lg:text-2xl lg:mr-[160px]">
            <GoldLine className="w-[3px] h-[180px] xl:h-[333px] xl:w-[5px] rounded-xl" />
            <div className="w-full pl-[60px] backdrop-blur-sm p-[20px] rounded-[20px] flex">
              <div className="mb-4">
                <p>{TEXTS[language].theShow.THREE.DESCRIPTION_1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheShowThree;
