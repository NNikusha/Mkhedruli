import React from "react";
import { IconProps } from "../../utils/types/mainTypes";

const GoldLineMainPageOne = ({ className }: IconProps) => {
  return (
    <svg
      width="13"
      height="263"
      viewBox="0 0 13 263"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_44_291)">
        <line
          x1="6.5"
          y1="255"
          x2="6.49999"
          y2="1.09278e-07"
          stroke="url(#paint0_linear_44_291)"
          stroke-width="5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_44_291"
          x="0"
          y="0"
          width="13"
          height="263"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_44_291"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_44_291"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_44_291"
          x1="9.15942"
          y1="255"
          x2="63.0512"
          y2="15.2306"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FDE497" />
          <stop offset="0.0001" stop-color="#FDE497" />
          <stop offset="0.489583" stop-color="#BA7F3B" />
          <stop offset="1" stop-color="#FDE497" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GoldLineMainPageOne;
