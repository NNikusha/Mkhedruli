import React from "react";
import GoldLine from "../../__atoms/GoldLine/GoldLine";
import GrapeOrnament from "../../../../public/icons/GrapeOrnament";

const HistoryPageTwoMobile = () => {
  return (
    <div className=" bg-[#161616] bg-bottom bg-cover bg-no-repeat py-6">
      <div className="w-full h-full flex  relative flex-col justify-center bg-[#161616] ">
        <GrapeOrnament className=" w-full" />
        <div className="flex flex-col  text-white justify-center  w-[100%] p-16 gap-6 items-end">
          <div className="text-sm text-end font-light">
            The name "Mkhedruli" drives from the script used in the Georgian
            alphabet and is emblematic of Georgia's distinctive cultural
            identity. Just as the Mkhedruli script has been instrumental in
            recording Georgia's literary and historical treasures, the Mkhedruli
            dance ensemble captures the essence of the nation's cultural spirit
            through movement.{" "}
          </div>
          <GoldLine className="w-[85%] h-[2px]  " />
        </div>
      </div>
    </div>
  );
};

export default HistoryPageTwoMobile;
