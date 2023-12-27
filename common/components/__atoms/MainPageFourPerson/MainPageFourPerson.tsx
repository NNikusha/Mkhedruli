import React from "react";
import "../MainPageFourPerson/mainPageFourPerson.css";
import GoldLine from "../GoldLine/GoldLine";

interface Person {
  firstname: string;
  lastname: string;
  position: string;
  image: string;
}

const MainPageFourPerson = ({
  firstname,
  lastname,
  position,
  image,
}: Person) => {
  return (
    <div className=" group 3xl:w-[324px] w-[250px] cursor-pointer flex items-end flex-col relative justify-end animation rounded-lg overflow-hidden z-20">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={` w-full h-full  bg-no-repeat absolute bg-cover lg:grayscale  group-hover:grayscale-0`}
      ></div>
      <div className="flex flex-col w-full 3xl:px-5 3xl:py-12 py-6 px-3 z-10">
        <p className="text-white 3xl:text-2xl text-base font-semibold ">
          {firstname}
        </p>
        <p className="text-white 3xl:text-2xl text-base font-semibold ">
          {lastname}
        </p>
        <GoldLine className="w-full h-[2px] my-2" />
        <p className="text-white 3xl:text-xl text-sm font-semibold ">
          {position}
        </p>
      </div>
    </div>
  );
};

export default MainPageFourPerson;
