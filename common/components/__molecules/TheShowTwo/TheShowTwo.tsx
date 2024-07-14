import React from 'react'
import GoldLine from '../../__atoms/GoldLine/GoldLine'
import GrapeOrnament from '../../../../public/icons/GrapeOrnament'

const TheShowTwo = () => {
  return (
<section className="h-screen  ">
            <div className=" px-[40px] w-full h-full flex ">
                <div className='flex flex-col    lg:flex-row  items-center '>
                    <div className='flex flex-col relative   items-center  mt-[150px] '>
                        <GrapeOrnament className="absolute top-[-150px] h-[80px] md:hidden lg:flex lg:top-[-400px] lg:h-[180px]"/>
                        <img className='rounded-[10px]' src={"/images/mkhedruliDancers.png"} />
                        <div className='bg-[#1F1F1F] rounded-[10px]  w-full h-fit text-white px-4 py-2 xl:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, delectus?</div>
                        <div className=' hidden xl:flex absolute  w-[410px] h-[100px] bottom-[-40px] right-[-80px] px-3 py-4 rounded-sm text-white bg-[#1F1F1F] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, esse.</div>
                    </div>
                    <div className=" flex items-center  text-white flex-1  lg:w-[790px] lg:text-2xl lg:ml-[160px] ">
                        <div className='flex flex-row-reverse'>
                        <GoldLine className="w-[3px]  h-[180px]  xl:h-[333px] xl:w-[5px] rounded-xl" />
                        <div className=" w-full pl-[60px] backdrop-blur-sm p-[20px] rounded-[20px] flex ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolor et eos iure praesentium. Magni nulla eligendi voluptas hic fuga ad rem doloribus iure maiores animi, deserunt similique, voluptates quasi voluptatibus veritatis, necessitatibus sed a optio harum id incidunt quod natus ut et? Repellat qui molestiae, aperiam odit perferendis consequuntur?                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  )
}

export default TheShowTwo