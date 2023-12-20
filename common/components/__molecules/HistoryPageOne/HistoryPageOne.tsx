import React from 'react'
import GoldLine from '../../__atoms/GoldLine/GoldLine'

const HistoryPageOne = () => {
  return (
    <div className='h-screen bg-historyPhoto bg-bottom bg-cover bg-no-repeat'>
    <div className="w-full h-full flex flex-col justify-center px-[110px] pb-[100px] bg-black bg-opacity-60">
        <div className='text-white pt-[500px]'>
            <div className='flex flex-col justify-center pb-[220px] '>
                <div className='font-bold  pb-4 uppercase text-4xl'>
                    our history
                </div>
                <div className='text-xl'>
                    Mkhedruli- is unique dance ensemble
                </div>
            </div>
        </div>

        <div className=''>
            <GoldLine className="w-full h-[3px] my-2" />
            <div className='text-white flex justify-between pt-[65px]  ' >
                <div className='font-normal text-4xl uppercase leading-10'>our  <br />mission</div>
                <div className='w-[700px] h-[200px] text-2xl font-normal leading-7 '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
        </div>
    </div>
</div>  )
}

export default HistoryPageOne