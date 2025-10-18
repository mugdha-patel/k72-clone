import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='font-[fontsecondary] text-white flex items-center justify-center gap-2 mt-40'>
            <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50]  h-30 w-120 border-white uppercase rounded-full flex items-center justify-center'>
                <Link className='text-[5vw] ' to='/projects'>Projects</Link>
            </div>
            <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-30 w-120 border-white uppercase rounded-full flex items-center justify-center'>
                <Link className='text-[5vw] ' to='/agence'>Agency</Link>
            </div>

           
        </div>
    )
}

export default HomeBottomText