import React from "react";
import "../TourDates/TourDates.css";
import GoldLine1 from "../../public/icons/GoldLine1";
import GoldLine2 from "../../public/icons/GoldLine2";

const MyComponent = () => {
  const concertData = [
    { date: "1 August", city: "Plovdiv", theatre: "Ancient Theatre of Philippopolis" },
    { date: "2 August", city: "Stara Zagora", theatre: "Summer Theater" },
    { date: "3 August", city: "Pazarjiki", theatre: "“Vasil Levski” Sport Hall" },
    { date: "4 August", city: "Gabrovo", theatre: "Sportna Zala" },
    { date: "5 August", city: "Russe", theatre: "Arena Russe" },
  ];

  return (
    <section className="h-full relative w-full pt-[110px] bg-bottom bg-[#161616] overflow-y-hidden flex justify-center items-center">
      <GoldLine1 className="absolute top-[230px] overflow-hidden" />
      <GoldLine2 className="absolute top-[120px] right-6 overflow-hidden" />
      <div className="w-full h-full px-4 max-w-[1500px]">
        <div className="text-white font-bold text-center pt-8 uppercase text-4xl">
          August
        </div>
        <div className="py-[30px] px-[30px] grid gap-10 grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {concertData.map((concert, index) => {
            const [day, month] = concert.date.split(' ');
            return (
              <div
                key={index}
                className="w-full relative h-[370px] bg-black transform Tour"
              >
                <div className="flex bg-samaia h-full grayscale hover:grayscale-0 bg-bottom bg-cover bg-no-repeat flex-col justify-center items-center text-white pt-[280px]"></div>
                <div className="pb-[20px] max-w-[200px] absolute bottom-[5px] left-0 right-0 mx-auto text-shadow">
                  <div className="flex items-center justify-center gap-1 font-bold text-2xl uppercase">
                    <div className="text-white">
                      {day}
                    </div>
                    <div className="gradient-text-tour-dates font-bold text-2xl uppercase text-[#FFD700]">
                      {month}
                    </div>
                  </div>
                  <div className="text-xl text-center font-bold text-[#B0E0E6]">{concert.city}</div>
                  <div className="text-xl text-center font-[800] text-[#ADD8E6]">{concert.theatre}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
