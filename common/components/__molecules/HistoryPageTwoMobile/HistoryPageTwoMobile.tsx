import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import GrapeOrnament from "../../../../public/icons/GrapeOrnament";

const HistoryPageTwoMobile = () => {
  return (
    <div className="bg-[#161616] bg-bottom bg-cover bg-no-repeat py-6">
      <div className="w-full h-full flex relative flex-col justify-center bg-[#161616]">
        <div className="flex flex-col text-white justify-center w-full p-6 gap-6 items-end">
          <div className="text-sm text-end font-light px-4">
            The name "Mkhedruli" holds deep significance in Georgian culture. Derived from the Georgian word for "warrior" or "knight," it embodies the valor, strength, and pride of our nation's history. It is also the name of a traditional Georgian folk dance that reflects these qualities through powerful and graceful movements. Our ensemble chose this name to reflect the spirit of bravery and resilience that defines Georgian dance and music, honoring our ancestors and inspiring future generations.
          </div>
          <GoldLine className="w-[85%] h-1" />
        </div>
      </div>
    </div>
  );
};

export default HistoryPageTwoMobile;
