import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Accordian = () => {
  const [open, setOpen] = useState({first : false ,second :false , third : false , four : false, five : false});

  const handleOpen = (value) => {
    setOpen((e)=> ({
      ...e,
      [value.type]:value.isOpen,
    }));
  };
  console .log('open',open)
  return (
    <Fragment>
      <div className="mx-[16px] pt-[15px] ">
        <Accordion
          open={open.first}
          icon={<Icon id={1} open={open.first} />}
          onClick={() => handleOpen({type:'first',isOpen:open.first? false:true})}
        >
          <AccordionHeader className="font-[700] pb-[17px] bg-[#FFFFFF] flex gap-x-[214px] text-[16px] text-[#28293D]">
            Style
          </AccordionHeader>
          <AccordionBody className="bg-[darkgrey] ">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>

      <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[16px] rounded-[10px] "></div>

      <div className="mx-[16px] pt-[15px] ">
        <Accordion
          open={open.second}
          icon={<Icon id={2} open={open.second} />}
          onClick={() => handleOpen({type:'second',isOpen:open.second? false:true})}
        >
          <AccordionHeader className="font-[700] pb-[17px] bg-[#FFFFFF] flex  text-[16px] text-[#28293D]">
            Performance
          </AccordionHeader>
          <AccordionBody className="bg-[darkgrey] ">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>

      <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[16px] rounded-[10px] "></div>

      <div className="mx-[16px] pt-[15px] ">
        <Accordion
           open={open.third}
           icon={<Icon id={3} open={open.third} />}
           onClick={() => handleOpen({type:'third',isOpen:open.third? false:true})}
        >
          <AccordionHeader className="font-[700] pb-[17px] bg-[#FFFFFF] flex  text-[16px] text-[#28293D]">
            Features
          </AccordionHeader>
          <AccordionBody className="bg-[darkgrey] ">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>

      <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[16px] rounded-[10px] "></div>

      <div className="mx-[16px] pt-[15px] ">
        <Accordion
             open={open.four}
             icon={<Icon id={4} open={open.four} />}
             onClick={() => handleOpen({type:'four',isOpen:open.four? false:true})}
        >
          <AccordionHeader className="font-[700] pb-[17px] bg-[#FFFFFF] flex gap-x-[214px] text-[16px] text-[#28293D]">
            Rating
          </AccordionHeader>
          <AccordionBody className="b g-[#FFFFFF] ">
            <div className="mt-[14px] flex flex-col gap-y-[16px]">
              <div className="flex item-center ml-[16px] gap-x-[10px]">
                <input
                  type="checkbox"
                  id="ILX"
                  name="ILX"
                  value="ILX"
                  className="h-[20px] w-[20px]  accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
                />
                <label className="text-[14px]  font-[500] flex gap-x-[4px] text-[#28293D]">
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <span className="text-[#28293D] tex-[14px]"> only </span>
                </label>
              </div>

              <div className="flex ml-[16px] gap-x-[10px] item-center">
                <input
                  type="checkbox"
                  id="MDX"
                  name="MDX"
                  value="MDX"
                  className="h-[20px]  w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
                />
                <label className="text-[14px]  flex font-[500]  gap-x-[4px] text-[#28293D]">
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  and above
                </label>
              </div>

              <div className="flex ml-[16px] gap-x-[10px] item-center">
                <input
                  type="checkbox"
                  id="RDX"
                  name="RDX "
                  value="RDX "
                  className="h-[20px] w-[20px]  accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
                />
                <label className="text-[14px] font-[500] flex gap-x-[4px] text-[#28293D]">
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  and above
                </label>
              </div>

              <div className="flex ml-[16px]  gap-x-[10px] item-center">
                <input
                  type="checkbox"
                  id="TL"
                  name="TL"
                  value="TL"
                  className="h-[20px] w-[20px] accent-black rounded-[10px]  border-[1px] border-[#F2F2F5]"
                />
                <label className="text-[14px]  flex gap-x-[4px] font-[500] text-[#28293D]">
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  and above
                </label>
              </div>

              <div className="flex  gap-x-[10px] ml-[16px] item-center">
                <input
                  type="checkbox"
                  id="used"
                  name="TLX"
                  value="TLX"
                  className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
                />
                <label className="text-[14px] flex gap-x-[4px] font-[500] text-[#28293D]">
                  <img src="/fstar.svg" alt="aerro" height={20} width={15} />
                  and above
                </label>
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[16px] rounded-[10px] "></div>

      <div className="mx-[16px] pt-[15px] ">
        <Accordion
              open={open.five}
              icon={<Icon id={5} open={open.five} />}
              onClick={() => handleOpen({type:'five',isOpen:open.five? false:true})}
        >
          <AccordionHeader className="font-[700] whitespace-pre	 pb-[17px] bg-[#FFFFFF] flex  text-[16px] text-[#28293D]">
              Contactless service
          </AccordionHeader>
          <AccordionBody className="bg-[darkgrey] ">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>

    </Fragment>
  );
};
export default Accordian;

{
  /* 
<div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[16px] rounded-[10px] "></div>




<div className="mx-[16px] pt-[15px] flex justify-between">
<p className="font-[700] text-[16px] text-[#28293D]">Rating</p>

<img src="/closedrop.svg" alt="aerro" height={20} width={15} />
</div>




<div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[16px] rounded-[10px] "></div>

<div className="mx-[16px] pt-[15px] flex justify-between pb-[24px]">
  <p className="font-[700] text-[16px] text-[#28293D]">Contactless service</p>
<img src="/closedrop.svg" alt="aerro" height={20} width={15} />
</div>
 */
}
