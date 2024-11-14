import React, { useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { webprojects } from '../utils/utils'
import { localName } from './Repos'
import { IoLogoGithub, IoMdStar } from 'react-icons/io'
import Loader from './Loader'

const Projects = () => {
  const storedUser = JSON.parse(localStorage.getItem(localName))
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 8

  const npage = Math.ceil(storedUser.length / recordsPerPage)
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = storedUser.slice(firstIndex, lastIndex)

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <div className="w-full mt-24">
      <div className='w-full   bg-alt'>
        <div className="w-full py-3 flex items-start justify-center">
          <div className="w-10/12 mx-auto flex flex-col gap-5 h-full">
            <Link to={`/`}>
              <FaArrowLeftLong className='text-2xl cursor-pointer' />
            </Link>
            <div className="">
              <div className="text-4xl font-bold text-zinc-300">Projects</div>
              <div className="text-zinc-400 text-sm">Completed projects</div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 w-10/12 mx-auto">
        <div className="grid lg:grid-cols-3 gap-20 h-fit">
          {webprojects.map((item, i) => {
            const isEven = i % 2 === 0
            return (
              <div data-aos={`${isEven ? 'zoom-in' : 'zoom-out'}`} data-aos-duration="2000" className="flex items-start lg:max-h-[85dvh]  flex-col gap-5 p-2 rounded-md bg-sec" key={i}>
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
                  <Link target='blank' className='underline text-primary' to={`${item.link}`}>view</Link>
                </div>
              </div>
            )
          })}
        </div>
      
      </div>
      <div className="mt-10 w-full ">
          <div className='w-full py-20 my-10 bg-sec'>
            <div className="pb-10 w-10/12 mx-auto relative">
              <div data-aos='fade-right' data-aos-duration="1000"
                className="text-xl text-zinc-400 mb-4">All Repos</div>
              {loading && <div className="w-full absolute top-1/2 right-1/2 -translate-x-1/2 justify-center flex items-center h-full">
                <Loader />
              </div>}

              <div
                data-aos='fade-right' data-aos-duration="1000"
                className="grid lg:grid-cols-4 grid-cols-2 w-full gap-10 ">
                {records.map((item, i) => {
                  const isEven = i % 2 === 0
                  return (
                    <div data-aos={`${isEven ? 'fade-down.' : 'fade-up'}`}
                      data-aos-duration='2000'
                      key={i} className="bg-alt flex flex-col justify-between h-40 w-full px-3 py-2 rounded-md">
                      <div className="flex items-center justify-between">
                        <div className="capitalize">{item.name}</div>
                        <Link target='blank' className='text-primary underline' to={item?.html_url}>view</Link>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {Array(3).fill().map((item, i) => (
                              <div key={i} className="text-primary"><IoMdStar /></div>
                            ))}
                          </div>
                          <div className="text-sm">{item.stargazers_count} <span>stars</span></div>
                          <div key={i} className="text-primary"><IoLogoGithub /></div>
                          <div className="text-sm">{item.forks_count} <span>forks</span></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            {records.length > 0 && (
          <div className="w-10/12 mx-auto bg-alt mb-5 p-5">
            <div className="w-full flex flex-col items-center">
              <span className="text-sm text-gray-200">
                Showing <span className="font-semibold text-primary ">{(records.length > 0 && firstIndex === 0) ? '1' : firstIndex + 1}</span> to
                <span className="font-semibold text-primary"> {lastIndex > storedUser?.length ? storedUser?.length : lastIndex}</span> of
                <span className="font-semibold text-primary "> {storedUser?.length} </span>
                Repos
              </span>
              <div className="flex items-center  justify-between w-full mt-2">
                <button onClick={prevPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-md">
                  Prev
                </button>
                <button onClick={nextPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-md">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
          </div>

          <div className="">
          
          </div>
        </div>
    </div>
  )
}

export default Projects

// window.onscroll = function () {
//   siteScroll();
// };
// function siteScroll() {
//   if (
//       document.body.scrollTop > 10 ||
//       document.documentElement.scrollTop > 10
//   ) {
//       setScroll(true);
//   } else {
//       setScroll(false);
//   }
// }

// .head2>.head2-c::before{
//   content: '';
//   position: absolute;
//   border-width: 2.3rem;
//   border-style: solid;
//   border-color: plum rgb(10, 32, 80) rgb(10, 32, 80) plum;
//   left: -1.3rem;
//   top: -1.3rem;
// }

// const [message, setMessage] = useState({
//   text: '',
//   color: '',
//   status: false
// })

// // Function to update notification message
// const updateMessage = (text, color, status) => {
//   setMessage({
//     text,
//     color,
//     status
//   })
// }

// const time = () => {
//   if (message.status) {
//     setMessage({
//       ...message,
//       status: false
//     })
//   }
// }

// setTimeout(time, 2000)