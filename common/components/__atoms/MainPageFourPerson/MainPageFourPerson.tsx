import React from "react";
import "../MainPageFourPerson/mainPageFourPerson.css";
import GoldLine from "../GoldLine/GoldLine";

const MainPageFourPerson = () => {
  return (
    <div className="person w-[324px]">
      <div className="bg-[url('/images/manImage.png')] w-full h-full  bg-cover bg-no-repeat flex items-end">
        <div className=" flex flex-col w-full px-5 py-12">
          <p className="text-white text-2xl">Aleksandre</p>
          <p className="text-white text-2xl">Chankvetadze</p>
          <GoldLine className="w-full h-[2px] my-2" />
          <p className="text-white text-xl">Director</p>
        </div>
      </div>
    </div>
  );
};

export default MainPageFourPerson;
