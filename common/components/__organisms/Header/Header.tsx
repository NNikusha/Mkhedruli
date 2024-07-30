"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import BurgerBtn from "../../__atoms/BurgerBtn/BurgerBtn";
import { useGlobalContext } from "../../../store/store";
import LangSwitcher from "../../__molecules/LangSwitcher/LangSwitcher";
import { TEXTS } from "../../../locales/languages";

const Header = () => {
  const { burgerMenuOpen, setBurgerMenuOpen } = useGlobalContext();
  const { language } = useGlobalContext();
  const pathName = usePathname();
  const router = useRouter();
  return (
    <>
      <header className="bg-transparent text-white 3xl:text-2xl text-base flex justify-between 3xl:px-10 3xl:py-6 px-8 py-2  fixed w-full items-center backdrop-blur-md z-50">
        <Image
          src={"/icons/logo.svg"}
          alt="logo"
          width={0}
          height={0}
          className="3xl:w-[62px] 3xl:h-[57px] w-[52px] h-[47px] cursor-pointer z-50"
          onClick={() => {
            router.push("/");
            setBurgerMenuOpen(false);
          }}
        />
        <div className=" gap-[2vw] text-[#FFFFFF66] hidden lg:flex">
          <Link
            href="/TheTradition"
            className={`hover:text-white ${
              pathName === "/TheTradition" && "text-white"
            } duration-100 cursor-pointer`}
          >
            {TEXTS[language].header?.HISTORY}
          </Link>
          <Link
            href="/TourDates"
            className={`hover:text-white ${
              pathName === "/TourDates" && "text-white"
            } duration-100 cursor-pointer`}
          >
            {TEXTS[language].header?.TOURDATES}
          </Link>
          <Link
            href="/Media"
            className={`hover:text-white ${
              pathName === "/Media" && "text-white"
            } duration-100 cursor-pointer`}
          >
            {TEXTS[language].header?.MEDIA}
          </Link>
          <Link
            className={`hover:text-white ${
              pathName === "/TheShow" && "text-white"
            } duration-100 cursor-pointer`}
            href="/TheShow"
          >
            {TEXTS[language].header?.THESHOW}
          </Link>
          <Link
            href="/Gallery"
            className={`hover:text-white ${
              pathName === "/Gallery" && "text-white"
            } duration-100 cursor-pointer`}
          >
            {TEXTS[language].header?.GALLERY}
          </Link>
        </div>
        <div className="flex gap-10">
          {/* <LangSwitcher /> */}
          <BurgerBtn isOpen={burgerMenuOpen} setIsOpen={setBurgerMenuOpen} />
        </div>
        <div
          className={`w-full h-screen absolute left-0 bg-[#161616] duration-1000 z-20 flex items-center justify-center ${
            burgerMenuOpen ? "top-0" : "top-[-1500px]"
          }`}
        >
          <div className=" text-[#FFFFFF66] text-2xl font-semibold  flex flex-col gap-6 pb-20">
            <Link
              href="/TheTradition"
              className={`hover:text-white ${
                pathName === "/TheTradition" && "text-white"
              } duration-100 cursor-pointer`}
              onClick={() => setBurgerMenuOpen(false)}
            >
              {TEXTS[language].header?.HISTORY}
            </Link>
            <Link
              href="/TourDates"
              className={`hover:text-white ${
                pathName === "/TourDates" && "text-white"
              } duration-100 cursor-pointer`}
              onClick={() => setBurgerMenuOpen(false)}
            >
              {TEXTS[language].header?.TOURDATES}
            </Link>
            <Link
              href="/Media"
              className={`hover:text-white ${
                pathName === "/Media" && "text-white"
              } duration-100 cursor-pointer`}
              onClick={() => setBurgerMenuOpen(false)}
            >
              {TEXTS[language].header?.MEDIA}
            </Link>
            <Link
              className={`hover:text-white ${
                pathName === "/TheShow" && "text-white"
              } duration-100 cursor-pointer`}
              href="/TheShow"
              onClick={() => setBurgerMenuOpen(false)}
            >
              {TEXTS[language].header?.THESHOW}
            </Link>
            <Link
              href="/Gallery"
              className={`hover:text-white ${
                pathName === "/Gallery" && "text-white"
              } duration-100 cursor-pointer`}
              onClick={() => setBurgerMenuOpen(false)}
            >
              {TEXTS[language].header?.GALLERY}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
