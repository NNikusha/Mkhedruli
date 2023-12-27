import React, { useEffect, useRef, useState } from "react";
import ReadMoreArrow from "../../../../public/icons/ReadMoreArrow";
import Link from "next/link";

interface SwiperComponentProps {
  title: string;
  image: string;
  isCenterActive: boolean;
}

const SwiperComponent = ({
  title,
  image,
  isCenterActive,
}: SwiperComponentProps) => {
  return (
    <article className="3xl:h-[500px] h-[400px] transition-all duration-300 ease-in-out">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`w-full ${
          isCenterActive ? "h-[70%]" : "h-full "
        } bg-cover bg-center transition-all duration-300 ease-in-out`}
      ></div>
      <div>
        <p
          className={`text-white transition-opacity  bg-[#1F1F1F] p-4  text-sm 3xl:text-base flex flex-col  font-extralight items-end ${
            isCenterActive ? "opacity-100  duration-300" : "hidden h-0"
          }`}
        >
          {title}
          <Link
            type="button"
            className="border-white border-[1px] p-2 text-xs 3xl:text-sm  tracking-widest flex items-center  hover:bg-[#323232] duration-100 w-fit mt-2 gap-1"
            href={"TheShow"}
          >
            Read More
            <ReadMoreArrow className="" />
          </Link>
        </p>
      </div>
    </article>
  );
};

export default SwiperComponent;
