import React from 'react'
import logo from '../assets/logo.jpeg'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const About = () => {
  return (

    <div className='w-full  mt-24 bg-alt'>
      <div className="w-full py-3 flex items-start justify-center">
        <div className="w-10/12 mx-auto flex flex-col gap-5 h-full">
          <Link to={`/`}>
            <FaArrowLeftLong className='text-2xl cursor-pointer' />
          </Link>
          <div className="">
            <div className="text-4xl font-bold text-zinc-300">About</div>
            <div className="text-zinc-400 text-sm">About myself</div>
          </div>
        </div>
      </div>
      <div className="w-full bg-alt">
        <div className="w-10/12 relative py-10 mx-auto flex  lg:h-[35rem] flex-col lg:flex-row  items-start justify-between">
          <div data-aos="fade-up-right" data-aos-duration="1000" className="flex flex-col lg:w-1/2 justify-start w-full h-full">
            <img src={logo} className='object-contain w-full h-full rounded-xl' alt="about us image" />
          </div>

          <div className="w-full lg:w-1/2 flex py-2 gap-10 items-start justify-between h-full flex-col">
            <div className="flex items-start gap-5 flex-col">
              <div className="font-thin text-base">Introduction</div>
              <div data-aos="fade-left" data-aos-duration="1000" className="font-bold text-4xl">Hello, I'm Litezy</div>
            </div>
            <div className="flex items-start gap-3 flex-col">
              <div className="w-full bg-sec gap-3 h-12 flex  items-start">
                <div className="h-full w-1.5 bg-primary"></div>
                <div data-aos="fade-right" data-aos-duration="1000" className=" text-base self-center">Fullstack Software Developer</div>
              </div>
              <div data-aos-duration="1000" data-aos="fade-up" className="font-bold text-[1rem] ">I'm a dedicated computer engineer and skilled full stack developer based in Nigeria, West Africa, with a passion for building robust and scalable solutions. I have a strong foundation in both front-end and back-end technologies, and my work is driven by an enthusiasm for problem-solving and a commitment to creating impactful digital experiences. Whether developing efficient APIs, crafting seamless UIs, or optimizing server performance, I bring a detail-oriented approach to every project. Let's build innovative solutions together!</div>
            </div>
            {/* <div data-aos="fade-up"
            data-aos-duration="1000"
            className="underline text-primary">Read More</div> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default About