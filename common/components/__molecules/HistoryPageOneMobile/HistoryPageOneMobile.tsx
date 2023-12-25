import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";

const HistoryPageOne = () => {
  return (
    <div className="h-screen bg-historyPhoto bg-bottom bg-cover bg-no-repeat">
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex flex-col justify-center  text-white flex-1">
          <div className="font-bold  pb-4 uppercase text-[40px] text-center">
            OUR <br></br> HISTORY
          </div>
          <div className="text-xl text-center">
            Mkhedruli- is unique <br></br> dance ensemble
          </div>
        </div>
        <div className="w-[70%] pb-10 gap-5 flex flex-col">
          <GoldLine className="w-full h-[2px]" />
          <div className=" text-2xl text-white">
            OUR <br />
            MISSION
          </div>
          <p className="text-white text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryPageOne;
