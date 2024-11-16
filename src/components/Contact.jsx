import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';



const Contact = () => {
  return (
    <div className='w-full mt-14'>
      <div className="w-11/12 mx-auto py-10">
        <Link  to={`/`}>
          <FaArrowLeftLong className='text-3xl mb-5 cursor-pointer' />
        </Link>
        <div className="w-full flex items-start justify-between gap-10 flex-col lg:flex-row">
          <div className="flex flex-col lg:w-1/2 w-full gap-5">
            <div data-aos="fade-left" data-aos-duration="2000"
              className="text-primary text-4xl font-bold">Let’s Build Something Great Together!</div>
            <div data-aos="fade-right" data-aos-duration="1000" className="text-lg">I’m always excited to connect, collaborate, or help you bring your ideas to life. Whether you’re looking for a developer to work on your next project or just want to say hi, feel free to reach out. Let’s create something amazing!</div>
            <div data-aos="fade-up-left" data-aos-duration="1000" className="flex items-start flex-col gap-2">
              <div className="text-lg">Connect with me:</div>
              <div className="flex items-center gap-2">
                <Link className='text-xl text-zinc-300' target="_blank" ><BsTwitterX /></Link>

                <Link className='text-xl text-zinc-300' target="_blank" ><SiWhatsapp /></Link>
                <Link className='text-xl text-zinc-300' target="_blank" ><FaFacebook /></Link>
              </div>
            </div>
          </div>

          <form data-aos="flip-down" data-aos-duration="2000" className='flex flex-col lg:w-1/2 w-full gap-5'>
            <div className="flex w-full items-start gap-2 flex-col">
              <div className="">Your Name</div>
              <input type="text" className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 text-lg outline-none' placeholder='Name' />
            </div>
            <div className="flex w-full items-start gap-2 flex-col">
              <div className="">Your Email</div>
              <input type="email" className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 text-lg outline-none' placeholder='Email' />
            </div>

            <div className="flex w-full items-start gap-2 flex-col">
              <div className="">Your Message</div>
              <textarea type="text" className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 text-lg outline-none min-h-24 py-2' placeholder='Message' />
            </div>
            <button className='w-full h-14 bg-primary'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact