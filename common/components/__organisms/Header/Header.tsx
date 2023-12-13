import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-transparent text-white text-2xl flex justify-between px-10 py-10 fixed w-full items-center backdrop-blur-md z-20">
      <Image
        src={"/icons/logo.svg"}
        alt="logo"
        width={0}
        height={0}
        className="w-[62px] h-[57px]"
      />
      <div className="flex gap-[2vw] text-[#FFFFFF66] ">
        <Link className="hover:text-white duration-100" href="/">
          HOME
        </Link>
        <Link className="hover:text-white duration-100" href="/">
          THE SHOW
        </Link>
        <Link className="hover:text-white duration-100" href="/">
          THE TRADITION
        </Link>
        <Link className="hover:text-white duration-100" href="/">
          TOUR DATES
        </Link>
        <Link className="hover:text-white duration-100" href="/">
          MEDIA
        </Link>
        <Link className="hover:text-white duration-100" href="/">
          GALLERY
        </Link>
      </div>
      <p>EN</p>
    </header>
  );
};

export default Header;
