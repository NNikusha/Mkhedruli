import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import GrapeOrnament from "../../../../public/icons/GrapeOrnament";

const HistoryPageTwo = () => {
  return (
    <div className="h-[70vh] bg-[#161616] bg-bottom bg-cover bg-no-repeat">
      <div className="w-full h-full flex  relative flex-col justify-center px-[110px] pb-[100px] bg-[#161616] bg-opacity-60">
        <GrapeOrnament className="absolute left-[-200px] top-[8px]" />
        <div className="flex flex-col 3xl:px-[300px] px-[50px] 3xl:pt-[55px] pt-[250px] text-white justify-center items-center w-[100%]">
          <div className="text-xl font-normal leading-8">
          The name "Mkhedruli" holds deep significance in Georgian culture. Derived from the Georgian word for "warrior" or "knight," it embodies the valor, strength, and pride of our nation's history. It is also the name of a traditional Georgian folk dance that reflects these qualities through powerful and graceful movements. Our ensemble chose this name to reflect the spirit of bravery and resilience that defines Georgian dance and music, honoring our ancestors and inspiring future generations.
          </div>
        </div>
        <div className="flex  absolute  right-[250px] bottom-[100px] justify-end items-end">
          <GoldLine className="w-[400px] h-[3px] " />
        </div>
      </div>
    </div>
  );
};

export default HistoryPageTwo;