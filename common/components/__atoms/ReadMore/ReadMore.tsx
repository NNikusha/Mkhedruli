import React from "react";
import ReadMoreArrow from "../../../../public/icons/ReadMoreArrow";
import Link from "next/link";
import { TEXTS } from "../../../locales/languages";
import { useGlobalContext } from "../../../store/store";

const ReadMore = ({ href }: any) => {
  const { language } = useGlobalContext();
  return (
    <div className="3xl:p-[70px] p-[40px] 3xl:text-3xl xl:text-xl l text-lg bg-[#1F1F1F] h-fit w-[56vw] 3xl:w-[60vw] text-white font-extralight relative bottom-[200px] z-20 hidden lg:block">
      {TEXTS[language].mainPageThree?.CONTENTFIRST}
      <div className="flex gap-2">
        <div className="flex-1">
          <p> {TEXTS[language].mainPageThree?.CONTENTSECOND}</p>
        </div>
        <div className="h-fit m-2">
          <Link
            type="button"
            className="border-white border-[1px] p-4 3xl:text-base text-xs tracking-widest flex items-center gap-6 hover:bg-[#323232] duration-100"
            href={href}
          >
            {TEXTS[language].mainPageThree?.READMORE}
            <ReadMoreArrow className="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
