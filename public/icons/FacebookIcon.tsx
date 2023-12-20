import React from "react";
import { IconProps } from "../../utils/types/mainTypes";

const FacebookIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20.5034" r="20" fill="#FDE497" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.315 13.4612C24.6917 13.3366 23.8498 13.2434 23.3204 13.2434C21.8867 13.2434 21.7936 13.8667 21.7936 14.8641V16.6395H25.3774L25.065 20.3172H21.7936V31.5034H17.3063V20.3172H15V16.6395H17.3063V14.3647C17.3063 11.2487 18.7708 9.50342 22.4477 9.50342C23.7252 9.50342 24.6602 9.69042 25.8753 9.93975L25.315 13.4612Z"
        fill="#161616"
      />
    </svg>
  );
};

export default FacebookIcon;
