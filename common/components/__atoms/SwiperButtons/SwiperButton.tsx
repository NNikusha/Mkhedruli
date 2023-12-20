import React from "react";
import SwiperArrow from "../../../../public/icons/SwiperArrow";

interface SwiperButton {
  handleNextSlide: any;
  handlePrevSlide: any;
}

const SwiperButton = ({ handleNextSlide, handlePrevSlide }) => {
  return (
    <div className="flex w-fit rounded-lg overflow-hidden">
      <button
        type="button"
        className="3xl:px-[25px] 3xl:py-[10px] px-[14px] py-[6px] bg-[#FFFFFF1A]"
        onClick={handlePrevSlide}
      >
        <SwiperArrow className="rotate-180 3xl:w-[50px] 3xl:h-[50px] w-[25px] h-[25px]" />
      </button>
      <div className="w-[2px] bg-white"></div>
      <button
        type="button"
        className="3xl:px-[25px] 3xl:py-[10px] px-[14px] py-[6px] bg-[#FFFFFF1A]"
        onClick={handleNextSlide}
      >
        <SwiperArrow className="3xl:w-[50px] 3xl:h-[50px] w-[30px] h-[30px]" />
      </button>
    </div>
  );
};

export default SwiperButton;
