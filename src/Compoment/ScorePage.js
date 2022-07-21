import React,{useState} from 'react'
import {useParams} from "react-router-dom"
import {AiOutlineDown} from "react-icons/ai"
import {IoIosArrowUp} from "react-icons/io"

const ScorePage = () => {
    const {id} =useParams();
    const[open ,setOpen] =useState(false)

    const accordianHander =()=>{
        if(open === false){
            setOpen(true)
        }
        else{
            setOpen(false)
        }
    }


  

  return (
    <div className='mx-auto max-w-[672px] mt-[53px] mb-[320px] w-[100%]'>
        <div>
            <div className='flex justify-between '>
                
            <div className='flex flex-col items-start'>
                    <p className='text-[14px] font-normal rounded-[2px]
                        py-[3px] px-[5px] bg-[red] text-center text-white'>RBMP</p>
                    <p className='text-black  text-[28px] flex items-baseline 
                    font-bold'>49/2<span className='text-[grey]
                    text-[12px] m-[5px]'>(4.1)</span> </p>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                            <div className="h-[15px] w-[1px] bg-[grey] "></div>
                            <div className="font-graff font-[700] text-[black] bg-[grey]
                            rounded-[50%] w-[24px] text-[15px] 
                            text-center">
                              <p>V</p>
                            </div>
                            <div className="h-[15px] w-[1px] bg-[grey] "></div>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-[14px] font-normal rounded-[2px]
                        py-[3px] px-[5px] bg-[red] text-center text-white'>RBMP</p>
                    <p className='text-black  text-[28px] flex items-baseline 
                    font-bold'><span className='text-[grey]
                    text-[12px] m-[5px]'>(4.1)</span>49/2 </p>
                </div>
            </div>
            <div className='mx-auto text-[14px] text-[black] font-semibold
            mt-[10px] max-w-[94%] text-center mb-[15px]'>RBMS need 78 runs in 39 balls</div>
        </div>
        <div className='bg-[white] h-[48px] w-[100%]
        flex items-center  mx-auto border-b-[1px] border-b-solid border-b-gray-400
        border-t-[1px] border-t-solid border-t-gray-400'>
            <div className=' flex items-center
            w-[100%] justify-center px-[20px]   '>Fantasty</div>
            <div className='flex items-center
            w-[100%] justify-center px-[20px]'>Info</div>
            <div className='flex items-center
            w-[100%] justify-center px-[20px]'>Live</div>
            <div  className='flex items-center
            w-[100%] justify-center px-[20px]'>Scoredcard</div>
            <div className='flex items-center
            w-[100%] justify-center px-[20px]'>Squard</div>
        </div>
        <div className='flex justify-between bg-gray-300 py-[12px] px-[18px]'>
            <div className='text-[16px] font-semibold'>AM</div>
            <div className='flex '>
                <div className='text-[14px] font-semibold pr-[75px]
                text-black'>96/9</div>
                <div>
                    {open ? ( <IoIosArrowUp className=' text-[1.5rem]
                    rounded-[50%] bg-[#ff5000] p-[6px] text-white'
                    onClick={accordianHander}/>): ( <AiOutlineDown className=' text-[1.5rem]
                rounded-[50%] bg-[#ff5000] p-[6px] text-white'
                onClick={accordianHander}/>)}
            </div>
               {}    
                {/* <div className={`${open}? "" :"overflow-hidden h-0]"`}> */}
                <div className=  {`${open ? 'h-[100%]' : "h-0 overflow-hidden"}` }>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>4</div>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ScorePage