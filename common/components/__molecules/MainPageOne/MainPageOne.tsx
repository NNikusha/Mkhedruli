"use client";
import "common/assets/globals.css";
import React from "react";
import { motion, Variants } from "framer-motion";
import GoDown from "../../../../public/icons/GoDown";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import { Link } from "react-scroll";
import { useGlobalContext } from "../../../store/store";
import { TEXTS } from "../../../locales/languages";

const EASE = [0.22, 1, 0.36, 1] as const;

const titleContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const titleLine: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

const MainPageOne = () => {
  const { language } = useGlobalContext();
  return (
    <section
      className="h-screen bg-mainPageOnebg bg-bottom bg-cover bg-no-repeat relative overflow-hidden"
      id="home"
    >
      <div className="w-full h-full flex flex-col justify-center px-[110px] 3xl:pb-[100px] pb-[50px] bg-black bg-opacity-60 items-center lg:items-start gap-[70px] lg:gap-0">
        <div className="text-white 3xl:text-8xl lg:text-7xl text-5xl items-center gap-[74px] flex-1 flex ">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ transformOrigin: "top" }}
            className="hidden lg:flex"
          >
            <GoldLine className="3xl:w-[4px] 3xl:h-[263px] w-[3px] h-[160px] flex" />
          </motion.div>
          <motion.div
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="font-medium flex-col 3xl:gap-10 gap-8 hidden lg:flex"
          >
            <motion.p variants={titleLine} className="tracking-wider">
              {TEXTS[language].mainPageOne?.GEORGIAN}
            </motion.p>
            <motion.p variants={titleLine} className="tracking-wider">
              {TEXTS[language].mainPageOne?.DANCEENSEMBLE}
            </motion.p>
            <motion.p
              variants={titleLine}
              className="tracking-wider gradient-text 3xl:text-8xl lg:text-7xl text-5xl"
            >
              {TEXTS[language].mainPageOne?.MKHEDRULI}
            </motion.p>
          </motion.div>
          <motion.div
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col 3xl:gap-10 gap-8 text-white lg:hidden mt-32 text-center"
          >
            <motion.p variants={titleLine} className="tracking-wider">
              {TEXTS[language].mainPageOne?.GEORGIAN}
            </motion.p>
            <motion.p variants={titleLine} className="tracking-wider">
              {TEXTS[language].mainPageOne?.DANCEENSEMBLE}
            </motion.p>
            <motion.p variants={titleLine} className="tracking-wider gradient-text">
              {TEXTS[language].mainPageOne?.MKHEDRULI}
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="flex  justify-between flex-col lg:flex-row lg:w-full w-fit items-center h-full lg:h-auto"
        >
          <Link
            className="hover:text-white duration-100 cursor-pointer animate-bounce"
            to="theTradition"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            href=""
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
            href=""
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              type="button"
              className="text-white 3xl:py-6 3xl:px-14 lg:px-12 lg:py-4 bg-yellow-300 rounded-full 3xl:text-3xl text-base shadow-md custom-gradient custom-border w-[190px] 3xl:w-[380px] lg:w-[260px] px-0 py-4 order-1 lg:order-2"
            >
              {TEXTS[language].mainPageOne?.WATCHNOW}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MainPageOne;
