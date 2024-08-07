import React, { useState } from "react";
import LangSwitcherItem from "../../__atoms/LangSwitcherItem/LangSwitcherItem";
import { useGlobalContext } from "../../../store/store";

const languages = [
  { src: "/images/eng-flag.png", lang: "ENG" },
  { src: "/images/fra-flag.svg", lang: "FRA" },
  { src: "/images/esp-flag.svg", lang: "ESP" },
  { src: "/images/chn-flag.svg", lang: "CHN" },
  { src: "/images/jpn-flag.svg", lang: "JPN" },
  { src: "/images/bgn.jpg", lang: "BGN" },

];

const LangSwitcher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useGlobalContext();
  return (
    <div className="relative w-6">
      <div
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="cursor-pointer"
      >
        {language}
      </div>

      {isModalOpen && (
        <div className="bg-white text-black py-[15px] px-5 absolute right-10 w-[120px] rounded-sm">
          {languages.map(({ src, lang }) => {
            return (
              <LangSwitcherItem
                key={lang}
                src={src}
                lang={lang}
                setIsModalOpen={setIsModalOpen}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
