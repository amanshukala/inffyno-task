import Image from 'next/image';
import React from 'react'

const LoaderCarCard = () => {
  return (
    <>
    <section className=''>
        <div className="rounded-[10px] overflow-hidden shadow-cardShadow bg-white h-[330px] w-[890px] flex flex-col">
            <div className='flex gap-[24px]'>
                <div className='carImage animate-pulse bg-slate-500 w-[360px] h-[254px]'>
                </div>
                <div className='flex flex-col py-[24px] pr-[24px] gap-[96px]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className=''>
                            <h1 className='font-[700] text-[20px] text-[#28293D] bg-slate-500 leading-[32px] h-[32px] animate-pulse w-[268px]'></h1>
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <ul className='flex gap-[10px]  '>
                                <li className='font-[400] text-[12px] text-[#8F90A6] bg-slate-500 leading-[16px] animate-pulse w-[241px] h-[15px]'></li>
                            </ul>
                            <p className='font-[400] text-[12px] text-[#8F90A6] bg-slate-500 leading-[16px] w-[80px] h-[15px]'></p>
                        </div>
                    </div>
                    <div className='flex gap-[250px]'>
                        <div className='flex justify-center items-center gap-[8px]'>
                            <div>
                                <p className='font-[600] text-[#28293D] text-[28px] bg-slate-500 leading-[38px] animate-pulse h-[5px] w-[90px]'></p>
                            </div>
                            <div className='rounded-full bg-slate-500 flex justify-center items-center animate-pulse w-[16px] h-[16px]'>
                            </div>
                        </div>
                        <div>
                            <button style={{ background: "linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)" }} className='w-[137px] h-[36px] rounded-[10px] shadow-btnShadow px-[16px] py-[6px] text-[#FFFFFF] flex justify-center items-center gap-[2px] drop-shadow-textShadow animate-pulse'></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-b-[10px] py-[16px] bg-[#FFF8E6] h-[76px] w-full animate-pulse px-[24px] justify-start">
            </div>
        </div>
    </section>
</>
  )
}

export default LoaderCarCard