import React, { useEffect, useRef, useState } from "react";
import ReadMoreArrow from "../../../../public/icons/ReadMoreArrow";
import Link from "next/link";

interface SwiperComponentProps {
  image: string;
  isCenterActive: boolean;
}

const GallerySwiperComponent = ({ image }: SwiperComponentProps) => {
  return (
    <article className="3xl:h-[500px]   h-[400px] transition-all  duration-700  ease-in-out ">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`w-full h-full bg-cover bg-center transition-all duration-300 ease-in-out`}
      ></div>
    </article>
  );
};

export default GallerySwiperComponent;