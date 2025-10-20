import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[fontprimary] text-white pt-5 text-center'>
            <div className=" flex items-center justify-center lg:text-[7vw] text-[10vw] uppercase lg:leading-[8vw] leading-[12vw]">
                The spark
            </div>
            <div className="flex items-start justify-center lg:text-[7vw] text-[10vw] uppercase lg:leading-[8vw] leading-[12vw]">
                Who
                <div className='lg:h-[7vw] h-[10vw] ml-2  w-[15vw] rounded-full overflow-hidden'>
                    <Video/>
                </div>
            </div>
            <div className="flex items-center justify-center lg:text-[7vw] text-[10vw] uppercase lg:leading-[8vw] leading-[12vw]">
                generates
            </div>  
            <div className=" flex items-center justify-center lg:text-[7vw] text-[10vw] uppercase lg:leading-[8vw] leading-[12vw]">
                there
            </div>
            <div className=" flex items-center justify-center lg:text-[7vw] text-[10vw] uppercase lg:leading-[8vw] leading-[12vw]">
                creativity
            </div>
            <div className='flex items-end justify-end px-10 pt-10 lg:pt-0 lg:px-20'>
                <p className='lg:w-[350px] font-[fontsecondary] text-sm w-full text-center lg:text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptas labore at optio? Veniam soluta saepe neque deleniti illo doloribus voluptas dolore error corporis recusandae quaerat sit, iure nulla eligendi tempora quos exercitationem. Delectus omnis ad, aspernatur in magnam sunt.</p>
            </div>
        </div>
    )
}

export default HomeHeroText