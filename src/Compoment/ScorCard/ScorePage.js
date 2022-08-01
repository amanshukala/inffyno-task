import React, { CSSProperties, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScoreCard from "./ScoreCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchscore, cleanData } from "../../Store/scoreSlice";
import { STATUSES } from "../../Store/scoreSlice";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ScorePage = () => {
  let [color, setColor] = useState("#ffffff");

  const [selectOption, setSelectOption] = useState("Scoredcard");

  const { id } = useParams();

  const dispatch = useDispatch();

  // const { data: score, status } = useSelector((state) => state.score);

  const { status } = useSelector((state) => state.score);

  const {
    //   localteam_id,
    //   visitorteam_id,
    localbtting_Data,
    localScore,
    vistoScore,
    visitorteambtting_Data,
    visitorteambowl_Data,
    localbowl_Data,
  } = useSelector((state) => state.score);

  useEffect(() => {
    dispatch(fetchscore(id));
    console.log({ selectOption });
    return () => {
      dispatch(cleanData());
    };
  }, []);

  // if (status === STATUSES.LOADING) {
  //   return <h2>Loading....</h2>;
  // }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  if (selectOption == "Fantasty") {
    return <p>Fantasty</p>;
  }

  if (selectOption == "Info") {
    return <p>Fantasty</p>;
  }

  if (selectOption == "Live") {
    return <p>Fantasty</p>;
  }

  return (
    <div>
      {status === STATUSES.LOADING ? (
        <div className="sweet-loading">
          <ClipLoader color={color} cssOverride={override} size={150} />
        </div>
      ) : (
        selectOption == "Scoredcard" && (
          <div className="mx-auto max-w-[672px] mt-[53px] mb-[320px] w-[100%]">
            <div>
              <div className="flex justify-between ">
                <div className="flex flex-col items-start">
                  <p
                    className="text-[14px] font-normal rounded-[2px]
                py-[3px] px-[5px] bg-[red] text-center text-white"
                  >
                    {vistoScore && vistoScore[0].team.code}
                  </p>
                  <p
                    className="text-black  text-[28px] flex items-baseline
            font-bold"
                  >
                    {vistoScore && vistoScore[0]?.score}/
                    {vistoScore && vistoScore[0]?.wickets}
                    <span
                      className="text-[grey]
            text-[12px] m-[5px]"
                    >
                      ({vistoScore && vistoScore[0]?.overs})
                    </span>{" "}
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="h-[15px] w-[1px] bg-[grey] "></div>
                  <div
                    className="font-graff font-[700] text-[black] bg-[grey]
                            rounded-[50%] w-[24px] text-[15px]
                            text-center"
                  >
                    <p>V</p>
                  </div>
                  <div className="h-[15px] w-[1px] bg-[grey] "></div>
                </div>

                <div className="flex flex-col items-end">
                  <p
                    className="text-[14px] font-normal rounded-[2px]
                        py-[3px] px-[5px] bg-[red] text-center text-white"
                  >
                    {localScore && localScore[0]?.team?.code}
                  </p>
                  <p
                    className="text-black  text-[28px] flex items-baseline
                    font-bold"
                  >
                    <span
                      className="text-[grey]
                    text-[12px] m-[5px]"
                    >
                      ({localScore && localScore[0]?.overs})
                    </span>
                    {localScore && localScore[0]?.score}/
                    {localScore && localScore[0]?.wickets}{" "}
                  </p>
                </div>
              </div>
              <div
                className="mx-auto text-[14px] text-[black] font-semibold
            mt-[10px] max-w-[94%] text-center mb-[15px]"
              >
                RBMS need 78 runs in 39 balls
              </div>
            </div>
            <div
              className="bg-[white] h-[48px] w-[100%]
        flex items-center  mx-auto border-b-[1px] border-b-solid border-b-gray-400
        border-t-[1px] border-t-solid border-t-gray-400"
            >
              <div
                className={` flex items-center
          w-[100%] justify-center px-[20px] ${
            selectOption === "Fantasty"
              ? "border-b-[#F89437] border-b-[2px]"
              : "border-b-white"
          } `}
                onClick={() => {
                  setSelectOption("Fantasty");
                }}
              >
                Fantasty
              </div>
              <div
                className={`flex items-center
          w-[100%] justify-center px-[20px] ${
            selectOption === "Info"
              ? "border-b-[#F89437] border-b-[2px]"
              : "border-b-white"
          }`}
                onClick={() => {
                  setSelectOption("Info");
                }}
              >
                Info
              </div>
              <div
                className={`flex items-center
          w-[100%] justify-center px-[20px] ${
            selectOption == "Live"
              ? "border-b-[#F89437] border-b-[2px]"
              : "border-b-white"
          }`}
                onClick={() => {
                  setSelectOption("Live");
                }}
              >
                Live
              </div>
              <div
                className={`flex items-center
            w-[100%] justify-center px-[20px] ${
              selectOption == "Scoredcard"
                ? "border-b-[#F89437] border-b-[2px]"
                : "border-b-white"
            }`}
                onClick={() => {
                  setSelectOption("Scoredcard");
                }}
              >
                Scoredcard
              </div>
              <div
                className={`flex items-center
            w-[100%] justify-center px-[20px] ${
              selectOption === "Squard"
                ? "border-b-[#F89437] border-b-[2px]"
                : "border-b-white"
            }`}
                onClick={() => {
                  setSelectOption("Squard");
                }}
              >
                Squard
              </div>
              <div
                className={`flex items-center
            w-[100%] justify-center px-[20px] ${
              selectOption === "Highlights"
                ? "border-b-[#F89437] border-b-[2px]"
                : "border-b-white"
            }`}
                onClick={() => {
                  setSelectOption("Highlights");
                }}
              >
                Highlights
              </div>
            </div>
            <ScoreCard
              victoribowl_data={visitorteambowl_Data}
              localteam_batting_score={localbtting_Data}
              index={1}
              teamScore={localScore}
            />
            <ScoreCard
              victoribowl_data={localbowl_Data}
              localteam_batting_score={visitorteambtting_Data}
              index={2}
              teamScore={vistoScore}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ScorePage;

// import React, { CSSProperties,useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import ScoreCard from "./ScoreCard";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchscore } from "../../Store/scoreSlice";
// import { STATUSES } from "../../Store/scoreSlice";
// import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

// const ScorePage = () => {

//   let [color, setColor] = useState("#ffffff");

//   const { id } = useParams();

//   const dispatch = useDispatch();

//   const { data: score, status } = useSelector((state) => state.score);

//      const localteam_id = score.data?.data?.localteam_id;
//       const visitorteam_id = score.data?.data?.visitorteam_id;

//     const localbtting_Data = score.data?.data?.batting.filter((data) => {
//       return data.team_id === localteam_id;
//     });

//     const localScore = score.data?.data?.runs.filter((data) => {
//       if (data.team_id === localteam_id) {
//         return data;
//       }
//     });

//     const vistoScore = score.data?.data?.runs?.filter((data) => {
//       if (data.team_id === visitorteam_id) {
//         return data;
//       }
//     });

//     const visitorteambtting_Data = score.data?.data?.batting.filter((data) => {
//       return data.team_id === visitorteam_id;
//     });

//     const localbowl_Data = score.data?.data?.bowling.filter((data) => {
//       return data.team_id === localteam_id;
//     });

//     const visitorteambowl_Data = score.data?.data?.bowling.filter((data) => {
//       return data.team_id === visitorteam_id;
//     });

//   useEffect(() => {
//     dispatch(fetchscore(id));

//   }, []);

//   // if (status === STATUSES.LOADING) {
//   //   return <h2>Loading....</h2>;
//   // }

//   if (status === STATUSES.ERROR) {
//     return <h2>Something went wrong!</h2>;
//   }

//   return (
//   <div>

//     {status === STATUSES.LOADING ?(<div className="sweet-loading">

//      <ClipLoader
//        color={color}
//        cssOverride={override}
//        size={150}
//      />
//    </div>)  : (
//       <div className="mx-auto max-w-[672px] mt-[53px] mb-[320px] w-[100%]">
//       <div>
//         <div className="flex justify-between ">
//           <div className="flex flex-col items-start">
//             <p
//               className="text-[14px] font-normal rounded-[2px]
//                 py-[3px] px-[5px] bg-[red] text-center text-white"
//             >
//               {vistoScore && vistoScore[0].team.code}
//             </p>
//             <p
//               className="text-black  text-[28px] flex items-baseline
//             font-bold"
//             >
//               {vistoScore && vistoScore[0]?.score}/{vistoScore && vistoScore[0]?.wickets}
//               <span
//                 className="text-[grey]
//             text-[12px] m-[5px]"
//               >
//                 ({vistoScore && vistoScore[0]?.overs})
//               </span>{" "}
//             </p>
//           </div>

//           <div className="flex flex-col justify-center items-center">
//             <div className="h-[15px] w-[1px] bg-[grey] "></div>
//             <div
//               className="font-graff font-[700] text-[black] bg-[grey]
//                             rounded-[50%] w-[24px] text-[15px]
//                             text-center"
//             >
//               <p>V</p>
//             </div>
//             <div className="h-[15px] w-[1px] bg-[grey] "></div>
//           </div>

//           <div className="flex flex-col items-end">
//             <p
//               className="text-[14px] font-normal rounded-[2px]
//                         py-[3px] px-[5px] bg-[red] text-center text-white"
//             >
//               {localScore && localScore[0]?.team?.code}
//             </p>
//             <p
//               className="text-black  text-[28px] flex items-baseline
//                     font-bold"
//             >
//               <span
//                 className="text-[grey]
//                     text-[12px] m-[5px]"
//               >
//                 ({localScore && localScore[0]?.overs})
//               </span>
//               {localScore && localScore[0]?.score}/{localScore && localScore[0]?.wickets}{" "}
//             </p>
//           </div>
//         </div>
//         <div
//           className="mx-auto text-[14px] text-[black] font-semibold
//             mt-[10px] max-w-[94%] text-center mb-[15px]"
//         >
//           RBMS need 78 runs in 39 balls
//         </div>
//       </div>
//       <div
//         className="bg-[white] h-[48px] w-[100%]
//         flex items-center  mx-auto border-b-[1px] border-b-solid border-b-gray-400
//         border-t-[1px] border-t-solid border-t-gray-400"
//       >
//         <div
//           className=" flex items-center
//             w-[100%] justify-center px-[20px]   "
//         >
//           Fantasty
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Info
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Live
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Scoredcard
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Squard
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Highlights
//         </div>
//       </div>
//       <ScoreCard
//         victoribowl_data={visitorteambowl_Data}
//         localteam_batting_score={localbtting_Data}

//         teamScore ={localScore}
//       />
//       <ScoreCard
//         victoribowl_data={localbowl_Data}
//         localteam_batting_score={visitorteambtting_Data}

//         teamScore ={vistoScore}

//       />
//     </div>) }

//   </div>

//   );
// };

// export default ScorePage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { AiOutlineDown } from "react-icons/ai";
// import { IoIosArrowUp } from "react-icons/io";
// import ScoreCard from "./ScoreCard";
// import axios from "axios";

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchscore } from "../../Store/scoreSlice";
// import { STATUSES } from "../../Store/scoreSlice";

// import { base_url } from "../Config";
// import { api_token } from "../Config";

// const ScorePage = () => {
//   const { id } = useParams();
//   const [localScore, setlocalScore] = useState([]);
//   const [vistoScore, setvistoScore] = useState([]);

//   const [localbtting_Data, setLocalbtting_Data] = useState(null);
//   const [localscore_batting_Data, setLocalscore_batting_Data] = useState(null);

//   const [visitorteambowl_Data, setvisitorteambowl_Data] = useState(null);
//   const [localbowl_Data, setLocalbowl_Data] = useState(null);

//   const [visitorteambtting_Data, setVisitorteambtting_Data] = useState(null);

//   const dispatch = useDispatch();

//   const { data: score, status } = useSelector((state) => state.score);

//   const ScoreApiHander = async () => {
//     const { data, status } = await axios.get(
//       base_url +
//         "fixtures/" +
//         id +
//         api_token +
//         "include=localteam,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman"
//     );

//     // setScore_Data(data.data);
//     if (status === 200) {
//       const localteam_id = data.data.localteam_id;
//       const visitorteam_id = data.data.visitorteam_id;

//       const localtem_batting_data = data.data.batting.filter((data) => {
//         return data.team_id === localteam_id;
//       });
//       setLocalbtting_Data(localtem_batting_data);

//       const localScore = data.data.runs.filter((data) => {
//         if (data.team_id === localteam_id) {
//           return data;
//         }
//       });
//       setlocalScore(localScore);

//       const vistoryScore = data.data.runs.filter((data) => {
//         if (data.team_id === visitorteam_id) {
//           return data;
//         }
//       });
//       setvistoScore(vistoryScore);

//       const visitorteam_batting_data = data.data.batting.filter((data) => {
//         return data.team_id === visitorteam_id;
//       });

//       setVisitorteambtting_Data(visitorteam_batting_data);

//       const localtem_bowling_data = data.data.bowling.filter((data) => {
//         return data.team_id === localteam_id;
//       });

//       setLocalbowl_Data(localtem_bowling_data);

//       const visitorteam_bowling_data = data.data.bowling.filter((data) => {
//         return data.team_id === visitorteam_id;
//       });
//       setvisitorteambowl_Data(visitorteam_bowling_data);

//       //   console.log(localtem_bowling_data);
//       //   console.log(visitorteam_bowling_data);
//     }
//   };

//   useEffect(() => {

//     dispatch(fetchscore(id));

//     ScoreApiHander();
//   }, []);

// //   if (status === STATUSES.LOADING) {
// //     return <h2>Loading....</h2>;
// // }

// // if (status === STATUSES.ERROR) {
// //     return <h2>Something went wrong!</h2>;
// // }

//   return (
//     <div className="mx-auto max-w-[672px] mt-[53px] mb-[320px] w-[100%]">
//       <div>
//         <div className="flex justify-between ">
//           <div className="flex flex-col items-start">
//             <p
//               className="text-[14px] font-normal rounded-[2px]
//                 py-[3px] px-[5px] bg-[red] text-center text-white"
//             >
//               {vistoScore[0]?.team?.code}
//             </p>
//             <p
//               className="text-black  text-[28px] flex items-baseline
//             font-bold"
//             >
//               {vistoScore[0]?.score}/{vistoScore[0]?.wickets}
//               <span
//                 className="text-[grey]
//             text-[12px] m-[5px]"
//               >
//                 ({vistoScore[0]?.overs})
//               </span>{" "}
//             </p>
//           </div>

//           <div className="flex flex-col justify-center items-center">
//             <div className="h-[15px] w-[1px] bg-[grey] "></div>
//             <div
//               className="font-graff font-[700] text-[black] bg-[grey]
//                             rounded-[50%] w-[24px] text-[15px]
//                             text-center"
//             >
//               <p>V</p>
//             </div>
//             <div className="h-[15px] w-[1px] bg-[grey] "></div>
//           </div>

//           <div className="flex flex-col items-end">
//             <p
//               className="text-[14px] font-normal rounded-[2px]
//                         py-[3px] px-[5px] bg-[red] text-center text-white"
//             >
//               {localScore[0]?.team?.code}
//             </p>
//             <p
//               className="text-black  text-[28px] flex items-baseline
//                     font-bold"
//             >
//               <span
//                 className="text-[grey]
//                     text-[12px] m-[5px]"
//               >
//                 ({localScore[0]?.overs})
//               </span>
//               {localScore[0]?.score}/{localScore[0]?.wickets}{" "}
//             </p>
//           </div>
//         </div>
//         <div
//           className="mx-auto text-[14px] text-[black] font-semibold
//             mt-[10px] max-w-[94%] text-center mb-[15px]"
//         >
//           RBMS need 78 runs in 39 balls
//         </div>
//       </div>
//       <div
//         className="bg-[white] h-[48px] w-[100%]
//         flex items-center  mx-auto border-b-[1px] border-b-solid border-b-gray-400
//         border-t-[1px] border-t-solid border-t-gray-400"
//       >
//         <div
//           className=" flex items-center
//             w-[100%] justify-center px-[20px]   "
//         >
//           Fantasty
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Info
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Live
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Scoredcard
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Squard
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Highlights
//         </div>
//       </div>
//       <ScoreCard
//         victoribowl_data={visitorteambowl_Data}
//         localteam_batting_score={localbtting_Data}

//         teamScore ={localScore}
//       />
//       <ScoreCard
//         victoribowl_data={localbowl_Data}
//         localteam_batting_score={visitorteambtting_Data}

//         teamScore ={vistoScore}

//       />
//     </div>
//   );
// };

// export default ScorePage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { AiOutlineDown } from "react-icons/ai";
// import { IoIosArrowUp } from "react-icons/io";
// import ScoreCard from "./ScoreCard";
// import axios from "axios";

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchscore } from "../../Store/scoreSlice";
// import { STATUSES } from "../../Store/scoreSlice";

// import { base_url } from "../Config";
// import { api_token } from "../Config";

// const ScorePage = () => {
//   const { id } = useParams();
//   const [localScore, setlocalScore] = useState([]);
//   const [vistoScore, setvistoScore] = useState([]);

//   const [localbtting_Data, setLocalbtting_Data] = useState(null);
//   const [localscore_batting_Data, setLocalscore_batting_Data] = useState(null);

//   const [visitorteambowl_Data, setvisitorteambowl_Data] = useState(null);
//   const [localbowl_Data, setLocalbowl_Data] = useState(null);

//   const [visitorteambtting_Data, setVisitorteambtting_Data] = useState(null);

//   const dispatch = useDispatch();

//   const { data: score, status } = useSelector((state) => state.score);

//   const ScoreApiHander = async () => {
//     const { data, status } = await axios.get(
//       base_url +
//         "fixtures/" +
//         id +
//         api_token +
//         "include=localteam,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman"
//     );

//     // setScore_Data(data.data);
//     if (status === 200) {
//       const localteam_id = data.data.localteam_id;
//       const visitorteam_id = data.data.visitorteam_id;

//       const localtem_batting_data = data.data.batting.filter((data) => {
//         return data.team_id === localteam_id;
//       });
//       setLocalbtting_Data(localtem_batting_data);

//       const localScore = data.data.runs.filter((data) => {
//         if (data.team_id === localteam_id) {
//           return data;
//         }
//       });
//       setlocalScore(localScore);

//       const vistoryScore = data.data.runs.filter((data) => {
//         if (data.team_id === visitorteam_id) {
//           return data;
//         }
//       });
//       setvistoScore(vistoryScore);

//       const visitorteam_batting_data = data.data.batting.filter((data) => {
//         return data.team_id === visitorteam_id;
//       });

//       setVisitorteambtting_Data(visitorteam_batting_data);

//       const localtem_bowling_data = data.data.bowling.filter((data) => {
//         return data.team_id === localteam_id;
//       });

//       setLocalbowl_Data(localtem_bowling_data);

//       const visitorteam_bowling_data = data.data.bowling.filter((data) => {
//         return data.team_id === visitorteam_id;
//       });
//       setvisitorteambowl_Data(visitorteam_bowling_data);

//       //   console.log(localtem_bowling_data);
//       //   console.log(visitorteam_bowling_data);
//     }
//   };

//   useEffect(() => {

//     dispatch(fetchscore(id));

//     ScoreApiHander();
//   }, []);

// //   if (status === STATUSES.LOADING) {
// //     return <h2>Loading....</h2>;
// // }

// // if (status === STATUSES.ERROR) {
// //     return <h2>Something went wrong!</h2>;
// // }

//   return (
//     <div className="mx-auto max-w-[672px] mt-[53px] mb-[320px] w-[100%]">
//       <div>
//         <div className="flex justify-between ">
//           <div className="flex flex-col items-start">
//             <p
//               className="text-[14px] font-normal rounded-[2px]
//                 py-[3px] px-[5px] bg-[red] text-center text-white"
//             >
//               {vistoScore[0]?.team?.code}
//             </p>
//             <p
//               className="text-black  text-[28px] flex items-baseline
//             font-bold"
//             >
//               {vistoScore[0]?.score}/{vistoScore[0]?.wickets}
//               <span
//                 className="text-[grey]
//             text-[12px] m-[5px]"
//               >
//                 ({vistoScore[0]?.overs})
//               </span>{" "}
//             </p>
//           </div>

//           <div className="flex flex-col justify-center items-center">
//             <div className="h-[15px] w-[1px] bg-[grey] "></div>
//             <div
//               className="font-graff font-[700] text-[black] bg-[grey]
//                             rounded-[50%] w-[24px] text-[15px]
//                             text-center"
//             >
//               <p>V</p>
//             </div>
//             <div className="h-[15px] w-[1px] bg-[grey] "></div>
//           </div>

//           <div className="flex flex-col items-end">
//             <p
//               className="text-[14px] font-normal rounded-[2px]
//                         py-[3px] px-[5px] bg-[red] text-center text-white"
//             >
//               {localScore[0]?.team?.code}
//             </p>
//             <p
//               className="text-black  text-[28px] flex items-baseline
//                     font-bold"
//             >
//               <span
//                 className="text-[grey]
//                     text-[12px] m-[5px]"
//               >
//                 ({localScore[0]?.overs})
//               </span>
//               {localScore[0]?.score}/{localScore[0]?.wickets}{" "}
//             </p>
//           </div>
//         </div>
//         <div
//           className="mx-auto text-[14px] text-[black] font-semibold
//             mt-[10px] max-w-[94%] text-center mb-[15px]"
//         >
//           RBMS need 78 runs in 39 balls
//         </div>
//       </div>
//       <div
//         className="bg-[white] h-[48px] w-[100%]
//         flex items-center  mx-auto border-b-[1px] border-b-solid border-b-gray-400
//         border-t-[1px] border-t-solid border-t-gray-400"
//       >
//         <div
//           className=" flex items-center
//             w-[100%] justify-center px-[20px]   "
//         >
//           Fantasty
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Info
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Live
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Scoredcard
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Squard
//         </div>
//         <div
//           className="flex items-center
//             w-[100%] justify-center px-[20px]"
//         >
//           Highlights
//         </div>
//       </div>
//       <ScoreCard
//         victoribowl_data={visitorteambowl_Data}
//         localteam_batting_score={localbtting_Data}

//         teamScore ={localScore}
//       />
//       <ScoreCard
//         victoribowl_data={localbowl_Data}
//         localteam_batting_score={visitorteambtting_Data}

//         teamScore ={vistoScore}

//       />
//     </div>
//   );
// };

// export default ScorePage;
