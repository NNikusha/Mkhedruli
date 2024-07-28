import React from 'react';
import GoldLine from '../../__atoms/GoldLine/GoldLine';
import GrapeOrnament from '../../../../public/icons/GrapeOrnament';

const TheShowTwo = () => {
  return (
    <section className="h-auto 2xl:h-screen">
      <div className="px-[40px] w-full h-full flex">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col relative items-center mt-[150px]">
            <GrapeOrnament className="absolute top-[-150px] h-[80px] md:hidden lg:flex lg:top-[-400px] lg:h-[180px]" />
            <img className="rounded-[10px]" src="/images/mkhedruliDancers.png" alt="Mkhedruli Dancers" />
            <div className="bg-[#1F1F1F] rounded-[10px] w-full h-fit text-white px-4 py-2 xl:hidden">
              Traditional attire, intricate dances, and folk music showcase Georgia's rich heritage.
            </div>
            <div className="hidden xl:flex absolute w-[410px] h-[100px] bottom-[-40px] right-[-80px] px-3 py-4 rounded-sm text-white bg-[#1F1F1F]">
              Experience the Spirit of Georgia through traditional attire, intricate dances, and folk music.
            </div>
          </div>
          <div className="flex items-center text-white flex-1 lg:w-[790px] lg:text-2xl lg:ml-[160px]">
            <div className="flex flex-row-reverse">
              <GoldLine className="w-[3px] h-[180px] xl:h-[333px] xl:w-[5px] rounded-xl" />
              <div className="w-full p-10 bg-opacity-75 backdrop-blur-sm rounded-2xl flex flex-col">
                <h1 className="text-3xl font-bold mb-4">Spirit of Georgia Show</h1>
                <p className="mb-4">Explore the rich heritage of Georgia through our dance and music performances.</p>

                <h2 className="text-2xl font-semibold mb-3">Program Options</h2>
                <ul className="list-disc list-inside mb-6">
                  <li className="mb-2"><strong>Standard (1.15 Hours):</strong> 37 members with pre-recorded music.</li>
                  <li className="mb-2"><strong>Enhanced (1.20 Hours):</strong> 50 members, live music.</li>
                  <li className="mb-2"><strong>Extended (1.30 Hours):</strong> 37 members, deeper traditions.</li>
                  <li className="mb-2"><strong>Grand (1.30 Hours):</strong> 61 members, live music, large ensemble.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-3">Performance Highlights</h2>
                <ul className="list-disc list-inside mb-6">
                  <li className="mb-2"><strong>Traditional Dances:</strong> Intricate footwork, graceful movements.</li>
                  <li className="mb-2"><strong>Folk Music:</strong> Evoking Georgia's beauty and resilience.</li>
                  <li className="mb-2"><strong>Costumes:</strong> Iconic chokha and traditional attire.</li>
                  <li className="mb-2"><strong>Cultural Narratives:</strong> Stories of Georgian culture.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-3">Experience the Spirit</h2>
                <p>Join us to celebrate Georgia's timeless traditions through mesmerizing dance and music. Discover the pride each garment carries and the stories they tell.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheShowTwo;
