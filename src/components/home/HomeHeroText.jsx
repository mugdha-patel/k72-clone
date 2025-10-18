import React from 'react'
import Video from './video'

const HomeHeroText = () => {
    return (
        <div className='font-[fontprimary] text-white pt-5 text-center'>
            <div className=" flex items-center justify-center text-[7vw] uppercase leading-[8vw]">
                The spark
            </div>
            <div className="flex items-start justify-center text-[7vw] uppercase leading-[8vw]">
                Who
                <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden'>
                    <Video/>
                </div>
            </div>
            <div className="flex items-center justify-center text-[7vw] uppercase leading-[8vw]">
                generates
            </div>  
            <div className=" flex items-center justify-center text-[7vw] uppercase leading-[8vw]">
                there
            </div>
            <div className=" flex items-center justify-center text-[7vw] uppercase leading-[8vw]">
                creativity
            </div>
        </div>
    )
}

export default HomeHeroText