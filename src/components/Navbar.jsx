import React, { useEffect, useRef, useState } from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { navs } from '../utils/utils';
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import hero from '../assets/logo.jpeg'
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [modal, setModal] = useState(false)
    const location = window.location
    const modaldiv = useRef(null)

    useEffect(() => {
        if (modaldiv) {
            const handleCLick = (e) => {
                if (modaldiv.current !== null && !modaldiv.current.contains(e.target)) {
                    setModal(false)
                }
            }
            window.addEventListener('click', handleCLick, true)
            return () => {
                window.removeEventListener('click', handleCLick, true)
            }
        }
    }, [modaldiv])

    // const [width, setWidth] = useState(100);
    // const [height, setHeight] = useState(100);
    // const startWidth = 100;
    // const minWidth = 40;
    // const startHeight = 100;
    // const minHeight = 40;
    // const [scrollLocked, setScrollLocked] = useState(true)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         if (scrollLocked) {
    //             const newWidth = Math.max(minWidth, startWidth - scrollY);
    //             const newHeight = Math.max(minHeight, startHeight - scrollY);
    //             if (newWidth > minWidth) {
    //                 setWidth(newWidth);
    //             }
    //             if (newHeight > minHeight) {
    //                 setHeight(newHeight);
    //             }

    //             if (newWidth === minWidth || newHeight === minHeight) {
    //                 setScrollLocked(false); 
    //                 console.log(scrollLocked)
    //               }
    //         }
    //         else{
    //             setWidth(40)
    //             setHeight(40)
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll, true);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll, true);
    //     };
    // }, [])
    return (
        <div
            className='w-full max-h-32 py-3  right-1/2  translate-x-1/2  top-0 z-50 bg-sec border-zinc-500 fixed'>
            <div className="w-11/12 mx-auto  h-full text-white/90 flex items-center justify-between">
                <div data-aos="fade-right"
                    data-aos-duration="2000"
                    className=" ">
                    <div className="text-3xl font-bold text-zinc-400 italic">Litezy</div>

                </div>
                <div className="lg:flex items-center gap-5 hidden">
                    {navs.map((item, i) => {
                        return (
                            <Link key={i} to={item.url} className={`${location.pathname === item.url && 'bg-primary'} flex items-center text-[12px] lg:text-sm  py-1.5 px-3 cursor-pointer hover:bg-primary`}>{item.name}</Link>
                        )
                    })}
                </div>

                <div
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className={` ${modal && '-ml-60'}`}
                >
                    <img src={hero} className='rounded-full w-14 h-14' alt="hero image" />
                </div>
                <div className="">
                    {!modal && <div data-aos="fade-left" data-aos-duration="2000" onClick={() => setModal(true)} className=""><HiMiniBars3BottomRight className={`text-5xl cursor-pointer`} /></div>}
                    {modal &&
                        <div
                            ref={modaldiv}
                            data-aos="fade-left"
                            data-aos-duration="2000"
                            className="absolute bg-sec lg:w-[25dvw] w-[60%] right-0 top-0 h-[100dvh] rounded-s-md">
                            <div className="flex flex-col gap-20 items-center justify-start py-5  h-full">
                                <div className="flex flex-col gap-2">
                                    <div className="text-base underline text-primary">Social Handles</div>
                                    <div className=" cursor-pointer flex px-5 items-center  gap-3">
                                        <div className="">Twitter</div>
                                        <BsTwitterX />
                                    </div>
                                    <div className="flex cursor-pointer px-5 items-center gap-3">
                                        <div className="">Github</div>
                                        <FaGithub />
                                    </div>
                                    <div className=" cursor-pointer flex px-5 items-center gap-3">
                                        <div className="">Email</div>
                                        <CiMail className='text-white text-xl' />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <div className="text-base text-primary underline">NavLinks</div>
                                    <div className="flex flex-col gap-3">
                                        {navs.map((item, i) => {
                                            return (
                                                <Link key={i} onClick={() => setModal(false)} to={item.url} className={`${location.pathname === item.url && 'bg-primary'} flex items-center   py-1.5 px-3 cursor-pointer hover:bg-primary`}>{item.name}</Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar