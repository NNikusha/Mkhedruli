"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "./gallerySwiper.css";
import SwiperButton from "../SwiperButtons/SwiperButton";
import GallerySwiperComponent from "./GallerySwiperComponent";

const SwiperData = [
  {
    image: "/images/gallery1.png",
  },
  {
    image: "/images/gallery3.png",
  },
  {
    image: "/images/gallery2.png",
  },,
];
function GallerySwiper() {
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
          <GallerySwiperComponent
            image={assessment.image}
            key={i}
            isCenterActive={i === centerIndex}
          />
        ))}
      </Slider>
      <div className="w-full flex justify-center   3xl:mt-8 ">
        <SwiperButton
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
        />
      </div>
    </>
  );
}

export default GallerySwiper;
