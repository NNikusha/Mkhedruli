import React from 'react';

const MyComponent = () => {
    return (
        <section className="h-full pt-[110px] bg-bottom bg-[#161616] bg-no-repeat flex justify-center items-center">
            <div className="w-full px-4 max-w-[1500px] ">
                <div className="text-white font-bold text-2xl text-center pt-8 uppercase ">
                    NOVEMBER
                </div>
                <div className="py-[80px]  px-[30px] grid gap-10 grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="w-full relative  h-[370px] bg-black transform hover:-translate-y-8 hover:shadow-lg hover:shadow-gold-500 transition-transform duration-300">
                            <div className='flex   bg-dancersPiramid h-full grayscale hover:grayscale-0 bg-bottom bg-cover bg-no-repeat flex-col justify-center items-center text-white pt[280px]'>
                            </div>
                            <div className='pb-[30px] max-w-[200px]  hover:grayscale-0 absolute bottom-[5px] left-0 right-0 mx-auto'>
                                    <div className='font-bold text-2xl uppercase text-[#Ffd700]'>23 November </div>
                                    <div className='text-xl'>Tbilisi Concert Hall </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyComponent;
