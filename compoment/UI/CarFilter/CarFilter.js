import React , {useState ,useEffect} from "react";

import Checkbox from "./CheckBox";
import Showmodel from './ShowModel';
import { useDispatch, useSelector } from "react-redux";
import SingleRange from "./SingleRange";
import MultiRange from "./MultiRange";
import DetailDropDown from "./DetailDropdown";
import Image from "next/image";
import { setNewUsed ,getCount,setYears,setPrice ,fetchCars,setRadius } from "../../../Redux/CarSlices"
import { RiSendPlaneLine } from "react-icons/ri";




const CarFilter = ({carData ,setAllCars, setAllCount}) => {
  

  //  const {makes ,models ,bodyType ,extColors ,intColors ,transmissions ,dtrains ,fuelType ,features} =carData
   
    const [allData, setAllData] = useState({
     bodyTypes: carData.bodyType,
     makes: carData.makes,
     model: carData.models,
     extColors: carData.extColors,
     intColors: carData.intColors,
     dtrains: carData.dTrain,
     transmissions: carData.transmissions,
     fuelType: carData.fuelType,
     features: carData.features,
 })


   const [sRange ,setSRange] = useState([100]);
   const [dRange ,setDRange] = useState([0, 1000000]);
   const [yRange ,setYRange] = useState([2011,2021]);

   const dispatch= useDispatch()


   const { cars ,count,newUsed,price,radius ,year,extcolors ,intcolors,dtrains,fuelType,models,bodytypes ,makes ,transmissions,features} = useSelector((state) => state.homePageSlice);
  
  // const { cars ,count,newUsed,price,year} = useSelector((state) => state.homePageSlice);
  
   useEffect(() => {
    count ? setAllCount(count) : ""
     if (cars.length > 0 || count || bodytypes|| models || extcolors||intcolors||transmissions||fuelType || features) {
         setAllCars(cars);
         setAllData({

           bodyTypes: bodytypes,

           makes: carData.makes,

           model: models,
           extColors:extcolors,
           intColors: intcolors,
           dtrains: dtrains,
          transmissions: transmissions,
           fuelType: fuelType,
           features: features,
        
         })
   }}, [cars, count ])

   const interiorFet = allData && Object.entries(allData.features)[0] && Object.entries(allData.features)[0][1] 
    const techFet = allData && Object.entries(allData.features)[1]  && Object.entries(allData.features)[1][1] 
    const safFet = allData && Object.entries(allData.features)[2] && Object.entries(allData.features)[2][1] 
    const extFet = allData && Object.entries(allData.features)[3] && Object.entries(allData.features)[3][1] 
    const others = allData && Object.entries(allData.features)[4] && Object.entries(allData.features)[4][1] 


  // const {carTypes} = useSelector((state) => state.homePageSlice);

  // ddd.carTypes && console.log(ddd.carTypes)
  // console.log(Object.keys(ddd)[3]);

  // const { carTypes } = useSelector((state) => state.HomePageSlice)
  
  // const tittle =(Object.keys(  Object.entries(allData.features)[0][1]))
  
   const RadiusChange =(e)=>{
    dispatch(setRadius(e))
    dispatch(fetchCars())

  }

   const OnYearChange =(e)=>{
     dispatch(setYears(e))
     dispatch(fetchCars())

//     dispatch(fetchCars({ ...ddd , yearRange: e}))
   }


  const OnRangeChange =(e)=>{
    dispatch(setPrice(e))
    dispatch(fetchCars())

    // dispatch(fetchCars({ ...ddd , priceRange: e}))
  
}


  const handleChange = (e) => {

     // Destructurin
    const { value, checked } = e.target;

    // Case 1 : The user checks the box
    if (checked) {
      dispatch(setNewUsed([...newUsed, value]))
      dispatch(fetchCars())

    
    }
  
    // Case 2  : The user unchecks the box
    else {
      dispatch(setNewUsed(newUsed.filter((e) => e !== value)))
      dispatch(fetchCars())

 }

  }
  

 


  return (
    <div className="text-[black] bg-[#FFFFFF] rounded-[10px]  border-[1px] border-solid border-[#F2F2F5] w-[312px]  text-center pt-[23px] ">
      <div className="bg-[#FFFFFF] relative">
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

            <RiSendPlaneLine size={20} fill="#FF6B00"></RiSendPlaneLine>

              
            </p>
          </div>
        </div>
        <div className="flex justify-between mx-[16px] mt-[20px]">
          <p className="text-[#8F90A6] text-[12px] font-[600] max-w">
            Search within
          </p>
          <p className="text-[#28293D] text-[12px] font-[600] max-w">
          {radius} miles
          </p>
        </div>

      

        <div className=" mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]">
                <SingleRange  setRange={RadiusChange} min={20} max={500} step={10} defaultValue={100} />
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
        <Checkbox  carmake={allData.makes}/>

        

        <div>

          <Showmodel  carmodel={allData.model}   />

        </div>
   
        <div className="bg-[#E4E4EB] mx-[16px] w-[280px] h-[1px] mt-[18px] rounded-[10px] "></div>

        <div className="flex justify-between mx-[16px] mt-[20px]">
          <p className="text-[#8F90A6] text-[12px] font-[600] max-w">Price</p>
          <p className="text-[#28293D] text-[16px] font-[700] max-w">
              ${price[0]} - ${price[price.length-1]}
          </p>
        </div>
        <div  className=" mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]">

            <MultiRange setRange={OnRangeChange} defaultValue={[0,1000000]} min={0} max={100000} step={1000} />
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
          ${year[0]} - ${year[year.length-1]}  
      
          </p>
        </div>
        
        <div  className=" mt-[18px] w-[280px] h-[6px] rounded-[10px] mx-[16px]">
            <MultiRange setRange={OnYearChange} defaultValue={[2000,2010]} min={1990} max={2021} step={1}  />
        </div>

        <div className="flex justify-between mx-[16px] mt-[15px]">
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>1990</p>
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>2021</p>
        </div>
        <div className = "mt-[15px]">
                                                                                                                                                                              
         <section className=' flex flex-col py-[10px] '>
                <section className=' '>
                    <DetailDropDown index={1}  dropDownTitle="Style" title1="BODY STYLE"  target_key={["bodystyleData","extcolorData","intcolorData"]} data1={allData.bodyTypes} title2="EXTERIOR COLOR"  data2={allData.extColors} title3="INTERIOR COLOR" data3={allData.intColors} />

                </section>
                 <section className=' '>
                    <DetailDropDown index={2} dropDownTitle="Performance" title1="TRANSMISSION"   target_key={["transmissionsData","dtrainsData","fuelTypeData"]}  data1={allData.transmissions}   title2="DRIVE TRAIN"   data2={ allData.dtrains} title3="FUEL TYPE"   data3={allData.fuelType} />

                </section>
                <section className=' '>
                    <DetailDropDown index={3} dropDownTitle="Features" title1={"INTERIOR FEATURES"} target_key={["InteriorFeature","TenchnologyFeature","SafetyFeature", "ExtriorFeature" ,"others"]}   data1={interiorFet} title2={"TECHNOLOGY FEATURES"}  data2={techFet} title3={"SAFETY FEATURES"}  data3={safFet}  title4={"EXTERIOR FEATURES"}  data4={extFet} title5={"OTHERS"} data5={others}  />


                </section> 
                <section className=' '>
                    <DetailDropDown index={4} dropDownTitle="Ratings"  />
                </section> 
          </section>
        </div>
       
      </div>

    
    
     


    </div>
  );
};

export default CarFilter;
