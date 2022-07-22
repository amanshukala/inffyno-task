import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {AiOutlineDown} from "react-icons/ai"
import {IoIosArrowUp} from "react-icons/io"
import ScoreCard from './ScoreCard'
import axios from "axios";

import { base_url } from './Config'
import { api_token } from './Config'

const ScorePage = () => {
    const {id} =useParams();
    const [localbtting_Data ,setLocalbtting_Data] = useState(null)
    const [visitorteambowl_Data ,setvisitorteambowl_Data] = useState(null)
    const [localbowl_Data ,setLocalbowl_Data] = useState(null)


    const [visitorteambtting_Data ,setVisitorteambtting_Data] = useState(null)

  
    const ScoreApiHander =async () =>{
        const {data,status} = await axios.get( base_url+"fixtures/"+id+api_token+"include=localteam,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman")
        // setScore_Data(data.data);
        if(status === 200){
            
            const localteam_id = data.data.localteam_id;
            const visitorteam_id = data.data.visitorteam_id;

            const localtem_batting_data = data.data.batting.filter((data) => {
              return data.team_id === localteam_id;
            });
            setLocalbtting_Data(localtem_batting_data)

            const localScore  = data.data.runs.filter((data)=>{
                if(data.team_id === localteam_id ){
                    return data;
                }
              })
            console.log(localScore);

            const vistoryScore  = data.data.runs.filter((data)=>{
                if(data.team_id === visitorteam_id ){
                    return data;
                }
              })
            console.log(vistoryScore);



            const visitorteam_batting_data = data.data.batting.filter((data) => {
                return data.team_id === visitorteam_id;
              });

              setVisitorteambtting_Data(visitorteam_batting_data)
              
            
              const localtem_bowling_data = data.data.bowling.filter((data) => {
                return data.team_id === localteam_id;
              });
              
              setLocalbowl_Data(localtem_bowling_data)
            
              const visitorteam_bowling_data = data.data.bowling.filter((data) => {
                return data.team_id === visitorteam_id;
              });
              setvisitorteambowl_Data(visitorteam_bowling_data)

      
            //   console.log(localtem_bowling_data);
            //   console.log(visitorteam_bowling_data);


        }
     
    }
    

    
    
    useEffect(()=>{
        ScoreApiHander()
    },[])

  return (
    <div className='mx-auto max-w-[672px] mt-[53px] mb-[320px] w-[100%]'>
        <div>
            <div className='flex justify-between '>
                
            <div className='flex flex-col items-start'>
                    <p className='text-[14px] font-normal rounded-[2px]
                        py-[3px] px-[5px] bg-[red] text-center text-white'>RBMP</p>
                    <p className='text-black  text-[28px] flex items-baseline 
                    font-bold'>49/2<span className='text-[grey]
                    text-[12px] m-[5px]'>(4.1)</span> </p>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                            <div className="h-[15px] w-[1px] bg-[grey] "></div>
                            <div className="font-graff font-[700] text-[black] bg-[grey]
                            rounded-[50%] w-[24px] text-[15px] 
                            text-center">
                              <p>V</p>
                            </div>
                            <div className="h-[15px] w-[1px] bg-[grey] "></div>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-[14px] font-normal rounded-[2px]
                        py-[3px] px-[5px] bg-[red] text-center text-white'>RBMP</p>
                    <p className='text-black  text-[28px] flex items-baseline 
                    font-bold'><span className='text-[grey]
                    text-[12px] m-[5px]'>(4.1)</span>49/2 </p>
                </div>
            </div>
            <div className='mx-auto text-[14px] text-[black] font-semibold
            mt-[10px] max-w-[94%] text-center mb-[15px]'>RBMS need 78 runs in 39 balls</div>
        </div>
        <div className='bg-[white] h-[48px] w-[100%]
        flex items-center  mx-auto border-b-[1px] border-b-solid border-b-gray-400
        border-t-[1px] border-t-solid border-t-gray-400'>
            <div className=' flex items-center
            w-[100%] justify-center px-[20px]   '>Fantasty</div>
            <div className='flex items-center
            w-[100%] justify-center px-[20px]'>Info</div>
            <div className='flex items-center
            w-[100%] justify-center px-[20px]'>Live</div>
            <div  className='flex items-center
            w-[100%] justify-center px-[20px]'>Scoredcard</div>
            <div className='flex items-center
            w-[100%] justify-center px-[20px]'>Squard</div>
                        <div className='flex items-center
            w-[100%] justify-center px-[20px]'>Highlights</div>

        </div>
        <ScoreCard    victoribowl_data={visitorteambowl_Data}   localteam_batting_score={localbtting_Data}/>
        <ScoreCard  victoribowl_data={localbowl_Data}   localteam_batting_score={visitorteambtting_Data}/>

        
    </div>
  )
}

export default ScorePage