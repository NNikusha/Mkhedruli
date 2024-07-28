"use client";

import React from "react";

const Map = () => {
  return (
    <div
      className="lg:w-[65%] w-[90%] lg:h-[90%] h-[200px] 3xl:rounded-[60px] lg:rounded-[50px] rounded-[20px] 3xl:right-36 lg:right-32 bottom-20 lg:bottom-0"
      style={{ position: 'relative' }}
    >
      <iframe
        className="grayscale hover:grayscale-0 transition-filter duration-300"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "inherit", position: 'absolute', top: 0, left: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDQpNjnf9FYYKXVK_vJnqcv9Xceme7ewDc&q=41.8204404,41.7756632&zoom=17&maptype=satellite`}
      ></iframe>
    </div>
  );
};

export default Map;
