"use client"
import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import { useGlobalContext } from "../../../store/store"; // Import the context
import { TEXTS } from "../../../locales/languages"; // Import TEXTS

const HistoryPageOneMobile = () => {
  const { language } = useGlobalContext(); // Get the current language

  return (
    <div className="h-screen bg-historyPhoto bg-bottom bg-cover bg-no-repeat">
      <div className="flex flex-col h-full justify-center items-center bg-black bg-opacity-70 p-4">
        <div className="flex flex-col justify-center text-white flex-1 text-center">
          <div className="font-bold pb-4 uppercase text-4xl">
            {TEXTS[language].historyPageOne.OUR_HISTORY.split(" ").map(
              (word, index) => (
                <React.Fragment key={index}>
                  {word}
                  <br />
                </React.Fragment>
              )
            )}
          </div>
          <div className="text-lg">
            {TEXTS[language].historyPageOne.MKHEDRULI_DESCRIPTION.split(" ").map(
              (word, index) => (
                <React.Fragment key={index}>
                  {word}
                  <br />
                </React.Fragment>
              )
            )}
          </div>
        </div>
        <div className="w-full pb-10 gap-5 flex flex-col items-center">
          <GoldLine className="w-full h-1" />
          <div className="text-2xl text-white text-center">
            {TEXTS[language].historyPageOne.OUR_MISSION.split(" ").map(
              (word, index) => (
                <React.Fragment key={index}>
                  {word}
                  <br />
                </React.Fragment>
              )
            )}
          </div>
          <p className="text-white text-sm font-light text-center px-4">
            {TEXTS[language].historyPageOne.MISSION_DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryPageOneMobile;
