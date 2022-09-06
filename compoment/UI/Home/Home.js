import React, { useState,useEffect} from "react";
import Modal from "../Modal/Modal";
import Carcard from "../CarCard/CarCard";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../CarFilter/Pagination";
import LoaderCarCard from './LoaderCarCard';
import CarFilter from './../CarFilter/CarFilter';
const Home = ({carData}) => {

  // const {count ,cars} =carData

  const [showModal, setShowModal] = useState(false);
  const {cars ,count ,isLoading} = useSelector((state) => state.homePageSlice)
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


  const [allCars, setAllCars] = useState(carData.cars)
  const [allCount, setAllCount] = useState(carData.count)

  useEffect(() => {
      cars.length > 0 ? setAllCars(cars) : "";
      count ? setAllCount(count) : "" 
  }, [cars, count])



  return (
    <div className="  bg-[#FAFAFC] px-[64px]">
      <div className="pt-[36px] relative">
        <div className="flex justify-between items-center index-0">
          <div>
            <p className="text-[#8F90A6] text-[12px] font-bold uppercase">
              Used cars for sale
            </p>
            <p
              className="text-[#28293D] font-bold
                    text-[32px] "
            >
        
              Showing {allCount} cars
            </p>
          </div>
          <div>
            <button
              className="bg-[black] rounded-[10px] py-[6px]
                    px-[24px] text-white font-bold"
            >
              My Garage
            </button>
          </div>
        </div>
        <div className="mt-[36px]  flex gap-x-[24px] index-0 ">
          <div>
            
            <CarFilter  carData={carData} setAllCars={setAllCars} setAllCount={setAllCount}/>
          </div>
          <div className=" w-[984px] h-max">
        
           
            { isLoading ?  array.map((k, index) => {
                                        return <LoaderCarCard key={index} /> })

                              : allCars.map((cars) => {
                                return  <Carcard key={cars.car_id} cars={allCars} setShowModal={setShowModal} />
                            })
                                }

            <Pagination  count ={allCount} />
            
            <div className="flex  flex-col gap-y-[12px] mt-[40px]">
                <p className="text-[28px] pl-[69px] text-center font-bold text-[#28293D]">
                  Why Autodigg?
                </p>

                <p
                  className="text-[#8F90A6] text-center max-w-[841px] pl-[139px] text-[14px] font-bold 
                              leading-[20px] whitespace-pre-wrap"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint. Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
                  ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                  duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                  amet.
                </p>
      </div>

          </div>
        </div>
        <div className="absolute index-1 left-0 top-[-129px]">
          {showModal && (
            <Modal onClose={() => setShowModal(false)} show={showModal} />
          )}
        </div>
      </div>

      
    </div>
  );
};

export default Home;
