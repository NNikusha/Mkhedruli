import React from 'react';
import "../TourDates/TourDates.css"
import GoldLine1 from '../../public/icons/GoldLine1';
import GoldLine2 from '../../public/icons/GoldLine2';
const MyComponent = () => {
    return (
        <section className="h-full relative w-full pt-[110px] bg-bottom bg-[#161616] overflow-y-hidden  flex justify-center items-center">
         <GoldLine1 className='  absolute top-[230px] overflow-hidden' />
            <GoldLine2 className=' absolute top-[120px] right-6 overflow-hidden'  /> 
            <div className="w-full h-full px-4 max-w-[1500px]">
                <div className="text-white font-bold text-center pt-8 uppercase text-4xl">
                    NOVEMBER
                </div>
                <div className="py-[30px] px-[30px] grid gap-10 grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="w-full relative h-[370px] bg-black transform Tour">
                            <div className='flex bg-dancersPiramid h-full grayscale bg-bottom bg-cover bg-no-repeat flex-col justify-center items-center text-white pt-[280px]'></div>
                            <div className='pb-[20px] max-w-[200px] absolute bottom-[5px] left-0 right-0 mx-auto'>
                                <div className='gradient-text font-bold text-2xl uppercase text-[#Ffd700]'>23 November</div>
                                <div className='text-xl text-white'>Tbilisi Concert Hall</div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyComponent;
