import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import { AiOutlineBarChart } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";

import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FAFAFA",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        overflow: "hidden",
      }}
      onClick={onClick}
    >
      <HiArrowRight
        fill="#ff5000"
        size={24}
        className="relative top-[-8px] left-[12px] "
      />
    </div>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FAFAFA",
        width: "48px",
        height: "48px",
        top: "",
        borderRadius: "50%",
        overflow: "hidden",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <HiArrowLeft
        fill="#ff5000"
        size={24}
        className="relative top-[-8px] left-[12px]"
      />
    </div>
  );
};

const SliderCard = (props) => {
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      className={`${
        props.type === "Update Matchhes"
          ? "h-[147px]  bg-back-color mb-[220px] "
          : " "
      }
      ${props.type === "Upcoming Matchhes" ? " mb-[320px]" : ""} `}
    >
      <div className="mx-auto max-w-[1024px]  w-[100%]   ">
        <h1
          className={`${
            props.type === "Features Matchhes"
              ? "mb-[16px]   text-[20px] font-semibold text-white "
              : " text-black text-[20px] mb-[16px] font-semibold"
          } `}
        >
          {props.type}
        </h1>

        <div className="  mx-auto ">
          <Slider {...settings}>
            {props.data_card?.map((p, key) => {
              return (
                <div key={p.id} className="group">
                  <div
                    className="max-w-max relative
                      border-[1px]
                      rounded-[12px] border-solid "
                  >
                    <div>
                      <div className="relative">
                        <img
                          src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9JbmRpYS10b3VyLW9mLUVuZ2xhbmRfT0RJXzAyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MzI4LCJwb3NpdGlvbiI6InRvcCJ9fX0="
                          alt=""
                          className="w-[340px] h-[100px]"
                        />
                      </div>
                      <div className="flex gap-[40px] justify-center items-center mt-[25px] bg-white">
                        <div className="flex gap-[10px] ">
                          <div className="">
                            <img
                              className="w-[32px] "
                              src={p?.localteam?.image_path}
                              alt="flag"
                            />
                            <div className="text-[#666666] tracking-[1.4px] text-[10px] font-[100] text-center ">
                              <p>{p?.localteam?.code}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-start ">
                            <div className="font-[600] text-[#666666] text-[14px] ">
                              <p>
                                {p?.runs[0]?.score}/{p?.runs[0]?.wickets}
                              </p>
                            </div>
                            <div className="text-[#999999] text-[12px]">
                              <p>{p?.runs[0]?.overs} overs</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex flex-col justify-center items-center">
                            <div className="h-[15px] w-[1px] bg-[#ff5000] "></div>
                            <div className="font-graff font-[700] text-[#ff5000] text-center">
                              <p>V/s</p>
                            </div>
                            <div className="h-[15px] w-[1px] bg-[#ff5000] "></div>
                          </div>
                        </div>
                        <div className="flex flex-row-reverse gap-[10px] ">
                          <div className="">
                            <img
                              className="w-[32px] "
                              src={p?.visitorteam?.image_path}
                              alt="flag"
                            />
                            <div className="text-[#666666] text-[10px] font-[100] tracking-[1.4px] text-center ">
                              <p className="">{p?.visitorteam?.code}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="font-[600] text-[#666666] text-[14px] ">
                              <p>
                                {p?.runs[1]?.score}/{p?.runs[1]?.wickets}
                              </p>
                            </div>
                            <div className="text-[#999999] text-[12px]">
                              <p>{p?.runs[1]?.overs} overs</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-[12px] leading-[1.33] tracking-[0.24px] text-center mb-[8px] ">
                        <p className="">{p?.note}</p>
                      </div>
                    </div>

                    <div
                      className="absolute top-[0px] flex gap-x-[22px]
              w-[100%]
              mt-[16px] flex-col"
                    >
                      <div
                        className="flex ml-[12px] 
               items-center gap-x-[9px]"
                      >
                        <div
                          className="text-[11px] rounded-[2px]
                 px-[4px] text-center py-[1px] h-[16px]
                 bg-icon-color text-[#FF5000]"
                        >
                          Live
                        </div>
                        <img
                          src="https://www.fancode.com/34c5a8f6bbb5d0f26564fc0537e56630.svg"
                          className="w-[24px] h-[24px] "
                          alt=""
                        />
                      </div>
                      <div className="text-[white]  mt-[22px] text-center">
                        <p>
                          {p?.round} {p?.league.name}, {p?.season.name}
                        </p>
                      </div>
                      <button
                        className="bg-[#FF5000] 
               text-[white] text-[14px] max-w-max
               flex rounded-[30px] px-[21px] py-[4px] m-auto
               font-semibold"
                      >
                        {props.type === "Update Matchhes" && (
                          <Link to={`/${p.id}`}>
                            <div className="flex gap-[6px] bg-[#FF5000]">
                              <span>
                                <img
                                  src="/images/butto.svg"
                                  alt=""
                                  className="w-[24px] h-[24px] mr-[4px]
              "
                                />
                              </span>
                              <p>WATCH LIVE</p>
                            </div>
                          </Link>
                        )}

                        {props.type === "Finished of Matched" && (
                          <div className="flex gap-[6px]">
                            <p className="text-[black]">Result</p>
                          </div>
                        )}
                        {props.type === "Upcoming Matchhes" && (
                          <div className="flex gap-[6px] ">
                            <p className="text-[black]">Upcoming</p>
                          </div>
                        )}
                      </button>

                      <div></div>
                    </div>
                  </div>
                  <div
                    className="invisible py-[10px] px-[12px] bg-greater-color mt-[-10px] rounded-b-[12px] flex items-center h-[27px] 
                    
                    justify-between group-hover:visible"
                  >
                    <div className="flex pt-[10px] gap-x-[7px] items-center">
                      <AiOutlineBarChart className="bg-[#FF5000]" />
                      <p className="text-[11px]">Point Table</p>
                    </div>
                    <div className="flex pt-[10px] gap-x-[7px] items-center">
                      <p className="text-[11px]">More Cricket</p>
                      <FaGreaterThan className="h-[15px] w-[15px] rounded-[50%] bg-[#FF5000] text-[0.5em]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
