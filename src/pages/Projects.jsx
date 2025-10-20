import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { NavbarColorContext } from '../context/NavContext'

const Projects = () => {
  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.from('.hero', {
      height: '20px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.cardmain',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })
  return (
    <div className='p-4'>
      <div className='lg:pt-[30vh] pt-[20vh] '>
        <h2 className='font-[fontsecondary] lg:text-[12vw] text-5xl uppercase'>Projects</h2>
      </div>
      <div className='-lg:mt-10 cardmain'>
        {projects.map((elem, idx) => {
          return <div key={idx} className="hero w-full  lg:h-[500px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2">
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects