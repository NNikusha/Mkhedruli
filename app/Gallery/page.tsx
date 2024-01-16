import React from "react";
import GoldLine from "../../common/components/__atoms/GoldLine/GoldLine";
import GallerySwiper from "../../common/components/__atoms/GallerySwiper/GallerySwiper";

const page = () => {
  return (
    <section className="h-screen bg-[#161616]  w-full  items-center flex flex-col justify-around overflow-evenly  relative 3xl:pt-20 pt-12">
      <div className="flex flex-col w-full  justify-between  gap-5 text-start pb-8 3xl:pb-0 ">
        <div className="w-1/3  flex flex-col 3xl:gap-8 gap-4 pl-32">
          <h3 className="3xl:text-[80px] lg:text-6xl text-[32px]  font-bold text-white flex-1">
            GALLERY
          </h3>
          <GoldLine className="w-full h-[2px] flex" />
        </div>
      </div>
      <GallerySwiper />
    </section>
  );
};

export default page;
