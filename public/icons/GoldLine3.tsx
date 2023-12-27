import React from "react";
import { IconProps } from "../../utils/types/mainTypes";
const GoldLine3 = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="1225"
      viewBox="0 0 1920 1225"
      fill="none"
      className={`overflow-hidden ${className}`}
    >
      <g filter="url(#filter0_d_205_2566)">
        <path
          d="M-0.376006 3.72711C359.508 -8.98079 910.804 177.957 938.331 663.49C965.858 1149.02 1674.67 1130.06 1939 1214"
          stroke="url(#paint0_linear_205_2566)"
          strokeWidth="5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_205_2566"
          x="-4.46423"
          y="0.623657"
          width="1948.22"
          height="1223.76"
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
            result="effect1_dropShadow_205_2566"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_205_2566"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_205_2566"
          x1="324.94"
          y1="4.37793"
          x2="321.072"
          y2="1409.19"
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

export default GoldLine3;
