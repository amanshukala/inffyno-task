import React from 'react'
// import logo from "logo.svg"
const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto  ">
      <div className='border-[1px] '>
        <div className="h-[68px] flex justify-between items-center mx-[64px]  bg-[#FFFFFF]">
          <div className='flex items-center gap-x-[36px]'>
            <p className='text-[#28293D] text-[12px] font-bold uppercase '>How it works</p>
            <p className='text-[#28293D] text-[12px] font-bold  uppercase'>Why us</p>
            <p className='text-[#28293D] text-[12px] font-bold uppercase '>Contact us</p>

          </div>
          <div>
            <img src="/logo.svg" alt= "logo"  height={36} width={132}/>

          </div> 
          
          <div className = "flex gap-x-[36px]">

          <div className=' border-b-[3px] gap-x-[4px] pb-[4px] items-center border-[#FF8800]  flex '>
            <img src="/car.svg" alt= "logo"  height={18} width={20}/>
            <span className='text-[#FF6B00] text-[12px]
            font-bold uppercase'>Used cars for sale</span>
          </div>
          <div>
            <button className='text-[#FFFFFF] text-[12px] bg-[#28293D] rounded-[13px] 
              h-[36px] w-[148px] uppercase font-bold'>Sign in/ Register</button>
          </div>
          </div>
       
        

        </div>

      </div>
    </div>
  )
}

export default Header