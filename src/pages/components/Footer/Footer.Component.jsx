import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className=' w-full h-[400px] bg-[#6a040f]  py-[20px] px-[10px]'>
        <div className=' flex flex-col bg-[#600911] w-[400px] m-[10px] pl-[10px] pb-[10px]'>
          <p className=' font-semibold text-[20px] text-gray-200 ml-[10px]'>Contact Us</p>
          <p className=' text-gray-300'><i className='fa fa-envelope mr-[10px]'/>email@mail.com</p>
          <p className='text-gray-300'><i className='fa fa-phone mr-[10px]'/>+91-0000000000</p>
          <p className='text-gray-300 '><i className='fa fa-home mr-[10px]'/>House No. 123, Street 45, City 6, Country 7</p>
        </div>
      </footer>
    </>
  )
}
