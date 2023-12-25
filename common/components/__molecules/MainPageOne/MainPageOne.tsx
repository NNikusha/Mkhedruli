"use client";
import "common/assets/globals.css";
import React from "react";
import GoDown from "../../../../public/icons/GoDown";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import { Link } from "react-scroll";
import { useGlobalContext } from "../../../store/store";

const MainPageOne = () => {
  return (
    <section
      className="h-screen bg-mainPageOnebg bg-bottom bg-cover bg-no-repeat relative overflow-hidden"
      id="home"
    >
      <div className="w-full h-full flex flex-col justify-center px-[110px] 3xl:pb-[100px] pb-[50px] bg-black bg-opacity-60 items-center lg:items-start gap-[70px] lg:gap-0">
        <div className="text-white 3xl:text-8xl lg:text-7xl text-5xl items-center gap-[74px] flex-1 flex ">
          <GoldLine className="3xl:w-[4px] 3xl:h-[263px] w-[3px] h-[160px] hidden lg:flex" />
          <div className=" flex-col 3xl:gap-10 gap-8 hidden lg:flex">
            <p className="tracking-wider">STATE SONG AND</p>
            <p className="tracking-wider">DANCE</p>
            <p className="tracking-wider">ENSEMBLE</p>
          </div>
          <div className="flex flex-col 3xl:gap-10 gap-8 text-white lg:hidden mt-32 text-center">
            <p className="tracking-wider">STATE </p>
            <p className="tracking-wider"> SONG AND</p>
            <p className="tracking-wider">DANCE</p>
            <p className="tracking-wider">ENSEMBLE</p>
          </div>
        </div>
        <div className="flex  justify-between flex-col lg:flex-row lg:w-full w-fit items-center h-full lg:h-auto">
          <Link
            className="hover:text-white duration-100 cursor-pointer"
            to="theTradition"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            <GoDown className="3xl:w-[100px] 3xl:h-[100px] lg:w-[68px] lg:h-[68px] w-[74px] h-[74px] cursor-pointer order-2 lg:order-1" />
          </Link>
          <Link
            className="hover:text-white duration-100 cursor-pointer"
            to="mainPageTwoVideo"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            <button
              type="button"
              className="text-white 3xl:py-6 3xl:px-14 lg:px-12 lg:py-4 bg-yellow-300 rounded-full 3xl:text-3xl text-base shadow-md custom-gradient custom-border w-[190px] 3xl:w-[380px] lg:w-[260px] px-0 py-4 order-1 lg:order-2"
            >
              Watch Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainPageOne;
