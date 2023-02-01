import React from 'react'
import "./Home.Style.css"
import NavBar from '../components/navbar/NavBar.Component'
import Footer from '../components/Footer/Footer.Component'



export default function Home() {
  return (
    // <div className=' flex flex-col items-center pt-[50px] bg-slate-300'>
    <div className=' inline-block flex flex-col items-center bg-[#fff7c4]'>
      <NavBar/>
      <p className=' text-[25px] font-bold'>Today's Top article</p>
      <div className=' w-[300px] h-[300px] bg-[#fee440]'></div>
      <p className=''>A few words about this platform</p>
      
      <p className=' mt-[200px] font-semibold'>Latest Articles</p>
      
    {/* <div className=' flex bg-slate-700 w-[680px] h-[1000px] justify-center flex-wrap flex-row'> */}
    <div className=' grid w-[680px] h-full mb-[40px] sm:grid-cols-2 grid-cols-1'>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
    </div>
      <Footer/>
    </div>
  )
}



function Blog(){
  return(
        <div className=' ml-[15px] mt-[15px] blog w-[290px] h-[280px] bg-[#e85d04] flex justify-center items-center flex-col'>
          <div className='img h-[170px] w-[250px] bg-white'></div>
          <p className=' text-center mt-[10px]  text-slate-50'>Lorem Ipsum De delores Something Something</p>
      </div>
  )
}