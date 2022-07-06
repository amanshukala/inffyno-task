import React from 'react'

const Sidebox = () => {
  return (
    <aside>
         <div className=' sidebox   flex max-w-max py-[40px] pr-[30px] pl-[24px] gap-y-[35px] rounded-[0px 26px 26px 0px] flex-col mt-[45px]'>
        <img  src="/image/user.svg " alt="" className='w-[30px] h-[30px]'/>
        <img  src="/image/list.svg " alt="" className='w-[30px] h-[30px]'/>
        <img  src="/image/download.svg " alt="" className='w-[30px] h-[30px]'/>
        <img src="/image/setting.svg" alt="" className='w-[30px] h-[30px]'/>
    </div>
    </aside>
   
  )
}

export default Sidebox