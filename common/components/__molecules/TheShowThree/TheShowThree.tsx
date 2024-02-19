import React from 'react'
import GoldLine from '../../__atoms/GoldLine/GoldLine'

const TheShowThree = () => {
  return (
<section className="h-screen bg-[#161616] ">
            <div className=" px-[40px] w-full h-full flex  bg-[#161616]">
                <div className='flex flex-col   lg:flex-row-reverse  items-center '>
                    <div className='flex flex-col relative   items-center  mt-[150px] '>
                        <img src={"/images/mkhedruliDancers.png"} />
                        <div className='bg-[#1F1F1F] w-full h-fit text-white px-4 py-2 xl:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, delectus?</div>
                        <div className=' hidden xl:flex absolute  w-[410px] h-[100px] bottom-[-40px] left-[-80px] px-3 py-4 rounded-sm text-white bg-[#1F1F1F] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, esse.</div>
                    </div>
                    <div className=" flex items-center text-white flex-1  lg:w-[790px] lg:text-2xl lg:mr-[160px] ">
                        <GoldLine className="w-[3px]  h-[180px]  xl:h-[333px] xl:w-[5px] rounded-xl" />
                        <div className=" w-full pl-[60px] flex ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolor et eos iure praesentium. Magni nulla eligendi voluptas hic fuga ad rem doloribus iure maiores animi, deserunt similique, voluptates quasi voluptatibus veritatis, necessitatibus sed a optio harum id incidunt quod natus ut et? Repellat qui molestiae, aperiam odit perferendis consequuntur?                        </div>
                    </div>
                </div>
            </div>
        </section>   )
}

export default TheShowThree