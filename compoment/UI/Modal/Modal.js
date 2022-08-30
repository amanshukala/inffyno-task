import React , {useState ,useEffect} from "react";

import {ImCross} from "react-icons/im"

const Modal = ({onClose ,show}) => {


return <><div className="bg-[white] rounded-[10px] flex  mt-[178px] mb-[342px] mx-[188px]">
<div className="bg-[gainsboro] p-[36px] relative border-2 border-solid border-r-0 rounded-l-[10px]">
  <div className="mt-[4px]">
    <div  >
      <p className="flex gap-x-[8px]"><span className="h-[24px] rounded-[12px] w-[24px] bg-[darkgray] flex justify-center
      item-center">1</span> <span className="">Register</span></p>
    </div>
    <div className=" ">
      <span className="border-[1px] ml-[10px] border-solid border-[darkgray] h-[42px] flex w-0"></span>
      
      
    </div>
    <div >
    <p className="flex gap-x-[8px]"><span className="h-[24px] w-[24px] bg-[darkgray] rounded-[12px] flex justify-center
      item-center">2</span> <span className="">Verify Phone Number</span></p>

    </div>
    <div className=" ">
      <span className="border-[1px] ml-[10px] border-solid border-[darkgray] h-[42px] flex w-0"></span>
      
      
    </div>
    <div>
    <p className="flex gap-x-[8px]"><span className="h-[24px] w-[24px] bg-[darkgray] flex justify-center
      item-center rounded-[12px]">3</span> <span className="">Get Anonymous</span></p>

    </div>
    <div className ="mt-[36px] h-[172px]">
      <img src="https://autodigg.com/loginModal.webp" width={137} height ={172}  className="absolute
       left-0 bottom-0"/>
    </div>

  </div>
</div>
<div className="px-[30px] pt-[30px] pb-[48px] border-2 border-solid rounded-r-[10px]  relative  flex flex-col padding: 30px 48px 30px 30px;">
  <div className="absolute top-[20px] right-[20px]">
    <ImCross onClick ={onClose}/>
  </div>
  <div>
    <p className="text-[16px] font-[700] text-[black]">Hello ,Let's get you registered.</p>
    <p className ="text-[12px] text-[darkgray] font-[400px]">We will collect your name and email address via this process. We pledge never to <br/> share it with anyone without your discretion.</p>
    <div className ="flex gap-x-[33px] mt-[35px]">
      <div className ="py-[24px] px-[20px] border-[1px] border-solid rounded-[8px]
        item-center flex flex-col">
          <div className ="flex justify-center">  <img src= "https://autodigg.com/_next/image?url=%2Ffacebook.webp&w=64&q=75"  width={64} height={64}/></div>
          <p className ="whitespace-pre">LOGIN VIA FACEBOOK</p>

        </div>
      <div className ="py-[24px] px-[20px] border-[1px] border-solid rounded-[8px]
        item-center flex flex-col">
          <div className ="flex justify-center">
          <img src= "https://autodigg.com/_next/image?url=%2Ftwitter.webp&w=64&q=75"  width={64} height={64}/>

          </div>
            <p className ="whitespace-pre">LOGIN VIA TWITTER</p>

        </div>
      <div className ="py-[24px] px-[20px] border-[1px] border-solid rounded-[8px]
        item-center flex flex-col">
          <div className ="flex justify-center">
          <img src= "https://autodigg.com/_next/image?url=%2Fgoogle.webp&w=64&q=75"  width={64} height={64}/>

          </div>
            <p className ="whitespace-pre">LOGIN VIA GOOGLE</p>
        </div>
    </div>
  </div>
 


</div>
</div>
</>



};

export default Modal;

