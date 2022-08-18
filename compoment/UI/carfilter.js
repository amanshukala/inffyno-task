import React from "react";
import Accordian from "./accordian";
import Checkbox from "./checkbox";
import Showmodel from './showmodel';


const CarFilter = () => {
  return (
    <div className="text-[black] rounded-[10px]  border-[1px] border-solid border-[#F2F2F5] w-[312px]  text-center pt-[23px] ">
      <div className="bg-[#FFFFFF]">
        <div className="pt-[16px] pl-[16px] flex flex-col gap-y-[8px] ">
          <p className="text-[#28293D] font-[700] text-[16px] w-max	">
            Filter by
          </p>
          <div className="bg-[#FF8800] w-[30px] h-[2px] rounded-[10px] "></div>
        </div>

        <div className="gap-y-[14px] pl-[16px] mt-[24px] flex flex-col">
          <p className="text-[#8F90A6] uppercase text-[12px] w-max font-[600]">
            {" "}
            Car type
          </p>
          <div className="flex gap-x-[26px] ">
            <div className="flex item-center gap-x-[10px]">
              <input
                type="checkbox"
                id="new"
                name="new"
                value="new"
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
              />
              <label className="text-[14px] font-[500] text-[#28293D]">
                {" "}
                New
              </label>
            </div>

            <div className="flex gap-x-[10px] item-center">
              <input
                type="checkbox"
                id="used"
                name="new"
                value="used"
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
              />
              <label className="text-[14px] font-[500] text-[#28293D]">
                {" "}
                Used
              </label>
            </div>
          </div>
        </div>
        <div className="w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] mt-[18px] mx-[16px]"></div>
        <div className="pl-[16px] flex flex-col gap-y-[8px] mt-[16px]">
          <p className="text-[#8F90A6] text-[12px] font-[600]   w-fit ">
            Your ZIP
          </p>
          <div className="w-[280px] h-[48px] flex flex-col justify-center px-[16px] border-[1px] rounded-[10px] border-[#E4E4EB] bg-[#FFFFFF]">
            <p className="flex justify-between items-center">
              78613{" "}
              <img
                src="/buttonae.svg"
                alt="aerro"
                height={20}
                width={15}
                className="bg-[#FF6B00] border-[1px] border-[#FF6B00] "
              />
            </p>
          </div>
        </div>
        <div className="flex justify-between mx-[16px] mt-[20px]">
          <p className="text-[#8F90A6] text-[12px] font-[600] max-w">
            Search within
          </p>
          <p className="text-[#28293D] text-[12px] font-[600] max-w">
            100 miles
          </p>
        </div>
        <div className="bg-[#EBEBF0] mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]"></div>

        <div className="flex justify-between mx-[16px] mt-[15px]">
          <p className="text-[#28293D] text-[12px] font-[500] max-w">
            20 miles
          </p>
          <p className="text-[#28293D] text-[12px] font-[500] max-w">
            500 miles
          </p>
        </div>

        <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[16px] rounded-[10px] "></div>
        <Checkbox />

        <div className="pl-[16px] flex flex-col gap-y-[8px] mt-[16px]">
          <p className="text-[#8F90A6] text-[12px] font-[600]   w-fit ">
            Modal
          </p>

          <div className="mt-[14px] flex flex-col gap-y-[16px]">
            <div className="flex item-center gap-x-[10px]">
              <input
                type="checkbox"
                id="ILX"
                name="ILX"
                value="ILX"
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
              />
              <label className="text-[14px] font-[500] text-[#28293D]">
                {" "}
                ILX (7)
              </label>
            </div>

            <div className="flex  gap-x-[10px] item-center">
              <input
                type="checkbox"
                id="MDX"
                name="MDX"
                value="MDX"
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
              />
              <label className="text-[14px] font-[500] text-[#28293D]">
                MDX (33)
              </label>
            </div>

            <div className="flex  gap-x-[10px] item-center">
              <input
                type="checkbox"
                id="RDX"
                name="RDX "
                value="RDX "
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
              />
              <label className="text-[14px] font-[500] text-[#28293D]">
                {" "}
                RDX (45)
              </label>
            </div>

            <div className="flex  gap-x-[10px] item-center">
              <input
                type="checkbox"
                id="TL"
                name="TL"
                value="TL"
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
              />
              <label className="text-[14px] font-[500] text-[#28293D]">
                {" "}
                TL (2)
              </label>
            </div>

            <div className="flex  gap-x-[10px] item-center">
              <input
                type="checkbox"
                id="used"
                name="TLX"
                value="TLX"
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
              />
              <label className="text-[14px] font-[500] text-[#28293D]">
                {" "}
                TLX (21)
              </label>
            </div>
          </div>
        </div>

        <div>

          <Showmodel />

        </div>
        <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[18px] rounded-[10px] "></div>

        <div className="pl-[16px] flex flex-col gap-y-[8px] mt-[16px]">
          <p className="text-[#8F90A6] text-[12px] font-[600]   w-fit ">
            Body type
          </p>

          <div className="mt-[14px] flex flex-col gap-y-[16px]">
            <div className="flex item-center gap-x-[10px]">
              <input
                type="checkbox"
                id="Sedan"
                name="Sedan"
                value="Sedan"
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
              />
              <label className="text-[14px] font-[500] text-[#28293D]">
                {" "}
                Sedan (12)
              </label>
            </div>

            <div className="flex  gap-x-[10px] item-center">
              <input
                type="checkbox"
                id="SUV"
                name="SUV"
                value="SUV "
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
              />
              <label className="text-[14px] font-[500] text-[#28293D]">
                SUV (32)
              </label>
            </div>
          </div>
        </div>
        <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[18px] rounded-[10px] "></div>

        <div className="flex justify-between mx-[16px] mt-[20px]">
          <p className="text-[#8F90A6] text-[12px] font-[600] max-w">Price</p>
          <p className="text-[#28293D] text-[16px] font-[700] max-w">
            $0 - $1,000
          </p>
        </div>
        <div className="bg-[#EBEBF0] mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]"></div>

        <div className="flex justify-between mx-[16px] mt-[20px]">
          <p className="text-[#8F90A6] text-[12px] font-[600] max-w">
            Make year
          </p>
          <p className="text-[#28293D] text-[16px] font-[700] max-w">
            2000 - 2010
          </p>
        </div>
        <div className="bg-[#EBEBF0] mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]"></div>

        <div className="flex justify-between mx-[16px] mt-[20px]">
          <p className="text-[#8F90A6] text-[12px] font-[600] max-w">Mileage</p>
          <p className="text-[#28293D] text-[16px] font-[700] max-w">Any</p>
        </div>
        <div className="bg-[#EBEBF0] mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]"></div>

        <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[32px] rounded-[10px] "></div>

        <Accordian />
      </div>

    
    
     


    </div>
  );
};

export default CarFilter;
