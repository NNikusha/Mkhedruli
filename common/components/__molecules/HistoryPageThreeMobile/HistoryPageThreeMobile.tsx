import React from "react";
import GoldLine3 from "../../../../public/icons/GoldLine3";
import GoldLine2 from "../../../../public/icons/GoldLine2";

const HistoryPageThreeMobile = () => {
  return (
    <div className="h-fit relative bg-[#161616] bg-bottom bg-cover bg-no-repeat overflow-y-visible pb-[30px]">
      <GoldLine3 className="absolute left-[-230px z-20 " />
      <GoldLine2 className=" absolute top-0 right-6  z-20" />
      <div className="w-full  h-full flex flex-col justify-center bg-opacity-60">
        <div className="flex flex-col items-center gap-4">
          <div className="  items-center w-[260px] text-[#FFFF] leading-7 text-sm font-light ">
            <div className="  flex w-full h-[260px] bg-dancersPiramid bg-cover bg-no-repeat bg-bottom  grayscale "></div>{" "}
            <span className="text-2xl mt-2">T</span>he name "Mkhedruli" drives
            from the script used in the Georgian alphabet and is emblematic of
            Georgia's distinctive cultural identity. Just as the Mkhedruli
            script has been instrumental in recording Georgia's literary and
            historical treasures, the Mkhedruli dance ensemble captures the
            essence of the nation's cultural spirit through movement.
            <div className=" flex flex-1 h-[150px] bg-mkhedruliDancers bg-cover bg-no-repeat bg-bottom mt-2"></div>
            <div className=" w-full h-[150px] bg-musicians bg-cover bg-no-repeat  bg-bottom mt-2"></div>
            <div className="w-full h-[150px] bg-historyPhoto bg-cover bg-bottom bg-no-repeat mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPageThreeMobile;
