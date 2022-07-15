import React from 'react'
import { BsBell } from 'react-icons/bs';

const Topnav = () => {
  return (
    <div>
        <div className=' flex items-center z-[4]
        w-[100%] h-[60px]
        fixed top-0 bg-back-color ] mb-[10px]'>
            
                <img src="https://www.fancode.com/867f5c067d544a3f79567a893209f1c4.svg" 
                    alt='' style={{"width" :"144px"}}
                className=' ml-[163px]'/>
        
            <div className='flex gap-x-[24px] ml-[50px] text-[14px] font-semibold '>
                <div className="text-header-text-color text-[14px] ">HOME</div>
                <div  className='text-[14px] text-[#FFFFFF]'>SCHEDULE</div>
                <div>
                    <div className='text-[14px]  text-[#FFFFFF] relative'>ShOP
                    <div className='text-[11px] text-[#FFFFFF] bg-[#FF5000] absolute
                     top-[-5px] left-[38px] w-[32px] text-center '>NEW</div>
                    </div>
                </div>
            </div>
            <div className='flex ml-[250px] gap-x-[13px]'>
                <img src="https://fancode.com/skillup-uploads/fc-web/icon-play-store.png"
                alt="" className='w-[24px] h-[24px]'/>
                <img src="https://fancode.com/skillup-uploads/fc-web/icon-app-store.png"
                    alt="" className='w-[24px] h-[24px]'
                />
                <p className='text-[white] font-normal text-[15px]'>Get The App </p>
                <div className='flex gap-x-[8px] '>
                    <BsBell  className="w-[19px] h-[24px] text-[white]"/>
                    <img src="https://www.fancode.com/4e3d7cbf4a8cd768e30b93b7540340a2.png"
                    alt=""  className='w-[24px] h-[24px]'/>
                    <p className='text-[white] '> Login/Register</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topnav



