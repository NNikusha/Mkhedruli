"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const position = {
        lat: 43.64,
        lng: -79.38,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    };
    initMap();
  }, []);
  return (
    <div
      className="lg:w-[65%] w-[90%] lg:h-[90%] h-[200px] 3xl:rounded-[60px] lg:rounded-[50px] rounded-[20px] 3xl:right-36 lg:right-32 bottom-20 lg:bottom-0"
      ref={mapRef}
    ></div>
  );
};

export default Map;
