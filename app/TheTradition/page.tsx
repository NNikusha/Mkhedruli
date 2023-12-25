import React from "react";
import HistoryPageOne from "../../common/components/__molecules/HistoryPageOne/HistoryPageOne";
import HistoryPageTwo from "../../common/components/__molecules/HistoryPageTwo/HistoryPageTwo";
import HistoryPageThree from "../../common/components/__molecules/HistoryPageThree/HistoryPageThree";
import HistoryPageOneMobile from "../../common/components/__molecules/HistoryPageOneMobile/HistoryPageOneMobile";
import HistoryPageTwoMobile from "../../common/components/__molecules/HistoryPageTwoMobile/HistoryPageTwoMobile";
import HistoryPageThreeMobile from "../../common/components/__molecules/HistoryPageThreeMobile/HistoryPageThreeMobile";

const page = () => {
  return (
    <>
      <div className="hidden lg:block">
        <HistoryPageOne />
        <HistoryPageTwo />
        <HistoryPageThree />
      </div>
      <div className="block lg:hidden">
        <HistoryPageOneMobile />
        <HistoryPageTwoMobile />
        <HistoryPageThreeMobile />
      </div>
    </>
  );
};

export default page;
