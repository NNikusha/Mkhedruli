"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import SwiperComponent from "./SwiperComponent";
import "./mainPageFiveSwiper.css";
import SwiperButton from "../SwiperButtons/SwiperButton";

const SwiperData = [
  {
    image: "/images/farikaoba.jpg",
    title:
    "Discover the rich cultural heritage of Georgia through traditional attire showcased by the Mkhedruli Ensemble. From the iconic Chokha to intricate women's costumes, explore the history and pride of Georgian culture. Click to immerse yourself in the elegance and grandeur of these stunning garments."  },
  {
    image: "/images/mkhedruli.jpg",
    title:
    "Experience the Spirit of Georgia through traditional attire, intricate dances, and folk music. Explore our performance options and highlights, including graceful movements, evocative music, and iconic costumes. Celebrate Georgia's timeless traditions. Click to discover more."  },
  {
    image: "/images/momgerlebi.jpg",
    title:
    "Experience the enchanting sounds of Georgian folk instruments with the Mkhedruli Ensemble. Discover the panduri, duduk, doli, and accordion as they bring traditional melodies to life. Click to learn more about how these instruments capture the essence of Georgian culture."  },
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
