"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages";

const PHONE_NUMBERS = [
  "+995 595 700 212",
  "+995 568 101 135",
  "+380 98 442 87 53",
  "+353 87 751 98 94",
];

const EMAIL = "folkfestivalskn@gmail.com";

const Footer = () => {
  const { language } = useGlobalContext();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/TheTradition", label: TEXTS[language].header?.HISTORY },
    { href: "/TourDates", label: TEXTS[language].header?.TOURDATES },
    { href: "/Media", label: TEXTS[language].header?.MEDIA },
    { href: "/TheShow", label: TEXTS[language].header?.THESHOW },
    { href: "/Gallery", label: TEXTS[language].header?.GALLERY },
  ];

  return (
    <footer className="bg-[#161616] text-white pt-16 3xl:pt-24 pb-8 3xl:pb-10 px-8 lg:px-16 3xl:px-32">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 text-center lg:text-left place-items-center lg:place-items-start">
        <div className="flex flex-col items-center lg:items-start gap-5 w-full">
          <Image
            src={"/icons/mkhedruli-logo-horizontal.png"}
            alt="Mkhedruli logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[190px] 3xl:w-[220px] h-auto brightness-0 invert"
          />
          <p className="text-[#FFFFFF80] text-sm 3xl:text-base font-light leading-relaxed max-w-xs">
            {TEXTS[language].footer?.TAGLINE}
          </p>
        </div>

        <nav className="flex flex-col items-center lg:items-start gap-4 w-full">
          <h6 className="text-[#FDE497] uppercase tracking-[0.15em] text-xs 3xl:text-sm font-medium">
            {TEXTS[language].footer?.MENU}
          </h6>
          <div className="flex flex-col gap-3 text-[#FFFFFF80] text-sm 3xl:text-base font-light">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex flex-col items-center lg:items-start gap-4 w-full">
          <h6 className="text-[#FDE497] uppercase tracking-[0.15em] text-xs 3xl:text-sm font-medium">
            {TEXTS[language].mainPageSix?.CONTACT}
          </h6>
          <p className="text-[#FFFFFF80] text-sm 3xl:text-base font-light max-w-[240px]">
            {TEXTS[language].mainPageSix?.ADDRESS}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="text-[#FFFFFF80] text-sm 3xl:text-base font-light hover:text-white duration-200"
          >
            {EMAIL}
          </a>
          <div className="flex flex-col gap-1 text-[#FFFFFF80] text-sm 3xl:text-base font-light">
            {PHONE_NUMBERS.map((phone) => (
              <a
                key={phone}
                href={`https://wa.me/${phone.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white duration-200"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      <GoldLine className="w-full h-[1px] opacity-30 my-10 3xl:my-12" />

      <p className="text-center text-[#FFFFFF66] text-xs 3xl:text-sm font-light">
        © {year} MKHEDRULI. {TEXTS[language].footer?.RIGHTS}
      </p>
    </footer>
  );
};

export default Footer;
