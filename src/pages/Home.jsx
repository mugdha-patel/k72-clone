import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
const Home = () => {
  return (
    <div>
        <div className="h-screen w-screen fixed">
            <Video />
        </div>
        <div className="h-screen w-screen overflow-x-hidden pb-5 relative flex flex-col justify-end md:justify-between lg:justify-between">
            <HomeHeroText />
            <HomeBottomText/>
        </div>
    </div>
  )
}

export default Home