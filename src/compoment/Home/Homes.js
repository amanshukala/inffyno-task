import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import MustWatch from './MustWatch';


const Homes = () => {
  const [users, setUsers] = useState([]);
  const [users_collection, setUsersCollection] = useState([])
  useEffect(() => {

    const getdataHander = async () => {
      const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=15ef5245d69c4b0dc21fc692e632172c")
      // setUsers(response.data.results[1]);
      // console.log(users);
      setUsersCollection(response.data.results);

      const titleresponse = await axios.get("https://api.themoviedb.org/3/movie/616037?api_key=15ef5245d69c4b0dc21fc692e632172c&append_to_response=images")


      setUsers({ ...response.data.results[1], logo: titleresponse.data.images.logos[0].file_path, genres: titleresponse.data.genres, posters : titleresponse.data.images.posters })

      // setUsers({...response.data.results[1], logo : titleresponse.data.logos[1].file_path})

    
       //console.log(users);



    }
    getdataHander();

  }
    , []);
    // console.log(users);
  // console.log(titleresponse.data.logos[0].file_path);
    let a =new Date(users.release_date);
    let release_year = a.getFullYear() 

  if (users.length === 0) {
    return <p>loading...</p>
  }

  return (
    
    <div className=' relative  '>
      <div className='relative overflow-hidden home h-[100vh]'>
        <img src={`https://image.tmdb.org/t/p/w1280/${users.backdrop_path}`} className="w-[100%] absolute right-[-122px]" alt='' />
      </div>
      <div className=' absolute top-[138px] left-[149px] z-[9]'>
        <img src={`https://image.tmdb.org/t/p/w500/${users.logo}`} className="max-h-[180px]"  alt="" />
        <div className='mt-[49px] '>
        <p className='text-[#FFFFFF] text-[14px] font-[600px]  text-justify w-[100%] max-w-[560px]'>{users.overview}</p>
        <p className='text-[red] text-[14px] font-[600px] mt-[18px]'>GENRES</p>
    
        {users.genres.map((p,key) => {
          return (
            
              <span key={p.id} className='text-[14px] text-[white] font-[600px] '>{`${p.name},`}</span>

          )})}

        </div>
        <div className='flex gap-x-[21px] mt-[21px] item-center'>
          <button className='text-[20px] py-[13px] px-[25px] text-[#FFFFFF] box-border rounded-[30px]
           bg-[#5436A9]  items-center flex gap-x-[18px]'>WATCH <span className=' '><img alt='' src="/image/button1.svg" className='w-[12px] h-[13px]'/></span></button>
          <button  className='text-[20px]   py-[13px] px-[22px] text-[#FFFFFF] box-border
            bg-[#5C5C5C] rounded-[30px] flex  items-center gap-x-[18px]'>MY LIST<span className='text-[36px] text-[#FFFFFF]
                h-[24px] inline-block leading-[18px]'> +</span></button>
        </div>
        <div className='flex gap-x-[11px] mt-[24px]'>
          <img src="/image/IM.svg" alt='' className='w-[54px] h-[27px]'/>
          <p className='text-[yellow] font-bold text-[18px]'>{users.vote_average}</p>
          <p className='border-2 max-w-max border-[white] px-[5px] text-[18px] text-[white] rounded-[5px] box-border '>U/A</p>
          <p className='border-2 border-[white] text-[white] max-w-max px-[5px]
            text-[18px]  rounded-[5px] box-border '>4k</p>
          <p className='text-[#959595] text-[20px] font-bold'>{release_year}</p>
        </div>

      </div>
      <MustWatch type='upcoming' title ="MOVIES YOU MUST WATCH"/>
      <MustWatch type='top_rated' title="RECOMMENDED FOR YOU"/>
      <MustWatch type='now_playing' title="BOLLYWOOD CLASSICS"/>

   </div>
      )
}

      export default Homes