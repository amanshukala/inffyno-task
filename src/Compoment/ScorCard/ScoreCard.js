import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScroll } from "../../Store/scoreSlice";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";

const ScoreCard = (props) => {
  const [open, setOpen] = useState(false);

  const { isScroll } = useSelector((state) => state.score);
  const dispatch = useDispatch();
  const accordianHander = () => {
    
    dispatch(setScroll(isScroll === props.index ? 0 : props.index));
    
  };


  return (
    <div className="border-b-black border-b-[1px] border-solid">
      <div className="flex  justify-between  py-[12px] px-[18px]">
        <div className="text-[16px] font-semibold">
          {props.teamScore && props.teamScore[0]?.team?.code}
        </div>
        <div className="flex ">
          <div
            className="text-[14px] font-semibold pr-[75px]
                text-black"
          >
            {props.teamScore && props.teamScore[0]?.score}/
            {props.teamScore && props.teamScore[0]?.wickets}
          </div>
          <div>
            {isScroll === props.index ? (
              <IoIosArrowUp
                className=" text-[1.5rem]
                    rounded-[50%] bg-[#ff5000] p-[6px] text-white"
                onClick={accordianHander}
              />
            ) : (
              <AiOutlineDown
                className=" text-[1.5rem]
                rounded-[50%] bg-[#ff5000] p-[6px] text-white"
                onClick={accordianHander}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          isScroll === props.index ? "h-[100%]" : "h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col  items-center w-[100%]">
          <div
            className=" 
                        flex w-[100%] rounded-[10px] border-b-0 justify-between
                        item-start mt-[20px] bg-scorerowbg-color text-[grey]
                        p-[10px]"
          >
            <div>
              <p className="text-[12px] font-semibold w-[60px]">BATSMEN</p>
            </div>
            <div className="flex items-center">
              <p className="text-[12px] w-[60px] font-semibold  ">R</p>
              <p className="text-[12px] w-[60px] font-normal  ">B</p>
              <p className="text-[12px] w-[60px] font-normal  ">4s</p>
              <p className="text-[12px] w-[60px] font-normal  ">6s</p>
              <p className="text-[12px] w-[60px] font-normal  ">S/R</p>
            </div>
          </div>

          {props.localteam_batting_score &&
            props.localteam_batting_score.map((p, index) => {
              return (
                <div
                  key={index}
                  className="flex 
          w-[100%]
          bg-[white]
          rounded-0
          border-b-1 border-b-solid border-b-[grey] justify-between
          item-start p-[10px] "
                >
                  <div
                    className="flex justify-center 
          items-start flex-col pr-[10px]"
                  >
                    <p className="text-[14px] whitespace-nowrap font-normal text-batmanname_color  w-[60px]">
                      {p?.batsman?.fullname}
                      {p.batsman.position?.name === "Wicketkeeper"
                        ? "(wk)"
                        : p?.batsman?.position?.name === "Captain"
                        ? "(c)"
                        : ""}
                    </p>
                    <p className="pt-[5px] text-[11px] text-gray-400  w-[60px] whitespace-nowrap">
                      {p?.catch_stump_player_id
                        ? `c ${p.firstname} ${p?.lastname?.toSubstring(0, 1)}`
                        : "NotOut"}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <p className=" w-[60px] text-gray-400 font-semibold">
                      {p?.score}
                    </p>
                    <p className=" w-[60px] text-gray-400">{p?.ball}</p>
                    <p className=" w-[60px] text-gray-400">{p?.four_x}</p>
                    <p className=" w-[60px] text-gray-400">{p?.six_x}</p>
                    <p className=" w-[60px] text-gray-400">
                      {p?.rate.toFixed(1)}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <div
          className="flex w-[98%] justify-between
               item-start text-[gray] p-[10px]"
        >
          <p className="text-[14px] font-semibold text-[black]">Extras</p>
          <div className="text-[14px] font-semibold text-[black]">
            2{" "}
            <span className="text-[12px] text-[gray]">
              (b 0, lb 1, nb 0, w 1, p 0)
            </span>
          </div>
        </div>
        <div
          className="flex w-[98%] justify-between
               item-start text-[gray] p-[10px]"
        >
          <p className="text-[14px] font-semibold text-[black]">Did Not Bat</p>
          <div className="text-[12px]  text-[gray]">Santhamoorthy S</div>
        </div>
        <div
          className="flex w-[98%] justify-between
               item-start text-[gray] p-[10px]"
        >
          <p className="text-[14px] font-semibold text-[black]">Total Score</p>
          <div className="text-[14px] font-semibold  text-[black]">
            {props.teamScore && props.teamScore[0]?.score}/
            {props.teamScore && props.teamScore[0]?.wickets}*
            <span className="text-[12px] text-[gray]">
              ({props.teamScore && props.teamScore[0]?.overs} Overs)
            </span>
          </div>
        </div>

        <div
          className=" 
                        flex w-[100%] rounded-[10px] border-b-0 justify-between
                        item-start mt-[20px] bg-scorerowbg-color text-[grey]
                        p-[10px]"
        >
          <div>
            <p className="text-[12px] font-semibold w-[60px]">BOWLER</p>
          </div>
          <div className="flex items-center">
            <p className="text-[12px] w-[60px] font-semibold  ">O</p>
            <p className="text-[12px] w-[60px] font-normal  ">M</p>
            <p className="text-[12px] w-[60px] font-normal  ">R</p>
            <p className="text-[12px] w-[60px] font-normal  ">W</p>
            <p className="text-[12px] w-[60px] font-normal  ">ECO</p>
          </div>
        </div>

        {props.victoribowl_data &&
          props.victoribowl_data.map((p, index) => {
            return (
              <div
                key={index}
                className="flex 
          w-[100%]
          bg-[white]
          rounded-0
          border-b-1 border-b-solid border-b-[grey] justify-between
          item-start p-[10px] "
              >
                <div
                  className="flex justify-center 
          items-start flex-col pr-[10px]"
                >
                  <p className="text-[14px] whitespace-nowrap font-normal text-batmanname_color  w-[60px]">
                    {p.bowler.fullname}
                  </p>
                  <p className="pt-[5px] text-[11px] text-gray-400  w-[60px] whitespace-nowrap">
                    sxsxsx
                  </p>
                </div>
                <div className="flex items-start">
                  <p className=" w-[60px] text-gray-400 font-semibold">
                    {p?.overs}
                  </p>
                  <p className=" w-[60px] text-gray-400">{p?.medians}</p>
                  <p className=" w-[60px] text-gray-400">{p?.runs}</p>
                  <p className=" w-[60px] text-gray-400">{p?.wickets}</p>
                  <p className=" w-[60px] text-gray-400">{p?.rate}</p>
                </div>
              </div>
            );
          })}
        <div>
          <div
            className=" flex w-[100%] rounded-[10px] border-b-0 justify-between
                      item-start mt-[20px] bg-scorerowbg-color text-[grey]
                      p-[10px] "
          >
            <div className="text-[12px] text-[grey] w-[60px]">
              FALL OF WICKETS
            </div>
            <div className="flex gap-x-[92px]  mr-[39px]">
              <p className="text-[12px] text-[grey] w-[60px]">SCORE</p>
              <p className="text-[12px] text-[grey] w-[60px]">OVER</p>
            </div>
          </div>

          {props.localteam_batting_score &&
            props.localteam_batting_score.map((data, index) => {
              return (
                data.fow_balls > 0 && (
                  <div
                    className="px-[10px] my-[10px] flex flex-col"
                    key={index}
                  >
                    <div className="flex justify-between  w-[100%] items-center">
                      <div>
                        <span className="text-[rgb(0,129,255)] text-[14px]">
                          {data.batsman.fullname}
                        </span>
                      </div>
                      <div className="flex  gap-x-[92px] text-[grey]  mr-[39px]">
                        <span className=" min-w-[60px]">{data.fow_score}</span>
                        <span className=" w-[60px]">{data.fow_balls}</span>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
