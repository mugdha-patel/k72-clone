
import React from 'react'

const ProjectCard = (props) => {
   

  return (
    <>
          <div className="h-full group relative rounded-none lg:w-1/2 w-full hover:rounded-[40px] overflow-hidden">
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='absolute transition-all  opacity-0 group-hover:opacity-100 flex items-center justify-center pt-2 top-0 left-0 h-full w-full bg-black/10'>
              <h2 className='uppercase font-[fontprimary] px-8 pt-2  text-6xl border-2 text-white border-white rounded-full '>See the project</h2>
            </div>
          </div>
          <div className="h-full group relative rounded-none lg:w-1/2 w-full hover:rounded-[40px] overflow-hidden">
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='absolute transition-all  opacity-0 group-hover:opacity-100 flex items-center justify-center pt-2 top-0 left-0 h-full w-full bg-black/10'>
              <h2 className='uppercase font-[fontprimary] px-8 pt-2  text-6xl border-2 text-white border-white rounded-full '>See the project</h2>
            </div>
          </div>
    </>
  )
}

export default ProjectCard