import "common/assets/globals.css";
import React from "react";
import GoDown from "../../../../public/icons/GoDown";
import GoldLineMainPageOne from "../../../../public/icons/GoldLineMainPageOne";

const MainPageOne = () => {
  return (
    <section className="h-screen bg-mainPageOnebg bg-bottom bg-cover bg-no-repeat">
      <div className="w-full h-full flex flex-col justify-center px-[110px] pb-[100px] bg-black bg-opacity-60">
        <div className="text-white text-8xl flex items-center gap-[74px] flex-1">
          <GoldLineMainPageOne className="" />
          <div className="flex flex-col gap-10">
            <p>STATE SONG AND</p>
            <p>DANCE</p>
            <p>ENSEMBLE</p>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <GoDown className="w-[100px] h-[100px]" />
          <button
            type="button"
            className="text-white py-4 px-14 bg-yellow-300 rounded-full text-3xl shadow-md custom-gradient custom-border"
          >
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainPageOne;
