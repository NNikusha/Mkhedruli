import React from "react";
import GoldLine1 from "../../../../public/icons/GoldLine1";
import GoldLine2 from "../../../../public/icons/GoldLine2";
import GoldLine3 from "../../../../public/icons/GoldLine3";

const HistoryPageThree = () => {
  return (
    <div className="h-fit relative bg-[#161616] z-0 bg-bottom bg-cover bg-no-repeat overflow-y-visible ">
      <GoldLine3 className="absolute left-[-230px z-[-1]  " />
      <GoldLine2 className=" absolute top-[20px] right-6 overflow-hidden z-[-1]" />
      <div className="w-full  h-full flex flex-col justify-center px-[110px] pb-[100px] bg-[#161616] bg-opacity-60">
        <div className="h-full gap-10">
          <div className="flex ">
            <div className="  items-centerflex w-2/5 py-[120px] px-[60px] text-[#FFFF] leading-7  ">
              {" "}
              <span className="text-4xl">M</span>Meet the talented dancers and singers of Mkhedruli Ensemble. Each performer brings a unique blend of passion, skill, and dedication to their craft, beautifully representing Georgian culture through their captivating performances. Their artistry and commitment to excellence ensure that every show is a vibrant and unforgettable experience, showcasing the rich traditions of Georgia.
            </div>
            <div className=" w-3/5 flex  flex-row  gap-4">
              <div className="  flex flex-1 h-[445px] bg-dancersPiramid bg-cover bg-no-repeat bg-bottom  grayscale"></div>
              <div className=" flex flex-1 h-[445px]  bg-mkhedruliDancers bg-cover bg-no-repeat bg-bottom"></div>
            </div>
          </div>
          <div className=" pt-4 h-full flex pl-[280px] gap-4 ">
            <div className=" w-full h-[387px]   flex-1 bg-musicians bg-cover bg-no-repeat  bg-bottom "></div>
            <div className="w-full h-[387px] flex-1 bg-historyPhoto bg-cover bg-bottom bg-no-repeat "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPageThree;