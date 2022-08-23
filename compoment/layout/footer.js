import React from "react";

const Footer = () => {
  return (
    <div className=" max-w-[1440px] mx-auto ">
      
      <div className="bg-[#28293D] ">
        <div className=" ml-[64px] mr-[60px] mt-[64px]    ">
          <div className=" pt-[64px] pb-[36px] flex justify-between ">
            <div className="flex flex-col gap-y-[24px]">
              <img src="/footerlogo.svg" alt="logo" height={36} width={132} />

              <p className="text-[#8F90A6] text-[14px] max-w-[424px] h-[72px] font-[400px] leading-[24px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className=" flex flex-col justify-between  gap-y-[76px]">
              <div className="flex gap-x-[36px] justify-end">
                <img src="/facebook.svg" alt="logo" height={24} width={24} />
                <img src="/twitter.svg" alt="logo" height={24} width={24} />
                <img src="/instagram.svg" alt="logo" height={24} width={24} />
              </div>
              <div className="flex gap-x-[32px]">
                <p className="text-[#FFFFFF]">How it works</p>
                <p className="text-[#FFFFFF]">Blog</p>
                <p className="text-[#FFFFFF]">Frequently asked questions</p>
                <p className="text-[#FFFFFF]">Are you a dealer?</p>
                <p className="text-[#FFFFFF]">Contact us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1C1C28] flex py-[32px] px-[60px] justify-between item-center">
        <div>
          <p className="text-[10px] text-[#8F90A6] whitespace-pre-wrap w-[424px] font-[500px]">
            © AutoDigg 2021. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-x-[32px]">
          <p className="text-[14px] text-[#FFFFFF] font-[500px]">
            Terms of Service
          </p>
          <p className="text-[14px] text-[#FFFFFF] font-[500px]">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
