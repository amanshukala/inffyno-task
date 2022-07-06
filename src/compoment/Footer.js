import React from 'react'
import {AiOutlineDown} from "react-icons/ai"
export const Footer = () => {
  return (
    <footer className='bg-[#161214]'>

        <div className='bg-[#161214]  flex items-start  justify-around pt-[97px] pb-[82px]'>
            <div className='w-[131px] h-[34px] bg-[#362F33] flex gap-x-[14px] justify-center items-center'>
                <img src="/image/glob.svg"  alt=""/>
                <p className='text-[white]'>English</p>
                <AiOutlineDown className='text-[white]'/>
            </div>
            <div className='flex flex-col  gap-y-[15px]'>
                <div className='flex'>
                    <h1 className='text-[16px] text-[white]'>NAVIGATION</h1>
                </div>
                <div className='flex flex-col gap-y-[6px] '>
                    <p className='text-[14px] text-[white]'>Home </p>
                    <p className='text-[14px] text-[white]'>FAQ</p>
                    <p className='text-[14px] text-[white]'>InvesBox Relations</p>
                    <p className='text-[14px] text-[white]'>Jobs</p>
                    <p className='text-[14px] text-[white]'>About US</p>
                    <p className='text-[14px] text-[white]'>Help Center</p>
                </div>
            </div>
        
            <div className='flex flex-col  gap-y-[15px]'>
                <div className='flex'>
                    <h1 className='text-[16px] text-[white]'>LEGAL</h1>
                </div>
                <div className='flex flex-col gap-y-[6px] '>
                    <p className='text-[14px] text-[white]'>Privacy Policy </p>
                    <p className='text-[14px] text-[white]'>Teams of service</p>
                    <p className='text-[14px] text-[white]'>Double Preferences</p>
                    <p className='text-[14px] text-[white]'>Corporate information</p>
                </div>
            </div>
            <div className='flex flex-col  gap-y-[15px]'>
                <div className='flex'>
                    <h1 className='text-[16px] text-[white]'>TALK TO US</h1>
                </div>
                <div className='flex flex-col gap-y-[6px] '>
                    <p className='text-[14px] text-[white]'>support@apcom.com </p>
                    <p className='text-[14px] text-[white]'>+66 2399 1145</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-[15px]'>
    
                <h1 className='text-[16px] text-[white]'>FOLLOW US</h1>
                <div className='flex flex-row gap-x-[14px]  '>
                   <img alt='' src="/image/facbook.svg" width="39px" height="39px"/>
                   <img alt='' src="/image/link.svg" width="39px" height="39px"/>
                   <img  alt='' src="/image/twitter.svg"  width="39px" height="39px"/>
                </div>
            </div>
         
            
        </div>
        <p className='mt-[27px] text-center text-[white] pb-[41px]'>© 2022 Dramatic. All Rights Reserved. </p>

</footer>
  )
}
