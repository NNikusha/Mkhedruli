import React from 'react'
import GoldLine from '../../__atoms/GoldLine/GoldLine'

const Media = () => {
    return (
        <section className="h-full bg-mainPageThreebg bg-contain bg-[#161616] ">
            <div className="px-[40px] items-center pt-[100px] flex-col w-full h-full flex">
                <div className="flex flex-col py-8 items-center text-center w-fit lg:items-start">
                    <h3 className="text-[40px] font-bold text-white flex-1">
                        MEDIA
                    </h3>
                    <GoldLine className="w-full h-[2px] flex" />
                </div>

                <div className='flex flex-col lg:flex-row lg:gap-[15px] lg:w-[80%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='lg:h-full'>
                            <img src="../images/media2.png" className='lg:h-full' alt="" />
                        </div>
                        <div className='w-[250px] md:w-full px-2 py-5 text-center text-[#FFF]'>
                            Lorem ipsum dolor sit amet conectetur adipisicing elit. sdk Voluptatum maiores mollitia sunt. Quis dolores dicta illo quaerat dignissimos voluptatibus eligendi?
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='lg:h-full'>
                            <img src="../images/media3.png" className='' alt="" />
                        </div>
                        <div className='w-[250px] md:w-full px-2 py-5 text-center text-[#FFF]'>
                            In 2016, the Mkhedruli Ensemble toured China, performing 31 concerts across 28 cities. Our "Spirit of Georgia" show captivated audiences with mesmerizing dance and music, celebrating Georgian culture.
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row lg:w-[80%] lg:gap-5'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='lg:h-full'>
                            <img src="../images/media4.png" className='' alt="" />
                        </div>
                        <div className='w-[250px] md:w-full px-2 py-5 text-center text-[#FFF]'>
                            In November, Mkhedruli Ensemble enchanted audiences in Petropavlovsk with our "Spirit of Georgia" show. The event featured mesmerizing Georgian dance and music, celebrating our rich cultural heritage.
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='lg:h-full'>
                            <img src="../images/media5.png" className='' alt="" />
                        </div>
                        <div className='w-[250px] md:w-full px-2 py-5 text-center text-[#FFF]'>
                            In October, the Mkhedruli Ensemble performed the "Spirit of Georgia" show across Ukraine and Moldova. Our live performances captivated audiences with vibrant Georgian dance and music.
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='lg:h-full'>
                            <img src="../images/media6.png" className='' alt="" />
                        </div>
                        <div className='w-[250px] md:w-full px-2 py-5 text-center text-[#FFF]'>
                            On October 28, the Mkhedruli Ensemble brought the "Spirit of Georgia" to Odessa Philharmonic. Our live show featured mesmerizing Georgian dance and music, enchanting the audience with the vibrant spirit of Georgian culture.
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='lg:h-full'>
                            <img src="../images/media7.png" className='lg:h-[50vh]' alt="" />
                        </div>
                        <div className='w-[250px] md:w-full px-2 py-5 text-center text-[#FFF]'>
                            In 2016, the Mkhedruli Ensemble toured China, performing 31 shows across 28 cities. Our "Spirit of Georgia" captivated audiences, showcasing the vibrant traditions of Georgian dance and music.
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row lg:w-[80%] lg:gap-5 justify-center items-center'>
                    <div className='flex flex-col justify-center items-center w-1/2'>
                        <img src="../images/media8.png" className='w-full' alt="" />
                        <div className='w-[250px] md:w-full px-2 py-5 text-center text-[#FFF]'>
                            This banner commemorates our triumphant tour in China in 2016. The Mkhedruli Ensemble enthralled audiences with our "Spirit of Georgia" show, showcasing mesmerizing dance performances and enchanting music. We delivered 31 concerts in 28 cities, sharing the rich heritage of Georgian culture with thousands of enthusiastic spectators.
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center w-1/2'>
                        <img src="../images/media9.png" className='w-full' alt="" />
                        <div className='w-[250px] md:w-full px-2 py-5 text-center text-[#FFF]'>
                        Join the Mkhedruli Ensemble for an unforgettable cultural experience in Bulgaria this August. Our "Spirit of Georgia" tour features captivating performances across various cities, showcasing the vibrant traditions of Georgian dance and music.                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Media
