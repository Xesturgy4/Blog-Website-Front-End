import React from 'react'

export default function NavBar() {
  return (
    <>
        <header className=' flex justify-between w-full h-[80px] bg-[#f48c06] mb-[50px] items-center'>
        <div>
          <p className=' text-[40px] font-bold ml-[15px]  text-slate-50'>BLOG</p>
        </div>
        <div className=' mr-[20px]'>
          <span className=' mr-[6px] ml-[4px] text-[17px] text-slate-50'>Home</span>
          <span className=' mr-[6px] ml-[4px] text-[17px] text-slate-50'>About Us</span>
          <span className=' mr-[6px] ml-[4px] text-[17px] text-slate-50'>Logout</span>
        </div>
      </header>
    </>
  )
}
