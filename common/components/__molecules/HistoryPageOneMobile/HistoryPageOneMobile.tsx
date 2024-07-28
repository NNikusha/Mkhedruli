import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";

const HistoryPageOne = () => {
  return (
    <div className="h-screen bg-historyPhoto bg-bottom bg-cover bg-no-repeat">
      <div className="flex flex-col h-full justify-center items-center bg-black bg-opacity-70 p-4">
        <div className="flex flex-col justify-center text-white flex-1 text-center">
          <div className="font-bold pb-4 uppercase text-4xl">
            OUR <br /> HISTORY
          </div>
          <div className="text-lg">
            Mkhedruli - a unique <br /> dance ensemble
          </div>
        </div>
        <div className="w-full pb-10 gap-5 flex flex-col items-center">
          <GoldLine className="w-full h-1" />
          <div className="text-2xl text-white text-center">
            OUR <br /> MISSION
          </div>
          <p className="text-white text-sm font-light text-center px-4">
            At Mkhedruli Ensemble, our mission is to preserve and promote the rich cultural heritage of Georgia through captivating dance and music performances. We aim to inspire audiences worldwide by showcasing the beauty, history, and spirit of Georgian traditions. Through our art, we strive to foster cultural understanding and pride.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryPageOne;
