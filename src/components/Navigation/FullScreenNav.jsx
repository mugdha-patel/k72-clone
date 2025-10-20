import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef, useContext } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { X } from 'lucide-react';

const FullScreenNav = () => {

    const fullScreenRef = useRef(null)
    const fullNavLinksRef = useRef(null)

    const [navOpen, setNavOpen] = useContext(NavbarContext)
    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block',
        })

        tl.to('.stairing', {
            delay: 0.1,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })

        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
        tl.to('.bg-nav', {
            backgroundColor: '#000000E1',
            delay: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.bg-nav', {
            backgroundColor: 'none',
            delay: 0
        })
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })

        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })

        tl.to('.navlink', {
            opacity: 0
        })

        tl.to('.fullscreennav', {
            display: 'none'
        })

    }

    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()
        }
    }, [navOpen])
    return (
        <div ref={fullScreenRef} className='fullscreennav hidden h-screen z-50 text-white absolute  overflow-hidden w-full  '>
            <div className='bg-nav h-screen w-full fixed '>
                <div className='h-full w-full flex'>
                    <div className="stairing h-full w-1/2 lg:w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/2 lg:w-1/5 bg-black"></div>
                    <div className="stairing h-full display-none lg:display-block lg:w-1/5 bg-black"></div>
                    <div className="stairing h-full display-none lg:display-block lg:w-1/5 bg-black"></div>
                    <div className="stairing h-full display-none lg:display-block lg:w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className=" fixed navlink flex w-full p-5  justify-between items-start">
                    <div className='lg:w-30 w-18'>
                        <svg className='w-full' viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div onClick={() => { setNavOpen(false) }} className="lg:h-18 lg:w-18 h-8 w-fit flex items-center cursor-pointer ">
                        <X size={62} strokeWidth={0.5} />
                    </div>
                </div>
                <div id='all-links' className='h-screen flex flex-col justify-center'>
                    <div className='link origin-top relative  border-y-1 border-white'>
                        <h1 className='font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>Projects</h1>
                        <div className='movelink absolute top-0 flex bg-[#D3FD50] text-black '>
                            <div className='flex movex items-center'>
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>To see every thing</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>To see every thing</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                            </div>
                            <div className='flex movex  items-center'>
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>To see every thing</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>To see every thing</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative  border-y-1 border-white'>
                        <h1 className='font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>Agency</h1>
                        <div className='movelink absolute top-0 flex bg-[#D3FD50] text-black '>
                            <div className='flex movex items-center'>
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>To Know everything</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" />
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>To Know everything</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src='https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734' alt="" />
                            </div>
                            <div className='flex movex  items-center'>
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>To see every thing</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" />
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>To Know everything</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src='https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top  relative  border-y-1 border-white'>
                        <h1 className='font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>Contact</h1>
                        <div className='movelink absolute top-0 flex bg-[#D3FD50] text-black '>
                            <div className='flex movex items-center'>
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>To send a fax</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>to send a fax</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                            </div>
                            <div className='flex movex  items-center'>
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>to send a fax</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>to send a fax</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative  border-y-1 border-white'>
                        <h1 className='font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>Blog</h1>
                        <div className='movelink absolute top-0 flex bg-[#D3FD50] text-black '>
                            <div className='flex movex items-center'>
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>Read the articles</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>Read the articles</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                            </div>
                            <div className='flex movex  items-center'>
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>Read the articles</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                                <h2 className='whitespace-nowrap font-[fontsecondary] text-[8vw] leading-[0.8] lg:pt-5 pt-3 py-2 text-center uppercase'>Read the articles</h2>
                                <img className='lg:h-25 h-8 lg:w-96 w-14  shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav