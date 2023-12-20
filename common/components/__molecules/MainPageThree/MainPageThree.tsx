import React from "react";
import ReadMore from "../../__atoms/ReadMore/ReadMore";
import GoldOvalLine from "../../../../public/icons/GoldOvalLine";

const MainPageThree = () => {
  return (
    <section
      className="xl:h-screen  flex-col px-10 justify-center pt-20 relative"
      id="theTradition"
    >
      <GoldOvalLine className="absolute  top-0 3xl:top-32 left-0  lg:top-20" />
      <div className="flex justify-between gap-7 ">
        <h3 className="3xl:text-[80px]  text-6xl 3xl:pl-32 3xl:pt-10 pt-6 pl-16 font-bold text-white flex-1">
          OUR
          <p className="mt-[12px] 3xl:mt-[20px]">HISTORY</p>
        </h3>
        <div className="3xl:h-[550px] xl:h-[480px] h-[400px] bg-[url('/images/page-three-img.png')] 3xl:w-[1000px] lg:w-[800px] bg-cover bg-center z-10"></div>
      </div>
      <ReadMore />
    </section>
  );
};

export default MainPageThree;
