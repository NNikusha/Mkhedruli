import React from "react";
import ReadMore from "../../__atoms/ReadMore/ReadMore";
import GoldOvalLine from "../../../../public/icons/GoldOvalLine";
import ReadMoreArrow from "../../../../public/icons/ReadMoreArrow";
import Link from "next/link";

const MainPageThree = () => {
  return (
    <section
      className="xl:h-screen  flex-col px-10 justify-center lg:pt-20 pt-10  relative"
      id="theTradition"
    >
      <GoldOvalLine className="absolute w-full  top-0 3xl:top-32 left-0  lg:top-20 " />
      <div className="hidden lg:flex justify-between gap-7 ">
        <h3 className="3xl:text-[80px]  text-6xl 3xl:pl-32 3xl:pt-10 pt-6 pl-16 font-bold text-white flex-1 block">
          OUR
          <p className="mt-[12px] 3xl:mt-[20px]">HISTORY</p>
        </h3>
        <div className="3xl:h-[550px] xl:h-[480px] h-[400px] bg-[url('/images/page-three-img.png')] 3xl:w-[1000px] lg:w-[800px] bg-cover bg-center z-10"></div>
      </div>
      <div className="flex flex-col mb-24 lg:hidden">
        <div className="3xl:text-[80px]  text-[40px]   font-bold text-white xl:flex-col   lg:hidden text-center mb-7">
          <h3>OUR</h3>
          <h3>HISTORY</h3>
        </div>
        <div className="h-[177px] bg-[url('/images/page-three-img.png')] 3xl:w-[1000px] lg:w-[800px] bg-contain bg-center z-10"></div>
        <div className="mt-2">
          <p
            className={`text-white transition-opacity  bg-[#1F1F1F] p-4  text-sm 3xl:text-base flex flex-col  font-extralight items-end`}
          >
            The name "Mkhedruli" drives from the script used in the Georgian
            alphabet and is emblematic of Georgia's distinctive cultural
            identity. Just as the Mkhedruli script has been instrumental in
            recording Georgia's literary and historical treasures, the Mkhedruli
            dance ensemble captures the essence of the nation's cultural spirit
            through movement.
            <Link
              className="border-white border-[1px] p-2 text-xs 3xl:text-sm  tracking-widest flex items-center  hover:bg-[#323232] duration-100 w-fit mt-2 gap-1  z-20
              "
              href={"TheTradition"}
            >
              Read More
              <ReadMoreArrow className="" />
            </Link>
          </p>
        </div>
      </div>

      <ReadMore href={"TheTradition"} />
    </section>
  );
};

export default MainPageThree;
