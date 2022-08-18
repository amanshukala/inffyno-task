import React,{useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const Showmodel= () => {

    const [dropDown, setDropDown] = useState(false);

  return (
    <div>
        <section className="flex flex-col gap-[21px] mt-[16px] ">
                 

                  <section className={` ${dropDown ? " max-h-[2500px] ": "max-h-[0px]  " } flex flex-col gap-[21px] overflow-hidden transition-all ease-in-out duration-200 `}>
                   
                    <div className="flex gap-[10px]">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px]">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px]">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                
                    <div className="flex gap-[10px]">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px]">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">TX (21)</label>
                    </div>
                    <div className="flex gap-[10px]">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">TL (21)</label>
                    </div>
                  </section>

                  <div className={` ${dropDown ? " block ": "block " } ml-[16px] flex items-center gap-[5px] `} onClick={() => setDropDown(!dropDown)}>
                    <p className='font-[500] text-[14px] leading-[20px] text-[#FF8800]'>{dropDown ? "Show less" : "Show more"}</p>
                    <IoIosArrowDown fill='#FF8800' size={14} className= {` ${dropDown ?  "rotate-180 fill-[#ff5000] ": "rotate-0 " } transition-all ease-in-out duration-100`}  />
                  </div>
            </section>
    </div>
  )
}

export default Showmodel