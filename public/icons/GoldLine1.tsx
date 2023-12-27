import React from "react";
import { IconProps } from "../../utils/types/mainTypes";

const GoldLine1 = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 735"
      fill="none"
      className={`overflow-hidden ${className}`}
    >
      <g filter="url(#filter0_d_209_2983)">
        <path
          d="M-4.00024 1.5C49.3416 221.334 308.796 671.714 838.328 522.542C1367.86 373.37 1780.08 595.359 1920 725"
          stroke="url(#paint0_linear_209_2983)"
          strokeWidth="5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_209_2983"
          x="-10.4297"
          y="0.9104"
          width="1936.13"
          height="733.923"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_209_2983"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_209_2983"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_209_2983"
          x1="73.9606"
          y1="235.378"
          x2="1590.91"
          y2="-245.01"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDE497" />
          <stop offset="0.0001" stopColor="#FDE497" />
          <stop offset="0.489583" stopColor="#BA7F3B" />
          <stop offset="1" stopColor="#FDE497" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GoldLine1;
