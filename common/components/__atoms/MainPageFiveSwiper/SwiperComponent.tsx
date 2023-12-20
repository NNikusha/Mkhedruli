import React from "react";

interface SwiperComponent {
  title: string;
  image: string;
  key: number;
}

const SwiperComponent = ({ title, image, key }: SwiperComponent) => {
  return (
    <article className=" 3xl:h-[500px] h-[400px]">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-full bg-cover bg-center"
      ></div>
    </article>
  );
};

export default SwiperComponent;
