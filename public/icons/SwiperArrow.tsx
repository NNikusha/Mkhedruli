import React from "react";
import { IconProps } from "../../utils/types/mainTypes";

const SwiperArrow = ({ className }: IconProps) => {
  return (
    <svg
      width="0"
      height="0"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.7499 41.6667C18.2166 41.6667 17.6832 41.4626 17.277 41.0564C16.4624 40.2418 16.4624 38.925 17.277 38.1104L30.3873 25.0001L17.277 11.8897C16.4624 11.0751 16.4624 9.75835 17.277 8.94376C18.0915 8.12918 19.4083 8.12918 20.2229 8.94376L34.8063 23.5271C35.6208 24.3417 35.6208 25.6585 34.8063 26.4731L20.2229 41.0564C19.8167 41.4626 19.2833 41.6667 18.7499 41.6667Z"
        fill="white"
      />
    </svg>
  );
};

export default SwiperArrow;
