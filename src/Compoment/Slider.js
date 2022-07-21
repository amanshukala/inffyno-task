import React,{useState,useEffect} from 'react'
import SliderCard from './SliderCard'

import axios from "axios";
import { base_url } from './Config'
import { api_token } from './Config'


const Slider = (props) => {
  const [apiData, setApiData] = useState(null);
   const [live_Data ,setLive_Data] =useState([])  
   const [upcoming_Data ,setUpcoming_Data] = useState([])
  const fetchData = async() => {
    const {data,status} =  await axios.get(base_url+api_token+"include=localteam,visitorteam,runs,season,league")
    
    

    if(status === 200){
      setApiData(data.data.splice(2,21))
    }
    
    const livestatus =data.data.filter((mData) => {
        if(!mData.live){
          return mData
      }
  })
   setLive_Data(livestatus);
  

   const upstatus =data.data.filter((mData) => {
    if(mData.status ==="Aban."){
      return mData
    }
  })
  setUpcoming_Data(upstatus)
  

    

  }

  useEffect(() => {
    fetchData();
          
}, [])

console.log(upcoming_Data);
  
return (
    <div>
        <SliderCard type="Update Matchhes"   data_card={apiData}/>
        <SliderCard type="Finished of Matched" data_card={live_Data}/> 
        <SliderCard type="Upcoming Matchhes"  data_card={upcoming_Data}/>  


    </div>
  )

}
export default Slider;