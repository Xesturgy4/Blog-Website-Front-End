import React from 'react'

export default function Comment() {
  return (
    <>
      <div className='comment_component w-[90%] bg-slate-300 flex flex-row py-[8px] px-[8px] my-[8px] '>
            
        <div className='flex flex-col items-center justify-around'>
            <div className='comment_by flex flex-row'><div className=' w-[34px] h-[34px] bg-slate-900 rounded-full'/><p className='mt-[4px] ml-[3px] text-[15px] font-normal'>USer123</p></div>
            <p className=' text-[13px] font-normal mt-[5px]'>few hours ago</p>
        </div>

        <div className=' bg-gray-600 w-[1px] h-[full] mx-[20px]'/>
        
        <p>Nice Blog, learnt a lot of information here.</p>

      </div>
    </>
  )
}
