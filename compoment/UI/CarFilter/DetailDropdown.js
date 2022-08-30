import React,{useState,useRef,useEffect} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import Checkbox from './CheckBox';
import {  selectedDrop ,fetchCars  } from "../../../redux/carslices";
import { useDispatch, useSelector } from "react-redux";

const DetailsDropDown = ({dropDownTitle,data1,data2,data3,data4,data5,title1,title2,title3,title4,title5 ,target_key}) => {


  const dispatch= useDispatch()




     const [dropDown, setDropDown] = useState(false);
    // const ref = useRef();

    // useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (!ref?.current?.contains(event.target)) {
    //        if(dropDown) setDropDown(false);
    //     }
    //   };
    //   document.addEventListener("mousedown", handleClickOutside);
    // }, [dropDown, ref]);


  // const dropDownChange = () =>{
  //   setDropDown(!dropDown)
  // }

  
  const dropDownChange = () =>{
    setDropDown(true)
  }



      

  

  const ddd = useSelector((state) => state.HomePageSlice);

  const {  bodyStyleSelec , extriorSelec ,interiorSelec ,transmissionSelec ,driveTrainSelec ,fuelTypeSelec } = useSelector((state) => state.HomePageSlice)
  

  const handleChange = (e) => {

   
    const { value, checked } = e.target;

    console.log(value);
    console.log("e.target.id",e.target.id);


    if (checked) {

      dispatch(selectedDrop({...ddd, [e.target.id]: [...ddd[e.target.id], value]}))
      

      dispatch(fetchCars({...ddd,  [e.target.id] :  [...ddd[e.target.id], value]}))


      
    }
  
    else {
      dispatch(selectedDrop( { [e.target.id] : ddd[e.target.id].filter((e) => e !== value)}))
      

      dispatch(fetchCars({...ddd, [e.target.id] : ddd[e.target.id].filter((e) => e !== value)}))







    }

  }










  return (
    <div>
         <div className="flex flex-col border-t-[1px] border-solid border-[#E4E4EB] " onClick ={dropDownChange}>
                  <div  className={` ${dropDown ? " block px-[16px] py-[20px] ": "block px-[16px] py-[15px]" }  flex items-center justify-between overflow-hidden  bg-[#f2f2f5]  `} >
                    <p className='font-[600] text-[16px] leading-[24px] text-[#28293D]'>{dropDownTitle}</p>
                    {/* <IoIosArrowDown fill='#28293D' size={14} className= {` ${dropDown ?  "rotate-180  ": "rotate-0 " } transition-all ease-in-out duration-100`} /> */}
                  </div>
                  <div className={` ${dropDown ? " max-h-[1800px] ": "max-h-[0px] hidden " }  overflow-hidden transition-all ease-in-out duration-200 p-[16px] flex flex-col gap-[21px]  `}>
                  {(dropDownTitle == "Style" || dropDownTitle == "Performance" || dropDownTitle =="Features" ) ? (<div className='flex flex-col gap-[16px]'>
                    <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title1}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]  '>
                
                  {data1 && Object.entries(data1).map(([model,total]) => { 
                  return (
                        <>
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox"
                                      value = {model}
                                      id = {target_key[0]}
                                      onChange ={handleChange}
                                  
                                     className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </div>
                </div>
                    <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title2}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]  '>
                
                  {data2 && Object.entries(data2).map(([model,total]) => { 
                  return (
                        <>
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox"
                                    value = {model}
                                    id = {target_key[1]}
                                    onChange ={handleChange}
                                    className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </div>
                </div>
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title3}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]   '>
                
                {data3 && Object.entries(data3).map(([model,total]) => { 
                  return (
                        <>
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox"
                                      value = {model}
                                      id = {target_key[2]}

                                      onChange ={handleChange}
                                    className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </div>
                </div>
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title4}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]  '>
                
                {data4 && Object.entries(data4).map(([model,total]) => { 
                  return (
                        <>
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox"
                                            value = {model}
                                            onChange ={handleChange}
                                            id = {target_key[3]}

                                    
                                           className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </div>
                </div>
                <div className='flex flex-col gap-[12px] '>
                        <div className=''>
                            <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">{title5}</p>
                        </div>
                        <div className='flex flex-col gap-[12px]  '>
                
                {data5 && Object.entries(data5).map(([model,total]) => { 
                  return (
                        <>
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox"
                                            value = {model}
                                            id = {target_key[4]}

                                            onChange ={handleChange}
                                    
                                    className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                                    <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                                </div>
                        </>
                        )
                })
                }
                </div>
                </div>
                    </div>
                    ) : 
                    (<div>
                          <div className='flex flex-col gap-[16px] py-[16px] '>
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
                          </div>
                    </div>)}
                  </div>
            </div>
    </div>
  )
}

export default DetailsDropDown

















