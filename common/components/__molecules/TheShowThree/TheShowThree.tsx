import React from 'react'
import GoldLine from '../../__atoms/GoldLine/GoldLine'

const TheShowThree = () => {
  return (
    <section className="h-auto 2xl:h-screen">
      <div className="px-[40px] w-full h-full flex">
        <div className='flex flex-col lg:flex-row-reverse items-center'>
          <div className='flex flex-col relative items-center mt-[150px]'>
            <img className='rounded-[10px]' src={"/images/mkhedruliDancers.png"} alt="Mkhedruli Dancers" />
            <div className='bg-[#1F1F1F] w-full h-fit rounded-[10px] text-white px-4 py-2 xl:hidden'>
              Enchanting Sounds of Georgian Folk Instruments
            </div>
            <div className='hidden xl:flex absolute w-[410px] h-[100px] bottom-[-40px] left-[-80px] px-3 py-4 rounded-sm text-white text-center text-[20px] bg-[#1F1F1F]'>
              Enchanting Sounds of Georgian Folk Instruments
            </div>
          </div>
          <div className="flex items-center text-white flex-1 lg:w-[790px] lg:text-2xl lg:mr-[160px]">
            <GoldLine className="w-[3px] h-[180px] xl:h-[333px] xl:w-[5px] rounded-xl" />
            <div className="w-full pl-[60px] backdrop-blur-sm p-[20px] rounded-[20px] flex">
              <div className="mb-4">
                <div>Georgian folk music is rich with unique instruments that bring our traditional melodies to life. The <strong>panduri</strong>, a three-string lute, produces a gentle, harmonious sound. The <strong>duduk</strong>, a double-reed woodwind, has a soulful, melancholic tone that resonates deeply. The <strong>doli</strong>, a hand drum, provides the rhythmic heartbeat for many dances, while the <strong>accordion</strong> adds a lively and spirited dimension to our music. These instruments, played by skilled musicians, create an enchanting atmosphere that captures the essence of Georgian culture. Each performance is a celebration of our musical heritage, showcasing the beauty and diversity of our traditional sounds. Experience the magic of Georgian folk instruments with Mkhedruli Ensemble, where every note tells a story of our rich cultural legacy.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheShowThree;