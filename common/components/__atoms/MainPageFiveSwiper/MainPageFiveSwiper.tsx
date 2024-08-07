"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SwiperComponent from "./SwiperComponent";
import "./mainPageFiveSwiper.css";
import SwiperButton from "../SwiperButtons/SwiperButton";
import { TEXTS } from "../../../locales/languages";
import { useGlobalContext } from "../../../store/store";


function MainPageFiveSwiper() {
  const { language } = useGlobalContext();

  const SwiperData = TEXTS[language].mainPageFiveSwiper?.SLIDES;

  const middleIndex = Math.floor(SwiperData?.length / 2);
  const [centerIndex, setCenterIndex] = useState(middleIndex);

  const handleAfterChange = (currentSlide: number) => {
    setCenterIndex(currentSlide);
  };

  const ref = useRef<Slider | null>(null);

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
        {SwiperData?.map((slide, i) => (
          <SwiperComponent
            image={slide.IMAGE}
            title={slide.TITLE}
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
