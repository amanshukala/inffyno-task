import React,{useState,useRef,useEffect} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';


const DetailsDropDown = ({dropDownTitle ,fdata1,fdata2,fdata3,data1,data2,data3,data4,data5,ftitle1,ftitle2,ftitle3 ,title1,title2,title3,title4,title5}) => {
    const [dropDown, setDropDown] = useState(false);
    const ref = useRef();

    console.log("data1", data1)
    console.log("data2", data2)
    useEffect(() => {
      const handleClickOutside = (event) => {
        console.log('he',dropDown)
        if (!ref?.current?.contains(event.target)) {
           if(dropDown) setDropDown(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [dropDown, ref]);

  return (
    <div>
         <section className="flex flex-col border-t-[1px] border-solid border-[#E4E4EB] ">
                  <section  className={` ${dropDown ? " block px-[16px] py-[20px] ": "block px-[16px] py-[15px]" }  flex items-center justify-between overflow-hidden  bg-[#f2f2f5]  `} 
                  ref={ref}
                  onClick={(e) =>{ 
                    {console.log('here 1')}
                    e.preventDefault()
                    e.stopPropagation()
                    setDropDown(!dropDown)}}>
                    <p className='font-[600] text-[16px] leading-[24px] text-[#28293D]'>{dropDownTitle}</p>
                    <IoIosArrowDown fill='#28293D' size={14} className= {` ${dropDown ?  "rotate-180  ": "rotate-0 " } transition-all ease-in-out duration-100`} />
                  </section>
                  <section className={` ${dropDown ? " max-h-[1800px] ": "max-h-[0px] hidden " }  overflow-hidden transition-all ease-in-out duration-200 p-[16px] flex flex-col gap-[21px]  `}>
                  {(dropDownTitle == "Style" || dropDownTitle == "Performance" || dropDownTitle =="Features" ) ? (<div className='flex flex-col gap-[16px]'>
                    <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className="text-left font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase ">{title1}</p>
                        </div>
                        <section className='flex flex-col gap-[12px]  '>
                
                  {data1 && Object.entries(data1[0])?.map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                             {/* <Checkbox model={model}  total={total} /> */}
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </section>
                </div>
                    <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className="text-left font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase ">{title2}</p>
                        </div>
                        <section className='flex flex-col gap-[12px]  '>
                
                  {data2 && Object.entries(data1[0])?.map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                             {/* <Checkbox model={model}  total={total} /> */}
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </section>
                </div>
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className="text-left font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase ">{title3}</p>
                        </div>
                        <section className='flex flex-col gap-[12px]   '>
                
                {data3 && Object.entries(data3[0])?.map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                             {/* <Checkbox model={model}  total={total} /> */}
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </section>
                </div>
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className="text-left font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase ">{ftitle1}</p>
                        </div>
                        <section className='flex flex-col gap-[12px]  '>
                
                {fdata1 && Object.entries(fdata1).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                             {/* <Checkbox model={model}  total={total} /> */}
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </section>
                </div>
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className="text-left font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase ">{ftitle2}</p>
                        </div>
                        <section className='flex flex-col gap-[12px]  '>
                
                {fdata2 && Object.entries(fdata2).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                             {/* <Checkbox model={model}  total={total} /> */}
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </section>
                </div>
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className="text-left font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase ">{ftitle3}</p>
                        </div>
                        <section className='flex flex-col gap-[12px]  '>
                
                {fdata3 && Object.entries(fdata3).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                             {/* <Checkbox model={model}  total={total} /> */}
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </section>
                </div>
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className="text-left font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase ">{title4}</p>
                        </div>
                        <section className='flex flex-col gap-[12px]  '>
                
                {data4 && Object.entries(data4).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                             {/* <Checkbox model={model}  total={total} /> */}
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </section>
                </div>
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className="text-left font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase ">{title5}</p>
                        </div>
                        <section className='flex flex-col gap-[12px]  '>
                
                {data5 && Object.entries(data5).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                             {/* <Checkbox model={model}  total={total} /> */}
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </section>
                </div>
                    </div>
                    ) : 
                    (<div>
                          <section className='flex flex-col gap-[16px] py-[16px] '>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912' size={20} />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">only</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          </section>
                    </div>)}
                  </section>
            </section>
    </div>
  )
}

export default DetailsDropDown