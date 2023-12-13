"use client";
import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./MainPageFiveSwiper.css";
import Image from "next/image";

export default function MainPageFiveSwiper() {
  const [slides, setSlides] = useState(
    Array.from({ length: 3 }).map((_, index) => `Slide ${index + 1}`)
  );

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={20}
        navigation={{
          nextEl: `.btn-next`,
          prevEl: `.btn-prev`,
          disabledClass: "opacity-50 hover:opacity-50",
        }}
        draggable={false}
        className="h-[500px] w-[100%] flex"
        speed={400}
        virtualTranslate
        wrapperClass={""}
        containerModifierClass={""}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index} className="">
            <Image
              src={"/images/manImage.png"}
              alt=""
              width={1200}
              height={1200}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
