"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import React, { useState } from "react";
import { Link } from "react-scroll";
import BurgerBtn from "../../__atoms/BurgerBtn/BurgerBtn";
import { useGlobalContext } from "../../../store/store";

const Header = () => {
  const { burgerMenuOpen, setBurgerMenuOpen } = useGlobalContext();
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
            className="hover:text-white duration-100 cursor-pointer"
            to="theShow"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            THE SHOW
          </Link>
          <a
            href="TheTradition"
            className="hover:text-white duration-100 cursor-pointer"
          >
            THE TRADITION
          </a>
          <a
            href="TourDates"
            className="hover:text-white duration-100 cursor-pointer"
          >
            TOUR DATES
          </a>
          <a
            href="Media"
            className="hover:text-white duration-100 cursor-pointer"
          >
            MEDIA
          </a>
          <a
            href="Gallery"
            className="hover:text-white duration-100 cursor-pointer"
          >
            GALLERY
          </a>
        </div>
        <p className="hidden lg:block">EN</p>
        <BurgerBtn isOpen={burgerMenuOpen} setIsOpen={setBurgerMenuOpen} />
        <div
          className={`w-full h-screen absolute left-0 bg-[#161616] duration-1000 z-20 flex items-center justify-center ${
            burgerMenuOpen ? "top-0" : "top-[-1500px]"
          }`}
        >
          <div className=" text-[#FFFFFF66] text-2xl font-semibold  flex flex-col gap-6 pb-20">
            <Link
              className="hover:text-white duration-100 cursor-pointer text-center"
              to="theShow"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onClick={() => setBurgerMenuOpen(false)}
            >
              THE SHOW
            </Link>
            <a
              href="TheTradition"
              className="hover:text-white duration-100 cursor-pointer"
            >
              THE TRADITION
            </a>
            <a
              href="TourDates"
              className="hover:text-white duration-100 cursor-pointer text-center"
              onClick={() => setBurgerMenuOpen(false)}
            >
              TOUR DATES
            </a>
            <a
              href="Media"
              className="hover:text-white duration-100 cursor-pointer text-center"
              onClick={() => setBurgerMenuOpen(false)}
            >
              MEDIA
            </a>
            <a
              href="Gallery"
              className="hover:text-white duration-100 cursor-pointer text-center"
              onClick={() => setBurgerMenuOpen(false)}
            >
              GALLERY
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
