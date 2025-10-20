import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='font-[fontsecondary] text-white flex items-center  mx-10 justify-center gap-2 mt-10 lg:mt-20'>
            <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-30 w-120 border-white uppercase rounded-full flex items-center justify-center'>
                <Link className='lg:text-[5vw] text-[3vw]  ' to='/projects'>Projects</Link>
            </div>
            <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-30 w-120  border-white uppercase rounded-full flex items-center justify-center'>
                <Link className='lg:text-[5vw] text-[4vw] ' to='/agence'>Agency</Link>
            </div>

           
        </div>
    )
}

export default HomeBottomText