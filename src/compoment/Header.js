import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
const Header = () => {
    return (

        <div className=" nav  flex justify-center items-center h-[93px] w-[100%] gap-x-[90px]" >
            <div className='flex  justify-between ' >
                <img src="/image/A.png" alt="dramstic" />

                <ul className='flex gap-x-[37px] ml-[59px]  justify-center'>
                    <li><a href='/'>HOME</a></li>
                    <li><a href='/'>TV SHOW</a></li>
                    <li><a href='/'>MOVIES</a></li>
                    <li><a href='/'>NEW</a></li>
                </ul>
            </div>

            <div className='flex items-center h-[37px] w-[324px] gap-x-[101px] bg-[#3B567D] rounded-[18px] ' >
                <input type="text " placeholder="search" className=' ml-[14px] bg-[#3B567D] text-[16px]' />
                <AiOutlineSearch className='mr-[9px] text-[white]'/>
                

            </div>
            <div className='flex items-center gap-x-[41px]'>
                <img src="/image/gift.svg" alt="" className='w-[31px] text-[white] h-[31px]' />
                <img src="/image/bell.svg" alt="" className='w-[31px] text-[white] h-[31px]' />
                <img src="/image/b1.svg" alt='' className='w-[59px] h-[59px]'/>

            </div>
        </div>


    )
}

export default Header