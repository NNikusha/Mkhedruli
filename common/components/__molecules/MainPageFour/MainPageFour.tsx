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
];

const MainPageFour = () => {
  return (
    <section className="3xl:h-[86vh] h-[90vh] w-full flex flex-col justify-center relative">
      <div className="3xl:h-[580px] h-[400px] flex 3xl:gap-5 gap-2 xl:justify-end justify-center w-full 3xl:pr-24 xl:pr-16 z-10">
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
      <div className="3xl:text-[80px]  text-6xl 3xl:pl-24 pl-16 relative 3xl:bottom-16 xl:bottom-10 -bottom-4 font-bold text-white xl:flex-col gap-8 xl:gap-0 hidden lg:flex">
        <h3 className="mt-[12px] 3xl:mt-[20px]">THE</h3>
        <h3 className="mt-[12px] 3xl:mt-[20px]">PRODUCTION</h3>
      </div>
      <GoldOvalLine className="absolute w-full bottom-[-160px] left-0 " />
    </section>
  );
};

export default MainPageFour;
