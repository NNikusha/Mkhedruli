import React from "react";
import { IconProps } from "../../utils/types/mainTypes";

const GoldLine2 = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1231"
      height="1278"
      viewBox="0 0 1231 1178"
      fill="none"
      className={`overflow-hidden ${className}`}
    >
      <g filter="url(#filter0_d_209_2984)">
        <path
          d="M1234 4.50024C1008.32 -10.9763 543.12 96.4926 525.559 646.355C507.998 1196.22 171.974 1522.24 6.15701 1616.52"
          stroke="url(#paint0_linear_209_2984)"
          strokeWidth="5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_209_2984"
          x="0.921387"
          y="0.610596"
          width="1237.25"
          height="1626.08"
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
            result="effect1_dropShadow_209_2984"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_209_2984"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_209_2984"
          x1="1029.98"
          y1="4.26081"
          x2="1030.26"
          y2="1595.45"
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

export default GoldLine2;
