import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import { Link } from 'react-router-dom'
import { webprojects } from '../utils/utils'
import Repos from './Repos'
import Quotes from './Quotes'


const Home = () => {
    return (
        <div className=' ' >
            <div className=" w-10/12 mx-auto px-2 pt-40   ">
                <Hero />
            </div>
            <div className="mt-20 b-black/40">
                <Intro />
            </div>
            <div className="mt-10 w-full flex-col flex items-center justify-center py-10">
                <div className="flex items-center justify-around h-10 w-11/12 lg:w-[35%] mx-auto">
                    <div data-aos='fade-up' className="w-32 h-1 bg-primary"></div>
                    <div className="">Latest Works</div>
                    <div data-aos='fade-up' className="w-32 h-1 bg-primary"></div>
                </div>
                <Link to={`/projects`} className="text-primary underline">All Projects</Link>
            </div>
            <div className="pb-10 w-10/12 mx-auto">
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
                                <Link target='blank' className='underline text-primary' to={`${item.link}`}>view</Link>
                                {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Repos/>
            <Quotes/>
        </div>
    )
}

export default Home