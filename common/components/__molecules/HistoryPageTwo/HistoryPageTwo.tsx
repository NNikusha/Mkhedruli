import React from 'react'
import GoldLine from '../../__atoms/GoldLine/GoldLine'
import GrapeOrnament from '../../../../public/icons/GrapeOrnament'

const HistoryPageTwo = () => {
    return (
        <div className='h-[70vh] bg-[#161616] bg-bottom bg-cover bg-no-repeat'>
            <div className="w-full h-full flex  relative flex-col justify-center px-[110px] pb-[100px] bg-[#161616] bg-opacity-60">
                <GrapeOrnament className="absolute left-[-200px] top-[8px]" />
                <div className='flex flex-col px-[300px] pt-[55px] text-white justify-center items-center w-[100%]'>
                    <div className='text-xl font-normal leading-8'>
                    The name "Mkhedruli" drives from the script used in the Georgian alphabet and is emblematic of Georgia's distinctive cultural identity. Just as the Mkhedruli script has been instrumental in recording Georgia's literary and historical treasures, the Mkhedruli dance ensemble captures the essence of the nation's cultural spirit through movement.                    </div>

                </div>
                <div className='flex  absolute  right-[250px] bottom-[150px] justify-end items-end'>
                        <GoldLine className="w-[400px] h-[3px] " />
                    </div>
            </div>
        </div>)
}

export default HistoryPageTwo