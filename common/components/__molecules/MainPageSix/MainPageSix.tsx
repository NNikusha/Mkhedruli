
import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import Map from "../../__atoms/Map/Map";
import InstaIcon from "../../../../public/icons/InstaIcon";
import TwitterIcon from "../../../../public/icons/TwitterIcon";
import FacebookIcon from "../../../../public/icons/FacebookIcon";
import YoutubeIcon from "../../../../public/icons/YoutubeIcon";
import Link from "next/link";

const MainPageSix = () => {
  return (
    <section
      className=" lg:h-[94vh] flex flex-col  pt-10  relative items-center  gap-32 lg:gap-0"
      id="theTradition"
    >
      <div
        className="flex flex-col lg:flex-row justify-between lg:gap-20 gap-5 3xl:gap-44 3xl:pl-44  items-center lg:pl-20 text-center lg:text-start w-fit lg:w-full
       "
      >
        <h3 className="3xl:text-[80px] lg:text-6xl text-[40px]  font-bold text-white flex-1">
          CONTACT
        </h3>
        <GoldLine className="w-full h-[2px] flex" />
      </div>
      <div className="flex-1 flex lg:items-center justify-center items-end pb-16 lg:pb-0">
        <div
          className="3xl:w-[900px] 3xl:h-[600px] lg:w-[720px] lg:h-[450px] bg-[#161616] 3xl:border-[4px] border-[3px] border-[#fde39753] lg:ml-40 w-[310px] flex items-center relative flex-col lg:flex-row"
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <Map />
          <div className="flex flex-col 3xl:gap-10 gap-4 justify-center lg:w-[40%] w-full items-center lg:items-start h-full p-6 pt-0 lg:p-0 relative bottom-10 lg:bottom-0">
            <div className="lg:w-[80%]  ">
              <h6 className="text-[#FDE497] mb-2 3xl:text-xl text-base text-center lg:text-start">
                Address:
              </h6>
              <p className="w-full break-words text-white font-extralight text-xs 3xl:text-base text-center lg:text-start">
                Georgia,Kobuleti,Agmashenebeli Street N114
              </p>
            </div>
            <div className="lg:w-[80%]">
              <h6 className="text-[#FDE497] mb-2 3xl:text-xl text-base text-center lg:text-start">
                Telephone number
              </h6>
              <div className="w-full break-words text-white font-extralight text-xs 3xl:text-base text-center lg:text-start">
                <div>
                  +995 595 700 212
                </div>
                <div>+995 568 101 135</div>
              </div>
            </div>
            {/* <div className="lg:w-[80%] w-full">
              <h6 className="text-[#FDE497] mb-2 3xl:text-xl text-base text-center lg:text-start">
                Social medias
              </h6>
              <div className="flex lg:w-[80%] justify-between">
                <Link href={""}>
                  <InstaIcon className="" />
                </Link>
                <Link href={""}>
                  <FacebookIcon className="" />
                </Link>
                <Link
                  href={"https://www.youtube.com/@besikgorjoladze4536"}
                  target="_blank"
                >
                  <YoutubeIcon className="" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default MainPageSix;