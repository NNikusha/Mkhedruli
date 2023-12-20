"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import React, { useState } from "react";
import { Link } from "react-scroll";
import BurgerBtn from "../../__atoms/BurgerBtn/BurgerBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  return (
    <header className="bg-transparent text-white 3xl:text-2xl text-base flex justify-between 3xl:px-10 3xl:py-6 px-8 py-2  fixed w-full items-center backdrop-blur-md z-50">
      <Image
        src={"/icons/logo.svg"}
        alt="logo"
        width={0}
        height={0}
        className="3xl:w-[62px] 3xl:h-[57px] w-[52px] h-[47px] cursor-pointer"
        onClick={() => router.push("/")}
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
        <Link
          className="hover:text-white duration-100 cursor-pointer"
          to="theTradition"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          THE TRADITION
        </Link>
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
      <BurgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
