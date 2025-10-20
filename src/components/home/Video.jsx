import React from 'react'
import bannervideo from '../../assets/bannervideo.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video autoPlay muted loop className='h-full w-full object-cover' src={bannervideo} ></video>
    </div>
  )
}

export default Video