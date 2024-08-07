import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { useGlobalContext } from "../../../store/store";

interface Props {
  src: string;
  lang: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const LangSwitcherItem: React.FC<Props> = ({ src, lang, setIsModalOpen }) => {
  const { language, setLanguage } = useGlobalContext();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex gap-4 items-center group cursor-pointer"
      onClick={() => handleLanguageChange(lang)}
    >
      <Image
        src={src}
        width={1000}
        height={1000}
        alt={`${lang} flag`}
        className="w-5 h-5 rounded-full group-hover:scale-110 duration-150"
      />
      <p
        className={`py-[6px] border-b-2 ${
          language === lang ? "font-bold" : "font-medium"
        } group-hover:font-bold duration-150`}
      >
        {lang}
      </p>
    </div>
  );
};

export default LangSwitcherItem;
