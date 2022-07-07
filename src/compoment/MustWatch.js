import React from 'react'

const MustWatch = () => {
 
  return (
    <div className=' watch_movie  translate-x-[14px] translate-y-[158px] z-[67] '>
        <h1 className='text-[#FFFFFF] text-[18px] font-bold mt-[26px] ml-[23px]'>MOVIES YOU MUST WATCH</h1>
        <div className='ml-[23px]'>
        <div className='mt-[21px] max-w-[168px] '>
            <img src= "" alt="" className='w-[168px] h-[137px]'/>

            <div className='mt-[10p] flex flex-col gap-y-[5px] '>
                <p className='text-[18px] text-[#FFFFFF] font-bold'>Kumbalangi Nights</p>
                <p>2019</p>
                <div className='flex justify-between'>
                    <div className='flex  gap-x-[6px]'>
                        <img  src="/image/IM.svg" alt='' className='w-[28px] h-[14px]'/>
                        <p className='text-[#FFC907] text-[11px] font-bold'>7.3</p>
                    </div>
                    <div className='flex gap-x-[6px]'>
                    <img  src="/image/eye.svg" alt='' className='w-[17px] h-[16px]'/>
                    <img  src="/image/heart.svg" alt='' className='w-[17px] h-[16px]'/>

                    
                    </div>
                </div>
            </div>

        </div>
        </div>
     

    </div>
  )
}

export default MustWatch