"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import SwiperComponent from "./SwiperComponent";
import "./mainPageFiveSwiper.css";
import SwiperButton from "../SwiperButtons/SwiperButton";

const SwiperData = [
  {
    image: "/images/mainPhoto.png",
    title:
      "Lorem ispum dolor sit amet. consectetur adipisicing alit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  },
  {
    image: "/images/manImage.png",
    title:
      "Lorem ispum dolor sit amet. consectetur adipisicing alit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  },
  {
    image: "/images/mainPhoto.png",
    title:
      "Lorem ispum dolor sit amet. consectetur adipisicing alit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  },
  {
    image: "/images/manImage.png",
    title:
      "Lorem ispum dolor sit amet. consectetur adipisicing alit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  },
];
function MainPageFiveSwiper() {
  const middleIndex = Math.floor(SwiperData.length / 2);
  const [centerIndex, setCenterIndex] = useState(middleIndex);

  const handleAfterChange = (currentSlide) => {
    setCenterIndex(currentSlide);
  };
  const ref = useRef(null);

  const handleNextSlide = () => {
    ref.current?.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current?.slickPrev();
  };

  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    draggable: true,
    initialSlide: middleIndex,
    afterChange: handleAfterChange,
  };
  return (
    <>
      <Slider {...settings} className="slider" ref={ref}>
        {SwiperData.map((assessment, i) => (
          <SwiperComponent
            image={assessment.image}
            title={assessment.title}
            key={i}
            isCenterActive={i === centerIndex}
          />
        ))}
      </Slider>
      <div className="w-full flex lg:justify-end justify-center lg:pr-24 lg:mt-5 3xl:mt-24 mt-24 ">
        <SwiperButton
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
        />
      </div>
    </>
  );
}

export default MainPageFiveSwiper;
