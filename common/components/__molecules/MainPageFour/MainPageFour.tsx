import React from "react";
import MainPageFourSwiper from "../../__atoms/MainPageFiveSwiper/MainPageFiveSwiper";
import SwiperButton from "../../__atoms/SwiperButton/SwiperButton";
import MainPageFourPerson from "../../__atoms/MainPageFourPerson/MainPageFourPerson";

const MainPageFour = () => {
  return (
    <section className="h-screen w-full bg-[#161616] bg-mainPageThreebg bg-cover flex flex-col justify-center">
      {/* <MainPageFourSwiper /> */}
      <div className="h-[580px] flex gap-5 justify-end w-full pr-24 z-10">
        <MainPageFourPerson />
        <MainPageFourPerson />
        <MainPageFourPerson />
        <MainPageFourPerson />
      </div>
      {/* <div className=" w-full"> */}
      <h3 className="text-[80px] pl-24 relative bottom-20 font-bold text-white">
        THE <br></br> PRODUCTION
      </h3>
      {/* </div> */}
    </section>
  );
};

export default MainPageFour;
