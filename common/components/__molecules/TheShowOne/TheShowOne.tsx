import React from 'react'
import GoldLine from '../../__atoms/GoldLine/GoldLine'

const TheShowOne = () => {
    return (
        <section className="h-auto 2xl:h-screen w-full bg-contain "> 
            <div className=" px-[40px] w-full h-full flex">
                <div className='flex flex-col lg:flex-row-reverse items-center'>
                    <div className='flex flex-col relative items-center mt-[150px]'>
                        <img className='rounded-[10px]' src={"/images/mkhedruliDancers.png"} alt="Mkhedruli Dancers" />
                        <div className='bg-[#1F1F1F] flex rounded-[10px] w-full h-fit text-white px-4 py-2 xl:hidden text-center items-center justify-center'>
                            Discover Georgian Heritage Through Traditional Attire
                        </div>
                        <div className='hidden xl:flex absolute w-[410px] h-[100px] bottom-[-40px] left-[-80px] text-[20px] px-3 py-4 rounded-sm text-center items-center justify-center text-white bg-[#1F1F1F]'>
                            Discover Georgian Heritage Through Traditional Attire
                        </div>
                    </div>
                    <div className="flex items-center text-white flex-1 lg:w-[790px] lg:text-2xl lg:mr-[160px]">
                        <GoldLine className="w-[3px] h-[180px] xl:h-[333px] xl:w-[5px] rounded-xl" />
                        <div className="w-full pl-[60px] backdrop-blur-sm p-[20px] rounded-[20px] flex flex-col space-y-4">
                            <h1 className="text-2xl font-bold">Traditional Georgian Attire: A Symbol of Heritage and Pride</h1>
                            <p>Immerse yourself in the rich cultural heritage of Georgia through the traditional attire showcased by the Mkhedruli Ensemble. Our dancers don exquisite garments that are visually stunning and deeply symbolic, reflecting the history and pride of Georgian culture.</p>

                            <h2 className="text-xl font-semibold">The Iconic Chokha</h2>
                            <p>The chokha is one of the most recognizable pieces of Georgian traditional attire. This distinctive wool garment, often worn by men, features a high-necked, fitted design with decorative cartridge holders across the chest, symbolizing the warrior spirit of Georgia.</p>

                            <h2 className="text-xl font-semibold">Women's Traditional Costumes</h2>
                            <p>The women of the Mkhedruli Ensemble wear traditional dresses with flowing skirts and intricate embroidery. These designs reflect the artistry and craftsmanship of Georgian textile traditions, unique to different regions of Georgia.</p>

                            <p>The Mkhedruli Ensemble invites you to explore the cultural significance and beauty of Georgian traditional attire. Our performances showcase the elegance and grandeur of these costumes in motion, creating an unforgettable experience that brings Georgia's rich heritage to life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TheShowOne;