import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const AppLayout = ({ children }) => {
  return (
    <div className='w-full  flex flex-col justify-between '>
      <Navbar />
      <div className="bg-[#2d2e32]">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout