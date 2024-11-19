import React, { useCallback, useEffect, useRef, useState } from 'react'
import Hero from './Hero'
import Intro from './Intro'
import { Link } from 'react-router-dom'
import { webprojects } from '../utils/utils'
import Repos from './Repos'
import Quotes from './Quotes'
import axios from 'axios'
import { IoIosClose } from "react-icons/io";
import { AiOutlineMessage } from 'react-icons/ai'
export const reponame = 'Allrepos'

const Home = () => {

    const [num, setNum] = useState("")
    const [loading, setLoading] = useState(false)
    const [msgbox, setMsgBox] = useState(false)
    const [contact, setContact] = useState(false)
    const contactdiv = useRef(null)

    
    const fetchRepos = useCallback(async () => {
        setLoading(true)
        try {
            const res = await axios.get(`https://api.github.com/users/litezy/repos?per_page=100&page=1`)
            if (res.status !== 200) return;
            setNum(res.data.length)
            localStorage.setItem(reponame, JSON.stringify(res.data.length))
        } catch (error) {
            console.log(`Error in fetching repos ${error}`)
        } finally {
            setLoading(false)
        }
    })


    useEffect(() => {
        fetchRepos()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setMsgBox(true)
            } else {
                setMsgBox(false)
                setContact(false)
            }
        }
        const handleDiv = (e)=>{
            if(contactdiv){
                if(contactdiv.current !== null && !contactdiv.current.contains(e.target)){
                    setContact(false)
                }
            }
        }
        window.addEventListener('click', handleDiv, true)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('click', handleDiv,true)
        }
    }, [])

    const TurnOffContact = ()=>{
      setContact((prev) =>{
        return !prev
      })
    }

    const storedRepo = JSON.parse(localStorage.getItem(reponame))
    return (
        <div className=' w-full relative  ' >


            {/* } */}
            <div className=" w-11/12 mx-auto px-2 pt-24 ">
                {msgbox && contact &&
                    <div ref={contactdiv} 
                    data-aos="fade-left" data-aos-duration="2000"
                    className="fixed z-50 lg:w-[20%] w-3/6 bg-primary  cursor-pointer right-2 lg:right-5 bottom-24 p-2">
                         <div onClick={()=> setContact(false)} className="absolute top-0 right-0"><IoIosClose className='text-3xl'/></div>
                        <div className="text-center text-sm text-sec font-bold">send me a message</div>
                        <form  className='flex flex-col  text-sm w-full gap-2'>
                            <div className="flex w-full items-start gap-2 flex-col">
                               <div className=""> Name</div>                             
                                <input type="text" className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 outline-none' placeholder='Name' />
                            </div>
                            <div className="flex w-full items-start gap-2 flex-col">
                                <div className=""> Email</div>
                                <input type="email" className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 outline-none' placeholder='Email' />
                            </div>

                            <div className="flex w-full items-start gap-2 flex-col">
                                <div className=""> Message</div>
                                <textarea type="text" className='w-full border-none bg-sec placeholder:text-zinc-200 text-white h-12  pl-2 outline-none min-h-24 py-2' placeholder='Message' />
                            </div>
                            <button className='w-full h-10 bg-sec'>Submit</button>
                        </form>
                    </div>
                }
                {msgbox &&
                    <div onClick={TurnOffContact}
                        data-aos='fade-up-left' data-aos-duration="1000"
                        className="fixed z-50 bg-sec p-2 rounded-full cursor-pointer right-10 bottom-10">
                        <AiOutlineMessage className='text-3xl lg:text-4xl text-primary font-bold' />
                    </div>}


                <Hero num={num} repo={storedRepo} loading={loading} />
            </div>
            <div className="mt-5 b-black/40">
                <Intro />
            </div>
            <div className="lg:mt-10 w-full flex-col flex items-center justify-center py-10">
                <div className="flex items-center justify-around h-10 w-11/12 lg:w-[35%] mx-auto">
                    <div data-aos='fade-up' className="lg:w-32 w-20 h-1 bg-primary"></div>
                    <div className="">Latest Works</div>
                    <div data-aos='fade-up' className="w-20 lg:w-32 h-1 bg-primary"></div>
                </div>
                <Link to={`/projects`} className="text-primary underline">Projects</Link>
            </div>

            <div className="pb-10 w-11/12 mx-auto">
                <div className="text-xl text-zinc-400 mb-4">Featured Projects</div>
                <div className="grid lg:grid-cols-3 gap-20 h-fit">
                    {webprojects.slice(0, 6).map((item, i) => (
                        <div data-aos='zoom-in' data-aos-duration="2000" className="flex items-start lg:max-h-[85dvh]  flex-col gap-5 p-2 rounded-md bg-sec" key={i}>
                            <img src={item.img} className='w-full h-fit' alt={item.name} />
                            <div className="flex items-start gap-2 flex-col pl-2">
                                <div className="flex w-full flex-col">
                                    <div className="text-zinc-400 text-sm">Name:</div>
                                    <div className="">{item.name}</div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <div className="text-zinc-400  text-sm">Type:</div>
                                    <div className="capitalize">{item.type}</div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <div className="text-zinc-400 text-sm">Tech Stack Used:</div>
                                    <div className="">{item.techstack}</div>
                                </div>
                                <div className="flex w-full flex-col">
                                    <div className="text-zinc-400 text-sm">Brief Description:</div>
                                    <div className="">{item.desc}</div>
                                </div>
                                <Link target='blank' className='underline text-primary' to={`${item.link}`}>{item.online ? 'View Site' : 'View Repo'}</Link>
                                {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Repos />
            <Quotes />
        </div>
    )
}

export default Home