import React , {useState} from "react";
import Accordian from "./accordian";
import Checkbox from "./checkbox";
import Showmodel from './showmodel';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/carslices";
import SingleRange from "./singlerange";
import MultiRange from "./multirange";
import DetailDropDown from "./detaildropdown";
const CarFilter = () => {

  const [sRange ,setSRange] = useState([100]);
  const [dRange ,setDRange] = useState([0, 1000000]);
  const [yRange ,setYRange] = useState([2011,2021]);




  const dispatch = useDispatch()

  const {carmake , carmodel,carStyle ,carEcolur ,carIcolur ,carTrans ,carDrive ,carFuel ,carFeature} = useSelector((state) => ({
    carmake: state.users.carmake,
    carmodel: state.users.carmodel,
    carStyle: state.users.carStyle,
    carEcolur: state.users.carEcolur,
    carIcolur: state.users.carIcolur,
    carTrans: state.users.carTrans,
    carDrive: state.users.carDrive,
    carFuel: state.users.carFuel,
    carFeature: state.users.carFeature,
  }));

  // console.log( "carFeatur", Object.entries(carFeature)[0][1]['Exterior Features'])
  
  const tittle =(Object.keys(  Object.entries(carFeature)[0][1]))
  console.log(tittle)

  return (
    <div className="text-[black] bg-[#FFFFFF] rounded-[10px]  border-[1px] border-solid border-[#F2F2F5] w-[312px]  text-center pt-[23px] ">
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
              78613
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
          {sRange} miles
          </p>
        </div>

      

        <div className=" mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]">
                <SingleRange setRange={setSRange} min={20} max={500} step={10} defaultValue={100} />
          </div> 

        <div className="flex justify-between mx-[16px] mt-[15px]">
          <p className="text-[#28293D] text-[12px] font-[500] max-w">
            20 miles
          </p>
          <p className="text-[#28293D] text-[12px] font-[500] max-w">
            500 miles
          </p>
        </div>

        <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[16px] rounded-[10px] "></div>
        <Checkbox  carmake={carmake}/>

        

        <div>

          <Showmodel  carmodel={carmodel}/>

        </div>
        {/* <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[18px] rounded-[10px] "></div> */}
{/* 
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
        </div> */}
        <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[18px] rounded-[10px] "></div>

        <div className="flex justify-between mx-[16px] mt-[20px]">
          <p className="text-[#8F90A6] text-[12px] font-[600] max-w">Price</p>
          <p className="text-[#28293D] text-[16px] font-[700] max-w">
              ${dRange[0]} - ${dRange[dRange.length-1]}
          </p>
        </div>
        <div  className=" mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]">
            <MultiRange setRange={setDRange} defaultValue={[0,1000000]} min={0} max={100000} step={1000} />
        </div>
         <div className="flex justify-between mx-[16px] mt-[15px]">
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>$0</p>
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>$100,000</p>
                </div>
        <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[18px] rounded-[10px] "></div>

        <div className="flex justify-between mx-[16px] mt-[20px]">
          <p className="text-[#8F90A6] text-[12px] font-[600] max-w">
            Make year
          </p>
          <p className="text-[#28293D] text-[16px] font-[700] max-w">
          {yRange[0]} - {yRange[yRange.length-1]}
          </p>
        </div>
        
        <div  className=" mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]">
            <MultiRange setRange={setYRange} defaultValue={[2011,2021]} min={1990} max={2021} step={1}  />
        </div>

        <div className="flex justify-between mx-[16px] mt-[15px]">
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>1990</p>
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>2021</p>
        </div>
        <div className = "mt-[15px]">
    
         
         <section className=' flex flex-col py-[10px] '>
                <section className=' '>
                    <DetailDropDown dropDownTitle="Style" title1="BODY STYLE" data1={carStyle} title2="EXTERIOR COLOR"  data2={carEcolur} title3="INTERIOR COLOR" data3={carIcolur} />
                </section>                                               
                <section className=' '>
                    <DetailDropDown dropDownTitle="Performance" title1="TRANSMISSION" data1={carTrans} title2="DRIVE TRAIN"  data2={carDrive} title3="FUEL TYPE" data3={carFuel} />
                </section>
                <section className=' '>
                    <DetailDropDown dropDownTitle="Features" ftitle1={tittle[0] } fdata1={Object.entries(carFeature)[0][1]["Exterior Features"]} ftitle2={tittle[1] }  fdata2={Object.entries(carFeature)[0][1]["Technology Features"]} ftitle3={tittle[2] } fdata3={Object.entries(carFeature)[0][1]["Safety Features"]}  title4={tittle[3] } data4={Object.entries(carFeature)[0][1]["Exterior Features"]} title5={tittle[4] }  data5={Object.entries(carFeature)[0][1]["Others"]} />
                </section>
                <section className=' '>
                    <DetailDropDown dropDownTitle="Ratings" />
                </section> 
              </section>
        </div>
       
      </div>

    
    
     


    </div>
  );
};

export default CarFilter;
