import React, { Children, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname
   

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)
    useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block',
            delay:-0.2,
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })
        gsap.from(pageRef.current,{
            opacity:0,
            delay:2,
            scale:1
        })
    }, [currentPath])


    return (
        <div>
            <div ref={stairParentRef} className="h-screen w-full fixed z-20 t-0 ">
                <div className='h-full w-full flex'>
                    <div className="stair h-full w-1/2 lg:w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/2 lg:w-1/5 bg-black"></div>
                    <div className="stair h-full display-none lg:display-block lg:w-1/5 bg-black"></div>
                    <div className="stair h-full display-none lg:display-block lg:w-1/5 bg-black"></div>
                    <div className="stair h-full display-none lg:display-block lg:w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs