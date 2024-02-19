import React from "react";
import MainPageFourPerson from "../../__atoms/MainPageFourPerson/MainPageFourPerson";
import GoldOvalLine from "../../../../public/icons/GoldOvalLine";

const persons = [
  {
    firstname: "Aleksandre",
    lastname: "Chankvetadze",
    position: "Director",
    image: "/images/manImage.png",
  },
  {
    firstname: "Aleksandre",
    lastname: "Chankvetadze",
    position: "Director",
    image: "/images/manImage.png",
  },
  {
    firstname: "Aleksandre",
    lastname: "Chankvetadze",
    position: "Director",
    image: "/images/manImage.png",
  },
  {
    firstname: "Aleksandre",
    lastname: "Chankvetadze",
    position: "Director",
    image: "/images/manImage.png",
  },
  {
    firstname: "Aleksandre",
    lastname: "Chankvetadze",
    position: "Director",
    image: "/images/manImage.png",
  },
];

const MainPageFour = () => {
  return (
    <section className="3xl:h-[86vh] h-[90vh] w-full flex flex-col justify-center relative gap-10 lg:gap-0">
      <div className="3xl:text-[80px] mt-[50px]  text-[40px]   font-bold text-white xl:flex-col   lg:hidden text-center">
        <h3>THE</h3>
        <h3>PRODUCTION</h3>
      </div>
      <div className="w-full  overflow-x-scroll lg:overflow-visible  z-10 pb-10  scrollbar scrollbar-thumb-[#D9D9D9] scrollbar-h-[5px] scrollbar-thumb-rounded-[20px]">
        <div className="3xl:h-[580px] h-[400px] w-[1500px] flex 3xl:gap-5 lg:gap-2 xl:justify-end lg:justify-center justify-evenly lg:w-full 3xl:px-4 xl:pr-6 z-20">
          {persons.map((person, index) => (
            <MainPageFourPerson
              key={index}
              firstname={person.firstname}
              lastname={person.lastname}
              position={person.position}
              image={person.image}
            />
          ))}
        </div>
      </div>
      <div className="3xl:text-[80px]   text-6xl 3xl:pl-24 pl-16 relative 3xl:bottom-16 xl:bottom-10 -bottom-4 font-bold text-white xl:flex-col gap-8 xl:gap-0 hidden lg:flex">
        <h3 className="mt-[12px] 3xl:mt-[20px]">THE</h3>
        <h3 className="mt-[12px] 3xl:mt-[20px]">PRODUCTION</h3>
      </div>
      <GoldOvalLine className="absolute w-full bottom-[-160px] left-0 " />
    </section>
  );
};

export default MainPageFour;
