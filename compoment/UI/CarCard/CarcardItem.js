import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Carcarditem = ({ setShowModal, carData }) => {


  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();

    e.preventDefault();

    setShowModal(true);
  }, []);

  const dispatch = useDispatch()
  const { isLoading} = useSelector((state) => state.HomePageSlice)

  console.log("isloading",isLoading)

 

  return (
    <div className =  "flex flex-col gap-y-[23px]">
      {carData && carData?.map((car,key) => {
        
        
        return (
        
          <div key={car?.vin}  className ="  rounded-[10px] shadow-cardshadow">
            <Link href={`${car?.vin}`  }>
              <a  target="_blank" rel="noreferrer">
            
          
              <div>
                <div className="flex gap-y-[24px]">
                  <div className = {"max-w-[360px] w-full h-auto  max-h-[254px]" }>
                    {car.photos &&<Image
                                          src={car.photos[0]}
                                          height={254}
                                          layout= "responsive"
                                          alt="car"
                                          width={360}
                                          className="rounded-tl-[10px]"
                                                    />}

                  {(car.has_photos == "N") &&   <Image
                                                      src="/car.jpg"
                                                      height={254}
                                                      layout= "responsive"
                                                      alt="car"
                                                      width={360}
                                                      className="rounded-tl-[10px]"
                                                    />}
                
                  </div>
                 
                  <div className="flex flex-col justify-between my-[24px] w-[100%] ">
                    <div className="flex flex-col  gap-y-[4px] pl-[15px] ">
                      <p className="font-[700] text-[20px] text-[#28293D] leading-[32px]">
                        {car.year} {car.make} {car.model}
                      </p>
                      <p className="text-[12px] text-[#8F90A6] font-[400px]">
                      {car.dealership} • {car.milage} Mileage • {car.exterior_color}
                      </p>
                      <p className="text-[12px] text-[#8F90A6] font-[400px]">
                      {car.city}, {car.state}

                      </p>
                    </div>
                    <div className="flex w-[100%] justify-between ">
                      <div className="flex gap-x-[8px] items-center pl-[15px]">
                        <p className=" text-[28px] font-bold text-[#28293D]">
                            ${car.price.toLocaleString('en-US')}

                        </p>
                        
                          <Image src="/ro.svg" alt="ro" height={16} width={16} />
                        
                      </div>
                      <div className="">
                        <button
                          onClick={handleButtonClick}
                          className="bg-[#FF6B00]
                            flex justify-center rounded-[10px] mr-[24px] text-[#FFFFFF]
                            text-[14px] items-center h-[36px] w-[137px] "
                        >
                          Invite dealer 
                          <span className="mt-[8px]">
                            <Image
                              src="/buttonae.svg"
                              alt="aerro"
                              height={24}
                              width={15}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFF8E6]">
                  <div className="py-[16px] ml-[24px]">
                    <p className="flex gap-x-[4px]">
                      <Image
                        src="/imgstar.svg"
                        alt="star"
                        height={20}
                        width={15}
                      />
                      <span className="text-[#05A660] uppercase text-[12px] font-[400px]">
                        Special offers
                      </span>
                    </p>

                    <p className="text-[#28293D] font-[400] font-[14px] ">
                    • {car.car_offers && car?.car_offers ?.split(",")[0].replace(/[\[\]'"]/g, '')}
                      <sapn className="ml-[16px]">
                      • {car.car_offers && car?.car_offers?.split(",")[1].replace(/[\[\]'"]/g, '')}
                      </sapn>
                    </p>
                  </div>
                </div>
              </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Carcarditem;
