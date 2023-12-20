import React from 'react'
import GoldLine from '../../__atoms/GoldLine/GoldLine'

const Media = () => {
    return (
        <section className="h-full bg-[#161616] ">
            <div className=" px-[40px]  items-center  pt-[100px] flex-col    w-full h-full flex  bg-[#161616]">
                <div className="flex flex-col  py-8  items-center   text-center w-fit lg:items-start  ">
                    <h3 className=" text-[40px]  font-bold text-white flex-1">
                        MEDIA
                    </h3>
                    <GoldLine className="w-full  h-[2px] flex" />
                </div>

                <div className='flex  flex-col lg:flex-row lg:gap-[15px] lg:w-[80%]'>
                    <div className=' flex flex-col justify-center items-center '>
                        <div className='lg:h-full'>
                            <img src="../images/media2.png" className='lg:h-full' alt="" />
                        </div>
                        <div className=' w-[250px]  md:w-full px-2 py-5  text-center text-[#FFF] '>
                            Lorem ipsum dolor sit amet conectetur adipisicing elit. sdk Voluptatum maiores mollitia sunt. Quis dolores dicta illo quaerat dignissimos voluptatibus eligendi?
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center '>
                        <div className='lg:h-full'>
                            <img src="../images/media3.png" className='' alt="" />
                        </div>
                        <div className=' w-[250px]  md:w-full px-2 py-5  text-center text-[#FFF] '>
                            Lorem ipsum dolor sit amet conectetur adipisicing elit. sdk Voluptatum maiores mollitia sunt. Quis dolores dicta illo quaerat dignissimos voluptatibus eligendi?
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col lg:flex-row  lg:w-[80%] lg:gap-5'>
                    <div className=' flex flex-col justify-center items-center '>
                        <div className='lg:h-full'>
                            <img src="../images/media4.png" className='' alt="" />
                        </div>
                        <div className=' w-[250px]  md:w-full px-2 py-5  text-center text-[#FFF] '>
                            Lorem ipsum dolor sit amet conectetur adipisicing elit. sdk Voluptatum maiores mollitia sunt. Quis dolores dicta illo quaerat dignissimos voluptatibus eligendi?
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center '>
                        <div className='lg:h-full'>
                            <img src="../images/media5.png" className='' alt="" />
                        </div>
                        <div className=' w-[250px]  md:w-full px-2 py-5  text-center text-[#FFF] '>
                            Lorem ipsum dolor sit amet conectetur adipisicing elit. sdk Voluptatum maiores mollitia sunt. Quis dolores dicta illo quaerat dignissimos voluptatibus eligendi?
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center '>
                        <div className='lg:h-full'>
                            <img src="../images/media6.png" className='' alt="" />
                        </div>
                        <div className=' w-[250px]  md:w-full px-2 py-5  text-center text-[#FFF] '>
                            Lorem ipsum dolor sit amet conectetur adipisicing elit. sdk Voluptatum maiores mollitia sunt. Quis dolores dicta illo quaerat dignissimos voluptatibus eligendi?
                        </div>
                    </div>

                    {/* <div className=' flex flex-col justify-center items-center '>
                        <div className='lg:h-full'>
                        <img src="../images/media7.png" className=' lg:h-[50vh]' alt="" />
                        </div>
                        <div className=' w-[250px]  md:w-full px-2 py-5  text-center text-[#FFF] '>
                            Lorem ipsum dolor sit amet conectetur adipisicing elit. sdk Voluptatum maiores mollitia sunt. Quis dolores dicta illo quaerat dignissimos voluptatibus eligendi?
                        </div>
                    </div> */}
                </div>
                <div className=' flex flex-col lg:w-[80%] justify-center items-center '>
                    <img src="../images/media8.png" className='' alt="" />
                    <div className=' w-[250px]  md:w-full px-2 py-5  text-center text-[#FFF] '>
                        Lorem ipsum dolor sit amet conectetur adipisicing elit. sdk Voluptatum maiores mollitia sunt. Quis dolores dicta illo quaerat dignissimos voluptatibus eligendi?
                    </div>
                </div>

            </div>
        </section>)
}

export default Media