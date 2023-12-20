import React from "react";
import { IconProps } from "../../utils/types/mainTypes";

const ReadMoreArrow = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.353 8.35401L12.353 15.354C12.255 15.452 12.127 15.5 11.999 15.5C11.871 15.5 11.743 15.451 11.645 15.354C11.45 15.159 11.45 14.842 11.645 14.647L17.791 8.50099H1C0.724 8.50099 0.5 8.27699 0.5 8.00099C0.5 7.72499 0.724 7.50099 1 7.50099H17.793L11.647 1.35499C11.452 1.15999 11.452 0.842959 11.647 0.647959C11.842 0.452959 12.159 0.452959 12.354 0.647959L19.354 7.64796C19.4 7.69396 19.4369 7.75004 19.4619 7.81104C19.5129 7.93304 19.5129 8.07112 19.4619 8.19312C19.4359 8.25212 19.399 8.30801 19.353 8.35401Z"
        fill="white"
      />
    </svg>
  );
};

export default ReadMoreArrow;
