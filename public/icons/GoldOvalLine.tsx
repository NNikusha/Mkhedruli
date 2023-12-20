import React from "react";
import { IconProps } from "../../utils/types/mainTypes";

const GoldOvalLine = ({ className }: IconProps) => {
  return (
    <svg
      width="1920"
      height="431"
      viewBox="0 0 1920 431"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_191_340)">
        <path
          d="M-11.2569 0.249455C19.7827 146.795 228.728 412.596 816.192 303.433C1403.66 194.27 1820.47 336.093 1955.44 420.65"
          stroke="url(#paint0_linear_191_340)"
          strokeWidth="5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_191_340"
          x="-17.7788"
          y="0.0131836"
          width="1978.48"
          height="430.615"
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
            result="effect1_dropShadow_191_340"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_191_340"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_191_340"
          x1="28.4028"
          y1="123.944"
          x2="1654.17"
          y2="-415.657"
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

export default GoldOvalLine;
