import React from 'react'
import NavBar from '../components/navbar/NavBar.Component'
import Footer from '../components/Footer/Footer.Component'
import Comment from '../components/Comment/Comment.Component'


export default function BlogPage() {

  return (
    <>
    <NavBar/>
    <div className=' bg-gray-300 w-[92%] px-[20px] py-[20px] m-auto mb-[10px]'>
    <div className='flex flex-row '>
    <div className=' w-[400px] h-[300px] bg-slate-600 mr-[20px] mb-[20px]'>
    </div>
    <div className='flex flex-col w-[50%]'>
        <div className='blo_author flex flex-row justify-between '><div className=' flex flex-row'><div className='h-[35px] w-[35px] rounded-3xl bg-slate-300 mr-[10px]'/><p className=' mt-[4px]'>BLOG AUTHOR</p></div>  <div className=' text-[16px] mt-[4px] mr-[6px]'>12-02-2022</div></div>
            <p className='blog_title font-semibold text-[25px]'>Lorem Ipsum De Delores Et Lorem Ipusm De Delores</p>
            <p className=' font-light text-[14px]'>a subheading conveys a lot about the whole article</p>
            <div className='flex flex-row justify-between w-[70%] mt-[20px] ml-[20px]'>
                <p><i className='fa fa-heart text-red-700'/> {22} Likes</p>
                <p><i className='fa fa-comment text-green-700'/> {12} Comments</p>
                <p><i className='fa fa-share text-blue-800'/> {4} Shares</p>
            </div>
        </div>
    </div>
    <div className='text-[18px] font-sans font-normal w-[99%] text-center'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Enim diam vulputate ut pharetra sit amet. Diam sollicitudin
     tempor id eu nisl nunc mi. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
      tortor. Sagittis eu volutpat odio facilisis. Sapien nec sagittis aliquam malesuada bibendum arcu.
       At tempor commodo ullamcorper a. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.
        Nulla facilisi cras fermentum odio eu feugiat pretium. In hendrerit gravida rutrum quisque non.

Augue lacus viverra vitae congue eu consequat. Sit amet cursus sit amet dictum sit amet. Tortor
 consequat id porta nibh venenatis cras. Pharetra diam sit amet nisl suscipit adipiscing bibendum
  est ultricies. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Nec sagittis 
  aliquam malesuada bibendum arcu vitae elementum. Lacus sed turpis tincidunt id aliquet risus. 
  Sed vulputate odio ut enim blandit volutpat. Egestas erat imperdiet sed euismod nisi porta. Commodo
   odio aenean sed adipiscing. In fermentum et sollicitudin ac orci phasellus egestas.
 Scelerisque felis imperdiet proin fermentum leo. Mi ipsum faucibus vitae aliquet nec ullamcorper
  sit. A pellentesque sit amet porttitor eget dolor morbi non. Turpis egestas maecenas pharetra
   convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing. Vulputate sapien nec 
   sagittis aliquam.

Adipiscing tristique risus nec feugiat in. At elementum eu facilisis sed. Accumsan lacus vel
 facilisis volutpat est velit egestas dui. Nulla aliquet enim tortor at. Mattis pellentesque
  id nibh tortor id aliquet lectus. Massa tincidunt dui ut ornare lectus sit amet est placerat. 
  Malesuada fames ac turpis egestas sed tempus urna. Amet risus nullam eget felis. Lobortis feugiat
   vivamus at augue eget arcu dictum. Non tellus orci ac auctor. Ultrices eros in cursus turpis massa.
    Nunc non blandit massa enim nec dui nunc mattis. Leo vel fringilla est ullamcorper eget
 nulla facilisi etiam dignissim. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
  vivamus. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.
   Libero id faucibus nisl tincidunt eget nullam non nisi est. Pellentesque sit amet porttitor 
   eget dolor morbi. Aliquet bibendum enim facilisis gravida neque. Ultricies mi eget mauris 
   pharetra et ultrices neque ornare aenean.
    </div>
    </div>
    <div className=' bg-gray-200 w-[92%] px-[20px] py-[20px] m-auto mb-[50px]'>
        <p className=' font-semibold text-[20px]'>Comments</p>
        <div>
                <hr className='my-[4px]'/>
            <Comment/>
            <form className=' flex flex-col'>
            <textarea type='' placeholder="comment what's on your mind" className='bg-white border-gray-600 w-[90%] border-[1px] my-[10px]'/>
            <button className=' border-[1px] border-black w-[100px]'>Comment</button>
            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}
