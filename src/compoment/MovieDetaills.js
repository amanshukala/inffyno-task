import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Slider from "react-slick";

import { useParams } from 'react-router-dom';
import MovieCard from './Home/MovieCard';
const MovieDetaills = () => {


  const [movie_data, setMovieDetails] = useState([])

  const settings = {
    dots: false,
    arrow: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
};
  

  let { movie_id } = useParams()

  console.log(movie_id)

  useEffect(() => {
    (async () => {
      const titleresponses = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=15ef5245d69c4b0dc21fc692e632172c&append_to_response=images,credits,videos,similar&language`)
      setMovieDetails({ ...titleresponses.data, ryear: new Date(movie_data.release_date).getFullYear(), logo: titleresponses.data.images.logos[0].file_path });
      
      
    })();
  }, []);

  if (movie_data.length === 0) {
    return <p>loading...</p>
  }

  const work =movie_data.credits.crew.filter((p) =>{
    return(
    p.job ==="Director"
    )
  })
  console.log(work)
  return (
    <div className='ralative'>
        <div className='absolute overflow-hidden home w-[100vw] z-[-1]'>
          <img src={`https://image.tmdb.org/t/p/w1280/${movie_data.backdrop_path}`} className="w-[100%]  right-[-122px]" alt='' />
        </div>
      <div className='ralative '>
        <div className='mt-[138px] ml-[149px] z-[9]'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie_data.logo}`} className="max-h-[180px]" alt="" />
          <div className='mt-[49px] '>
            <p className='text-[#FFFFFF] text-[14px] font-[600px]  text-justify w-[100%] max-w-[560px]'>{movie_data.overview}</p>
            <p className='text-[red] text-[14px] font-[600px] mt-[18px]'>GENRES</p>

            {movie_data.genres.map((p, key) => {
              return (

                <span key={p.id} className='text-[14px] text-[white] font-[600px] '>{`${p.name},`}</span>

              )
            })}

          </div>
          <div className='flex gap-x-[21px] mt-[21px] item-center'>
            <button className='text-[20px] py-[13px] px-[25px] text-[#FFFFFF] box-border rounded-[30px]
         bg-[#5436A9]  items-center flex gap-x-[18px]'>WATCH <span className=' '><img alt='' src="/image/button1.svg" className='w-[12px] h-[13px]' /></span></button>
            <button className='text-[20px]   py-[13px] px-[22px] text-[#FFFFFF] box-border
          bg-[#5C5C5C] rounded-[30px] flex  items-center gap-x-[18px]'>MY LIST<span className='text-[36px] text-[#FFFFFF]
              h-[24px] inline-block leading-[18px]'> +</span></button>
          </div>
          <div className='flex gap-x-[11px] mt-[24px]'>
            <img src="/image/IM.svg" alt='' className='w-[54px] h-[27px]' />
            <p className='text-[yellow] font-bold text-[18px]'>{movie_data.vote_average}</p>
            <p className='border-2 max-w-max border-[white] px-[5px] text-[18px] text-[white] rounded-[5px] box-border '>U/A</p>
            <p className='border-2 border-[white] text-[white] max-w-max px-[5px]
          text-[18px]  rounded-[5px] box-border '>4k</p>
            <p className='text-[#959595] text-[20px] font-bold'>{String(movie_data.ryear)}</p>
          </div>
          <div className='w-[100vw] flex flex-col gap-y-[14px]'>
            <div>
              <p className='text-[red]'>Audio</p>
              <span className='text-[white] text-[16px] font-bold'>
                English - Audio Description,English [Original]
              </span>
            </div>
            <div>
              <p className='text-[red]'>SUBTITLES</p>
              <span className='text-[white] text-[16px] font-bold'>
                English,Hindi
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-[21px]'>
        <div className=''>
          <p>TRAILER</p>
          <img src="" alt='' className=''/>

        </div>

        <div className='ml-auto relative chara h-[298px]  '>
          <p className='text-[#FFFFFF] text-[18px] font-bold'>CAST AND CREW INFO</p>
          <div className='flex gap-x-[72px]'>
      
              <div key={work.id} className="flex flex-col gap-y-[8px] ">
                  <img src={`https://image.tmdb.org/t/p/w185${work[0].profile_path}`} alt="asf" className="w-[110px] h-[145px] border-[1px] border-[ #FFFFFF] " />
                  <div className='flex flex-col gap-x-[2px]'>

                    <p className='text-[white] text-[14px]'>{work[0].name}</p>
                  
                     <p className='text-[#A9A9A9] text-[15px] text-ellipsis
                     overflow-hidden max-w-[128px] whitespace-nowrap max-h-[18px]'>{work[0].job}</p> 
                  </div>
                </div>
            
            {movie_data.credits.cast.slice(0, 4).map((p, key) => {
              return (
                <div key={p.id} className="flex flex-col gap-y-[8px] ">
                  <img src={`https://image.tmdb.org/t/p/w185${p.profile_path}`} alt="asf" className="w-[110px] h-[145px] border-[1px] border-[ #FFFFFF] " />
                  <div className='flex flex-col gap-x-[2px]'>

                    <p className='text-[white] text-[14px]'>{p.name}</p>
                    <p>{work.job}</p>
                    <p className='text-[#A9A9A9] text-[15px] text-ellipsis
                     overflow-hidden max-w-[128px] whitespace-nowrap max-h-[18px]'>{p.character}</p>
                  </div>
                </div>


              )
            })}
          </div>
          <div className='absolute bottom-[0px] left-[50%] transform translate-x-[-50%] translate-y-[50%]   '>
            <button className='bg-[#5E47A1] text-[#E3E3E3] rounded-[22px]
             py-[11px] px-[28px] text-[18px] '>Show More</button>
          </div>
        </div>

      </div>
      
      <div className='mt-[93px] ml-[148px]'>
          <p className='text-[#FFFFFF] text-[18px]'>MORE LIKE THIS</p>
          <div className='mt-[14px] '>
            <Slider {...settings} className="overflow-hidden">
              {movie_data.similar.results.map((p,key)=>{
                return (
                
                  <div key={p.id}>
                    <img  src={`https://image.tmdb.org/t/p/w300/${p.poster_path}`} alt="" className='w-[289px] h-[172px]' />

                  </div>
                )


              })}
            </Slider>



          </div>
        </div>
    </div>




  )
}

export default MovieDetaills