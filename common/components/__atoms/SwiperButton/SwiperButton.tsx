import React from "react";
import SwiperArrow from "../../../../public/icons/SwiperArrow";

interface SwiperButton {
  nextBtn: string;
  prevBtn: string;
}

const SwiperButton = ({ nextBtn, prevBtn }: SwiperButton) => {
  return (
    <div className="flex w-fit rounded-lg overflow-hidden">
      <button
        type="button"
        className={`px-[25px] py-[10px] bg-[#FFFFFF1A] ${prevBtn}`}
      >
        <SwiperArrow className="rotate-180" />
      </button>
      <div className="w-[2px]  bg-white"></div>
      <button
        type="button"
        className={`px-[25px] py-[10px] bg-[#FFFFFF1A] ${nextBtn}`}
      >
        <SwiperArrow className="" />
      </button>
    </div>
  );
};

export default SwiperButton;
