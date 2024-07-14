import React from 'react'
import TheShowOne from '../../common/components/__molecules/TheShowOne/TheShowOne'
import TheShowTwo from '../../common/components/__molecules/TheShowTwo/TheShowTwo'
import TheShowThree from '../../common/components/__molecules/TheShowThree/TheShowThree'

const page = () => {
    return (
        <div className=" bg-mainPageThreebg bg-contain bg-[#161616]">
            <TheShowOne />
            <TheShowTwo />
            <TheShowThree />
        </div>


    )
}

export default page
