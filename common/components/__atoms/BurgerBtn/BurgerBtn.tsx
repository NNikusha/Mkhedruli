import React, { useEffect, useRef, useState } from "react";

interface BurgerBtnProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const BurgerBtn = ({ isOpen, setIsOpen }: any) => {
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLElement | null>(null);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    menu.current = document.querySelector(".menu") as HTMLElement;
  }, []);

  useEffect(() => {
    if (menu.current && isOpen) {
      menu.current.classList.add("active");
      slide1Ref.current?.classList.add("active");
      slide2Ref.current?.classList.add("active");
      slide3Ref.current?.classList.add("active");
    } else if (menu.current) {
      menu.current.classList.remove("active");
      slide1Ref.current?.classList.remove("active");
      slide2Ref.current?.classList.remove("active");
      slide3Ref.current?.classList.remove("active");
    }
  }, [isOpen]);

  return (
    <button
      type="button"
      className="flex lg:hidden flex-col justify-between w-8 h-5"
      onClick={handleMenuClick}
    >
      <div
        ref={slide1Ref}
        className={`${
          isOpen && "transform translate-y-2 rotate-45"
        } h-[15%] w-full rounded-2xl duration-500   bg-white`}
      ></div>
      <div
        ref={slide2Ref}
        className={` ${
          isOpen && "opacity-0"
        } h-[15%] w-full rounded-2xl bg-white duration-500`}
      ></div>
      <div
        ref={slide3Ref}
        className={`${
          isOpen && "transform -translate-y-[9px] -rotate-45"
        } duration-500 h-[15%] w-full rounded-2xl bg-white`}
      ></div>
    </button>
  );
};

export default BurgerBtn;
