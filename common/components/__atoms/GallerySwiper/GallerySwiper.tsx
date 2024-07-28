"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "./gallerySwiper.css";
import SwiperButton from "../SwiperButtons/SwiperButton";
import GallerySwiperComponent from "./GallerySwiperComponent";

const SwiperData = [
  {
    image: "/images/1.jpg",
  },
  {
    image: "/images/2.jpg",
  },
  {
    image: "/images/3.jpg",
  },
  {
    image: "/images/4.jpg",
  },
  {
    image: "/images/6.jpg",
  },
  {
    image: "/images/7.jpg",
  },
  {
    image: "/images/8.jpg",
  },
  {
    image: "/images/9.jpg",
  },
  {
    image: "/images/10.jpg",
  },
  {
    image: "/images/11.jpg",
  },
  {
    image: "/images/13.jpg",
  },
  {
    image: "/images/14.jpg",
  },
  {
    image: "/images/15.jpg",
  },
  {
    image: "/images/16.jpg",
  },
  {
    image: "/images/17.jpg",
  },
  {
    image: "/images/18.jpg",
  },
  {
    image: "/images/19.jpg",
  },
  {
    image: "/images/20.jpg",
  },
  {
    image: "/images/21.jpg",
  },
  {
    image: "/images/22.jpg",
  },
  {
    image: "/images/23.jpg",
  },
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
