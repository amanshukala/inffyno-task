import { useRouter } from 'next/router';

const Cardetail = () => {

  const router =useRouter()

  return (
    <div className=" max-w-[1440px] mx-auto mt-[36px] ">
      <div className="mx-[60px] flex justify-between">
        <div className="flex gap-x-[16px] items-center">
          <div
            className=" w-[24px] h-[24px] rounded-[50%]
          flex justify-center border-[2px] border-[#FF8800]"
          >
            <img src="/aerro.svg" alt="logo" height={13} width={11} />
          </div>
          <div>
            <p className="text-[26px] font-[700] text-[#28293D] ">
              2022 Ford F-250 Super Duty
            </p>
            <p className="text-[#8F90A6] text-[16px] font-[400] flex flex-col">
              Covert Buick GMC • 3,518 Mileage • Black
              <span>Austin, Texas</span>
            </p>
          </div>
        </div>
        <div className="flex gap-x-[24px] items-center">
          <div className="flex gap-x-[8px]">
            <p>$87,698</p>
            <img src="/ro.svg" alt="logo" height={16} width={16} />
          </div>
          <div>
            <button
              className="bg-[#FF6B00]
                            flex justify-center rounded-[10px] mr-[24px] text-[#FFFFFF]
                            text-[14px] items-center h-[36px] w-[137px]"
            >
              Invite dealer
              <span className="mt-[8px]">
                <img src="/buttonae.svg" alt="aerro" height={24} width={15} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#FFF8E6] mt-[24px]">
        <div className="mx-[60px]  py-[24px] pl-[37px] ">
          <div className="flex gap-x-[4px] ">
            <img src="/stare.svg" alt="logo" height={20} width={15} />
            <p className="text-[12px]  uppercase font-[600] text-[#05A660]">
              Special offers
            </p>
          </div>
          <div className="mt-[16px]">
            <p className="text-[#28293D] font-[400] text-[14px] flex  gap-[16px]">
              • 100% credit approval guaranteed{" "}
              <span>• Complimentary 101pt safety check</span>
            </p>
          </div>
        </div>
      </div>


      <div className = "w-[1440px] h-[828px] bg-[black] "></div>





      <div className="bg-[#FAFAFC] ">
        <div className="pt-[36px] mt-[64px] pl-[36px] border-[2px] rounded-[10px] border-solid mx-[60px] bg-[#FFFFFF]">
          <p className="text-[32px] font-[700] text-[#28293D]">Car details</p>

          <div className="flex py-[36px] justify-between ">
            <div className="flex gap-y-[24px] flex-col">
              <div className="flex gap-x-[16px] items-center w-[402px]">
                <img
                  src="/card.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  Car type <span className="text-[#28293D]">Used Car</span>
                </p>
              </div>
              <div className="flex gap-x-[16px] items-center">
                <img
                  src="/meterd.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  Mileage <span className="text-[#28293D]">3,518</span>
                </p>
              </div>
              <div className="flex gap-x-[16px] items-center">
                <img
                  src="/card.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  Trim <span className="text-[#28293D]">King ranch</span>
                </p>
              </div>
              <div className="flex gap-x-[16px] items-center">
                <img
                  src="/tank.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  Engine{" "}
                  <span className="text-[#28293D] w-[314px]">
                    8.0c diesel direct injection intercooled turbo diesel V-8
                    6.7 L/406
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-y-[24px] px-[24px] flex-col">
              <div className="flex gap-x-[16px] items-center w-[402px]">
                <img
                  src="/calendard.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  Year <span className="text-[#28293D]">2022</span>
                </p>
              </div>
              <div className="flex gap-x-[16px] items-center">
                <img
                  src="/exterecolor.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  Exterior color <span className="text-[#28293D]">Black</span>
                </p>
              </div>
              <div className="flex gap-x-[16px] items-center">
                <img
                  src="/transmission.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  Transmission{" "}
                  <span className="text-[#28293D] whitespace-pre w-[182px]">
                    6-speed automatic w/OD
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-y-[24px] flex-col pr-[230px] w-[402px]">
              <div className="flex gap-x-[16px] items-center">
                <img
                  src="/hexd.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  VIN
                  <span className="text-[#28293D] w-[150px]">
                    1FT8W2BT9NEC44986
                  </span>
                </p>
              </div>
              <div className="flex gap-x-[16px] items-center">
                <img
                  src="/fueld.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  Fuel <span className="text-[#28293D]">Diesel fuel</span>
                </p>
              </div>
              <div className="flex gap-x-[16px] items-center">
                <img
                  src="/overtraind.svg"
                  alt="car"
                  height={13}
                  width={16}
                  className=" bg-[#E4E4EB] gap-[10px] flex p-[6px] w-[36px] h-[36px]"
                />
                <p className="text-[#8F90A6] text-[16px] font-[600] flex flex-col">
                  Drivetrain <span className="text-[#28293D]">4WD</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        
        
        
        
        <div className="pt-[36px] mt-[64px] pl-[36px] border-[2px] rounded-[10px] border-solid mx-[60px] bg-[#FFFFFF]">
          <p className="text-[32px] font-[700] text-[#28293D]">
            Other features
          </p>

          <div className="flex py-[36px] justify-between ">
            <div className="flex flex-col">
              <div className="w-[402px]">
                <p clasName="text-[14px] font-[500] leading-[20px] text-[#28293D]">
                  ENGINE: 6.7L 4V OHV POWER STROKE V8 TURBO
                </p>
              </div>

              <div
                className="pt-[36px] flex flex-col gap-y-[16px] 
                    text-[14px] font-[500] leading-[20px] text-[#28293D]"
              >
                <p>240 Amp Alternator</p>
                <p>750 CCA Batteries</p>
                <p>Power Steering</p>
                <p>Brake Assist</p>
                <p>Tires - Rear All-Terrain</p>
                <p>Heated Mirrors</p>
                <p>Power Folding Mirrors</p>
                <p>Intermittent Wipers</p>
                <p>Running Boards/Side Steps</p>
                <p>Automatic Highbeams</p>
              </div>
            </div>
            <div className="flex gap-y-[24px] pl-[24px] pr-[24px] flex-col">
              <div className="w-[402px]">
                <p clasName="text-[14px] font-[500] leading-[20px] text-[#28293D]">
                  DIESEL B20 -inc: manual push-button engine-exhaust braking and
                  intelligent oil-life monitor
                </p>
              </div>

              <div
                className="pt-[36px] flex flex-col gap-y-[16px]
                    text-[14px] font-[500] leading-[20px] text-[#28293D]"
              >
                <p>3.31 Axle</p>
                <p>Four Wheel Drive</p>
                <p>ABS</p>
                <p>Aluminum Wheels</p>
                <p>Conventional Spare Tire</p>
                <p>Power Mirror(s)</p>
                <p>Rear Defrost</p>
                <p>Variable Speed Intermittent Wipers</p>
                <p>Daytime Running Lights</p>
                <p>Fog Lamps</p>
              </div>
            </div>
            <div className="flex gap-y-[24px] flex-col pr-[230px]">
              <div
                className="w-[402px]      text-[14px] 
                    font-[500] leading-[20px] text-[#28293D]"
              >
                <p>48 Gallon Fuel Tank</p>
              </div>

              <div
                className="pt-[36px] flex flex-col gap-y-[16px]
                     text-[14px] 
                    font-[500] leading-[20px] text-[#28293D]"
              >
                <p>Ratio Dual 78-AH</p>
                <p>Tow Hitch</p>
                <p>4-Wheel Disc Brakes</p>
                <p>Tires - Front All-Terrain</p>
                <p>Tow Hooks</p>
                <p>Integrated Turn Signal Mirrors</p>
                <p>Privacy Glass</p>
                <p>Rain Sensing Wipers</p>

                <p>Automatic Headlights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardetail;
