import React from 'react'

const RecomededMovie = () => {
  return (
    <div className='ml-[148px] mt-[18px] '>
        <h1 className='font-bold text-[18px] text-[#FFFFFF]'>RECOMMENDED FOR YOU</h1>
        <div className='flex gap-x-[23px]'>
            <button className='rounded-[30px] bg-[#E43109] text-[#FFFFFF] py-[10px] px-[27px]'>Hindi</button>
            <button className='rounded-[30px] bg-[#5C5C5C] text-[#FFFFFF] py-[10px] px-[27px]'>Bengali</button>
            <button className='rounded-[30px] bg-[#5C5C5C] text-[#FFFFFF] py-[10px] px-[27px]'>Bengali</button>
            <button className='rounded-[30px] bg-[#5C5C5C] text-[#FFFFFF] py-[10px] px-[27px]'>Marathi</button>
            <button className='rounded-[30px] bg-[#5C5C5C] text-[#FFFFFF] py-[10px] px-[27px]'>Assamese</button>
            <button className='rounded-[30px] bg-[#5C5C5C] text-[#FFFFFF] py-[10px] px-[27px]'>Telugu</button>
            <button className='rounded-[30px] bg-[#E43109] py-[10px] px-[27px] text-[#FFFFFF]'>Tamil</button>
            <button className='rounded-[30px] bg-[#5C5C5C] py-[10px] px-[27px] text-[#FFFFFF]'>Malayalam</button>
        </div>
    </div>
  )
}

export default RecomededMovie