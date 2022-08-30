import React , {useState} from "react";
import Accordian from "./accordian";
import Checkbox from "./CheckBox";
import Showmodel from './ShowModel';
import { useDispatch, useSelector } from "react-redux";
import SingleRange from "./SingleRange";
import MultiRange from "./MultiRange";
import DetailDropDown from "./DetailDropdown";
import Image from "next/image";
import {  selectedDrop ,fetchCars  } from "../../../redux/carslices";



const CarFilter = () => {

  const [sRange ,setSRange] = useState([100]);
  const [dRange ,setDRange] = useState([0, 1000000]);
  const [yRange ,setYRange] = useState([2011,2021]);

  const dispatch= useDispatch()

  // const [selected, setSelected] = useState([]);
  

  const ddd = useSelector((state) => state.HomePageSlice);

  const {   make ,model ,bodyType,exteriorColor,interiorColor,driveTrain,transmission,fuelType,features ,selected_drop} = useSelector((state) => state.HomePageSlice)
  console.log(exteriorColor)
  const tittle =(Object.keys(  Object.entries(features)[0][1]))

  const handleChange = (e) => {

    // dispatch(fetchCars())


    // Destructuring
    const { value, checked } = e.target;

    // Case 1 : The user checks the box
    if (checked) {
      dispatch(selectedDrop( {selected_drop : [...selected_drop, value]}))

      dispatch(fetchCars({...ddd, selected_drop : [...selected_drop, value]}))

    
    }
  
    // Case 2  : The user unchecks the box
    else {
      dispatch(selectedDrop({ selected_drop: selected_drop.filter((e) => e !== value)}))
      

      dispatch(fetchCars({...ddd, selected_drop : selected_drop.filter((e) => e !== value)}))




    }

  }
  

 


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
                value="New car"
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
                onChange={handleChange}

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
                name="used"
                value="Used car"
                className="h-[20px] w-[20px] accent-black rounded-[10px] border-[1px] border-[#F2F2F5]"
                onChange={handleChange}

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
              <Image
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
        <Checkbox  carmake={make}/>

        

        <div>

          <Showmodel  carmodel={model}   />

        </div>
   
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
                    <DetailDropDown dropDownTitle="Style" title1="BODY STYLE" data1={bodyType} title2="EXTERIOR COLOR"  data2={exteriorColor} target_key={["bodyStyleSelec","extriorSelec","interiorSelec"]} title3="INTERIOR COLOR" data3={interiorColor} />
                </section>                                               
                 <section className=' '>
              
                    <DetailDropDown dropDownTitle="Performance" title1="TRANSMISSION"  data1={transmission}  target_key={["transmissionSelec","driveTrainSelec","fuelTypeSelec"]} title2="DRIVE TRAIN"   data2={ driveTrain} title3="FUEL TYPE"   data3={fuelType} />
                </section>
                <section className=' '>
                    <DetailDropDown dropDownTitle="Features" title1={Object.entries(features)[0][0]}  target_key={["InteriorFeature","TenchnologyFeature","SafetyFeature", "ExtriorFeature" ,"others"]} data1={Object.entries(features)[0][1]} title2={Object.entries(features)[1][0]}  data2={Object.entries(features)[1][1]} title3={Object.entries(features)[2][0]}  data3={Object.entries(features)[2][1]}  title4={Object.entries(features)[3][0]}  data4={Object.entries(features)[3][1]} title5={Object.entries(features)[4][0]} data5={Object.entries(features)[4][1]}  />
                </section> 
                <section className=' '>
                    <DetailDropDown dropDownTitle="Ratings"  />
                </section> 
          </section>
        </div>
       
      </div>

    
    
     


    </div>
  );
};

export default CarFilter;
