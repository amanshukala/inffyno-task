import React, { CSSProperties, useState, useEffect } from "react";
import SliderCard from "./SliderCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/cricketSlice";
import { STATUSES } from "../../Store/cricketSlice";

import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Slider = (props) => {
  let [color, setColor] = useState("#ffffff");

  const dispatch = useDispatch();

  const { data: crickets, status } = useSelector((state) => state.product);

  const apiData = crickets?.data?.data.slice(2, 21);

  const liveStatus = crickets?.data?.data.filter((mData) => {
    if (!mData.live) {
      return mData;
    }
  });

  const upStatus = crickets?.data?.data.filter((mData) => {
    if (mData.status === "Aban.") {
      return mData;
    }
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // if (status === STATUSES.LOADING) {
  //   return <h2>Loading....</h2>;
  // }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div>
      {status === STATUSES.LOADING ? (
        <div className="sweet-loading">
          <ClipLoader color={color} cssOverride={override} size={150} />
        </div>
      ) : (
        <div>
          <SliderCard type="Update Matchhes" data_card={apiData} />
          <SliderCard type="Finished of Matched" data_card={liveStatus} />
          <SliderCard type="Upcoming Matchhes" data_card={upStatus} />
        </div>
      )}
    </div>
  );
};
export default Slider;

// import React,{useState,useEffect} from 'react'
// import SliderCard from './SliderCard';
// import axios from 'axios';
// import { base_url } from '../Config';
// import  {api_token}  from '../Config';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../../Store/cricketSlice';
// import { STATUSES } from '../../Store/cricketSlice';

// const Slider = (props) => {
//   const [apiData, setApiData] = useState([]);
//    const [live_Data ,setLive_Data] =useState([])
//    const [upcoming_Data ,setUpcoming_Data] = useState([])

//    const dispatch = useDispatch();

//    const { data: crickets, status } = useSelector((state) => state.product);

//    const fetchData = async() => {
//     const {data,status} =  await axios.get(base_url+"fixtures"+api_token+"&include=localteam,visitorteam,runs,season,league")

//     console.log("normal 2", data)

//     if(status === 200){
//       setApiData(data.data.splice(2,21))
//     }

//     const liveStatus =data.data.filter((mData) => {
//         if(!mData.live){
//           return mData
//       }
//   })
//    setLive_Data(liveStatusS;

//    const upstatus =data.data.filter((mData) => {
//     if(mData.status ==="Aban."){
//       return mData
//     }
//  S})
//   setUpcoming_Data(upstatus)

//   }

//   useEffect(() => {
//     dispatch(fetchProducts());

//     fetchData();

// }, [])

//    if (status === STATUSES.LOADING) {
//         return <h2>Loading....</h2>;
//     }

//     if (status === STATUSES.ERROR) {
//         return <h2>Something went wrong!</h2>;
//     }

//     console.log("Redux", crickets.data);
//     console.log("normal", apiData);
// return (
//     <div>
//         <SliderCard type="Update Matchhes"   data_card={apiData}/>
//          <SliderCard type="Finished of Matched" data_card={live_Data}/>
//         <SliderCard type="Upcoming Matchhes"  data_card={upcoming_Data}/>

//     </div>
//   )

// }
// export default Slider;
