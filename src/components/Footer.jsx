import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const apps = [
    {
      img:<BsTwitterX/>,
      link:''
    },
    {
      img:<FaFacebook/>,
      link:''
    },
    {
      img:<FaGithub/>,
      link:''
    },
    {
      img:<FaLinkedin/>,
      link:''
    },
    {
      img:<CiMail/>,
      link:''
    },
  ]

  // console.log('footer rendered.')
  return (
    <div className='bg-sec pb-24  h-52 text-white w-full'>
      <div 
      data-aos="zoom-in" data-aos-duration="1000" 
      className="w-11/12 mt-3  mx-auto gap-10  flex flex-col lg:flex-row  justify-between">
        <div className="flex items-center gap-4">
          <div className="font-bold text-xl">Litezy</div>
          <span className='text-zinc-400'>© 2024 All Right Reserved.</span>
        </div>
        <div  className="flex items-center gap-4">
          {apps.map((app,i) => (
            <div  className="text-base cursor-pointer" key={i}>{app.img}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer